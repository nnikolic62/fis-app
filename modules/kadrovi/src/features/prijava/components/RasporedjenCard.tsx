"use client";

import { Card } from "@repo/ui/card";
import { FormInput } from "@repo/ui/formComponents/FormInput";
import { FormLabel } from "@repo/ui/formComponents/FormLabel";
import { SuitcaseIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Controller, useFormContext } from "react-hook-form";
import { Radnik } from "../../shared/schemas/keRadnik";
import { FormDatePicker } from "@repo/ui/formComponents/formDatePicker";
import { SelectDialog, SelectDialogItem } from "@repo/ui/SelectDialog";
import { useState } from "react";
import { useTranslation } from "@repo/i18n-config";
import { KADROVI_NS } from "../../../config/i18n";

// Mock podaci za obracunske jedinice
const mockObrJedinice: SelectDialogItem[] = [
  { sifra: "001", naziv: "Centrala" },
  { sifra: "002", naziv: "Pogon 1" },
  { sifra: "003", naziv: "Pogon 2" },
  { sifra: "004", naziv: "Administracija" },
  { sifra: "005", naziv: "IT Odeljenje" },
];

// Mock podaci za organizacione jedinice radnika
const mockOJRadnika: SelectDialogItem[] = [
  { sifra: "01", naziv: "Direkcija" },
  { sifra: "02", naziv: "Sektor administracije" },
  { sifra: "03", naziv: "Sektor razvoja" },
  { sifra: "04", naziv: "Sektor proizvodnje" },
  { sifra: "05", naziv: "Sektor marketing" },
  { sifra: "06", naziv: "Sektor prodaje" },
];

