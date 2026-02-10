import { FormProvider, useForm } from "react-hook-form"
import { Radnik, keRadnikSchema } from "../shared/schemas/keRadnik";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageWithHeader } from "@repo/ui/pageHeader/pageWithHeader";
import { Button } from "@repo/ui/button";
import { XIcon } from "@phosphor-icons/react/dist/ssr/X";

export default function RadnikPodaciPage() {
  const methods = useForm<Radnik>({
    mode: "onBlur",
    // defaultValues,
    resolver: zodResolver(keRadnikSchema),
  });
  return (
    <FormProvider {...methods}>
      <PageWithHeader
        title="Radnik Podaci"
        subtitle="Podaci o radniku"
        actions={
          <>
            <Button variant="secondary" icon={<XIcon size={16} />}>
              Odustani
            </Button>
            </>
        }
        >
          <p>Radnik Podaci</p>
        </PageWithHeader>
    </FormProvider>
  );
}