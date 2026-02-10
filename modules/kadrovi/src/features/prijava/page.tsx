import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/FormInput";
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
import { FormProvider, useForm } from "react-hook-form";
import { Radnik, radnikSchema } from "../shared/schemas/radnik";
import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";

type EmployeeRegistrationProps = {
  onBack?: () => void;
};

export default function TestPage({ onBack }: EmployeeRegistrationProps) {
  const defaultValues: Radnik = useMemo(
    () => ({
      radBr: "",
      organizacionaJedinica: "",
      preizme: "",
      ime: "",
      srSlovo: "",
      roditelj: "",
      devPrez: "",
      datRodj: undefined,
      pol: "",
      licniBr: "",
      opsrBr: "",
      opsBr: "",
      mzBr: "",
      statusBr: "",
      spremaBr: "",
      veraBr: "",
      nacBr: "",
      slavaBr: "",
      datumDol: undefined,
      datumOdl: undefined,
      bracnoStanje: "",
      slika: "",
      zastareo: "",
      datum: new Date(),
      radBrRef: "",
      spremaBrInt: "",
      veraBrInt: "",
      nacBrInt: "",
      slavaBrInt: "",
    }),
    [],
  );
  const methods = useForm<Radnik>({
    mode: "onBlur",
    defaultValues,
    resolver: zodResolver(radnikSchema),
  });
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
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
                {...methods.register("radBr")}
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
                <label className="block text-sm font-medium text-gray-700">
                  Pol
                </label>
                <div className="mt-1 flex gap-6">
                  <FormRadio name="pol" label="Muski" />
                  <FormRadio name="pol" label="Zenski" />
                </div>
              </div>
            </div>
            </div>
          </Card>
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
                <FormDatePicker
                  label="Datum rodjenja"
                  placeholder="dd.mm.yyyy"
                />
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
            <div className="flex flex-col gap-1 mb-2">
              <div className="flex gap-3">
                <div className="flex-1">
                  <FormLabel
                    label="Opstina rodenjna"
                    htmlFor="opstinaRodjenja"
                  />
                </div>
                <div className="flex-1">
                  <FormLabel label="Opstina rada" htmlFor="opstinaRada" />
                </div>
              </div>
              <div className="flex gap-3">
                {/* Leva polovina */}
                <div className="flex-1 flex gap-2">
                  <FormInput
                    id="opstinaRodjenja"
                    containerClassName="basis-1/5"
                    placeholder=""
                  />
                  <FormInput
                    id="opstinaRada"
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
                <FormLabel label="Verski praznik" htmlFor="verskiPraznik" />
                <div className="flex gap-2 mt-1">
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
                <FormSelect label="Status" placeholder="Status" options={[]} />
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-4">
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
                <FormInput label="Adresa" placeholder="Adresa" />
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
                  />
                  <FormInput
                    label="Mail"
                    placeholder="Mail"
                    containerClassName="basis-2/3"
                  />
                </div>
              </div>
            </div>
            </div>
          </Card>
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
                <FormInput label="Prvi datum dolaska" placeholder="Polje 1" />
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
        </div>
      </PageWithHeader>
    </FormProvider>
  );
}
