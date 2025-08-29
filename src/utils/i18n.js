// src/utils/i18n.js
export const translations = {
  en: {
    home: "Home",
    about: "About",
    features: "Features",
    blog: "Blog",
    faq: "FAQ",
    pricing: "Pricing",
    community: "Community",
    team: "Team",
    contact: "Contact",
    more: "More",
    welcome: "Welcome to Astrolabe",
    description: "Your open-source astrology tool",
    aboutTitle: "About Astrolabe",
    aboutDescription: "Astrolabe is an open-source astrology tool designed to provide accurate astrological calculations and interpretations.",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
    copyright: "Astrolabe. All rights reserved.",
    statisticsTitle: "Astrolabe in Numbers",
    activeUsers: "Active Users",
    usersDescription: "Astrology enthusiasts worldwide",
    chartsGenerated: "Charts Generated",
    chartsDescription: "Natal charts created daily",
    zodiacSigns: "Zodiac Signs",
    signsDescription: "Detailed interpretations for all",
    accuracy: "Accuracy",
    accuracyDescription: "Precision in calculations",
    statisticsImageAlt: "Astrological Statistics",
    stayConnectedTitle: "Stay Connected",
    stayConnectedDescription: "Subscribe to our newsletter for astrological insights, updates, and exclusive content",
    emailPlaceholder: "Your email address",
    subscribeButton: "Subscribe",
    privacyNotice: "We respect your privacy. Unsubscribe at any time.",
    signUp: "Sign Up"
  },
  fa: {
    home: "خانه",
    about: "درباره",
    features: "ویژگی‌ها",
    blog: "بلاگ",
    faq: "سؤالات متداول",
    pricing: "قیمت‌گذاری",
    community: "جامعه",
    team: "تیم",
    contact: "تماس",
    more: "بیشتر",
    welcome: "به اسطرلاب خوش آمدید",
    description: "ابزار منجمی متن‌باز شما",
    aboutTitle: "درباره اسطرلاب",
    aboutDescription: "اسطرلاب یک ابزار منجمی متن‌باز است که برای ارائه محاسبات و تفسیرهای دقیق منجمی طراحی شده است.",
    privacyTitle: "سیاست حفظ حریم خصوصی",
    termsTitle: "شرایط استفاده از خدمات",
    copyright: "اسطرلاب. تمامی حقوق محفوظ است.",
    statisticsTitle: "اسطرلاب در اعداد",
    activeUsers: "کاربران فعال",
    usersDescription: "عاشقان منجمی در سراسر جهان",
    chartsGenerated: "چارت‌های تولید شده",
    chartsDescription: "چارت‌های ناتال به طور روزانه ایجاد می‌شوند",
    zodiacSigns: "نشان‌های زودیاک",
    signsDescription: "تفسیرهای دقیق برای همه",
    accuracy: "دقت",
    accuracyDescription: "دقت در محاسبات",
    statisticsImageAlt: "آمار منجمی",
    stayConnectedTitle: "در ارتباط باشید",
    stayConnectedDescription: "برای دریافت بینش‌های منجمی، به‌روزرسانی‌ها و محتوای اختصاصی در خبرنامه ما عضو شوید",
    emailPlaceholder: "آدرس ایمیل شما",
    subscribeButton: "اشتراک",
    privacyNotice: "ما به حریم خصوصی شما احترام می‌گذاریم. در هر زمان می‌توانید لغو اشتراک کنید.",
    signUp: "ثبت نام"
  }
};

export function getTranslation(lang, key) {
  return translations[lang]?.[key] || translations.en[key] || key;
}

export function isRTL(lang) {
  return lang === 'fa'; // Add other RTL languages here if needed
}