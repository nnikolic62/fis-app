"use client";

import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormCheckbox } from "@repo/ui/formComponents/formCheckbox";
import { FormRadio } from "@repo/ui/formComponents/formRadio";
import { FormSelect } from "@repo/ui/formComponents/formSelect";
import { FormDatePicker } from "@repo/ui/formComponents/formDatePicker";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";
import { GlobeIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { Radnik } from "../../shared/schemas/keRadnik";
import { SelectPopup, SelectPopupItem } from "@repo/ui/SelectPopup";
import { useState } from "react";

// Mock podaci za opstine
const mockOpstine: SelectPopupItem[] = [
  { sifra: "001", naziv: "Beograd-Zemun - osnovaci" },
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

// Mock podaci za verske praznike
const mockVerskiPraznici: SelectPopupItem[] = [
  { sifra: "01", naziv: "Sveti Nikola", dodatno: "19.12.2026." },
  { sifra: "02", naziv: "Sveti Đorđe", dodatno: "06.05" },
  { sifra: "03", naziv: "Sveti Jovan", dodatno: "20.01" },
  { sifra: "04", naziv: "Sveti Luka", dodatno: "31.10" },
  { sifra: "05", naziv: "Sveti Sava", dodatno: "27.01" },
  { sifra: "06", naziv: "Sveti Petar", dodatno: "12.07" },
  { sifra: "07", naziv: "Sveta Petka", dodatno: "27.10" },
  { sifra: "08", naziv: "Sveti Arhanđel", dodatno: "21.11" },
];

// Mock podaci za kategorije
const mockKategorije: SelectPopupItem[] = [
  { sifra: "01", naziv: "Radnik" },
  { sifra: "02", naziv: "Penzioner" },
  { sifra: "03", naziv: "Student" },
  { sifra: "04", naziv: "Nezaposleni" },
  { sifra: "05", naziv: "Službenik" },
];

export function OpstiPodaciCard() {
  const { control, register, setValue } = useFormContext<Radnik>();
  const [isOpstinaRodjPopupOpen, setIsOpstinaRodjPopupOpen] = useState(false);
  const [isOpstinaRadaPopupOpen, setIsOpstinaRadaPopupOpen] = useState(false);
  const [isVerskiPraznikPopupOpen, setIsVerskiPraznikPopupOpen] = useState(false);
  const [isKategorijaPopupOpen, setIsKategorijaPopupOpen] = useState(false);
  
  const [opstinaRodjNaziv, setOpstinaRodjNaziv] = useState("");
  const [opstinaRadaNaziv, setOpstinaRadaNaziv] = useState("");
  const [verskiPraznikNaziv, setVerskiPraznikNaziv] = useState("");
  const [verskiPraznikDatum, setVerskiPraznikDatum] = useState("");
  const [kategorijaNaziv, setKategorijaNaziv] = useState("");
  const [kategorijaSifra, setKategorijaSifra] = useState("");

  const pol = useWatch({ control, name: "pol" });
  const isZenski = pol === "Z";

  const handleOpstinaRodjSelect = (item: SelectPopupItem) => {
    setValue("opsrbr", item.sifra);
    setOpstinaRodjNaziv(item.naziv);
  };

  const handleOpstinaRadaSelect = (item: SelectPopupItem) => {
    setValue("opsbrRada", item.sifra);
    setOpstinaRadaNaziv(item.naziv);
  };

  const handleVerskiPraznikSelect = (item: SelectPopupItem) => {
    setValue("slavabr", item.sifra);
    setVerskiPraznikNaziv(item.naziv);
    setVerskiPraznikDatum(item.dodatno || "");
  };

  const handleKategorijaSelect = (item: SelectPopupItem) => {
    setKategorijaSifra(item.sifra);
    setKategorijaNaziv(item.naziv);
  };

  const handleOpstinaRodjBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const sifra = e.target.value;
    if (sifra) {
      const opstina = mockOpstine.find((item) => item.sifra === sifra);
      if (opstina) {
        setOpstinaRodjNaziv(opstina.naziv);
      } else {
        setOpstinaRodjNaziv("");
      }
    } else {
      setOpstinaRodjNaziv("");
    }
  };

  const handleOpstinaRadaBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const sifra = e.target.value;
    if (sifra) {
      const opstina = mockOpstine.find((item) => item.sifra === sifra);
      if (opstina) {
        setOpstinaRadaNaziv(opstina.naziv);
      } else {
        setOpstinaRadaNaziv("");
      }
    } else {
      setOpstinaRadaNaziv("");
    }
  };

  const handleVerskiPraznikBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const sifra = e.target.value;
    if (sifra) {
      const praznik = mockVerskiPraznici.find((item) => item.sifra === sifra);
      if (praznik) {
        setVerskiPraznikNaziv(praznik.naziv);
        setVerskiPraznikDatum(praznik.dodatno || "");
      } else {
        setVerskiPraznikNaziv("");
        setVerskiPraznikDatum("");
      }
    } else {
      setVerskiPraznikNaziv("");
      setVerskiPraznikDatum("");
    }
  };

  const handleKategorijaBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const sifra = e.target.value;
    if (sifra) {
      const kategorija = mockKategorije.find((item) => item.sifra === sifra);
      if (kategorija) {
        setKategorijaNaziv(kategorija.naziv);
      } else {
        setKategorijaNaziv("");
      }
    } else {
      setKategorijaNaziv("");
    }
  };

  return (
    <>
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
            <Controller
              control={control}
              name="datRodj"
              render={({ field }) => (
                <FormDatePicker
                  label="Datum rodjenja"
                  placeholder="dd.mm.yyyy"
                  value={field.value ? String(field.value) : ""}
                  onValueChange={field.onChange}
                />
              )}
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
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <FormLabel label="Opstina rodenjna" htmlFor="opstinaRodjenja" />
            <div className="flex gap-2 items-end">
              <FormInput
                id="opstinaRodjenja"
                containerClassName="basis-1/4"
                placeholder=""
                label={undefined}
                {...register("opsrbr")}
                onBlur={handleOpstinaRodjBlur}
                endIcon={<MagnifyingGlassIcon size={16} className="text-slate-400" />}
                onIconClick={() => setIsOpstinaRodjPopupOpen(true)}
              />
              <FormInput
                containerClassName="basis-3/4"
                placeholder="Opstina rodenjna"
                label={undefined}
                value={opstinaRodjNaziv}
                readOnly
                tabIndex={-1}
              />
            </div>
          </div>
          <div className="flex-1 basis-1/2">
            <FormLabel label="Opstina rada" htmlFor="opstinaRada" />
            <div className="flex gap-2 items-end">
              <FormInput
                id="opstinaRada"
                containerClassName="basis-1/4"
                placeholder=""
                label={undefined}
                {...register("opsbrRada")}
                onBlur={handleOpstinaRadaBlur}
                endIcon={<MagnifyingGlassIcon size={16} className="text-slate-400" />}
                onIconClick={() => setIsOpstinaRadaPopupOpen(true)}
              />
              <FormInput
                containerClassName="basis-3/4"
                placeholder="Opstina rada"
                label={undefined}
                value={opstinaRadaNaziv}
                readOnly
                tabIndex={-1}
              />
            </div>
          </div>
        </div>

        {/* Treci red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1 basis-1/2">
            <FormLabel label="Nacionalnost" htmlFor="nacionalnost" />
            <div className="flex items-end w-full">
              <Controller
                control={control}
                name="nacbr"
                render={({ field }) => (
                  <FormSelect
                    id="nacionalnost"
                    label={undefined}
                    containerClassName="w-full"
                    placeholder="Nacionalnost"
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                    options={[
                      { value: "SR", label: "Srpska" },
                      { value: "HR", label: "Hrvatska" },
                      { value: "BO", label: "Bosanska" },
                    ]}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex-1 basis-1/2">
            <FormLabel label="Veroispovest" htmlFor="veroispovest" />
            <div className="flex items-end w-full">
              <Controller
                control={control}
                name="verabr"
                render={({ field }) => (
                  <FormSelect
                    id="veroispovest"
                    label={undefined}
                    containerClassName="w-full"
                    placeholder="Veroispovest"
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                    options={[
                      { value: "PR", label: "Pravoslavna" },
                      { value: "KA", label: "Katolicka" },
                      { value: "IS", label: "Islam" },
                    ]}
                  />
                )}
              />
            </div>
          </div>
        </div>
        {/* Cetvrti red */}
        <div className="flex gap-3 mb-2">
          <div className="w-3/5 ">
            <FormLabel label="Verski praznik" htmlFor="verskiPraznik" />
            <div className="grid grid-cols-12 gap-2 items-end">
              <FormInput
                containerClassName="col-span-2"
                placeholder=""
                label={undefined}
                {...register("slavabr")}
                onBlur={handleVerskiPraznikBlur}
                endIcon={<MagnifyingGlassIcon size={16} className="text-slate-400" />}
                onIconClick={() => setIsVerskiPraznikPopupOpen(true)}
              />
              <FormInput
                id="verskiPraznik"
                containerClassName="col-span-7"
                placeholder="Verski praznik"
                label={undefined}
                value={verskiPraznikNaziv}
                readOnly
                tabIndex={-1}
              />
              <FormInput
                containerClassName="col-span-3"
                placeholder=""
                label={undefined}
                value={verskiPraznikDatum}
                readOnly
                tabIndex={-1}
              />
            </div>
          </div>
          <div className="w-2/5">
            <FormLabel label="Status" htmlFor="status" />
            <div className="flex items-end w-full">
              <Controller
                control={control}
                name="statusbr"
                render={({ field }) => (
                  <FormSelect
                    id="status"
                    label={undefined}
                    containerClassName="w-full"
                    placeholder="Status"
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                    options={[
                      { value: "A", label: "Aktivan" },
                      { value: "N", label: "Neaktivan" },
                    ]}
                  />
                )}
              />
            </div>
          </div>
        </div>

        {/* Peti red */}
        <div className="flex gap-3 mb-2">
          <div className="w-3/5">
            <FormLabel label="Bračno stanje" htmlFor="bracnoStanje" />
            <div className="mt-1 flex flex-wrap gap-4">
              <FormRadio
                label={isZenski ? "Neudata" : "Neoženjen"}
                value="N"
                {...register("bracnoStanje")}
              />
              <FormRadio
                label={isZenski ? "Udata" : "Oženjen"}
                value="O"
                {...register("bracnoStanje")}
              />
              <FormRadio
                label={isZenski ? "Razvedena" : "Razveden"}
                value="R"
                {...register("bracnoStanje")}
              />
              <FormRadio
                label={isZenski ? "Udovica" : "Udovac"}
                value="U"
                {...register("bracnoStanje")}
              />
            </div>
          </div>
          <div className="w-2/5">
            <FormLabel label="Ostalo" htmlFor="ostalo" />
            <div className="mt-1 flex flex-row gap-8">
              <Controller
                control={control}
                name="jeStranac"
                render={({ field }) => (
                  <FormCheckbox
                    label="Stranac"
                    checked={field.value === "1"}
                    onChange={(event) =>
                      field.onChange(event.target.checked ? "1" : undefined)
                    }
                  />
                )}
              />
              <Controller
                control={control}
                name="samohran"
                render={({ field }) => (
                  <FormCheckbox
                    label="Samohrani roditelj"
                    checked={field.value === "1"}
                    onChange={(event) =>
                      field.onChange(event.target.checked ? "1" : undefined)
                    }
                  />
                )}
              />
            </div>
          </div>
        </div>

        {/* Sesti red */}
        <div className="flex gap-3 mb-2">
          <div className="w-full">
            <FormLabel label="Kategorija" htmlFor="kategorija" />
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/4"
                placeholder=""
                label={undefined}
                value={kategorijaSifra}
                onChange={(e) => setKategorijaSifra(e.target.value)}
                onBlur={handleKategorijaBlur}
                endIcon={<MagnifyingGlassIcon size={16} className="text-slate-400" />}
                onIconClick={() => setIsKategorijaPopupOpen(true)}
              />
              <FormInput
                id="kategorija"
                containerClassName="basis-3/4"
                placeholder="Kategorija"
                label={undefined}
                value={kategorijaNaziv}
                readOnly
                tabIndex={-1}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
    
    <SelectPopup
      isOpen={isOpstinaRodjPopupOpen}
      onClose={() => setIsOpstinaRodjPopupOpen(false)}
      items={mockOpstine}
      onSelect={handleOpstinaRodjSelect}
      title="Izbor opštine rođenja"
      searchPlaceholder="Pretraži opštine..."
    />

    <SelectPopup
      isOpen={isOpstinaRadaPopupOpen}
      onClose={() => setIsOpstinaRadaPopupOpen(false)}
      items={mockOpstine}
      onSelect={handleOpstinaRadaSelect}
      title="Izbor opštine rada"
      searchPlaceholder="Pretraži opštine..."
    />

    <SelectPopup
      isOpen={isVerskiPraznikPopupOpen}
      onClose={() => setIsVerskiPraznikPopupOpen(false)}
      items={mockVerskiPraznici}
      onSelect={handleVerskiPraznikSelect}
      title="Izbor verskog praznika"
      searchPlaceholder="Pretraži verske praznike..."
      columns={{ sifra: "Šifra", naziv: "Naziv", dodatno: "Datum" }}
    />

    <SelectPopup
      isOpen={isKategorijaPopupOpen}
      onClose={() => setIsKategorijaPopupOpen(false)}
      items={mockKategorije}
      onSelect={handleKategorijaSelect}
      title="Izbor kategorije"
      searchPlaceholder="Pretraži kategorije..."
    />
    </>
  );
}
