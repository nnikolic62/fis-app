const sifarniciAllKey = ["sifarnici"] as const;

export const sifarniciKeys = {
  all: sifarniciAllKey,
  vera: [...sifarniciAllKey, "vera"] as const,
  staz: [...sifarniciAllKey, "staz"] as const,
  sprema: [...sifarniciAllKey, "sprema"] as const,
  opstina: [...sifarniciAllKey, "opstina"] as const,
  nacija: [...sifarniciAllKey, "nacija"] as const,
  kategorija: [...sifarniciAllKey, "kategorija"] as const,
  slava: [...sifarniciAllKey, "slava"] as const,
} as const;