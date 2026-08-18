import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Building,
  Award,
  BookOpen,
  Globe,
  Trophy,
  Laptop,
  Compass,
  Sparkles,
  Layers,
  Palette,
  Target,
  Search,
  Languages,
  ArrowRight,
  ShieldAlert,
  MapPin,
  Calendar,
  Users
} from 'lucide-react';

interface TimelineEvent {
  year: string;
  titleEn: string;
  titleMr: string;
  descEn: string;
  descMr: string;
  icon: any;
  category: 'foundational' | 'expansion' | 'landmark' | 'future';
  detailsEn?: string[];
  detailsMr?: string[];
}

export default function HistoryTimeline() {
  const [activeLang, setActiveLang] = useState<'both' | 'mr' | 'en'>('both');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const timelineEvents: TimelineEvent[] = [
    {
      year: '1938',
      titleEn: 'Middle School Foundation',
      titleMr: 'मिडल स्कूलची स्थापना',
      descEn: "The sacred journey of imparting knowledge began on June 2, 1938, as 'Middle School' in the mansion of Late Gajananrao Deshpande. Pioneered by Founder President Late R. V. Joshi and Honorary Secretary Late H. K. Bhide to bring education to rural youth.",
      descMr: "२ जून १९३८ रोजी कै. गजाननराव देशपांडे यांच्या वाड्यात 'मिडल स्कूल' म्हणून ज्ञानदानाची पवित्र यात्रा सुरू झाली. ग्रामीण भागातील तरुण पिढीला दर्जेदार शिक्षण देण्यासाठी संस्थापक अध्यक्ष कै. आर. व्ही. जोशी आणि मानद सचिव कै. एच. के. भिडे यांनी याचे नेतृत्व केले.",
      icon: GraduationCap,
      category: 'foundational',
      detailsEn: [
        "First formal class opened with limited rural students.",
        "A historic step to eradicate illiteracy from Khed Taluka region."
      ],
      detailsMr: [
        "मर्यादित ग्रामीण विद्यार्थ्यांसह पहिला वर्ग सुरू झाला.",
        "खेड तालुका परिसरातील निरक्षरता दूर करण्यासाठी उचललेले ऐतिहासिक पाऊल."
      ]
    },
    {
      year: '1942–43',
      titleEn: 'Expanding Classrooms',
      titleMr: 'वर्गखोल्यांचा विस्तार',
      descEn: 'To accommodate the growing student body, the institution purchased land on the village outskirts and built a 7-room facility with local support.',
      descMr: 'वाढत्या विद्यार्थी संख्येला सामावून घेण्यासाठी, संस्थेने गावाबाहेरील जमीन खरेदी केली आणि स्थानिक लोकांच्या उत्स्फूर्त मदतीने ७ खोल्यांची इमारत बांधली.',
      icon: Building,
      category: 'expansion'
    },
    {
      year: '1947',
      titleEn: 'Evolution to Khed High School',
      titleMr: 'खेड हायस्कूलमध्ये रूपांतर',
      descEn: "Classes successfully expanded from 1st to 7th grade, and 'Middle School' formally evolved into 'Khed High School'.",
      descMr: "इयत्ता पहिली ते सातवीपर्यंत वर्गांचा यशस्वी विस्तार झाला आणि 'मिडल स्कूल'चे औपचारिकपणे 'खेड हायस्कूल'मध्ये रूपांतर झाले.",
      icon: Layers,
      category: 'expansion'
    },
    {
      year: '1948',
      titleEn: 'Renaming to Mahatma Gandhi Vidyalaya',
      titleMr: 'महात्मा गांधी विद्यालय असे नामकरण',
      descEn: "In profound memory of the Father of the Nation, Mahatma Gandhi, the school was proudly renamed 'Mahatma Gandhi Vidyalaya'.",
      descMr: "राष्ट्रपिता महात्मा गांधी यांच्या पवित्र स्मृतीप्रित्यर्थ, शाळेचे नाव अत्यंत अभिमानाने 'महात्मा गांधी विद्यालय' असे ठेवण्यात आले.",
      icon: Award,
      category: 'landmark'
    },
    {
      year: '1970',
      titleEn: 'Primary Wing & Early Landmarks',
      titleMr: 'प्राथमिक विभाग आणि सुरुवातीचे टप्पे',
      descEn: 'On June 7, 1970, the Primary Division was launched on an unaided basis to build a strong foundational base for young learners.',
      descMr: '७ जून १९७० रोजी बाल व तरुण विद्यार्थ्यांसाठी भक्कम पाया रचण्याच्या उद्देशाने विनाअनुदानित तत्त्वावर प्राथमिक विभागाची स्थापना करण्यात आली.',
      icon: BookOpen,
      category: 'expansion'
    },
    {
      year: '1987',
      titleEn: 'Breaking Barriers with English Medium',
      titleMr: 'इंग्रजी माध्यमाची सुरुवात',
      descEn: 'On August 15, 1987, the English Medium School was introduced from Junior K.G. onwards to bridge the urban-rural language divide.',
      descMr: '१५ ऑगस्ट १९८७ रोजी शहरी व ग्रामीण भागातील इंग्रजी भाषेची दरी दूर करण्यासाठी ज्युनिअर के.जी. पासून इंग्रजी माध्यम स्कूल सुरू करण्यात आले.',
      icon: Globe,
      category: 'expansion'
    },
    {
      year: '1988',
      titleEn: 'Golden Jubilee & NCC Unit',
      titleMr: 'सुवर्ण महोत्सव आणि एन.सी.सी. युनिट',
      descEn: 'In 1988, the institution entered its historic 50th year, celebrating its Golden Jubilee. A grand Golden Jubilee ceremony was solemnized in the presence of Hon. Chief Minister Shri. Sharadchandraji Pawar Saheb, alongside dignitaries Hon. Padmasinh Patil, Hon. Madan Bafna, and Hon. Bharat Bondre.',
      descMr: '१९८८ ला संस्थेने ५० व्या वर्षात पदार्पण केले. संस्थेचे हे सुवर्ण महोत्सवी वर्ष होते. राज्याचे तात्कालीन मुख्यमंत्री मा. श्री. शरदचंद्रजी पवार साहेब, मा. श्री. पद्मसिंह पाटील, मा. श्री. मदन बाफना व मा. श्री. भारत बोंद्रे यांच्या प्रमुख उपस्थितीत भव्य सुवर्ण महोत्सवी सोहळा संपन्न झाला.',
      icon: Sparkles,
      category: 'landmark',
      detailsEn: [
        "Statue of Mahatma Gandhi & Library: Under the leadership of then Director Hon. Shri. Haribhausheth Sandbhor, the statue of Mahatma Gandhi was erected. The unveiling of the statue and inauguration of Lunawat Library were performed by Chief Minister Hon. Sharadchandraji Pawar.",
        "Renaming of Primary School: In memory of their late father Sheth Keshavchand Parakh, the Parakh brothers made a generous donation of ₹1,11,111/- to the primary section. To honor this contribution, on November 27, 1988, the primary wing was renamed 'Sheth Keshavchand Parakh Primary School'.",
        "NCC Unit & Computer Education: Beginning in 1988 at Mahatma Gandhi Vidyalaya, an official NCC Unit and Computer Education program were established through the dedicated efforts of Hon. Secretary Air Commodore Shri. Ganesh Joshi."
      ],
      detailsMr: [
        "महात्मा गांधीजींचा पुतळा व ग्रंथालय: तत्कालीन संचालक मा. श्री. हरीभाऊशेठ सांडभोर यांच्या प्रयत्नातून राष्ट्रपिता महात्मा गांधीजींचा पुतळा उभारण्यात आला. या पुतळ्याचे अनावरण व 'लुणावत ग्रंथालयाचे' उद्घाटन मुख्यमंत्री मा. शरदचंद्रजी पवार साहेब यांच्या हस्ते झाले.",
        "प्राथमिक विद्यालयाचे नामकरण: पारख बंधूंनी आपले वडील कै. केशरचंद पारख यांच्या स्मृतिप्रीत्यर्थ प्राथमिक विभागास ₹१,११,१११/- ची देणगी दिली. या सहकार्याची आठवण म्हणून २७ नोव्हेंबर १९८८ रोजी प्राथमिक विभागाचे नामकरण 'शेठ केशरचंद पारख प्राथमिक विद्यालय' असे करण्यात आले.",
        "एन.सी.सी. (NCC) युनिट व संगणक शिक्षण: १९८८ पासून महात्मा गांधी विद्यालयात मानद सचिव एअर कमोडोर मा. श्री. गणेश जोशी यांच्या विशेष प्रयत्नाने NCC युनिट आणि संगणक शिक्षण (Computer Education) उपक्रम सुरू करण्यात आला."
      ]
    },
    {
      year: '1990',
      titleEn: 'Step into Tech Literacy',
      titleMr: 'तंत्रज्ञान साक्षरतेकडे पाऊल',
      descEn: 'Launched the Smt. Jadavbai Tapadiya Computer Institute, taking the first futuristic step toward digital literacy.',
      descMr: 'श्रीमती जाधवबाई तापडिया कॉम्प्युटर इन्स्टिट्यूटची स्थापना करून तंत्रज्ञान व डिजिटल साक्षरतेच्या दिशेने पहिले भविष्यवादी पाऊल टाकण्यात आले.',
      icon: Laptop,
      category: 'landmark'
    },
    {
      year: '1994–95',
      titleEn: 'Independent Infrastructures',
      titleMr: 'स्वतंत्र पायाभूत सुविधा',
      descEn: 'Construction of a brand-new building for the English Medium School was completed, successfully creating independent facilities for all three distinct wings.',
      descMr: 'इंग्रजी माध्यम शाळेच्या नवीन स्वतंत्र इमारतीचे बांधकाम पूर्ण झाले, ज्यामुळे प्राथमिक, माध्यमिक आणि इंग्रजी माध्यम या तिन्ही स्वतंत्र शाखांना अत्याधुनिक स्वतंत्र व्यवस्था मिळाली.',
      icon: Building,
      category: 'expansion'
    },
    {
      year: '2000',
      titleEn: 'Diamond Jubilee Milestone',
      titleMr: 'हीरक महोत्सव टप्पा (६० वर्षे)',
      descEn: "Celebrated the Diamond Jubilee (60 years). The grand main entrance was formally named 'Guruvarya G. N. Deshpande'.",
      descMr: "संस्थेची हीरक महोत्सवी ६० वर्षे साजरी करण्यात आली. या प्रसंगी भव्य मुख्य प्रवेशद्वाराचे अधिकृतपणे 'गुरुवर्य जी. एन. देशपांडे' असे नामकरण करण्यात आले.",
      icon: Award,
      category: 'landmark'
    },
    {
      year: '2005',
      titleEn: 'State-Level Academic Triumph',
      titleMr: 'राज्यस्तरीय शैक्षणिक यश',
      descEn: "Student Vaibhav Vitthal Gorde ranked 1st across the entire state of Maharashtra in the S.S.C. Merit List, etching KTES' name in history.",
      descMr: "इयत्ता १०वी (S.S.C.) परीक्षेच्या गुणवत्ता यादीत विद्यार्थी 'वैभव विठ्ठल गोरडे' याने संपूर्ण महाराष्ट्र राज्यात प्रथम क्रमांक मिळवून केटीएसचे नाव इतिहासात सुवर्णाक्षरांनी कोरले.",
      icon: Trophy,
      category: 'landmark'
    },
    {
      year: '2008',
      titleEn: 'Launch of Science Junior College',
      titleMr: 'सायन्स ज्युनिअर कॉलेजची सुरुवात',
      descEn: 'Expanded into Higher Secondary education by launching the Junior College of Science to deliver high-quality, career-oriented coaching.',
      descMr: 'विद्यार्थ्यांना उच्च दर्जेदार आणि करिअरभिमुख मार्गदर्शन प्रदान करण्यासाठी ज्युनिअर सायन्स कॉलेज सुरू करून उच्च माध्यमिक शिक्षणात विस्तार केला.',
      icon: BookOpen,
      category: 'expansion'
    },
    {
      year: '2013',
      titleEn: 'Amrut Mahotsav (75 Years)',
      titleMr: 'अमृत महोत्सव (७५ वर्षे)',
      descEn: 'Grandly celebrating the 75th Amrut Mahotsav milestone year! Inauguration of the new Junior College building was solemnized by Hon. Shri. Sharadchandraji Pawar Saheb (Then Union Minister of Agriculture, Govt. of India).',
      descMr: 'संस्थेचे अमृत महोत्सवी ७५ वे वर्ष थाटामाटात साजरे करण्यात आले! ज्युनियर कॉलेजच्या नवीन इमारतीचे उद्घाटन मा. श्री. शरदचंद्रजी पवार साहेब (तत्कालीन कृषी मंत्री, भारत सरकार) यांच्या हस्ते झाले.',
      icon: Sparkles,
      category: 'landmark',
      detailsEn: [
        "President of the Function: Hon. Shri. Dilip Mohite Patil (MLA, Khed Taluka & Chairman, MSAPMC)",
        "Chief Guest: Hon. Shri. Rajeshji Tope (Then Minister of Higher & Technical Education, Govt. of Maharashtra)",
        "Chief Guest: Hon. Shri. Shivajirao Adhalrao Patil (Member of Parliament, Shirur Lok Sabha)"
      ],
      detailsMr: [
        "अध्यक्ष: मा. श्री. दिलीप मोहिते पाटील (आमदार, खेड तालुका व अध्यक्ष, कृषी उत्पन्न बाजारसंघ, महाराष्ट्र राज्य)",
        "प्रमुख उपस्थिती: मा. श्री. राजेशजी टोपे (तत्कालीन उच्च व तंत्रशिक्षण मंत्री, महाराष्ट्र राज्य)",
        "प्रमुख उपस्थिती: मा. श्री. शिवाजीराव आढळराव पाटील (खासदार, शिरूर लोकसभा)"
      ]
    },
    {
      year: '2014',
      titleEn: 'Infrastructure Face-lift',
      titleMr: 'पायाभूत सुविधांचे आधुनिकीकरण',
      descEn: 'Upgraded security by raising the protective boundary walls, giving all school campus buildings a fresh coat of paint.',
      descMr: 'विद्यार्थ्यांच्या सुरक्षेसाठी कॅम्पसभोवती भक्कम संरक्षण भिंतीची उंची वाढवण्यात आली आणि शाळेच्या सर्व इमारतींचे उत्कृष्ट रंगकाम करून त्यांना नवा लूक देण्यात आला.',
      icon: Building,
      category: 'expansion'
    },
    {
      year: '2020',
      titleEn: 'Four-Story Modern Complex',
      titleMr: 'चार मजली आधुनिक संकुल',
      descEn: 'Completed construction on a state-of-the-art, fully-equipped 4-story building on the site of the former Bafna Rangamandir. The campus was further secured with a centralized CCTV network.',
      descMr: 'पूर्वीच्या बाफना रंगमंदिराच्या जागेवर अत्याधुनिक सोयीसुविधांनी सज्ज अशा ४ मजली भव्य वास्तूचे बांधकाम पूर्ण करण्यात आले. संपूर्ण कॅम्पस मध्यवर्ती सीसीटीव्ही (CCTV) प्रणालीने सुरक्षित करण्यात आला.',
      icon: Layers,
      category: 'landmark'
    },
    {
      year: '2025',
      titleEn: 'Kaladalan / Kridangan',
      titleMr: 'कलादालन आणि क्रीडांगण',
      descEn: 'Developed a dedicated Art Gallery (Kaladalan) to nurture artistic talents and completely modernized the campus playground (Kridangan) with advanced multi-sport facilities.',
      descMr: 'विद्यार्थ्यांमधील कलागुणांना वाव देण्यासाठी एका हक्काच्या कलादालनाची निर्मिती करण्यात आली तसेच क्रीडांगणाचा आधुनिक तंत्रज्ञानाने सर्वांगीण पुनर्विकास करण्यात आला.',
      icon: Palette,
      category: 'landmark'
    },
    {
      year: 'Future Horizons',
      titleEn: 'Centenary Vision',
      titleMr: 'भविष्यकालीन क्षितिज — शताब्दी संकल्प',
      descEn: 'Stepping confidently toward its 100th year, the society plans to expand the Science stream, introduce a new Commerce wing, and launch a premier CBSE School at its newly acquired land in Jaidwadi along the Pune-Nashik highway.',
      descMr: 'आपल्या १०० व्या वर्षाकडे आत्मविश्वासाने पाऊल टाकत असताना, सोसायटीने विज्ञान शाखेचा विस्तार करणे, नवीन वाणिज्य (कॉमर्स) शाखा सुरू करणे आणि पुणे-नाशिक महामार्गावरील जैदवाडी येथील नवीन अधिग्रहित जागेवर नामांकित सीबीएसई (CBSE) स्कूल सुरू करण्याचा संकल्प केला आहे.',
      icon: Target,
      category: 'future',
      detailsEn: [
        "Expansion of high-tech Science and research streams.",
        "Launch of advanced Business and Commerce curriculum wings.",
        "Establishment of CBSE-affiliated central school campus at Jaidwadi."
      ],
      detailsMr: [
        "अत्याधुनिक विज्ञान व संशोधन शाखांचा व्यापक विस्तार.",
        "अद्ययावत व्यवसाय व वाणिज्य (कॉमर्स) अभ्यासक्रम शाखांची निर्मिती.",
        "जैदवाडी येथे पुणे-नाशिक महामार्गालगत भव्य सीबीएसई (CBSE) स्कूलची स्थापना."
      ]
    }
  ];

  const categories = [
    { value: 'all', labelEn: 'All Milestones', labelMr: 'सर्व टप्पे' },
    { value: 'foundational', labelEn: 'Foundational', labelMr: 'पायाभरणी' },
    { value: 'expansion', labelEn: 'Expansions', labelMr: 'विस्तार' },
    { value: 'landmark', labelEn: 'Landmarks', labelMr: 'ऐतिहासिक टप्पे' },
    { value: 'future', labelEn: 'Future Vision', labelMr: 'भविष्यकालीन ध्येय' }
  ];

  const filteredEvents = timelineEvents.filter(ev => {
    const matchesCategory = filterCategory === 'all' || ev.category === filterCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      ev.year.toLowerCase().includes(query) ||
      ev.titleEn.toLowerCase().includes(query) ||
      ev.titleMr.includes(query) ||
      ev.descEn.toLowerCase().includes(query) ||
      ev.descMr.includes(query);

    return matchesCategory && matchesSearch;
  });

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('ring-2', 'ring-amber-400/70', 'transition-all', 'duration-500');
      setTimeout(() => {
        el.classList.remove('ring-2', 'ring-amber-400/70');
      }, 2500);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Search and Language Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-900/60 p-4 rounded-2xl border border-white/15 backdrop-blur-md">
        {/* Language Selector */}
        <div className="flex items-center space-x-1.5 bg-slate-950/80 p-1 rounded-xl border border-white/5 w-full sm:w-auto justify-between sm:justify-start">
          <span className="text-slate-400 text-xs font-semibold px-2 flex items-center gap-1">
            <Languages className="h-3.5 w-3.5 text-amber-400" />
            <span className="hidden xs:inline">Language / भाषा:</span>
          </span>
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveLang('both')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeLang === 'both'
                  ? 'bg-secondary text-primary-dark shadow'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Dual / दोन्ही
            </button>
            <button
              onClick={() => setActiveLang('mr')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeLang === 'mr'
                  ? 'bg-secondary text-primary-dark shadow'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              मराठी
            </button>
            <button
              onClick={() => setActiveLang('en')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeLang === 'en'
                  ? 'bg-secondary text-primary-dark shadow'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder={activeLang === 'mr' ? 'वर्ष, शीर्षक किंवा माहिती शोधा...' : 'Search year, title, facts...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/50 transition-all font-sans"
          />
        </div>
      </div>

      {/* Category Tabs & Direct Navigation Filter Section */}
      <div className="space-y-3.5 bg-slate-900/40 p-3.5 sm:p-4 rounded-2xl border border-white/10 backdrop-blur-md">
        {/* Timeline Milestone Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center items-center">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1 hidden md:inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span>{activeLang === 'mr' ? 'टप्पे:' : 'Milestones:'}</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilterCategory(cat.value)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                filterCategory === cat.value
                  ? 'bg-secondary/20 border-secondary text-amber-300 shadow-md font-bold'
                  : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:border-white/15'
              }`}
            >
              {activeLang === 'mr' ? cat.labelMr : activeLang === 'en' ? cat.labelEn : `${cat.labelMr} (${cat.labelEn})`}
            </button>
          ))}
        </div>

        {/* Section Navigation Quick Filters / Direct Section Links */}
        <div className="flex flex-wrap gap-2.5 justify-center items-center pt-2.5 border-t border-white/10">
          <span className="text-[11px] font-semibold text-amber-400/90 uppercase tracking-wider mr-1 hidden sm:inline-flex items-center gap-1.5">
            <Compass className="h-3.5 w-3.5 text-amber-400" />
            <span>{activeLang === 'mr' ? 'थेट विभाग मार्गिका:' : 'Quick Navigation:'}</span>
          </span>

          {/* 1. Board of Directors / संचालक */}
          <button
            onClick={() => handleNavigateSection('trust-board-section')}
            className="group inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-amber-400/15 border border-white/10 hover:border-amber-400/50 text-slate-200 hover:text-amber-300 transition-all duration-300 shadow-md backdrop-blur-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            title="Jump to Board of Directors / संचालक"
          >
            <Users className="h-3.5 w-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="font-sans font-bold">
              Board of Directors / संचालक
            </span>
            <ArrowRight className="h-3 w-3 text-amber-400/70 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* 2. Architects of our Progress / आमच्या प्रगतीचे शिल्पकार: संस्थेचे माजी अध्यक्ष */}
          <button
            onClick={() => handleNavigateSection('past-presidents-section')}
            className="group inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-amber-400/15 border border-white/10 hover:border-amber-400/50 text-slate-200 hover:text-amber-300 transition-all duration-300 shadow-md backdrop-blur-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            title="Jump to Architects of our Progress / आमच्या प्रगतीचे शिल्पकार: संस्थेचे माजी अध्यक्ष"
          >
            <Award className="h-3.5 w-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="font-sans font-bold">
              Architects of our Progress / आमच्या प्रगतीचे शिल्पकार: संस्थेचे माजी अध्यक्ष
            </span>
            <ArrowRight className="h-3 w-3 text-amber-400/70 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>
      </div>

      {/* Timeline Tree */}
      <div className="relative border-l-2 border-dashed border-amber-500/30 pl-8 sm:pl-10 ml-4 sm:ml-6 space-y-12 py-4">
        <AnimatePresence mode="popLayout">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((ev, idx) => {
              const IconComponent = ev.icon;
              return (
                <motion.div
                  key={ev.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="relative group bg-[#0d1527]/70 border border-white/15 p-6 rounded-2xl shadow-xl hover:border-amber-400/40 hover:bg-[#0f1a33] transition-all duration-300"
                >
                  {/* Glowing Node Circle with Icon */}
                  <div className="absolute -left-[49px] sm:-left-[51px] top-6 h-9 w-9 rounded-full bg-slate-950 border-2 border-amber-400 text-amber-300 flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(245,158,11,0.45)] group-hover:bg-amber-400 group-hover:text-primary-dark transition-all duration-300 z-10">
                    <IconComponent className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-3 mb-4">
                    {/* Year badge */}
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                        {ev.year}
                      </span>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${
                        ev.category === 'foundational' ? 'bg-blue-400/10 text-blue-300 border border-blue-400/20' :
                        ev.category === 'expansion' ? 'bg-indigo-400/10 text-indigo-300 border border-indigo-400/20' :
                        ev.category === 'landmark' ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20' : 'bg-purple-400/10 text-purple-300 border border-purple-400/20'
                      }`}>
                        {ev.category}
                      </span>
                    </div>

                    {/* Quick navigation label */}
                    <div className="text-[10px] text-slate-400 flex items-center space-x-1.5 font-mono">
                      <Calendar className="h-3 w-3 text-amber-400" />
                      <span>{ev.year.includes('Future') ? 'Centenary Resolution' : 'KTES Legacy Records'}</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="space-y-4">
                    {/* Marathi Translation */}
                    {(activeLang === 'mr' || activeLang === 'both') && (
                      <div className="space-y-1.5">
                        <h3 className="text-base font-bold text-white font-sans flex items-center gap-1.5">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                          {ev.titleMr}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed font-sans font-medium">
                          {ev.descMr}
                        </p>
                        {ev.detailsMr && (
                          <ul className="pl-4 pt-2 space-y-1.5 text-xs text-slate-300 list-disc marker:text-amber-400/70">
                            {ev.detailsMr.map((dt, dIdx) => {
                              const colonIdx = dt.indexOf(':');
                              if (colonIdx !== -1) {
                                return (
                                  <li key={dIdx} className="leading-relaxed">
                                    <span className="font-semibold text-amber-200/95">{dt.substring(0, colonIdx + 1)}</span>
                                    <span>{dt.substring(colonIdx + 1)}</span>
                                  </li>
                                );
                              }
                              return <li key={dIdx} className="leading-relaxed">{dt}</li>;
                            })}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* Divider for Dual Language mode */}
                    {activeLang === 'both' && (
                      <div className="border-t border-white/5 my-3"></div>
                    )}

                    {/* English Translation */}
                    {(activeLang === 'en' || activeLang === 'both') && (
                      <div className="space-y-1.5">
                        <h3 className="text-base font-bold text-amber-100 font-display flex items-center gap-1.5">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                          {ev.titleEn}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed font-sans">
                          {ev.descEn}
                        </p>
                        {ev.detailsEn && (
                          <ul className="pl-4 pt-2 space-y-1.5 text-xs text-slate-300 list-disc marker:text-blue-400/70">
                            {ev.detailsEn.map((dt, dIdx) => {
                              const colonIdx = dt.indexOf(':');
                              if (colonIdx !== -1) {
                                return (
                                  <li key={dIdx} className="leading-relaxed">
                                    <span className="font-semibold text-amber-100/95">{dt.substring(0, colonIdx + 1)}</span>
                                    <span>{dt.substring(colonIdx + 1)}</span>
                                  </li>
                                );
                              }
                              return <li key={dIdx} className="leading-relaxed">{dt}</li>;
                            })}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-slate-900/30 rounded-2xl border border-white/10"
            >
              <ShieldAlert className="h-10 w-10 text-amber-400 mx-auto mb-3" />
              <p className="text-slate-300 text-sm font-semibold">
                {activeLang === 'mr' ? 'कोणतेही ऐतिहासिक टप्पे सापडले नाहीत.' : 'No historical milestones match your query.'}
              </p>
              <button
                onClick={() => { setSearchQuery(''); setFilterCategory('all'); }}
                className="mt-3 text-xs font-bold text-secondary underline hover:text-amber-400 cursor-pointer"
              >
                {activeLang === 'mr' ? 'शोध निकष रिसेट करा' : 'Reset filters'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative footer stamp of timeline */}
      <div className="flex justify-center pt-4">
        <div className="inline-flex items-center space-x-2 bg-slate-950/80 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md">
          <span className="h-4 w-4 rounded-full bg-amber-500 text-slate-950 font-display font-black flex items-center justify-center text-[8px] shadow-sm">
            K
          </span>
          <span className="text-white font-mono tracking-wider">।। संहतिः कार्यसाधिका ।।</span>
          <span className="text-slate-400 font-mono">|</span>
          <span className="text-amber-300 font-mono">१९३८ सालापासून निरंतर</span>
        </div>
      </div>
    </div>
  );
}
