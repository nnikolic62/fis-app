"use client";

import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormCheckbox } from "@repo/ui/formComponents/formCheckbox";
import { FormRadio } from "@repo/ui/formComponents/formRadio";
import { FormSelect } from "@repo/ui/formComponents/formSelect";
import { FormDatePicker } from "@repo/ui/formComponents/formDatePicker";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";
import { GlobeIcon } from "@phosphor-icons/react";

export function OpstiPodaciCard() {
  return (
    <Card
      title="Opsti podaci"
      icon={<GlobeIcon size={20} />}
      className="lg:col-span-3"
      noPadding
    >
      <div className="px-6 pb-6 pt-3">
        {/* Prvi red */}
        <div className="flex gap-10 mb-2">
          <div className="">
            <FormDatePicker label="Datum rodjenja" placeholder="dd.mm.yyyy" />
          </div>
          <div className="flex items-end gap-1">
            <div className="flex items-end gap-1">
              <span className="block text-sm font-medium text-gray-700 mb-2 mr-1">
                Starost
              </span>
              <FormInput
                label="God."
                placeholder="God."
                readOnly
                containerClassName="w-13"
              />
            </div>
            <div className="flex flex-col justify-end">
              <FormInput
                label="Mes."
                placeholder="Mes."
                readOnly
                containerClassName="w-13"
              />
            </div>
          </div>
        </div>

        {/* Drugi red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <FormLabel label="Opstina rodenjna" htmlFor="opstinaRodjenja" />
            <div className="flex gap-2 items-end">
              <FormInput
                id="opstinaRodjenja"
                containerClassName="basis-1/5"
                placeholder=""
                label={undefined}
              />
              <FormInput
                containerClassName="basis-4/5"
                placeholder="Opstina rodenjna"
                label={undefined}
              />
            </div>
          </div>
          <div className="flex-1 basis-1/2">
            <FormLabel label="Opstina rada" htmlFor="opstinaRada" />
            <div className="flex gap-2 items-end">
              <FormInput
                id="opstinaRada"
                containerClassName="basis-1/5"
                placeholder=""
                label={undefined}
              />
              <FormInput
                containerClassName="basis-4/5"
                placeholder="Opstina rada"
                label={undefined}
              />
            </div>
          </div>
        </div>

        {/* Treci red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <FormLabel label="Nacionalnost" htmlFor="nacionalnost" />
            <div className="flex items-end w-full">
              <FormSelect
                id="nacionalnost"
                label={undefined}
                containerClassName="w-full"
                placeholder="Nacionalnost"
                options={[
                  { value: "srpska", label: "Srpska" },
                  { value: "hrvatska", label: "Hrvatska" },
                  { value: "bosanska", label: "Bosanska" },
                ]}
              />
            </div>
          </div>
          <div className="flex-1 basis-1/2">
            <FormLabel label="Veroispovest" htmlFor="veroispovest" />
            <div className="flex items-end w-full">
              <FormSelect
                id="veroispovest"
                label={undefined}
                containerClassName="w-full"
                placeholder="Veroispovest"
                options={[
                  { value: "pravoslavna", label: "Pravoslavna" },
                  { value: "katolicka", label: "Katolicka" },
                  { value: "islam", label: "Islam" },
                ]}
              />
            </div>
          </div>
        </div>
        {/* Cetvrti red */}
        <div className="flex gap-3 mb-2">
          <div className="w-3/5 ">
            <FormLabel label="Verski praznik" htmlFor="verskiPraznik" />
            <div className="flex gap-2 items-end">
              <FormInput
                containerClassName="flex-1 basis-1/6"
                placeholder=""
                label={undefined}
              />
              <FormInput
                id="verskiPraznik"
                containerClassName="flex-1 basis-1/2"
                placeholder="Verski praznik"
                label={undefined}
              />
              <FormInput
                containerClassName="flex-1 basis-1/3"
                placeholder=""
                label={undefined}
              />
            </div>
          </div>
          <div className="w-2/5">
            <FormLabel label="Status" htmlFor="status" />
            <div className="flex items-end w-full">
              <FormSelect
                id="status"
                label={undefined}
                containerClassName="w-full"
                placeholder="Status"
                options={[]}
              />
            </div>
          </div>
        </div>

        {/* Peti red */}
        <div className="flex gap-3 mb-2">
          <div className="w-3/5">
            <FormLabel label="Bračno stanje" htmlFor="bracnoStanje" />
            <div className="mt-1 flex flex-wrap gap-4">
              <FormRadio name="bracnoStanje" label="Neoženjen" />
              <FormRadio name="bracnoStanje" label="Oženjen" />
              <FormRadio name="bracnoStanje" label="Razveden" />
              <FormRadio name="bracnoStanje" label="Udovac" />
            </div>
          </div>
          <div className="w-2/5">
            <FormLabel label="Ostalo" htmlFor="ostalo" />
            <div className="mt-1 flex flex-row gap-8">
              <FormCheckbox label="Stranac" />
              <FormCheckbox label="Samohrani roditelj" />
            </div>
          </div>
        </div>

        {/* Sesti red */}
        <div className="flex gap-3 mb-2">
          <div className="w-full">
            <FormLabel label="Kategorija" htmlFor="kategorija" />
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/5"
                placeholder=""
                label={undefined}
              />
              <FormInput
                id="kategorija"
                containerClassName="basis-4/5"
                placeholder="Kategorija"
                label={undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
