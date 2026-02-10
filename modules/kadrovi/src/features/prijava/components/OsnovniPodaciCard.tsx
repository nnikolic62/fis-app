"use client";

import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormRadio } from "@repo/ui/formComponents/formRadio";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";
import { UserIcon } from "@phosphor-icons/react/User";
import { useFormContext } from "react-hook-form";
import { Radnik } from "../../shared/schemas/radnik";

export function OsnovniPodaciCard() {
  const { register } = useFormContext<Radnik>();

  return (
    <Card
      title="Osnovni podaci"
      icon={<UserIcon size={20} />}
      className="lg:col-span-2"
      noPadding
    >
      <div className="px-6 pb-6 pt-3">
        {/* Prvi red */}
        <div className="flex justify-between gap-3 mb-2 ">
          <FormInput
            label="ID"
            placeholder="ID"
            containerClassName="w-16"
            {...register("radbr")}
          />
          <FormInput
            label="St. broj"
            placeholder="St. broj"
            containerClassName="w-24"
          />
        </div>

        {/* Drugi red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <FormInput label="Prezime" placeholder="Prezime" />
          </div>
          <div className="flex-1 basis-1/2">
            <div className="flex gap-2 items-end">
              <FormInput
                containerClassName="flex-[4]"
                placeholder="Ime roditelja"
                label="Ime roditelja"
              />
              <FormInput containerClassName="flex-[1]" />
            </div>
          </div>
        </div>

        {/* Treci red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <div className="flex gap-2">
              <FormInput
                containerClassName="flex-[2]"
                label="Ime"
                placeholder="Ime"
              />
              <FormInput
                containerClassName="flex-[1]"
                label="Titula"
                placeholder="Titula"
              />
            </div>
          </div>
          <div className="flex-1 basis-1/2">
            <FormInput
              label="Devojacko prezime"
              placeholder="Devojacko prezime"
            />
          </div>
        </div>

        {/* Cetvrti red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <FormInput label="Maticni broj" placeholder="Maticni broj" />
          </div>
          <div className="flex-1 basis-1/2">
            <FormInput label="LBO" placeholder="LBO" />
          </div>
        </div>

        {/* Peti red */}
        <div className="flex gap-3 mb-2">
          <div className="w-full">
            <FormLabel label="Pol" htmlFor="pol-muski" />
            <div className="mt-1 flex gap-6">
              <FormRadio id="pol-muski" name="pol" label="Muski" />
              <FormRadio name="pol" label="Zenski" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
