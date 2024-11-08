const PsoriazisTypes = [
  { value: "Inverse Psoriasis", title: "معکوس" },
  { value: "Plaque Psoriasis", title: "پلاکی" },
  { value: "Guttate Psoriasis", title: "خالدار" },
  { value: "Pustular Psoriasis", title: "تاولی" },
  { value: "Erythrodermic Psoriasis", title: "اریترودرمیک" },
  { value: "Nail Psoriasis", title: "ناخن" },
  { value: "Undetermined Psoriasis", title: "نامعلوم" },
];

export const psoriazisType = (data) => {
  const matchedType = PsoriazisTypes.find((type) =>
    data.toLowerCase().includes(type.value.toLowerCase()),
  );
  return matchedType ? matchedType.title : null;
};
