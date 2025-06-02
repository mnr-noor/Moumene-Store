import Iphone from "../assets/iphone.jpg";
import Plus from "../assets/plus.jpg";
import Serie from "../assets/serie.jpg";
import Music from "../assets/music.jpg";

const categories = [
  {
    title: "Music & Audio",
    titleAr: "موسيقى و صوتيات",
    subtitle: "Sound and Media Files",
    subtitleAr: "ملفات صوتية و وسائط",
    imageUrl: Music,
    bgColor: "from-green-400 to-green-600",
    productCount: 24
  },
  {
    title: "Movies & Series",
    titleAr: "افلام و مسلسلات",
    subtitle: "Entertainment Content",
    subtitleAr: "محتوى ترفيهي",
    imageUrl: Serie,
    bgColor: "from-blue-400 to-blue-600",
    productCount: 30
  },
  {
    title: "Social Plus Subscriptions",
    titleAr: "اشتراكات سوشيال بلس",
    subtitle: "Online Services",
    subtitleAr: "خدمات عبر الإنترنت",
    imageUrl: Plus,
    bgColor: "from-cyan-400 to-cyan-600",
    productCount: 15
  },
  {
    title: "Apple Subscriptions (iPhone)",
    titleAr: "اشتراكات التفاحة (ايفون)",
    subtitle: "iOS Premium Content",
    subtitleAr: "محتوى مدفوع للآيفون",
    imageUrl: Iphone,
    bgColor: "from-purple-400 to-purple-600",
    productCount: 20
  }
];

export default categories;
