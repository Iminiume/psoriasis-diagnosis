export const Consts = Object.freeze({
  title: "لطفا به سوالات زیر جواب دهید",
  subTitle: "می‌توانید برای هر سوال، چند گزینه را انتخاب کنید.",
  continue: "ادامه",
  notDetermined: "Undetermined Psoriasis Type",
  notDeterminedFa: "نوع پسیوریازیس ناشناخته است",
  systemRecommendation:
    "پیشنهاد سامانه برای تشخیص نوع بیماری بیمار احتمالا نوع",
  is: "است",
  noPatientError:
    "پرونده ای برای بیمار ساخته نشده، لطفا بعد از تشکیل پرونده به صفحه ی تشخیص نوع بیماری برگردید",
  shouldCheckedByDoctor:
    "تشخیص نوع بیماری بر عهده پزشک است؛ ضمنا اطلاعات شما برای پزشک ارسال خواهد شد ، پس از تایید پزشک و اعلام نوع نهایی بیماری، شما می توانید به پنل دریافت توصیه دسترسی داشته باشید.",
});

export const FormItems = [
  {
    title:
      "پلاک های پسوریازیس در کجای بدن بیمار قرار دارند؟ (همه مواردی که اعمال می شوند را بررسی کنید)",
    items: [
      { title: "پوست سر", value: "sculp" },
      { title: "صورت", value: "face" },
      { title: "آرنج", value: "elbow" },
      { title: "زانو", value: "knees" },
      { title: "تنه", value: "trunk" },
      { title: "کف دست و پا", value: "palms and soles" },
      {
        title: "چین های پوستی (مانند زیر سینه، زیر بغل، کشاله ران)",
        value: "skin folds",
      },
      { title: "ناخن", value: "nails" },
    ],
    value: "location",
  },

  {
    title: "اندازه معمولی پلاک های پسوریازیس بیمار چقدر است؟",
    items: [
      { title: "کوچک (کمتر از 1 سانتی متر، مانند قطرات)", value: "small" },
      { title: "متوسط (1-3 سانتی متر)", value: "medium" },
      { title: "بزرگ (بیشتر از 3 سانتی متر)", value: "large" },
      { title: "گسترده (پوشش مناطق وسیعی از بدن)", value: "extensive" },
      {
        title: "موضعی (مناطق خاص مانند کف دست، کف پا یا پوست سر)",
        value: "localized",
      },
    ],
    value: "size",
  },

  {
    title: "درجه خارش پلاک های پسوریازیس بیمار را چگونه ارزیابی می کنید؟",
    items: [
      { title: "بدون خارش", value: "no" },
      { title: "خارش خفیف", value: "mild" },
      { title: "خارش متوسط", value: "moderate" },
      { title: "خارش شدید", value: "severe" },
    ],
    value: "itchiness",
  },

  {
    title: "درجه قرمزی پلاک های پسوریازیس بیمار را چگونه توصیف می کنید؟",
    items: [
      { title: "بدون قرمزی", value: "no" },
      { title: "قرمزی خفیف (صورتی)", value: "mild" },
      { title: "قرمزی متوسط (قابل توجه اما نه شدید)", value: "moderate" },
      { title: "قرمزی شدید (قرمز روشن، ملتهب)", value: "severe" },
    ],
    value: "redness",
  },

  {
    title:
      "آیا بیمار با هر یک از شرایط همراه زیر تشخیص داده شده است؟ (همه مواردی که اعمال می شوند را بررسی کنید)",
    items: [
      { title: "آرتریت پسوریاتیک", value: "psoriatic arthritis" },
      {
        title:
          "بیماری های قلبی عروقی (به عنوان مثال، بیماری قلبی، فشار خون بالا)",
        value: "cardiovascular diseases",
      },
      {
        title: "سندرم متابولیک (به عنوان مثال، چاقی، دیابت، دیس لیپیدمی)",
        value: "metabolic syndrome",
      },
      { title: "افسردگی یا اضطراب", value: "depression" },
      {
        title:
          "بیماری های التهابی روده (به عنوان مثال، بیماری کرون، کولیت اولسراتیو)",
        value: "inflammatory bowel disease",
      },
      { title: "اختلالات تیروئید", value: "thyroid disorders" },
      {
        title: "عفونت های مکرر (مانند عفونت گلو استرپتوکوک)",
        value: "frequent infections",
      },
      { title: "عفونت های مخمری", value: "yeast infections" },
    ],
    value: "associated_conditions",
  },

  {
    title:
      "بیمار چه علائمی با پسوریازیس خود تجربه کرده است؟  (همه مواردی که اعمال می شوند را بررسی کنید)",
    items: [
      {
        title: "پلاک های قرمز و برجسته با فلس های نقره ای",
        value: "red, raised plaques with silver scales",
      },
      {
        title: "ضایعات کوچک و قطره ای شکل",
        value: "small, droplet-shaped lesions",
      },
      {
        title: "لکه های صاف و قرمز در چین های پوستی",
        value: "flat, red spots in skin folds",
      },
      {
        title: "جوش های سفید روی پوست قرمز",
        value: "white pustules on red skin",
      },
      {
        title: "قرمزی و لایه برداری گسترده پوست",
        value: "widespread redness and peeling of the skin",
      },
      {
        title: "سوراخ شدن، تغییر رنگ یا ضخیم شدن ناخن",
        value: "pitting, discoloration, or thickening of the nails",
      },
      {
        title: "خارش و پوسته پوسته شدن شدید روی پوست سر",
        value: "intense itching and flaking on the scalp",
      },
      {
        title: "پوست ضخیم و قرمز روی کف دست و کف پا",
        value: "thickened, red skin on palms and soles",
      },
    ],
    value: "symptoms",
  },
];
