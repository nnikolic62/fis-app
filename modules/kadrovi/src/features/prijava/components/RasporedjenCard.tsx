"use client";

import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";
import { SuitcaseIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Controller, useFormContext } from "react-hook-form";
import { Radnik } from "../../shared/schemas/keRadnik";
import { FormDatePicker } from "@repo/ui/formComponents/formDatePicker";
import { SelectPopup, SelectPopupItem } from "@repo/ui/SelectPopup";
import { useState } from "react";

// Mock podaci za obracunske jedinice
const mockObrJedinice: SelectPopupItem[] = [
  { sifra: "001", naziv: "Centrala" },
  { sifra: "002", naziv: "Pogon 1" },
  { sifra: "003", naziv: "Pogon 2" },
  { sifra: "004", naziv: "Administracija" },
  { sifra: "005", naziv: "IT Odeljenje" },
];

// Mock podaci za organizacione jedinice radnika
const mockOJRadnika: SelectPopupItem[] = [
  { sifra: "01", naziv: "Direkcija" },
  { sifra: "02", naziv: "Sektor administracije" },
  { sifra: "03", naziv: "Sektor razvoja" },
  { sifra: "04", naziv: "Sektor proizvodnje" },
  { sifra: "05", naziv: "Sektor marketing" },
  { sifra: "06", naziv: "Sektor prodaje" },
];

export function RasporedjenCard() {
  const { register, control, setValue } = useFormContext<Radnik>();
  const [isObrJedinicaPopupOpen, setIsObrJedinicaPopupOpen] = useState(false);
  const [isOJRadnikaPopupOpen, setIsOJRadnikaPopupOpen] = useState(false);
  const [obrJedinicaNaziv, setObrJedinicaNaziv] = useState("");
  const [ojRadnikaNaziv, setOjRadnikaNaziv] = useState("");

  const handleObrJedinicaSelect = (item: SelectPopupItem) => {
    setValue("obrJedinica", item.sifra);
    setObrJedinicaNaziv(item.naziv);
  };

  const handleOJRadnikaSelect = (item: SelectPopupItem) => {
    setValue("organizacionaJedinica", item.sifra);
    setOjRadnikaNaziv(item.naziv);
  };

  const handleObrJedinicaBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const sifra = e.target.value;
    if (sifra) {
      const jedinica = mockObrJedinice.find((item) => item.sifra === sifra);
      if (jedinica) {
        setObrJedinicaNaziv(jedinica.naziv);
      } else {
        setObrJedinicaNaziv("");
      }
    } else {
      setObrJedinicaNaziv("");
    }
  };

  const handleOJRadnikaBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const sifra = e.target.value;
    if (sifra) {
      const oj = mockOJRadnika.find((item) => item.sifra === sifra);
      if (oj) {
        setOjRadnikaNaziv(oj.naziv);
      } else {
        setOjRadnikaNaziv("");
      }
    } else {
      setOjRadnikaNaziv("");
    }
  };

  return (
    <>
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
                containerClassName="basis-2/5"
                placeholder="Sifra"
                label={undefined}
                {...register("obrJedinica")}
                onBlur={handleObrJedinicaBlur}
                endIcon={<MagnifyingGlassIcon size={16} className="text-slate-400" />}
                onIconClick={() => setIsObrJedinicaPopupOpen(true)}
              />
              <FormInput
                id="obrJedinica"
                containerClassName="basis-3/5"
                placeholder="Naziv"
                label={undefined}
                value={obrJedinicaNaziv}
                readOnly
                tabIndex={-1}
              />
            </div>
          </div>
          <div className="flex-1">
            <FormLabel label="Oj radnika" htmlFor="ojRadnika" />
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-2/5"
                placeholder="Sifra"
                label={undefined}
                {...register("organizacionaJedinica")}
                onBlur={handleOJRadnikaBlur}
                endIcon={<MagnifyingGlassIcon size={16} className="text-slate-400" />}
                onIconClick={() => setIsOJRadnikaPopupOpen(true)}
              />
              <FormInput
                id="ojRadnika"
                containerClassName="basis-3/5"
                placeholder="Naziv"
                label={undefined}
                value={ojRadnikaNaziv}
                readOnly
                tabIndex={-1}
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
            <Controller
              control={control}
              name="datumDol"
              render={({ field }) => (
                <FormDatePicker
                  label="Prvi datum dolaska"
                  placeholder="dd.mm.yyyy"
                  value={field.value ? String(field.value) : ""}
                  onValueChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="flex-1">
           <Controller
              control={control}
              name="datumDol"
              render={({ field }) => (
                <FormDatePicker
                  label="Prvi datum dolaska(ovo fali)"
                  placeholder="dd.mm.yyyy"
                  value={field.value ? String(field.value) : ""}
                  onValueChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="flex-1">
            <Controller
              control={control}
              name="datumOdl"
              render={({ field }) => (
                <FormDatePicker
                  label="Poslednji datum odlaska"
                  placeholder="dd.mm.yyyy"
                  value={field.value ? String(field.value) : ""}
                  onValueChange={field.onChange}
                />
              )}
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

    <SelectPopup
      isOpen={isObrJedinicaPopupOpen}
      onClose={() => setIsObrJedinicaPopupOpen(false)}
      items={mockObrJedinice}
      onSelect={handleObrJedinicaSelect}
      title="Izbor obračunske jedinice"
      searchPlaceholder="Pretraži obračunske jedinice..."
    />

    <SelectPopup
      isOpen={isOJRadnikaPopupOpen}
      onClose={() => setIsOJRadnikaPopupOpen(false)}
      items={mockOJRadnika}
      onSelect={handleOJRadnikaSelect}
      title="Izbor organizacione jedinice radnika"
      searchPlaceholder="Pretraži organizacione jedinice..."
    />
    </>
  );
}
