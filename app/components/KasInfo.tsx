'use client';

import Image from 'next/image';

interface KasInfoProps {
  onBack: () => void;
}

export default function KasInfo({ onBack }: KasInfoProps) {
  return (
    <div className="max-w-7xl w-full mx-auto animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-wave-pattern opacity-20"></div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onBack();
            }}
            className="absolute top-6 left-6 bg-white/90 hover:bg-white text-blue-600 hover:text-blue-700 backdrop-blur-sm px-5 py-2.5 rounded-full transition-all flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl z-20 cursor-pointer"
          >
            <span className="text-lg">←</span> Back to Postcard
          </button>
          <div className="text-center relative z-10 pt-4">
            <h1 className="text-5xl font-bold mb-2">Explore Kaş, Türkiye</h1>
            <p className="text-xl text-blue-100">Discover Ancient Wonders & Natural Beauty</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-10">
          {/* Introduction */}
          <section className="text-center animate-slideUp">
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
              Discover the hidden treasures of Kaş - from ancient Lycian tombs carved into cliffs to mysterious sunken cities beneath crystal-clear waters. Each destination tells a story of civilizations past and natural wonders that will take your breath away.
            </p>
          </section>

          {/* Main Attractions Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. Kral Mezarları (King's Tombs / Lions Tomb) */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all animate-slideUp delay-100">
              <div className="h-64 bg-gradient-to-br from-amber-400 to-orange-500 relative overflow-hidden">
                <Image 
                  src="/kral-mezarlari.jpg" 
                  alt="Ancient Lycian Tomb"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Kral Mezarları</h3>
                <p className="text-sm text-blue-600 mb-3 font-semibold">Ancient Lycian Rock Tombs</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The magnificent <strong>King&apos;s Tomb</strong> (Lions Tomb) is a stunning 3-level Lycian sarcophagus carved from massive stone blocks dating back to the <strong>4th century BC</strong>. Located in the heart of Kaş, this majestic monument features four lion heads at the top and ancient Lycian inscriptions carved into the rock. Despite its name, no king is actually buried here - it&apos;s named for its grand, royal architecture that showcases the remarkable craftsmanship of the ancient Lycian civilization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">4th Century BC</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Lycian Architecture</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">In Town Center</span>
                </div>
              </div>
            </section>

            {/* 2. Kaleköy (Simena) */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all animate-slideUp delay-200">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-500 relative overflow-hidden">
                <Image 
                  src="/kalekoy.jpg" 
                  alt="Kaleköy Castle Village"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Kaleköy (Simena)</h3>
                <p className="text-sm text-purple-600 mb-3 font-semibold">Ancient Castle Village</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Kaleköy</strong>, meaning &quot;Castle Village,&quot; is the modern name for ancient <strong>Simena</strong>. This enchanting village is only accessible by boat and features a stunning <strong>Byzantine castle</strong> perched on a hilltop with breathtaking panoramic views. The village contains Lycian rock tombs, including a unique sarcophagus with a ship&apos;s stern carved into it. Wander through narrow stone streets, explore ancient ruins, and enjoy the peaceful atmosphere of this car-free paradise.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Boat Access Only</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">Byzantine Castle</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Lycian Tombs</span>
                </div>
              </div>
            </section>

            {/* 3. Kekova Sunken City */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all animate-slideUp delay-300">
              <div className="h-64 bg-gradient-to-br from-cyan-400 to-blue-500 relative overflow-hidden">
                <Image 
                  src="/kekova.jpg" 
                  alt="Kekova Sunken City"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Kekova</h3>
                <p className="text-sm text-cyan-600 mb-3 font-semibold">The Mysterious Sunken City</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Kekova Island</strong> is home to the fascinating ruins of <strong>Dolchiste</strong>, an ancient Lycian city partially submerged by earthquakes in the <strong>2nd century AD</strong>. Through the crystal-clear turquoise waters, you can see staircases, building foundations, columns, and ancient streets resting on the seabed. This <strong>specially protected area</strong> covers 260 km² and includes four ancient towns. Boat tours glide over the sunken ruins, while sea kayaking offers an intimate view of this underwater archaeological wonder.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium">Sunken Ruins</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Protected Area</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Boat Tours</span>
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">Sea Kayaking</span>
                </div>
              </div>
            </section>

            {/* 4. Mavi Mağara (Blue Cave) */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all animate-slideUp delay-400">
              <div className="h-64 bg-gradient-to-br from-blue-300 to-indigo-500 relative overflow-hidden">
                <Image 
                  src="/blue-cave.jpg" 
                  alt="Blue Cave"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Blue Cave</h3>
                <p className="text-sm text-gray-500 mb-1 italic">Mavi Mağara</p>
                <p className="text-sm text-blue-600 mb-3 font-semibold">Natural Wonder</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>Blue Cave</strong> is a natural wonder famous for its mesmerizing <strong>bright blue luminescent waters</strong>. Sunlight filtering through the water creates an otherworldly, shimmering turquoise glow that illuminates the cave&apos;s interior. This magical grotto is a popular spot for swimming and diving, offering an unforgettable experience in its ethereal atmosphere. The cave&apos;s crystal-clear waters and unique light effects make it one of the most photographed natural attractions near Kaş.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Natural Cave</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Swimming</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium">Diving Spot</span>
                </div>
              </div>
            </section>

            {/* 5. Kaputaş Beach */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all animate-slideUp delay-500">
              <div className="h-64 bg-gradient-to-br from-yellow-300 to-orange-400 relative overflow-hidden">
                <Image 
                  src="/kaputas.jpg" 
                  alt="Kaputaş Beach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Kaputaş Beach</h3>
                <p className="text-sm text-gray-500 mb-1 italic">Kaputaş Plajı</p>
                <p className="text-sm text-orange-600 mb-3 font-semibold">Turkey&apos;s Most Beautiful Beach</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Voted one of the <strong>world&apos;s best beaches</strong>, <strong>Kaputaş Beach</strong> is a stunning natural wonder nestled between towering cliffs. Located 18km from Kaş, this hidden gem features dramatic turquoise waters and golden sand accessible via 187 steps carved into the cliff. The beach is formed by a gorge opening to the Mediterranean, creating a spectacular setting with different shades of blue. Despite its small size, it leaves a huge impression on every visitor.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">World-Famous</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Cliff Beach</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">18km from Kaş</span>
                </div>
              </div>
            </section>

            {/* 6. Antiphellos Theatre */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all animate-slideUp delay-600">
              <div className="h-64 bg-gradient-to-br from-red-400 to-rose-500 relative overflow-hidden">
                <Image 
                  src="/antiphellos-theatre-kas.jpg" 
                  alt="Antiphellos Ancient Theatre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Antiphellos Theatre</h3>
                <p className="text-sm text-gray-500 mb-1 italic">Antik Tiyatro</p>
                <p className="text-sm text-red-600 mb-3 font-semibold">Ancient Hellenistic Amphitheater</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Built in the <strong>1st century BC</strong>, this magnificent <strong>Hellenistic theatre</strong> sits on Akropolis Hill overlooking the Mediterranean Sea. Constructed from local limestone, it originally seated <strong>4,000 spectators</strong> across 28 rows. The theatre is one of the few ancient amphitheaters that never had a permanent stage building. Today, it&apos;s a popular spot to watch stunning sunsets and occasionally hosts cultural events and concerts, bringing ancient history to life.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">1st Century BC</span>
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium">4,000 Capacity</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">Sea Views</span>
                </div>
              </div>
            </section>

            {/* 7. Saklıkent Gorge */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all animate-slideUp delay-700">
              <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-500 relative overflow-hidden">
                <Image 
                  src="/saklikent.jpg" 
                  alt="Saklıkent Gorge Canyon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Saklıkent Gorge</h3>
                <p className="text-sm text-gray-500 mb-1 italic">Saklıkent Kanyonu</p>
                <p className="text-sm text-green-600 mb-3 font-semibold">Turkey&apos;s Longest & Deepest Canyon</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Saklıkent Gorge</strong>, meaning &quot;Hidden City,&quot; is a breathtaking <strong>18km-long canyon</strong> with walls reaching up to <strong>300 meters high</strong>. Located 50km from Kaş, this natural wonder was formed by glacial meltwater cutting through the Akdağlar mountains. Wade through icy mountain streams, walk on wooden platforms suspended over rushing water, and experience the dramatic narrow passages where sunlight barely reaches. The gorge maintains a cool temperature even in summer, making it a refreshing escape.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">18km Canyon</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">300m High Walls</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Adventure Sport</span>
                </div>
              </div>
            </section>

            {/* 8. Patara Beach */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all animate-slideUp delay-800">
              <div className="h-64 bg-gradient-to-br from-amber-300 to-yellow-500 relative overflow-hidden">
                <Image 
                  src="/patara.jpg" 
                  alt="Patara Beach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Patara Beach</h3>
                <p className="text-sm text-gray-500 mb-1 italic">Patara Plajı</p>
                <p className="text-sm text-amber-600 mb-3 font-semibold">Turkey&apos;s Longest Beach & Turtle Sanctuary</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Patara Beach</strong> is Turkey&apos;s <strong>longest beach</strong> at 18km, featuring pristine white sand dunes and crystal-clear waters. Located 35km from Kaş, it&apos;s a protected nesting site for endangered <strong>Loggerhead sea turtles (Caretta caretta)</strong>. The beach is part of the ancient city of Patara, birthplace of St. Nicholas. With its vast, uncrowded expanse and stunning natural beauty, it&apos;s perfect for long walks, swimming, and turtle watching during nesting season.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">18km Long</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Turtle Sanctuary</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Ancient Ruins</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-center text-white">
          <p className="text-lg font-medium">
            Explore these incredible destinations and create unforgettable memories in Kaş! 🌊✨
          </p>
        </div>
      </div>
    </div>
  );
}
