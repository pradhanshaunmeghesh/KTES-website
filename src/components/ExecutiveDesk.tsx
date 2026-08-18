import { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore
import chairmanImg from '../assets/images/Chairman.png';

interface ExecutiveDeskProps {
  className?: string;
  compact?: boolean;
}

export default function ExecutiveDesk({ className = '' }: ExecutiveDeskProps) {
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <section id="chairman-message-section" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${className}`}>
      <div className="bg-gradient-to-br from-[#0c1836] via-[#0f214a] to-[#091226] border border-amber-500/20 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Banner Header Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          {/* Avatar Frame */}
          <div className="shrink-0 relative">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-amber-400/40 bg-slate-950 shadow-2xl relative">
              <img
                src={chairmanImg || undefined}
                alt="Shri. Haribhau Sandbhor"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
              Chairman
            </span>
          </div>

          {/* Profile Info & Quote Block */}
          <div className="space-y-5 text-center md:text-left flex-1">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 tracking-widest uppercase mb-1 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                Executive Desk | अध्यक्षीय कार्यालय
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
                Shri. Haribhau Sandbhor
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans font-semibold">
                Managing President & Chairman, Khed Taluka Education Society
              </p>
            </div>

            {/* Key Quote Block */}
            <div className="bg-slate-950/60 border-l-4 border-amber-400 p-4 sm:p-5 rounded-r-2xl shadow-inner text-left relative">
              <p className="text-amber-100 text-xs sm:text-sm md:text-base font-medium italic font-sans leading-relaxed">
                "We do not construct buildings for schools; we construct corridors through which kids stride confidently into their tomorrow."
              </p>
              <p className="text-amber-300/80 text-xs font-sans font-medium mt-2 not-italic">
                "आम्ही केवळ शाळांच्या इमारती बांधत नाही; आम्ही असे मार्ग उभारतो ज्यावरून मुले विश्वासाने त्यांच्या भविष्याकडे वाटचाल करतात."
              </p>
            </div>

            {/* Action Button: Read Full Message Toggle */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button
                onClick={() => setShowFullMessage(!showFullMessage)}
                className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 hover:border-amber-400 font-display font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 shadow-lg hover:shadow-amber-500/10"
              >
                <span>
                  {showFullMessage
                    ? 'संदेश संकुचित करा | Close Full Message'
                    : 'पूर्ण संदेश वाचा | Read Full Message'}
                </span>
                {showFullMessage ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Full Dual-Language Welcome Message Accordion */}
        {showFullMessage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 pt-8 border-t border-amber-500/20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative z-10"
          >
            {/* Box 1 - Marathi */}
            <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="pb-3 border-b border-white/10">
                  <h4 className="text-lg font-display font-black text-amber-400">
                    अध्यक्षीय मनोगत - खेड तालुका एज्युकेशन सोसायटी
                  </h4>
                  <p className="text-xs text-slate-400 font-sans font-medium uppercase tracking-wider">
                    कार्यालयीन संदेश
                  </p>
                </div>
                
                <h5 className="font-sans font-bold text-white text-sm">
                  प्रिय विद्यार्थी, पालक आणि हितचिंतकांनो,
                </h5>
                
                <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                  <p>
                    शिक्षण हे समाज विकासाचे सर्वात प्रभावी माध्यम आहे. जेव्हा आमच्या द्रष्ट्या संस्थापकांनी १९३८ मध्ये केवळ मूठभर ग्रामीण विद्यार्थ्यांसह या संस्थेची पायाभरणी केली, तेव्हा प्रादेशिक दर्जाला राज्य पातळीवर पोहोचवता येईल यावर त्यांचा ठाम विश्वास होता.
                  </p>
                  <p>
                    आज, जेव्हा के.टी.ई.एस. जैवतंत्रज्ञान प्रयोगशाळा, संगणक जाळे, क्रीडा संस्था आणि कनिष्ठ माध्यमिक शाळांच्या माध्यमातून १५,००० हून अधिक सक्रिय विद्यार्थ्यांना घडवत आहे, तेव्हा त्या सुरुवातीच्या विश्वासाला सार्थ ठरताना मी पाहत आहे.
                  </p>
                  <p>
                    मूल्यवर्धन हे आमचे मुख्य ध्येय आहे. तांत्रिक सुलभता आणि कृत्रिम बुद्धिमत्तेच्या (AI) या युगात, आम्ही गणितीय दृष्टिकोन, वैज्ञानिक सचोटी, एन.सी.सी. (NCC) ची शिस्त आणि पारंपारिक कलांना प्राधान्य देतो. के.टी.ई.एस. मध्ये आपले सहर्ष स्वागत आहे. आमच्या विविध विभागांची माहिती घ्या आणि चला एकत्र मिळून उत्कृष्टतेची निर्मिती करूया.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <p className="font-display font-extrabold text-white text-sm">
                  श्री. हरिभाऊ सांडभोर
                </p>
                <p className="text-[10px] text-slate-400 font-sans uppercase font-bold tracking-wider">
                  अध्यक्ष, खेड तालुका एज्युकेशन सोसायटी
                </p>
              </div>
            </div>

            {/* Box 2 - English */}
            <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="pb-3 border-b border-white/10">
                  <h4 className="text-lg font-display font-black text-amber-400">
                    Executive Desk - Chairman's Welcome Address
                  </h4>
                  <p className="text-xs text-slate-400 font-sans font-medium uppercase tracking-wider">
                    Chairman's Welcome Message
                  </p>
                </div>

                <h5 className="font-sans font-bold text-white text-sm">
                  Dear Scholars, Parents and Associates,
                </h5>

                <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                  <p>
                    Education is the strongest leverage point for community development. When our visionary founders laid the foundations of this society in 1938 with just a handful of rural pupils, they believed regional standards could scale state heights.
                  </p>
                  <p>
                    Today, as K.T.E.S caters to over 15,000 active students in biotechnology laboratories, computer networks, athletic clubs, and junior secondary schools, I see that initial faith validated.
                  </p>
                  <p>
                    Our core goal is value integration. In an era centered on technological automation and AI, we prioritize mathematical intuition, scientific integrity, national cadet discipline, and traditional performing arts. Welcome to K.T.E.S. Explore our departments and let us build excellence together.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <p className="font-display font-black text-white text-sm">
                  Shri. Haribhau Sandbhor
                </p>
                <p className="text-[10px] text-slate-400 font-sans uppercase font-bold tracking-wider">
                  President, Khed Taluka Education Society
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Transition Bridge Divider */}
      <div className="flex items-center justify-center pt-8 pb-2 opacity-70">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent w-full max-w-lg"></div>
      </div>
    </section>
  );
}