export function RasporedjenCard() {
  const { t } = useTranslation(KADROVI_NS);
  const { register, control, setValue } = useFormContext<Radnik>();
  const [isObrJedinicaPopupOpen, setIsObrJedinicaPopupOpen] = useState(false);
  const [isOJRadnikaPopupOpen, setIsOJRadnikaPopupOpen] = useState(false);
  const [obrJedinicaNaziv, setObrJedinicaNaziv] = useState("");
  const [ojRadnikaNaziv, setOjRadnikaNaziv] = useState("");

  const handleObrJedinicaSelect = (item: SelectDialogItem) => {
    setValue("obrJedinica", item.sifra);
    setObrJedinicaNaziv(item.naziv);
  };

  const handleOJRadnikaSelect = (item: SelectDialogItem) => {
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
      title={t("prijava.rasporedjenje.title")}
      icon={<SuitcaseIcon size={20} />}
      className="lg:col-span-4"
      noPadding
    >
      <div className="px-6 pb-6 pt-3">
        {/* Prvi red */}
        <div className="flex gap-3 mb-2">
          <div className="flex-1">
            <FormLabel label={t("prijava.rasporedjenje.obrJedinica")} htmlFor="obrJedinica" />
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-2/5"
                placeholder={t("prijava.opstiPodaci.sifra")}
                label={undefined}
                {...register("obrJedinica")}
                onBlur={handleObrJedinicaBlur}
                endIcon={<MagnifyingGlassIcon size={16} className="text-slate-400" />}
                onIconClick={() => setIsObrJedinicaPopupOpen(true)}
              />
              <FormInput
                id="obrJedinica"
                containerClassName="basis-3/5"
                placeholder={t("prijava.rasporedjenje.naziv")}
                label={undefined}
                value={obrJedinicaNaziv}
                readOnly
                tabIndex={-1}
              />
            </div>
          </div>
          <div className="flex-1">
            <FormLabel label={t("prijava.rasporedjenje.organizacionaJedinica")} htmlFor="ojRadnika" />
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-2/5"
                placeholder={t("prijava.opstiPodaci.sifra")}
                label={undefined}
                {...register("organizacionaJedinica")}
                onBlur={handleOJRadnikaBlur}
                endIcon={<MagnifyingGlassIcon size={16} className="text-slate-400" />}
                onIconClick={() => setIsOJRadnikaPopupOpen(true)}
              />
              <FormInput
                id="ojRadnika"
                containerClassName="basis-3/5"
                placeholder={t("prijava.rasporedjenje.organizacionaJedinica")}
                label={undefined}
                value={ojRadnikaNaziv}
                readOnly
                tabIndex={-1}
              />
            </div>
          </div>
          <div className="flex-1">
            <FormLabel label={t("prijava.rasporedjenje.sprema")} htmlFor="sprema" />
            <div className="flex gap-2 mt-1">
              <FormInput
                containerClassName="basis-1/3"
                placeholder={t("prijava.opstiPodaci.sifra")}
                label={undefined}
                {...register("spremabr")}
              />
              <FormInput
                id="sprema"
                containerClassName="basis-2/3"
                placeholder={t("prijava.rasporedjenje.sprema")}
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
                  label={t("prijava.rasporedjenje.datumPrijave")}
                  placeholder={t("prijava.placeholders.datePicker")}
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
                  label={t("prijava.rasporedjenje.datumPrijave")}
                  placeholder={t("prijava.placeholders.datePicker")}
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
                  label={t("prijava.rasporedjenje.datumOdjave")}
                  placeholder={t("prijava.placeholders.datePicker")}
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
              {t("prijava.rasporedjenje.radniStaz.ukupniStaz")}
            </label>
            <div className="mt-1 space-y-2">
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  {t("prijava.rasporedjenje.radniStaz.penzionskiStaz")}
                </span>
                <FormInput
                  label={t("prijava.opstiPodaci.godine")}
                  placeholder={t("prijava.opstiPodaci.godine")}
                  containerClassName="w-13"
                />
                <FormInput
                  label={t("prijava.opstiPodaci.meseci")}
                  placeholder={t("prijava.opstiPodaci.meseci")}
                  containerClassName="w-13"
                />
              </div>
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  {t("prijava.rasporedjenje.radniStaz.vremenskiStaz")}
                </span>
                <FormInput
                  label={t("prijava.opstiPodaci.godine")}
                  placeholder={t("prijava.opstiPodaci.godine")}
                  containerClassName="w-13"
                />
                <FormInput
                  label={t("prijava.opstiPodaci.meseci")}
                  placeholder={t("prijava.opstiPodaci.meseci")}
                  containerClassName="w-13"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 text-center -ml-10">
              {t("prijava.rasporedjenje.radniStaz.stazUPreduzecu")}
            </label>
            <div className="mt-1 space-y-2">
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  {t("prijava.rasporedjenje.radniStaz.penzionskiStaz")}
                </span>
                <FormInput
                  label={t("prijava.opstiPodaci.godine")}
                  placeholder={t("prijava.opstiPodaci.godine")}
                  containerClassName="w-13"
                />
                <FormInput
                  label={t("prijava.opstiPodaci.meseci")}
                  placeholder={t("prijava.opstiPodaci.meseci")}
                  containerClassName="w-13"
                />
              </div>
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  {t("prijava.rasporedjenje.radniStaz.vremenskiStaz")}
                </span>
                <FormInput
                  label={t("prijava.opstiPodaci.godine")}
                  placeholder={t("prijava.opstiPodaci.godine")}
                  containerClassName="w-13"
                />
                <FormInput
                  label={t("prijava.opstiPodaci.meseci")}
                  placeholder={t("prijava.opstiPodaci.meseci")}
                  containerClassName="w-13"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 text-center -ml-10">
              {t("prijava.rasporedjenje.radniStaz.prethodniStaz")}
            </label>
            <div className="mt-1 space-y-2">
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  {t("prijava.rasporedjenje.radniStaz.penzionskiStaz")}
                </span>
                <FormInput
                  label={t("prijava.opstiPodaci.godine")}
                  placeholder={t("prijava.opstiPodaci.godine")}
                  containerClassName="w-13"
                />
                <FormInput
                  label={t("prijava.opstiPodaci.meseci")}
                  placeholder={t("prijava.opstiPodaci.meseci")}
                  containerClassName="w-13"
                />
              </div>
              <div className="flex items-end gap-2">
                <span className="block text-sm font-medium text-gray-700 mr-2 mb-2 w-24 text-right">
                  {t("prijava.rasporedjenje.radniStaz.vremenskiStaz")}
                </span>
                <FormInput
                  label={t("prijava.opstiPodaci.godine")}
                  placeholder={t("prijava.opstiPodaci.godine")}
                  containerClassName="w-13"
                />
                <FormInput
                  label={t("prijava.opstiPodaci.meseci")}
                  placeholder={t("prijava.opstiPodaci.meseci")}
                  containerClassName="w-13"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>

    {/* <SelectDialog
      isOpen={isObrJedinicaPopupOpen}
      onClose={() => setIsObrJedinicaPopupOpen(false)}
      items={mockObrJedinice}
      onSelect={handleObrJedinicaSelect}
      title={t("prijava.rasporedjenje.selectPopups.obrJedinica.title")}
      searchPlaceholder={t("prijava.rasporedjenje.selectPopups.obrJedinica.searchPlaceholder")}
    />

    <SelectDialog
      isOpen={isOJRadnikaPopupOpen}
      onClose={() => setIsOJRadnikaPopupOpen(false)}
      items={mockOJRadnika}
      onSelect={handleOJRadnikaSelect}
      title={t("prijava.rasporedjenje.selectPopups.oj.title")}
      searchPlaceholder={t("prijava.rasporedjenje.selectPopups.oj.searchPlaceholder")}
    /> */}
    </>
  );
}
