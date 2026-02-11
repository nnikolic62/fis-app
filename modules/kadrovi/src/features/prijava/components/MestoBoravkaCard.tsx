"use client";

import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";
import { MapPinIcon } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
import { Radnik } from "../../shared/schemas/keRadnik";

export function MestoBoravkaCard() {
  const { register } = useFormContext<Radnik>();

  return (
    <Card
      title="Mesto boravka"
      icon={<MapPinIcon size={20} />}
      className="lg:col-span-2"
      noPadding
    >
      <div className="px-6 pb-6 pt-3">
        {/* Prvi red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1">
            <FormLabel label="Opstina" htmlFor="opstina" />
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/4"
                placeholder="Sifra"
                label={undefined}
                {...register("opsbr")}
              />
              <FormInput
                id="opstina"
                containerClassName="basis-3/4"
                placeholder="Naziv"
                label={undefined}
              />
            </div>
          </div>
        </div>

        {/* Drugi red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1">
            <FormLabel label="MZ" htmlFor="mz" />
            <div className="flex gap-2 mt-1">
              <FormInput
                id="mz"
                containerClassName="basis-1/4"
                placeholder="Sifra"
                label={undefined}
                {...register("mzbr")}
              />
              <FormInput
                id="mz"
                containerClassName="basis-3/4"
                placeholder="Naziv"
                label={undefined}
              />
            </div>
          </div>
        </div>

        {/* Treci red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1">
            <FormInput
              label="Adresa"
              placeholder="Adresa"
              {...register("adresa")}
            />
          </div>
        </div>

        {/* Cetvrti red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1">
            <div className="flex gap-2">
              <FormInput
                label="Telefon"
                placeholder="Telefon"
                containerClassName="basis-1/3"
                {...register("telefon")}
              />
              <FormInput
                label="Mail"
                placeholder="Mail"
                containerClassName="basis-2/3"
                {...register("mail")}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
