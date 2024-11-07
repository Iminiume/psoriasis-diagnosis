export const PsoriazisTypes = [
  { value: "Inverse Psoriasis", title: "معکوس" },
  { value: "Plaque Psoriasis", title: "پلاکی" },
  { value: "Guttate Psoriasis", title: "خالدار" },
  { value: "Pustular Psoriasis", title: "تاولی" },
  { value: "Erythrodermic Psoriasis", title: "اریترودرمیک" },
  { value: "Nail Psoriasis", title: "ناخن" },
];

export const psoriazisType = (data) =>
  PsoriazisTypes.find((type) => data.includes(type.value));
