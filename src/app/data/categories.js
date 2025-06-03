import Iphone from "../assets/iphone.jpg";
import Plus from "../assets/plus.jpg";
import Serie from "../assets/serie.jpg";
import Music from "../assets/music.jpg";
import Spotify from "../assets/spotify.jpg"
const categories = [
  {
    title: "Music & Audio",
    titleAr: "موسيقى و صوتيات",
    subtitle: "Sound and Media Files",
    subtitleAr: "ملفات صوتية و وسائط",
    imageUrl: Music,
    bgColor: "from-green-400 to-green-600",
    productCount: 2,
    products: [
      {
        name: "Spotify Premium",
        shortDescription: "نوفر لك اشتراك سبوتيفاي اصلي 100% بافضل الاسعار",
        description: [
          "اشتراك اصلي رسمي قانوني 100%",
          "عدم مواجهة تقطيعات",
          "اشتراك على حسابك الخاص مباشرة",
          "ضمان كامل المدة",
          "تفعيل سريع لا يتجاوز 10 دقائق",
          "✔️ موسيقى بدون إعلانات",
          "✔️ تشغيل بدون إنترنت",
          "✔️ جودة صوت ممتازة",
          "✔️ تشغيل غير محدود لأي أغنية",
        ],
        pricing: [
          { duration: "1 mois avec votre email", price: "600 DA" },
          { duration: "2 mois avec votre email", price: "1000 DA" },
          { duration: "3 mois avec votre email", price: "1400 DA" },
          { duration: "6 mois avec votre email + cadeaux", price: "2200 DA" },
          { duration: "12 mois avec votre email + cadeaux", price: "3000 DA" },
        ],
        notes:
          "Spotify هي واحدة من أكبر منصات الموسيقى في العالم، تقدم لك الوصول إلى ملايين الأغاني، الألبومات، والبودكاست من مختلف أنحاء العالم. مع اشتراك Spotify Premium، تستمتع بتجربة خالية من الإعلانات، وجودة صوت عالية، وإمكانية تحميل وتشغيل الأغاني بدون إنترنت.",
        price: "600 DA - 3000 DA",
        image: Music,
      },
    ],
  },
  {
    title: "Movies & Series",
    titleAr: "افلام و مسلسلات",
    subtitle: "Entertainment Content",
    subtitleAr: "محتوى ترفيهي",
    imageUrl: Serie,
    bgColor: "from-blue-400 to-blue-600",
    productCount: 6,
    products: [
      {
        name: "Netflix HD",
        description: "1-month subscription to Netflix HD.",
        price: "7€",
        image: Serie
      },
      {
        name: "Shahid VIP",
        description: "Access to Arabic series and movies.",
        price: "5€",
        image: Serie
      },
      {
        name: "Anime Bundle",
        description: "Top trending anime episodes.",
        price: "4€",
        image: Serie
      },
      {
        name: "Marvel Collection",
        description: "Latest Marvel movies collection.",
        price: "10€",
        image: Serie
      },
      {
        name: "Documentary Pack",
        description: "Educational and inspiring films.",
        price: "6€",
        image: Serie
      },
      {
        name: "Series Sub",
        description: "Access to drama and thriller shows.",
        price: "3€",
        image: Serie
      }
    ],
  },
  {
    title: "Social Plus Subscriptions",
    titleAr: "اشتراكات سوشيال بلس",
    subtitle: "Online Services",
    subtitleAr: "خدمات عبر الإنترنت",
    imageUrl: Plus,
    bgColor: "from-cyan-400 to-cyan-600",
    productCount: 1,
    products: [
      {
        name: "Snapchat Plus",
        description: "1-month Snapchat+ subscription.",
        price: "2.5€",
        image: Plus
      }
    ],
  },
  {
    title: "Apple Subscriptions (iPhone)",
    titleAr: "اشتراكات التفاحة (ايفون)",
    subtitle: "iOS Premium Content",
    subtitleAr: "محتوى مدفوع للآيفون",
    imageUrl: Iphone,
    bgColor: "from-purple-400 to-purple-600",
    productCount: 2,
    products: [
      {
        name: "Apple Music",
        description: "1-month Apple Music subscription.",
        price: "4€",
        image: Iphone
      },
      {
        name: "iCloud Storage",
        description: "50GB iCloud plan for 1 month.",
        price: "1€",
        image: Iphone
      }
    ],
  }
];

export default categories;
