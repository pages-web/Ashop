import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { StoreIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { takeAddress } from "@/lib/address-data";

const TakeAddress = () => {
  return (
    <Alert className="col-span-6">
      <StoreIcon className="h-6 w-6" strokeWidth={1.5} />
      <AlertTitle className="ml-2">
        <Button asChild variant="link" className="py-0 h-auto px-0">
          <Link href={takeAddress.link}>
            Хаяг харах
            <StoreIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </AlertTitle>
      <AlertDescription className="ml-2">
        Khan-Uul district, 18th khoroo Academy apt 36/2-2504
      </AlertDescription>
    </Alert>
  );
};

export default TakeAddress;
