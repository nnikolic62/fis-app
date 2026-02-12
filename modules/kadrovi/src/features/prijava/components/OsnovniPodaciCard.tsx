"use client";

import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormRadio } from "@repo/ui/formComponents/formRadio";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";
import { UserIcon } from "@phosphor-icons/react/User";
import { useFormContext } from "react-hook-form";
import { Radnik } from "../../shared/schemas/keRadnik";
import { useTranslation } from "@repo/i18n-config";
import { KADROVI_NS } from "../../../config/i18n";

export function OsnovniPodaciCard() {
  const { t } = useTranslation(KADROVI_NS);
  const { register, setValue, watch } = useFormContext<Radnik>();

  const handleRoditeljBlur = () => {
    const roditeljValue = watch("roditelj");
    if (roditeljValue && roditeljValue.trim().length > 0) {
      const firstLetter = roditeljValue.trim()[0]?.toUpperCase();
      if (firstLetter) {
        setValue("srSlovo", firstLetter);
      }
    }
  };

  return (
    <Card
      title={t("prijava.osnovniPodaci.title")}
      icon={<UserIcon size={20} />}
      className="lg:col-span-2"
      noPadding
    >
      <div className="px-6 pb-6 pt-3">
        {/* Prvi red */}
        <div className="flex justify-between gap-3 mb-2 ">
          <FormInput
            label={t("prijava.osnovniPodaci.id")}
            placeholder={t("prijava.osnovniPodaci.id")}
            containerClassName="w-16"
            errorClassName="w-max"
            disabled
            readOnly
            {...register("radbr")}
          />
          <FormInput
            label={t("prijava.osnovniPodaci.stBroj")}
            placeholder={t("prijava.osnovniPodaci.stBroj")}
            containerClassName="w-16"
            errorClassName="w-max -ml-31"
            {...register("stevbr")}
          />
        </div>

        {/* Drugi red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <FormInput
              label={t("prijava.osnovniPodaci.prezime")}
              placeholder={t("prijava.osnovniPodaci.prezime")}
              {...register("preizme")}
            />
          </div>
          <div className="flex-1 basis-1/2">
            <div className="flex gap-2 items-end">
              <FormInput
                containerClassName="flex-[4]"
                placeholder={t("prijava.osnovniPodaci.imeRoditelja")}
                label={t("prijava.osnovniPodaci.imeRoditelja")}
                {...register("roditelj")}
                onBlur={handleRoditeljBlur}
              />
              <FormInput
                containerClassName="flex-[1]"
                {...register("srSlovo")}
              />
            </div>
          </div>
        </div>

        {/* Treci red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <div className="flex gap-2">
              <FormInput
                containerClassName="flex-[2]"
                label={t("prijava.osnovniPodaci.ime")}
                placeholder={t("prijava.osnovniPodaci.ime")}
                {...register("ime")}
              />
              <FormInput
                containerClassName="flex-[1]"
                label={t("prijava.osnovniPodaci.titula")}
                placeholder={t("prijava.osnovniPodaci.titula")}
                {...register("titula")}
              />
            </div>
          </div>
          <div className="flex-1 basis-1/2">
            <FormInput
              label={t("prijava.osnovniPodaci.devojackoPrezime")}
              placeholder={t("prijava.osnovniPodaci.devojackoPrezime")}
              {...register("devPrez")}
            />
          </div>
        </div>

        {/* Cetvrti red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <FormInput
              label={t("prijava.osnovniPodaci.maticniBroj")}
              placeholder={t("prijava.osnovniPodaci.maticniBroj")}
              {...register("licniBr")}
            />
          </div>
          <div className="flex-1 basis-1/2">
            <FormInput label={t("prijava.osnovniPodaci.lbo")} placeholder={t("prijava.osnovniPodaci.lbo")} {...register("lbo")} />
          </div>
        </div>

        {/* Peti red */}
        <div className="flex gap-3 mb-2">
          <div className="w-full">
            <FormLabel label={t("prijava.osnovniPodaci.pol")} htmlFor="pol-muski" />
            <div className="mt-1 flex gap-6">
              <FormRadio
                id="pol-muski"
                label={t("prijava.osnovniPodaci.muski")}
                value="M"
                {...register("pol")}
              />
              <FormRadio 
                id="pol-zenski"
                label={t("prijava.osnovniPodaci.zenski")} 
                value="Z" 
                {...register("pol")} 
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
