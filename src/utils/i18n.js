// src/utils/i18n.js
export const translations = {
  en: {
    home: "Home",
    about: "About",
    features: "Products",
    blog: "Blog",
    faq: "FAQ",
    pricing: "Pricing",
    community: "Community",
    team: "Our Team",
    contact: "Contact",
    more: "More",
    welcome: "Welcome to Zehna",
    description: "Your AI-powered psychological super app",
    aboutTitle: "About Zehna",
    aboutDescription: "Zehna is an AI-powered psychological super app designed to provide accurate psychological tools and interpretations.",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
    copyright: "Zehna. All rights reserved.",
    statisticsTitle: "Zehna in Numbers",
    activeUsers: "Active Users",
    usersDescription: "Psychology enthusiasts worldwide",
    chartsGenerated: "Tools Generated",
    chartsDescription: "Psychological tools created daily",
    zodiacSigns: "Our Products",
    signsDescription: "Detailed solutions for all",
    accuracy: "Accuracy",
    accuracyDescription: "Precision in calculations",
    statisticsImageAlt: "Psychological Statistics",
    stayConnectedTitle: "Stay Connected",
    stayConnectedDescription: "Subscribe to our newsletter for psychological insights, updates, and exclusive content",
    emailPlaceholder: "Your email address",
    subscribeButton: "Subscribe",
    privacyNotice: "We respect your privacy. Unsubscribe at any time.",
    signUp: "Sign Up"
  },
  fa: {
    home: "خانه",
    about: "درباره",
    features: "محصولات",
    blog: "بلاگ",
    faq: "سؤالات متداول",
    pricing: "قیمت‌گذاری",
    community: "جامعه",
    team: "تیم ما",
    contact: "تماس",
    more: "بیشتر",
    welcome: "به ذهنا خوش آمدید",
    description: "نرم افزار روان‌شناسی هوش مصنوعی شما",
    aboutTitle: "درباره ذهنا",
    aboutDescription: "ذهنا یک نرم افزار روان‌شناسی هوش مصنوعی است که برای ارائه ابزارها و تفسیرهای دقیق روان‌شناسی طراحی شده است.",
    privacyTitle: "سیاست حفظ حریم خصوصی",
    termsTitle: "شرایط استفاده از خدمات",
    copyright: "ذهنا™. تمامی حقوق محفوظ است.",
    statisticsTitle: "ذهنا در اعداد",
    activeUsers: "کاربران فعال",
    usersDescription: "عاشقان روان‌شناسی در سراسر جهان",
    chartsGenerated: "ابزارهای تولید شده",
    chartsDescription: "ابزارهای روان‌شناسی به طور روزانه ایجاد می‌شوند",
    zodiacSigns: "محصولات ما",
    signsDescription: "راهکارهای دقیق برای همه",
    accuracy: "دقت",
    accuracyDescription: "دقت در محاسبات",
    statisticsImageAlt: "آمار روان‌شناسی",
    stayConnectedTitle: "در ارتباط باشید",
    stayConnectedDescription: "برای دریافت بینش‌های روان‌شناسی، به‌روزرسانی‌ها و محتوای اختصاصی در خبرنامه ما عضو شوید",
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