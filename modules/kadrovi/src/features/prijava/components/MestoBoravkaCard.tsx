"use client";

import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";
import { MapPinIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
import { Radnik } from "../../shared/schemas/keRadnik";
import { SelectPopup, SelectPopupItem } from "@repo/ui/SelectPopup";
import { useState } from "react";

// Mock podaci za opstine
const mockOpstine: SelectPopupItem[] = [
  { sifra: "001", naziv: "Beograd" },
  { sifra: "002", naziv: "Novi Sad" },
  { sifra: "003", naziv: "Niš" },
  { sifra: "004", naziv: "Kragujevac" },
  { sifra: "005", naziv: "Subotica" },
  { sifra: "006", naziv: "Pančevo" },
  { sifra: "007", naziv: "Čačak" },
  { sifra: "008", naziv: "Kraljevo" },
  { sifra: "009", naziv: "Smederevo" },
  { sifra: "010", naziv: "Leskovac" },
];

// Mock podaci za MZ
const mockMZ: SelectPopupItem[] = [
  { sifra: "01", naziv: "Centar" },
  { sifra: "02", naziv: "Karaburma" },
  { sifra: "03", naziv: "Voždovac" },
  { sifra: "04", naziv: "Zvezdara" },
  { sifra: "05", naziv: "Rakovica" },
  { sifra: "06", naziv: "Čukarica" },
];

export function MestoBoravkaCard() {
  const { register, setValue } = useFormContext<Radnik>();
  const [isOpstinaPopupOpen, setIsOpstinaPopupOpen] = useState(false);
  const [isMZPopupOpen, setIsMZPopupOpen] = useState(false);
  const [opstinaNaziv, setOpstinaNaziv] = useState("");
  const [mzNaziv, setMzNaziv] = useState("");

  const handleOpstinaSelect = (item: SelectPopupItem) => {
    setValue("opsbr", item.sifra);
    setOpstinaNaziv(item.naziv);
  };

  const handleMZSelect = (item: SelectPopupItem) => {
    setValue("mzbr", item.sifra);
    setMzNaziv(item.naziv);
  };

  const handleOpstinaBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const sifra = e.target.value;
    if (sifra) {
      const opstina = mockOpstine.find((item) => item.sifra === sifra);
      if (opstina) {
        setOpstinaNaziv(opstina.naziv);
      } else {
        setOpstinaNaziv("");
      }
    } else {
      setOpstinaNaziv("");
    }
  };

  const handleMZBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const sifra = e.target.value;
    if (sifra) {
      const mz = mockMZ.find((item) => item.sifra === sifra);
      if (mz) {
        setMzNaziv(mz.naziv);
      } else {
        setMzNaziv("");
      }
    } else {
      setMzNaziv("");
    }
  };

  return (
    <>
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
                containerClassName="basis-1/3"
                placeholder="Sifra"
                label={undefined}
                {...register("opsbr")}
                onBlur={handleOpstinaBlur}
                endIcon={<MagnifyingGlassIcon size={16} className="text-slate-400" />}
                onIconClick={() => setIsOpstinaPopupOpen(true)}
              />
              <FormInput
                id="opstina"
                containerClassName="basis-2/3"
                placeholder="Naziv"
                label={undefined}
                value={opstinaNaziv}
                readOnly
                tabIndex={-1}
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
                containerClassName="basis-1/3"
                placeholder="Sifra"
                label={undefined}
                {...register("mzbr")}
                onBlur={handleMZBlur}
                endIcon={<MagnifyingGlassIcon size={16} className="text-slate-400" />}
                onIconClick={() => setIsMZPopupOpen(true)}
              />
              <FormInput
                id="mz"
                containerClassName="basis-2/3"
                placeholder="Naziv"
                label={undefined}
                value={mzNaziv}
                readOnly
                tabIndex={-1}
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

    <SelectPopup
      isOpen={isOpstinaPopupOpen}
      onClose={() => setIsOpstinaPopupOpen(false)}
      items={mockOpstine}
      onSelect={handleOpstinaSelect}
      title="Izbor opštine"
      searchPlaceholder="Pretraži opštine..."
    />

    <SelectPopup
      isOpen={isMZPopupOpen}
      onClose={() => setIsMZPopupOpen(false)}
      items={mockMZ}
      onSelect={handleMZSelect}
      title="Izbor MZ"
      searchPlaceholder="Pretraži MZ..."
    />
    </>
  );
}
