import { useLazyQuery, useQuery } from "@apollo/client";
import { queries } from "@/sdk/graphql/auth";
import { useAtom, useAtomValue } from "jotai";
import {
  configAtom,
  currentUserAtom,
  loadingUserAtom,
  refetchCurrentUserAtom,
} from "@/store/auth.store";
import { useEffect } from "react";
import { toast } from "sonner";
import { useErxesCustomerEdit } from "../hooks/auth";
import { birthDateAtom } from "@/store";

export const useCurrentUser = (onCompleted?: (data: any) => void) => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [loading, setLoading] = useAtom(loadingUserAtom);
  const [refetchUser, setRefetchUser] = useAtom(refetchCurrentUserAtom);
  const { erxesCustomerDetail } = useErxesCustomerDetail();
  const { data, refetch } = useQuery(queries.currentUser, {
    onError(error) {
      setLoading(false);
      if (error.message === "token expired") {
        return sessionStorage.removeItem("token");
      }
      if (error.message === "User is not logged in") {
        onCompleted && onCompleted(null);
        return setCurrentUser(null);
      }
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (data) {
      const { clientPortalCurrentUser } = data;
      setCurrentUser(clientPortalCurrentUser);
      setLoading(false);
      erxesCustomerDetail({
        variables: {
          id: clientPortalCurrentUser.erxesCustomerId,
        },
      });
      onCompleted && onCompleted(clientPortalCurrentUser);
    }
  }, [data]);

  useEffect(() => {
    if (refetchUser) {
      refetch();
      setRefetchUser(false);
    }
  }, [refetchUser]);

  return { currentUser, loading, setLoading };
};

export const useUserDetail = () => {
  const refetchUser = useAtomValue(refetchCurrentUserAtom);
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const { loading, refetch } = useQuery(queries.userDetail, {
    onCompleted({ clientPortalCurrentUser }) {
      setCurrentUser({ ...currentUser, ...clientPortalCurrentUser });
    },
  });

  useEffect(() => {
    if (refetchUser) {
      refetch();
    }
  }, [refetchUser]);
  return { loading };
};

export const useErxesCustomerDetail = () => {
  const { erxesCustomerEdit } = useErxesCustomerEdit();
  const [localBirthDate, setbirthDate] = useAtom(birthDateAtom);
  const { erxesAppToken } = useAtomValue(configAtom) || {};

  const [erxesCustomerDetail, { loading }] = useLazyQuery(
    queries.erxesCustomerDetail,
    {
      context: {
        headers: {
          "erxes-app-token": erxesAppToken,
        },
      },
      onError() {},
      onCompleted({ customerDetail }) {
        const { birthDate, _id } = customerDetail || {};
        if (!birthDate && localBirthDate) {
          return erxesCustomerEdit({
            variables: {
              id: _id,
              birthDate: localBirthDate,
            },
          });
        }
        setbirthDate(birthDate);
      },
    }
  );
  return { erxesCustomerDetail, loading };
};
