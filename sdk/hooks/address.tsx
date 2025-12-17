import { OperationVariables, useMutation, useQuery } from '@apollo/client';
import { mutations, queries } from '@/sdk/graphql/order';
import { addressDetailAtom } from '@/store/order.store';
import { useAtomValue } from 'jotai';

export const userAddressList = (options?: OperationVariables) => {
  const { data, loading } = useQuery(queries.addresses, options);
  return { addressList: data?.addressList, loading };
};

export const userAddressCU = (options?: OperationVariables) => {
  const addressDetail = useAtomValue(addressDetailAtom);
  const optionsCU = {
    ...options,
    refetchQueries: ['AddressList', ...(options?.refetchQueries || [])],
  };
  const [addressAdd, { loading }] = useMutation(
    mutations.addressAdd,
    optionsCU
  );
  const [addressUpdate, { loading: loadingUpdate }] = useMutation(
    mutations.addressUpdate,
    optionsCU
  );
  return {
    addressCU: addressDetail ? addressUpdate : addressAdd,
    loading: loading || loadingUpdate,
  };
};

export const userAddressRemove = (options?: OperationVariables) => {
  const [addressRemove, { loading }] = useMutation(
    mutations.addressRemove,
    options
  );
  return { addressRemove, loading };
};
