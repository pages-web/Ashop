"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import OrderSummary from "@/components/order-summary/order-summary";
import { Button } from "../ui/button";
import { currentUserAtom } from "@/store/auth.store";
import { useAtom, useAtomValue } from "jotai";
import {
  billTypeAtom,
  deliveryInfoAtom,
  dueDateAtom,
  registerNumberAtom,
  typeAtom,
} from "@/store/order.store";
import { changeDeliveryInfoAtom } from "@/store/order.store";
import { LoadingIcon } from "../ui/loading";
import { useRouter } from "next/navigation";
import { phoneZod } from "@/lib/zod";
import PersonalInfo from "./personal-info";
import Ebarimt from "./ebarimt";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TakeAddress from "../take-address";
import {
  AddressAddForm,
  AddressAddFormDialog,
  AddressInfoNew,
  AddressList,
} from "./address-info-new";
import { userAddressList } from "@/sdk/hooks/address";
import { Separator } from "../ui/separator";
import { Toggle } from "../ui/toggle";
import { IAddress, IBillType } from "@/types/order.types";

export const formSchema = z
  .object({
    firstName: z.string().min(1, { message: "Error.First name is required" }),
    lastName: z.string().optional(),
    email: z.string().email().min(1, { message: "Error.Email is required" }),
    phone: phoneZod,
    billType: z.nativeEnum(IBillType, {
      required_error: "Error.You need to select a ebarimt type",
    }),
    registerNumber: z.string().optional(),
    companyName: z.string().optional(),
    isTake: z.boolean(),
    addressId: z.string().optional(),
    haveBaby: z.boolean(),
    onlyAfternoon: z.boolean(), //hasahgui
    callBefore: z.boolean(),
  })
  .refine((data) => (data.billType === "3" ? !!data.registerNumber : true), {
    message: "Error.Register number is required",
    path: ["registerNumber"],
  })
  .refine(
    (data) =>
      data.billType === "3" && data.registerNumber ? !!data.companyName : true,
    {
      message: "Error.Register number is incorrect",
      path: ["registerNumber"],
    }
  )
  .refine((data) => data.isTake || data.addressId, {
    message: "Address Line is required",
    path: ["addressId"],
  });

const AddressForm = () => {
  const {
    firstName = "",
    lastName = "",
    email = "",
    phone = "",
    erxesCustomerId,
  } = useAtomValue(currentUserAtom) || {};

  const deliveryInfo = useAtomValue(deliveryInfoAtom);
  const billType = useAtomValue(billTypeAtom);
  const dueDate = useAtomValue(dueDateAtom);
  const type = useAtomValue(typeAtom);
  const registerNumber = useAtomValue(registerNumberAtom);
  const [loading, changeDeliveryInfo] = useAtom(changeDeliveryInfoAtom);
  const { addressList } = userAddressList({
    variables: {
      customerId: erxesCustomerId,
    },
    onCompleted({ addressList }: { addressList: IAddress[] }) {
      (addressList || []).length > 0 &&
        form.setValue("addressId", addressList[0]._id);
    },
  });
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      firstName,
      lastName,
      email,
      phone,
      isTake: type === "take",
      haveBaby: false,
      callBefore: false,
      onlyAfternoon: false, //hasahgui
      billType: billType || "1",
      registerNumber: registerNumber || "",
      ...deliveryInfo,
    },
  });

  function onSubmit(v: z.infer<typeof formSchema>) {
    changeDeliveryInfo({
      ...v,
      address: addressList.find(
        (address: Partial<IAddress>) => address._id === v.addressId
      ),
    });
    router.push("/verify");
  }

  const gridClassName =
    "md:grid grid-cols-6 mb-10 md:mb-0 space-y-4 md:space-y-0 gap-x-4 gap-y-3";

  return (
    <>
      <Form {...form}>
        <form
          className="md:grid md:grid-cols-12 md:gap-x-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="col-span-7">
            <div className={gridClassName}>
              <PersonalInfo form={form} />
              <Ebarimt form={form} />
              <FormField
                control={form.control}
                name="isTake"
                render={({ field }) => (
                  <Tabs
                    value={field.value ? "take" : "delivery"}
                    onValueChange={(value) => field.onChange(value === "take")}
                    className="col-span-6"
                  >
                    <TabsList className="w-full">
                      <TabsTrigger value="delivery" className="flex-auto">
                        Хүргүүлэх
                      </TabsTrigger>
                      <TabsTrigger value="take" className="flex-auto">
                        Очиж авах
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="delivery" className={gridClassName}>
                      {/* <DateForm form={form} /> */}
                      <AddressInfoNew>
                        <AddressList form={form} addressList={addressList} />
                      </AddressInfoNew>
                      <Separator className="col-span-6" />
                      <h2 className="col-span-6 text-lg font-bold">
                        {"Нэмэлт Анхааруулга"}
                      </h2>
                      <FormField
                        control={form.control}
                        name="haveBaby"
                        render={({ field }) => (
                          <FormItem className="col-span-3">
                            <FormControl>
                              <Toggle
                                variant="outline"
                                size={"lg"}
                                className="w-full text-sm"
                                pressed={field.value}
                                onPressedChange={(pressed) =>
                                  field.onChange(pressed)
                                }
                              >
                                Нялх хүүхэдтэй
                              </Toggle>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="callBefore"
                        render={({ field }) => (
                          <FormItem className="col-span-3">
                            <FormControl>
                              <Toggle
                                variant="outline"
                                size={"lg"}
                                className="w-full text-sm"
                                pressed={field.value}
                                onPressedChange={(pressed) =>
                                  field.onChange(pressed)
                                }
                              >
                                Хүргэхийн өмнө заавал залгах
                              </Toggle>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="onlyAfternoon" //hasahgui
                        render={({ field }) => (
                          <FormItem className="col-span-3">
                            <FormControl>
                              <Toggle
                                variant="outline"
                                size={"lg"}
                                className="w-full text-sm"
                                pressed={field.value}
                                onPressedChange={(pressed) =>
                                  field.onChange(pressed)
                                }
                              >
                                Зөвхөн оройн цагаар хүргэх
                              </Toggle>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                    <TabsContent value="take" className={gridClassName}>
                      <h2 className="col-span-6 text-lg font-bold">
                        Очиж авах хаяг
                      </h2>
                      <TakeAddress />
                    </TabsContent>
                  </Tabs>
                )}
              />
            </div>
          </div>
          <OrderSummary
            className="col-span-5 md:sticky md:top-20 h-fit"
            form={form}
            addressList={addressList}
          >
            <Button
              className="w-full rounded-[6px]"
              size="lg"
              disabled={loading}
            >
              {loading && <LoadingIcon />}
              Үргэлжлүүлэх
            </Button>
          </OrderSummary>
        </form>
      </Form>
      <AddressAddFormDialog>
        <AddressAddForm
          onCompleted={(addressId) => form.setValue("addressId", addressId)}
        />
      </AddressAddFormDialog>
    </>
  );
};

export default AddressForm;
