"use client";

import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormRadio } from "@repo/ui/formComponents/formRadio";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";
import { UserIcon } from "@phosphor-icons/react/User";
import { useFormContext } from "react-hook-form";
import { Radnik } from "../../shared/schemas/keRadnik";

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
            errorClassName="w-max"
            {...register("radbr")}
          />
          <FormInput
            label="St. broj"
            placeholder="St. broj"
            containerClassName="w-24"
            {...register("stevbr")}
          />
        </div>

        {/* Drugi red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <FormInput
              label="Prezime"
              placeholder="Prezime"
              {...register("preizme")}
            />
          </div>
          <div className="flex-1 basis-1/2">
            <div className="flex gap-2 items-end">
              <FormInput
                containerClassName="flex-[4]"
                placeholder="Ime roditelja"
                label="Ime roditelja"
                {...register("roditelj")}
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
                label="Ime"
                placeholder="Ime"
                {...register("ime")}
              />
              <FormInput
                containerClassName="flex-[1]"
                label="Titula"
                placeholder="Titula"
                {...register("titula")}
              />
            </div>
          </div>
          <div className="flex-1 basis-1/2">
            <FormInput
              label="Devojacko prezime"
              placeholder="Devojacko prezime"
              {...register("devPrez")}
            />
          </div>
        </div>

        {/* Cetvrti red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <FormInput
              label="Maticni broj"
              placeholder="Maticni broj"
              {...register("licniBr")}
            />
          </div>
          <div className="flex-1 basis-1/2">
            <FormInput label="LBO" placeholder="LBO" {...register("lbo")} />
          </div>
        </div>

        {/* Peti red */}
        <div className="flex gap-3 mb-2">
          <div className="w-full">
            <FormLabel label="Pol" htmlFor="pol-muski" />
            <div className="mt-1 flex gap-6">
              <FormRadio
                id="pol-muski"
                label="Muski"
                value="M"
                {...register("pol")}
              />
              <FormRadio 
                id="pol-zenski"
                label="Zenski" 
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
