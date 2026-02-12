import { Button } from "@repo/ui/button";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";
import { PageWithHeader } from "@repo/ui/pageHeader/pageWithHeader";
import { FloppyDiskIcon, XIcon } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import { Radnik, keRadnikSchema } from "../shared/schemas/keRadnik";
import { zodResolver } from "@hookform/resolvers/zod";
import { OsnovniPodaciCard } from "./components/OsnovniPodaciCard";
import { OpstiPodaciCard } from "./components/OpstiPodaciCard";
import { MestoBoravkaCard } from "./components/MestoBoravkaCard";
import { RasporedjenCard } from "./components/RasporedjenCard";
import { useTranslation } from "@repo/i18n-config";
import { KADROVI_NS } from "../../config/i18n";

type EmployeeRegistrationProps = {
  onBack?: () => void;
};

export default function PrijavaPage({ onBack }: EmployeeRegistrationProps) {
  const { t } = useTranslation(KADROVI_NS);
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
        title={t("prijava.pageTitle")}
        // subtitle="Unos novog zaposlenog"
        // backAction={onBack}
        actions={
          <>
            <Button variant="secondary" icon={<XIcon size={16} />}>
              {t("prijava.buttons.cancel")}
            </Button>
            <Button variant="primary" icon={<FloppyDiskIcon size={16} />}>
              {t("prijava.buttons.save")}
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

          <div className="mb-4">
            <div className="flex gap-3 mb-2">
              <div className="flex-1 basis-1/2">
                <FormInput
                  label={t("prijava.ostalo.usernameRadnika")}
                  placeholder={t("prijava.ostalo.usernameRadnika")}
                  {...methods.register("username")}
                />
              </div>
              <div className="flex-1 basis-1/2">
                <FormLabel label={t("prijava.ostalo.referent")} htmlFor="referent-sifra" />
                <div className="flex gap-2 items-end">
                  <FormInput
                    id="referent-sifra"
                    containerClassName="basis-1/4"
                    placeholder={t("prijava.opstiPodaci.sifra")}
                    label={undefined}
                    {...methods.register("radbrref")}
                  />
                  <FormInput
                    containerClassName="basis-3/4"
                    placeholder={t("prijava.ostalo.imeSPrezime")}
                    label={undefined}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <FormInput
                  label={t("prijava.ostalo.sortniPojam")}
                  placeholder=""
                  {...methods.register("sortniPojam")}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" variant="primary">
              {t("prijava.buttons.submit")}
            </Button>
          </div>
        </form>
      </PageWithHeader>
    </FormProvider>
  );
}
