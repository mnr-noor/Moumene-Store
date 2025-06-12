import Iphone from "../assets/iphone.jpg";
import Plus from "../assets/plus.jpg";
import Serie from "../assets/serie.jpg";
import Music from "../assets/music.jpg";
import Spotify from "../assets/spotify.jpg"
import Applemusic from "../assets/applemusic.jpg"
import Shahid from "../assets/shahid.jpg"
import Prime from "../assets/prime.jpg"
import ONS from "../assets/osn.jpg"
import Netflix from "../assets/netflix.jpg"
import DisneyPlus from "../assets/disney.jpg"
import Crunchyroll from "../assets/crunshyroll.jpg"
import Icloud from "../assets/icloud.jpg"
import AppleOne from "../assets/appleone.jpg"
import SnapchatPlus from "../assets/snapchat.jpg"
const categories = [
  {
    title: "موسيقى و صوتيات",
    subtitle: "ملفات صوتية و وسائط",
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
          { duration: " mois avec votre email 1", price: "600 DA" },
          { duration: "2 mois avec votre email", price: "1000 DA" },
          { duration: "3 mois avec votre email", price: "1400 DA" },
          { duration: "6 mois avec votre email + cadeaux", price: "2200 DA" },
          { duration: "12 mois avec votre email + cadeaux", price: "3000 DA" },
        ],
        notes:
          "Spotify هي واحدة من أكبر منصات الموسيقى في العالم، تقدم لك الوصول إلى ملايين الأغاني، الألبومات، والبودكاست من مختلف أنحاء العالم. مع اشتراك Spotify Premium، تستمتع بتجربة خالية من الإعلانات، وجودة صوت عالية، وإمكانية تحميل وتشغيل الأغاني بدون إنترنت.",
        price: "600 DA - 3000 DA",
        image: Spotify,
      },
      {
        name: "Apple Music",
        shortDescription: "نوفر لك اشتراك Apple Music اصلي 100% بافضل الاسعار",
        description: [
          "اشتراك اصلي رسمي قانوني 100%",
          "عدم مواجهة تقطيعات",
          "اشتراك على حسابك الخاص مباشرة",
          "ضمان كامل المدة",
          "تفعيل سريع لا يتجاوز 10 دقائق",
          "✔️ محتوى موسيقي ضخم",
          "✔️ صوت بجودة عالية وميزة Dolby Atmos",
          "✔️ متوافق تمامًا مع أجهزة Apple",
          "✔️ إمكانية التحميل والتشغيل بدون نت"
        ],
        pricing: [
          { duration: "3 mois sur votre compte", price: "1200 DA" },
          { duration: "6 mois sur votre compte", price: "2100 DA" },
          { duration: "12 mois sur votre compte", price: "4000 DA" }
        ],
        notes:
          "Apple Music هي خدمة الموسيقى الرسمية من Apple، تتيح لك الوصول إلى مكتبة ضخمة تضم أكثر من 100 مليون أغنية. تدمج بسلاسة مع أجهزتك، وتدعم كلمات الأغاني، الصوت المكاني (Spatial Audio)، وتجربة استماع مخصصة ومتكاملة.",
        price: "1200 DA - 4000 DA",
        image: Applemusic
      }
      
    ],
  },
  {
    title: "افلام و مسلسلات",
    subtitle: "محتوى ترفيهي",
    imageUrl: Serie,
    bgColor: "from-blue-400 to-blue-600",
    productCount: 6,
    products: [

      {
        name: "Shahid VIP",
        shortDescription: "نوفر لك اشتراك شاهد في آي بي اصلي 100% بافضل الاسعار",
        description: [
          "حساب اصلي رسمي قانوني 100%",
          "عدم مواجهة تقطيعات",
          "بروفايل باسمك الخاص و بكود بين خاص بك ايضا",
          "ضمان كامل المدة",
          "تفعيل سريع لا يتجاوز 10 دقائق",
          "✔️ محتوى عربي وخليجي حصري",
          "✔️ بث مباشر للمباريات والبرامج",
          "✔️ مشاهدة بدون إعلانات",
          "✔️ جودة Full HD و 4K",
        ],
        pricing: [
          { duration: "1 mois – 1 écran", price: "500 DA" },
          { duration: "1 mois – compte avec votre email (20 écrans)", price: "1950 DA" },
          { duration: "3 mois – 1 écran", price: "1200 DA" },
          { duration: "3 mois – compte avec votre email (20 écrans)", price: "3300 DA" },
          { duration: "12 mois – 1 écran", price: "3000 DA" },
          { duration: "12 mois – compte avec votre email (20 écrans)", price: "7500 DA" },
        ],
        notes:
          "Shahid VIP هي منصة البث العربية الأولى، تقدم محتوى حصري من الأفلام، المسلسلات، البرامج، والمباريات المباشرة. استمتع بأحدث الإنتاجات العربية والعالمية بجودة عالية وبدون إعلانات.",
        price: "500 DA - 7500 DA",
        image: Shahid, 
      },
      {
        name: "Prime Video",
        shortDescription: "نوفر لك اشتراك برايم فيديو اصلي 100% بافضل الاسعار",
        description: [
          "حساب اصلي رسمي قانوني 100%",
          "عدم مواجهة تقطيعات",
          "بروفايل باسمك الخاص و بكود بين خاص بك ايضا",
          "ضمان كامل المدة",
          "تفعيل سريع لا يتجاوز 10 دقائق",
          "✔️ محتوى عالمي متنوع",
          "✔️ إنتاجات أصلية قوية",
          "✔️ ترجمة عربية متوفرة",
          "✔️ دعم لأكثر من جهاز واحد",
        ],
        pricing: [
          { duration: "1 mois – 1 écran", price: "300 DA" },
          { duration: "1 mois – 2 écrans", price: "500 DA" },
          { duration: "1 mois – compte sur votre email (6 écrans)", price: "1000 DA" },
      
          { duration: "2 mois – 1 écran", price: "500 DA" },
          { duration: "2 mois – 2 écrans", price: "800 DA" },
          { duration: "2 mois – compte sur votre email (6 écrans)", price: "1500 DA" },
      
          { duration: "3 mois – 1 écran", price: "800 DA" },
          { duration: "3 mois – 2 écrans", price: "1000 DA" },
          { duration: "3 mois – compte sur votre email (6 écrans)", price: "2000 DA" },
      
          { duration: "6 mois – 1 écran", price: "1200 DA" },
          { duration: "6 mois – 2 écrans", price: "1600 DA" },
          { duration: "6 mois – compte sur votre email (6 écrans)", price: "3000 DA" },
      
          { duration: "12 mois – 1 écran", price: "1700 DA" },
          { duration: "12 mois – 2 écrans", price: "2400 DA" },
          { duration: "12 mois – compte sur votre email (6 écrans)", price: "4500 DA" },
        ],
        notes:
          "Amazon Prime Video خدمة بث تقدم أفلامًا ومسلسلات عالمية، بما في ذلك إنتاجات أصلية حصرية (Prime Originals) بجودة عالية ودعم لعدة أجهزة.",
        price: "300 DA - 4500 DA",
        image: Prime, // Replace with actual image import
      },
      {
        name: "OSN+",
        shortDescription: "نوفر لك اشتراك OSN+ اصلي 100% بافضل الاسعار",
        description: [
          "حساب اصلي رسمي قانوني 100%",
          "عدم مواجهة تقطيعات",
          "جودة المشاهدة ULTRA FULL HD 4K",
          "بروفايل باسمك الخاص و بكود بين خاص بك ايضا",
          "ضمان كامل المدة",
          "تفعيل سريع لا يتجاوز 10 دقائق",
          "✔️ أحدث مسلسلات HBO",
          "✔️ محتوى عربي وعالمي",
          "✔️ ترجمة عربية احترافية",
          "✔️ جودة عالية حتى 4K",
        ],
        pricing: [
          { duration: "1 mois – 1 écran", price: "600 DA" },
          { duration: "12 mois – 1 écran", price: "3000 DA" },
        ],
        notes:
          "OSN+ منصة بث تقدم محتوى عالمي حصري من HBO، Paramount، وشبكات عالمية أخرى، إلى جانب إنتاجات عربية مميزة. مثالية لعشاق المسلسلات الأجنبية والأفلام الجديدة.",
        price: "600 DA - 3000 DA",
        image: ONS, // Replace with actual image import
      },
      {
        name: "Netflix",
        shortDescription: "نوفر لك اشتراك نتفلكس اصلي 100% بافضل الاسعار",
        description: [
          "حساب اصلي رسمي قانوني 100%",
          "عدم مواجهة تقطيعات",
          "بروفايل باسمك الخاص و بكود بين خاص بك ايضا",
          "اشتراك ULTRA FULL HD 4K",
          "ضمان كامل المدة",
          "تفعيل سريع لا يتجاوز 10 دقائق",
          "✔️ مكتبة ضخمة ومتجددة باستمرار",
          "✔️ مسلسلات وأفلام أصلية حصرية",
          "✔️ دعم عدة ملفات شخصية لكل عائلة",
          "✔️ مشاهدة بجودة تصل إلى 4K",
        ],
        pricing: [
          { duration: "1 mois – 1 écran", price: "700 DA" },
          { duration: "1 mois – 2 écrans", price: "1400 DA" },
          { duration: "1 mois – 3 écrans", price: "2000 DA" },
          { duration: "1 mois – 4 écrans", price: "2600 DA" },
          { duration: "1 mois – 5 écrans", price: "3000 DA" },
      
          { duration: "2 mois – 1 écran", price: "1200 DA" },
          { duration: "2 mois – 2 écrans", price: "2400 DA" },
          { duration: "2 mois – 3 écrans", price: "3400 DA" },
          { duration: "2 mois – 4 écrans", price: "4400 DA" },
          { duration: "2 mois – 5 écrans", price: "5000 DA" },
      
          { duration: "3 mois – 1 écran", price: "1700 DA" },
          { duration: "3 mois – 2 écrans", price: "3400 DA" },
          { duration: "3 mois – 3 écrans", price: "4900 DA" },
          { duration: "3 mois – 4 écrans", price: "6200 DA" },
          { duration: "3 mois – 5 écrans", price: "7300 DA" },
      
          { duration: "6 mois – 1 écran", price: "3000 DA" },
          { duration: "6 mois – 2 écrans", price: "6000 DA" },
          { duration: "6 mois – 3 écrans", price: "8500 DA" },
          { duration: "6 mois – 4 écrans", price: "11000 DA" },
          { duration: "6 mois – 5 écrans", price: "13000 DA" },
      
          { duration: "12 mois – 1 écran", price: "4500 DA" },
          { duration: "12 mois – 2 écrans", price: "9000 DA" },
          { duration: "12 mois – 3 écrans", price: "13000 DA" },
          { duration: "12 mois – 4 écrans", price: "16500 DA" },
          { duration: "12 mois – 5 écrans", price: "19500 DA" },
        ],
        notes:
          "Netflix هي أشهر منصة بث عالمية، تقدم مكتبة ضخمة من الأفلام، المسلسلات، الوثائقيات، والبرامج الأصلية. مع اشتراك Netflix، تحصل على تجربة ترفيهية متجددة باستمرار، بجودة عالية ومناسبة لكل أفراد العائلة.",
        price: "700 DA - 19500 DA",
        image: Netflix, 
      },
      {
        name: "Disney+",
        shortDescription: "نوفر لك اشتراك ديزني بلس اصلي 100% بافضل الاسعار",
        description: [
          "حساب اصلي رسمي قانوني 100%",
          "عدم مواجهة تقطيعات",
          "بروفايل باسمك الخاص و بكود بين خاص بك ايضا",
          "ضمان كامل المدة",
          "تفعيل سريع لا يتجاوز 10 دقائق",
          "✔️ محتوى عائلي وآمن",
          "✔️ أفلام ومسلسلات ديزني الأصلية",
          "✔️ عروض حصرية من مارفل وستار وورز",
          "✔️ دعم للترجمة والعرض بجودة 4K",
        ],
        pricing: [
          { duration: "1 mois – 1 écran", price: "500 DA" },
          { duration: "1 mois – compte sur votre email (7 écrans)", price: "2700 DA" },
          { duration: "12 mois – 1 écran", price: "4000 DA" },
          { duration: "12 mois – compte sur votre email (7 écrans)", price: "20000 DA" },
        ],
        notes:
          "Disney+ هي منصة ديزني الرسمية، تعرض محتوى حصري من Disney، Pixar، Marvel، Star Wars، وNational Geographic. مناسبة للعائلات ومحبي الأفلام الأسطورية.",
        price: "500 DA - 20000 DA",
        image: DisneyPlus, 
      },
      {
        name: "Crunchyroll",
        shortDescription: "نوفر لك اشتراك كرانشي رول ميجا فان اصلي 100% بافضل الاسعار",
        description: [
          "حساب اصلي رسمي قانوني 100%",
          "عدم مواجهة تقطيعات",
          "بروفايل باسمك الخاص و بكود بين خاص بك ايضا",
          "اشتراك ميجا فان",
          "ضمان كامل المدة",
          "تفعيل سريع لا يتجاوز 10 دقائق",
          "✔️ مكتبة أنمي ضخمة",
          "✔️ حلقات جديدة يوميًا",
          "✔️ ترجمة عربية وإنجليزية",
          "✔️ جودة HD وخيارات متعددة",
        ],
        pricing: [
          { duration: "1 mois – 1 écran", price: "500 DA" },
          { duration: "1 mois – compte sur votre email (5 écrans)", price: "1300 DA" },
          { duration: "12 mois – 1 écran", price: "2000 DA" },
          { duration: "12 mois – compte sur votre email (5 écrans)", price: "7500 DA" },
        ],
        notes:
          "Crunchyroll هي الوجهة الأولى لمحبي الأنمي، تقدم آلاف الحلقات من أشهر الأنميات مترجمة وبدون إعلانات، مع عرض الحلقات الجديدة بالتزامن مع اليابان.",
        price: "500 DA - 7500 DA",
        image: Crunchyroll,
      }
      
      
      
      





      
    ],
  },
  {
    title: "اشتراكات سوشيال بلس",
    subtitle: "خدمات عبر الإنترنت",
    imageUrl: Plus,
    bgColor: "from-cyan-400 to-cyan-600",
    productCount: 1,
    products: [
      {
        name: "Snapchat+",
        shortDescription: "نوفر لك اشتراك Snapchat Plus اصلي 100% بدون الحاجة إلى كلمة السر",
        description: [
          "حسابك يبقى آمن 100% بدون طلب كلمة السر",
          "تفعيل سريع لا يتجاوز 10 دقائق",
          "ضمان كامل المدة",
          "اشتراك مع مزايا حصرية داخل Snapchat",
          "يدعم أجهزة Android و iPhone بدون تقطيعات أو مشاكل",
          "التفعيل بثلاث طرق حسب نوع جهازك",
        ],
        pricing: [
          { duration: "1 mois (تفعيل على Android)", price: "500 DA" },
          { duration: "2 mois (تفعيل على Android)", price: "800 DA" },
          { duration: "3 mois (تفعيل على Android)", price: "1300 DA" },
          { duration: "12 mois (تفعيل على Android)", price: "2700 DA" },
      
          { duration: "1 mois (تفعيل مباشر على iPhone)", price: "800 DA" },
          { duration: "2 mois (تفعيل مباشر على iPhone)", price: "1100 DA" },
          { duration: "3 mois (تفعيل مباشر على iPhone)", price: "1500 DA" },
          { duration: "6 mois (تفعيل مباشر على iPhone)", price: "2200 DA" },
          { duration: "12 mois (تفعيل مباشر على iPhone)", price: "3300 DA" },
      
          { duration: "3 mois (تفعيل عبر اليوزر فقط)", price: "1800 DA" },
          { duration: "6 mois (تفعيل عبر اليوزر فقط)", price: "3000 DA" },
          { duration: "12 mois (تفعيل عبر اليوزر فقط)", price: "5500 DA" },
        ],
        notes:
          "اشتراك Snapchat+ يقدم ميزات حصرية مثل تخصيص الواجهة، معرفة من شاهد قصتك أكثر من مرة، أولويات الردود، شارات خاصة، والمزيد، مع ضمان تفعيل آمن وسريع بدون الحاجة لكلمة السر.",
        price: "500 DA - 5500 DA",
        image: SnapchatPlus, // Replace with your actual image import
      }
      
      
    ],
  },
  {
    title: "اشتراكات التفاحة (ايفون)",
    subtitle: "محتوى مدفوع للآيفون",
    imageUrl: Iphone,
    bgColor: "from-purple-400 to-purple-600",
    productCount: 2,
    products: [
      {
        name: "iCloud+",
        shortDescription: "نوفر لك اشتراك ايكلود + اصلي 100% بافضل الاسعار",
        description: [
          "اشتراك اصلي رسمي قانوني 100%",
          "عدم مواجهة تقطيعات",
          "اشتراك على حسابك الخاص مباشرة",
          "ضمان كامل المدة",
          "تفعيل سريع لا يتجاوز 10 دقائق",
          "✔️ مساحة تخزين سحابية آمنة",
          "✔️ حماية خصوصيتك بميزات متقدمة",
          "✔️ مزامنة فورية بين جميع أجهزتك",
          "✔️ مشاركة التخزين مع العائلة",
        ],
        pricing: [
          { duration: "1 mois", price: "600 DA" },
          { duration: "2 mois", price: "800 DA" },
          { duration: "3 mois", price: "1000 DA" },
          { duration: "6 mois", price: "1800 DA" },
          { duration: "12 mois", price: "3300 DA" },
        ],
        notes:
          "iCloud+ هي خدمة التخزين السحابي من Apple، تتيح لك الاحتفاظ بصورك، ملفاتك، وجهات اتصالك بشكل آمن ومزامنتها عبر كل أجهزتك. مع iCloud+ تحصل على مزايا إضافية مثل إخفاء البريد الإلكتروني، Private Relay، ودعم للعائلة.",
        price: "600 DA - 3300 DA",
        image: Icloud, // Replace with actual image import
      },
      {
        name: "Apple One",
        shortDescription: "نوفر لك اشتراك Apple One اصلي 100% بافضل الاسعار",
        description: [
          "اشتراك اصلي رسمي قانوني 100%",
          "عدم مواجهة تقطيعات",
          "اشتراك على حسابك الخاص مباشرة",
          "ضمان كامل المدة",
          "تفعيل سريع لا يتجاوز 10 دقائق",
          "✔️ Apple Music – أكثر من 100 مليون أغنية بدون إعلانات",
          "✔️ Apple TV+ – محتوى أصلي من Apple",
          "✔️ iCloud+ – مساحة تخزين سحابية آمنة",
          "✔️ Apple Arcade – أكثر من 200 لعبة بدون إعلانات",
          "✔️ (اختياري) Apple Fitness+ – تمارين رياضية احترافية",
          "✔️ توفير مالي مقارنة بالاشتراكات الفردية",
          "✔️ مشاركة مع العائلة حتى 6 أشخاص",
          "✔️ سهولة في الإدارة والفوترة",
        ],
        pricing: [
          { duration: "3 mois renouvelable", price: "1200 DA" },
        ],
        notes:
          "Apple One هي باقة اشتراك شاملة من Apple، تجمع بين أشهر خدماتها مثل Apple Music، Apple TV+، iCloud+، Apple Arcade، وApple Fitness+ في اشتراك واحد بسعر أقل، ومناسبة للعائلات.",
        price: "1200 DA",
        image: AppleOne, // Replace with actual image import
      },
      
      
    ],
  }
];

export default categories;
