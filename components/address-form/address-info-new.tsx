import { userAddressCU, userAddressRemove } from "@/sdk/hooks/address";
import { IAddress } from "@/types/order.types";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useEffect, useId } from "react";
import { Button } from "../ui/button";
import { Loader2, Pencil, Pin, Plus, Trash } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { showAddressDialogAtom, addressDetailAtom } from "@/store/order.store";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import districts from "@/lib/address.json";
import { useParams } from "next/navigation";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import { currentUserAtom } from "@/store/auth.store";
import { formSchema as addressFormSchema } from "./address-form";
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogCancel,
} from "../ui/alert-dialog";

export const AddressInfoNew = ({ children }: { children: React.ReactNode }) => {
  const setShowAddressForm = useSetAtom(showAddressDialogAtom);
  return (
    <div className="col-span-6">
      <div className="flex items-center justify-between my-4">
        <h2 className="text-lg font-bold ">Хүргэлтийн хаяг</h2>
        <Button
          variant="secondary"
          size="sm"
          className="gap-2"
          type="button"
          onClick={() => setShowAddressForm(true)}
        >
          <Plus />
          Шинэ хаяг нэмэх
        </Button>
      </div>
      {children}
    </div>
  );
};

export const AddressList = ({
  form,
  addressList,
}: {
  form: UseFormReturn<z.infer<typeof addressFormSchema>, any>;
  addressList: IAddress[];
}) => {
  return (
    <FormField
      control={form.control}
      name="addressId"
      render={({ field }) => (
        <FormItem>
          {addressList?.length > 0 ? (
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col gap-2"
              >
                {addressList?.map((address: IAddress) => (
                  <AddressItem
                    key={address._id}
                    address={address}
                    onRemove={() => {
                      field.onChange("");
                    }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ) : (
            <AddressEmpty />
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const AddressEmpty = () => {
  const setShowAddressForm = useSetAtom(showAddressDialogAtom);
  return (
    <div className="flex gap-4 items-center">
      <div className="flex items-center justify-center p-6 rounded-full border-2">
        <Plus className="w-6 h-6" />
      </div>
      <div className="flex flex-col items-start">
        <h4 className="font-semibold">
          {"Танд хадгалсан хүргэлтийн хаяг алга"}
        </h4>
        <p className="text-sm text-muted-foreground">
          {"Үргэлжлүүлэхийн тулд хаяг нэмнэ үү"}
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-2"
          type="button"
          onClick={() => setShowAddressForm(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Шинэ хаяг нэмэх
        </Button>
      </div>
    </div>
  );
};

const AddressItem = ({
  address,
  onRemove,
}: {
  address: IAddress;
  onRemove: () => void;
}) => {
  const id = useId();

  return (
    <div className="relative">
      <Label className="flex items-start gap-3 p-4 border" htmlFor={id}>
        <RadioGroupItem value={address._id} id={id} />
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold">{address.alias}</h3>
          <p className="text-sm text-muted-foreground">
            {address.district}, {address.street}, {address.address1}
          </p>
        </div>
      </Label>
      <AddressItemActions address={address} onRemove={onRemove} />
    </div>
  );
};

export const AddressItemActions = ({
  address,
  onRemove,
}: {
  address: Partial<IAddress>;
  onRemove: () => void;
}) => {
  const setAddressDetail = useSetAtom(addressDetailAtom);
  const setShowAddressForm = useSetAtom(showAddressDialogAtom);
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-10 top-3 px-1 h-6 w-6"
            onClick={() => {
              setAddressDetail(address);
              setShowAddressForm(true);
            }}
            type="button"
          >
            <Pencil />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Хаяг засах</p>
        </TooltipContent>
      </Tooltip>
      <AddressRemove
        addressId={address._id || ""}
        name={address.alias || ""}
        onRemove={onRemove}
      />
    </TooltipProvider>
  );
};

export const AddressAddFormDialog = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showAddressForm, setShowAddressForm] = useAtom(showAddressDialogAtom);
  const setAddressDetail = useSetAtom(addressDetailAtom);
  return (
    <Dialog
      modal
      open={showAddressForm}
      onOpenChange={(open) => {
        setShowAddressForm(open);
        !open && setAddressDetail(null);
      }}
    >
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Pin />
            Шинэ хаяг нэмэх
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

const formSchema = z.object({
  alias: z.string().min(1, { message: "Error.Address name is required" }),
  district: z.string().min(1, { message: "Error.District is required" }),
  street: z.string().min(1, { message: "Error.Street is required" }),
  address1: z.string().min(1, { message: "Error.Address Line is required" }),
  detail: z.string().optional(),
});

export const AddressAddForm = ({
  onCompleted,
}: {
  onCompleted: (addressId: string) => void;
}) => {
  const [addressDetail, setAddressDetail] = useAtom(addressDetailAtom);
  const params = useParams();
  const setShowAddressForm = useSetAtom(showAddressDialogAtom);
  const { erxesCustomerId } = useAtomValue(currentUserAtom) || {};
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      alias: "",
      district: "",
      street: "",
      address1: "",
      detail: "",
      ...addressDetail,
    },
  });
  const { addressCU, loading } = userAddressCU();
  const district = form.watch("district");

  useEffect(() => {
    if (addressDetail) {
      form.reset(addressDetail);
    }
  }, [addressDetail]);

  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    addressCU({
      variables: {
        ...formData,
        customerId: erxesCustomerId,
        _id: addressDetail?._id,
      },
      onCompleted: (data) => {
        const address = data.addressAdd || data.addressUpdate;
        setShowAddressForm(false);
        onCompleted(address?._id);
        setAddressDetail(null);
        form.reset();
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 md:grid md:grid-cols-6"
      >
        <FormField
          control={form.control}
          name="alias"
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormLabel>Хаягийн нэр</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Дүүрэг</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Дүүрэг сонгоно уу" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {districts.map((district) => (
                    <SelectItem value={district.id} key={district.id}>
                      {params.locale === "en"
                        ? `${district.en} district`
                        : `${district.id} дүүрэг`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Дүүрэг</FormLabel>
              <FormControl>
                <Input
                  placeholder="Дүүрэг оруулна уу"
                  {...field}
                  autoComplete="address-level1"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Хороо</FormLabel>
              <FormControl>
                <Input
                  placeholder="Хороо оруулна уу"
                  {...field}
                  autoComplete="address-level2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Хороо</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={!district}
              >
                <FormControl>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Хороо сонгоно уу" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {districts
                    .find((ds) => ds.id.toString() === district)
                    ?.subdistricts.map((khoroo) => (
                      <SelectItem
                        value={`${khoroo.id}-${khoroo.mn}`}
                        key={khoroo.id}
                      >
                        {`${khoroo.id} - ${khoroo.mn}`}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address1"
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormLabel>Дэлгэрэнгүй хаяг</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    "Та хаягаа зөв дэлгэрэнгүй, тодорхой оруулаагүйгээс үүдэн хүргэлт удаашрах, эсвэл хүргэгдэхгүй байж болзошгүйг анхаарна уу"
                  }
                  {...field}
                  autoComplete="address-level4"
                  className="min-h-36"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose asChild>
          <Button variant="secondary" type="button" className="col-span-3">
            Цуцлах
          </Button>
        </DialogClose>
        <Button type="submit" className=" col-span-3" disabled={loading}>
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Хадгалах"}
        </Button>
      </form>
    </Form>
  );
};

export const AddressRemove = ({
  addressId,
  name,
  onRemove,
}: {
  addressId: string;
  name: string;
  onRemove: () => void;
}) => {
  const { addressRemove, loading } = userAddressRemove({
    onCompleted: () => {
      onRemove();
    },
    refetchQueries: ["AddressList"],
  });
  return (
    <AlertDialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-3 top-3 px-1 h-6 w-6 text-destructive hover:text-destructive"
              type="button"
            >
              <Trash />
            </Button>
          </AlertDialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Хаяг устгах</p>
        </TooltipContent>
      </Tooltip>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{name} - Хаяг устгах</AlertDialogTitle>
          <AlertDialogDescription>
            {"Та энэ хаягийг устгахдаа итгэлтэй байна уу?"}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="secondary" type="button">
              Цуцлах
            </Button>
          </AlertDialogCancel>
          <Button
            variant="destructive"
            type="button"
            onClick={() => {
              addressRemove({ variables: { _id: addressId } });
            }}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Хаяг устгах"
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
