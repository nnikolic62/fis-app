import { Button } from "@repo/ui/button";
import { PageWithHeader } from "@repo/ui/pageHeader/pageWithHeader";
import { FloppyDiskIcon, XIcon } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import { Radnik, keRadnikSchema } from "../shared/schemas/keRadnik";
import { zodResolver } from "@hookform/resolvers/zod";
import { OsnovniPodaciCard } from "./components/OsnovniPodaciCard";
import { OpstiPodaciCard } from "./components/OpstiPodaciCard";
import { MestoBoravkaCard } from "./components/MestoBoravkaCard";
import { RasporedjenCard } from "./components/RasporedjenCard";

type EmployeeRegistrationProps = {
  onBack?: () => void;
};

export default function PrijavaPage({ onBack }: EmployeeRegistrationProps) {
  const methods = useForm<Radnik>({
    mode: "onBlur",
    resolver: zodResolver(keRadnikSchema),
    defaultValues: {
      datum: new Date(),
    },
  });
  const onSubmit = (data: Radnik) => {
    console.log("Radnik submit:", data);
  };

  return (
    <FormProvider {...methods}>
      <PageWithHeader
        title="Prijava / Odjava Radnika"
        subtitle="Unos novog zaposlenog"
        backAction={onBack}
        actions={
          <>
            <Button variant="secondary" icon={<XIcon size={16} />}>
              Odustani
            </Button>
            <Button variant="primary" icon={<FloppyDiskIcon size={16} />}>
              Sačuvaj
            </Button>
          </>
        }
      >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
            <OsnovniPodaciCard />
            <OpstiPodaciCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-4">
            <MestoBoravkaCard />
            <RasporedjenCard />
          </div>

          <div className="flex justify-end">
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </form>
      </PageWithHeader>
    </FormProvider>
  );
}
