import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/formInput";
import { FormCheckbox } from "@repo/ui/formComponents/formCheckbox";
import { FormRadio } from "@repo/ui/formComponents/formRadio";
import { FormSelect } from "@repo/ui/formComponents/formSelect";
import { FormDatePicker } from "@repo/ui/formComponents/formDatePicker";

import { UserIcon } from "@phosphor-icons/react/User";
import { PageWithHeader } from "@repo/ui/pageHeader/pageWithHeader";
import {
  FloppyDiskIcon,
  GlobeIcon,
  MapPinIcon,
  MedalIcon,
  SuitcaseIcon,
  XIcon,
} from "@phosphor-icons/react";

type EmployeeRegistrationProps = {
  onBack?: () => void;
};

export default function TestPage({ onBack }: EmployeeRegistrationProps) {
  return (
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
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
        <Card
          title="Osnovni podaci"
          icon={<UserIcon size={20} />}
          className="lg:col-span-2"
        >
          {/* Prvi red */}
          <div className="flex justify-between gap-3 mb-2 ">
            <div>
              <FormInput label="ID" placeholder="ID" containerClassName="w-16" />
            </div>
            <div>
              <FormInput
                label="St. broj"
                placeholder="St. broj"
                containerClassName="w-24"
              />
            </div>
          </div>

          {/* Drugi red */}
          <div className="flex gap-3 mb-2">
            <div className="flex-1 basis-1/2">
              <FormInput label="Prezime" placeholder="Prezime" />
            </div>
            <div className="flex-1 basis-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Ime roditelja
              </label>
              <div className="mt-1 flex gap-2">
                <FormInput
                  containerClassName="flex-[4]"
                  placeholder="Ime roditelja"
                  label={undefined}
                />
                <FormInput
                  containerClassName="flex-[1]"
                  placeholder=""
                  label={undefined}
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
              <label className="block text-sm font-medium text-gray-700">
                Pol
              </label>
              <div className="mt-1 flex gap-6">
                <FormRadio name="pol" label="Muski" />
                <FormRadio name="pol" label="Zenski" />
              </div>
            </div>
          </div>
        </Card>
        <Card
          title="Opsti podaci"
          icon={<GlobeIcon size={20} />}
          className="lg:col-span-3"
        >
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
                  labelClassName="text-xs"
                  placeholder="God."
                  readOnly
                  containerClassName="w-13"
                />
              </div>
              <div className="flex flex-col justify-end">
                <FormInput
                  label="Mes."
                  labelClassName="text-xs"
                  placeholder="Mes."
                  readOnly
                  containerClassName="w-13"
                />
              </div>
            </div>
          </div>

          {/* Drugi red */}
          <div className="flex flex-col gap-1 mb-2">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 w-full text-left">
                  Opstina rodenjna
                </label>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 w-full text-left">
                  Opstina rada
                </label>
              </div>
            </div>
            <div className="flex gap-3">
              {/* Leva polovina */}
              <div className="flex-1 flex gap-2">
                <FormInput
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
              {/* Desna polovina */}
              <div className="flex-1 flex gap-2">
                <FormInput
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
              <FormSelect
                label="Nacionalnost"
                placeholder="Nacionalnost"
                options={[
                  { value: "srpska", label: "Srpska" },
                  { value: "hrvatska", label: "Hrvatska" },
                  { value: "bosanska", label: "Bosanska" },
                ]}
              />
            </div>
            <div className="flex-1 basis-1/2">
              <FormSelect
                label="Veroispovest"
                placeholder="Veroispovest"
                options={[
                  { value: "pravoslavna", label: "Pravoslavna" },
                  { value: "katolicka", label: "Katolicka" },
                  { value: "islam", label: "Islam" },
                ]}
              />
            </div>
          </div>
          {/* Cetvrti red */}
          <div className="flex gap-3 mb-2">
            <div className="w-3/5 ">
              <label className="block text-sm font-medium text-gray-700 text-left">
                Verski praznik
              </label>
              <div className="flex gap-2 mt-1">
                <FormInput
                  containerClassName="flex-1 basis-1/6"
                  placeholder=""
                  label={undefined}
                />
                <FormInput
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
              <FormSelect label="Status" placeholder="Status" options={[]} />
            </div>
          </div>

          {/* Peti red */}
          <div className="flex gap-3 mb-2">
            <div className="w-3/5">
              <label className="block text-sm font-medium text-gray-700 text-left">
                Bračno stanje
              </label>
              <div className="mt-1 flex flex-wrap gap-4">
                <FormRadio name="bracnoStanje" label="Neoženjen" />
                <FormRadio name="bracnoStanje" label="Oženjen" />
                <FormRadio name="bracnoStanje" label="Razveden" />
                <FormRadio name="bracnoStanje" label="Udovac" />
              </div>
            </div>
            <div className="w-2/5">
              <label className="block text-sm font-medium text-gray-700 text-left">
                Ostalo
              </label>
              <div className="mt-1 flex flex-row gap-8">
                <FormCheckbox label="Stranac" />
                <FormCheckbox label="Samohrani roditelj" />
              </div>
            </div>
          </div>

          {/* Sesti red */}
          <div className="flex gap-3 mb-2">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 text-left">
                Kategorija
              </label>
              <div className="flex gap-2 mt-1">
                <FormInput
                  containerClassName="basis-1/5"
                  placeholder=""
                  label={undefined}
                />
                <FormInput
                  containerClassName="basis-4/5"
                  placeholder="Kategorija"
                  label={undefined}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card
        title="Mesto boravka"
        icon={<MapPinIcon size={20} />}
        className="mb-4"
      >
        {/* Prvi red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 text-left">
              Opstina
            </label>
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/3"
                placeholder="Sifra"
                label={undefined}
              />
              <FormInput
                containerClassName="basis-2/3"
                placeholder="Naziv"
                label={undefined}
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 text-left">
              MZ
            </label>
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/3"
                placeholder="Sifra"
                label={undefined}
              />
              <FormInput
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
            <FormInput label="Adresa" placeholder="Adresa" />
          </div>
          <div className="flex-1 flex gap-2">
            <div className="flex-1">
              <FormInput label="Telefon" placeholder="Telefon" />
            </div>
            <div className="flex-1">
              <FormInput label="Mail" placeholder="Mail" />
            </div>
          </div>
        </div>
      </Card>
      <Card title="Rasporedjen u preduzecu" icon={<SuitcaseIcon size={20} />}>
        {/* Prvi red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 text-left">
              Obr. jedinica
            </label>
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/3"
                placeholder="Sifra"
                label={undefined}
              />
              <FormInput
                containerClassName="basis-2/3"
                placeholder="Naziv"
                label={undefined}
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 text-left">
              Oj radnika
            </label>
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/3"
                placeholder="Sifra"
                label={undefined}
              />
              <FormInput
                containerClassName="basis-2/3"
                placeholder="Naziv"
                label={undefined}
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 text-left">
              Sprema
            </label>
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/3"
                placeholder="Sifra"
                label={undefined}
              />
              <FormInput
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
            <FormInput label="Prvi datum dolaska" placeholder="Polje 1" />
          </div>
          <div className="flex-1">
            <FormInput label="Poslednji datum dolaska" placeholder="Polje 2" />
          </div>
          <div className="flex-1">
            <FormInput label="Poslednji datum odlaska" placeholder="Polje 3" />
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
                  labelClassName="text-xs"
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  labelClassName="text-xs"
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
                  labelClassName="text-xs"
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  labelClassName="text-xs"
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
                  labelClassName="text-xs"
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  labelClassName="text-xs"
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
                  labelClassName="text-xs"
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  labelClassName="text-xs"
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
                  labelClassName="text-xs"
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  labelClassName="text-xs"
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
                  labelClassName="text-xs"
                  placeholder="God."
                  containerClassName="w-13"
                />
                <FormInput
                  label="Mes."
                  labelClassName="text-xs"
                  placeholder="Mes."
                  containerClassName="w-13"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </PageWithHeader>
  );
}
