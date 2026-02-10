"use client";

import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";
import { SuitcaseIcon } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
import { Radnik } from "../../shared/schemas/radnik";

export function RasporedjenCard() {
  const { register } = useFormContext<Radnik>();

  return (
    <Card
      title="Rasporedjen u preduzecu"
      icon={<SuitcaseIcon size={20} />}
      className="lg:col-span-4"
      noPadding
    >
      <div className="px-6 pb-6 pt-3">
        {/* Prvi red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1">
            <FormLabel label="Obr. jedinica" htmlFor="obrJedinica" />
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/3"
                placeholder="Sifra"
                label={undefined}
                {...register("obrJedinica")}
              />
              <FormInput
                id="obrJedinica"
                containerClassName="basis-2/3"
                placeholder="Naziv"
                label={undefined}
              />
            </div>
          </div>
          <div className="flex-1">
            <FormLabel label="Oj radnika" htmlFor="ojRadnika" />
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/3"
                placeholder="Sifra"
                label={undefined}
                {...register("organizacionaJedinica")}
              />
              <FormInput
                id="ojRadnika"
                containerClassName="basis-2/3"
                placeholder="Naziv"
                label={undefined}
              />
            </div>
          </div>
          <div className="flex-1">
            <FormLabel label="Sprema" htmlFor="sprema" />
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/3"
                placeholder="Sifra"
                label={undefined}
                {...register("spremabr")}
              />
              <FormInput
                id="sprema"
                containerClassName="basis-2/3"
                placeholder="Naziv"
                label={undefined}
              />
            </div>
          </div>
        </div>

        {/* Drugi red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1">
            <FormInput
              label="Prvi datum dolaska"
              placeholder="Polje 1"
            //   {...register("datumDol")}
            />
          </div>
          <div className="flex-1">
            <FormInput
              label="Poslednji datum dolaska"
              placeholder="Polje 2"
            />
          </div>
          <div className="flex-1">
            <FormInput
              label="Poslednji datum odlaska"
              placeholder="Polje 3"
            //   {...register("datumOdl")}
            />
          </div>
        </div>

        {/* Treci red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 text-center -ml-10">
              Ukupni staz
            </label>
            <div className="mt-1 space-y-2">
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  Penzioni staz
                </span>
                <FormInput
                  label="God."
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  placeholder="Mes."
                  containerClassName="w-13"
                />
              </div>
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  Vremenski staz
                </span>
                <FormInput
                  label="God."
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  placeholder="Mes."
                  containerClassName="w-13"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 text-center -ml-10">
              Staz u preduzecu
            </label>
            <div className="mt-1 space-y-2">
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  Penzioni staz
                </span>
                <FormInput
                  label="God."
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  placeholder="Mes."
                  containerClassName="w-13"
                />
              </div>
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  Vremenski staz
                </span>
                <FormInput
                  label="God."
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  placeholder="Mes."
                  containerClassName="w-13"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 text-center -ml-10">
              Prethodni staz
            </label>
            <div className="mt-1 space-y-2">
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  Penzioni staz
                </span>
                <FormInput
                  label="God."
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  placeholder="Mes."
                  containerClassName="w-13"
                />
              </div>
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  Vremenski staz
                </span>
                <FormInput
                  label="God."
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  placeholder="Mes."
                  containerClassName="w-13"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
