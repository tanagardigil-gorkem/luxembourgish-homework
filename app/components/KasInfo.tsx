'use client';

interface KasInfoProps {
  onBack: () => void;
}

export default function KasInfo({ onBack }: KasInfoProps) {
  return (
    <div className="max-w-6xl w-full mx-auto animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-wave-pattern opacity-20"></div>
          <button
            onClick={onBack}
            className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full transition-all flex items-center gap-2"
          >
            ← Back
          </button>
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold mb-2">Kaş, Turkey</h1>
            <p className="text-xl text-blue-100">The Turquoise Coast Paradise</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Introduction */}
          <section className="animate-slideUp">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <span className="text-4xl">🏖️</span>
              Welcome to Kaş
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Kaş is a charming small fishing, diving, yachting and tourist town on the Mediterranean coast 
              in southwestern Turkey. With its turquoise blue sea, narrow streets scented with jasmine flowers, 
              and stunning natural beauty, Kaş offers a perfect blend of ancient history and modern coastal living.
            </p>
          </section>

          {/* Grid of highlights */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* History */}
            <section className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow animate-slideUp delay-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-3xl">🏛️</span>
                Ancient History
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Founded by the Lycians as <strong>Habesos</strong>, Kaş served as the port of Phellus 
                during Hellenistic and Roman times, known as <strong>Antiphellus</strong>. The town features 
                a magnificent Hellenistic theatre and one of the richest Lycian necropolises, showcasing 
                its historical significance.
              </p>
            </section>

            {/* Geography */}
            <section className="bg-gradient-to-br from-sky-50 to-cyan-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow animate-slideUp delay-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-3xl">🌍</span>
                Geography & Climate
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Located 168 km west of Antalya, Kaş enjoys a typical <strong>Mediterranean climate</strong> 
                with hot, dry summers and mild, wet winters. The region produces oranges, lemons, bananas, 
                and cut flowers, while hillsides yield honey and almonds.
              </p>
            </section>

            {/* Activities */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow animate-slideUp delay-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-3xl">🤿</span>
                Diving Paradise
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Kaş is one of Turkey&apos;s premier diving destinations with over <strong>50 dive spots</strong> 
                and 15+ dive centers. Explore underwater wonders including:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Artificial reefs and historic wrecks</li>
                <li>• WWII airplane wreck</li>
                <li>• Kaş Archaeopark - underwater archaeology site</li>
                <li>• Rich marine life: octopus, sea turtles, and more</li>
              </ul>
            </section>

            {/* Adventures */}
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow animate-slideUp delay-400">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-3xl">⛰️</span>
                Outdoor Adventures
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Beyond diving, Kaş offers thrilling outdoor activities:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Sea kayaking at Kekova</li>
                <li>• Trekking the famous Lycian Way</li>
                <li>• Mountain biking through backcountry</li>
                <li>• Canyoning in Kibris Canyon</li>
              </ul>
            </section>
          </div>

          {/* Beaches */}
          <section className="bg-gradient-to-r from-cyan-50 via-blue-50 to-sky-50 p-6 rounded-2xl shadow-md animate-slideUp delay-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-3xl">🏝️</span>
              Must-Visit Beaches
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-blue-600 mb-2">Kaputaş Beach</h4>
                <p className="text-sm text-gray-600">Famous turquoise cove between steep cliffs</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-blue-600 mb-2">Seyrekcakil Beach</h4>
                <p className="text-sm text-gray-600">Small, peaceful local favorite</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-blue-600 mb-2">Belediyesi Halk Beach</h4>
                <p className="text-sm text-gray-600">Public beach in town center</p>
              </div>
            </div>
          </section>

          {/* Kekova */}
          <section className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-md animate-slideUp delay-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-3xl">🏛️</span>
              Kekova - The Sunken City
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A popular excursion from Kaş, <strong>Kekova</strong> features ancient cities submerged by 
              earthquakes over centuries. The crystal-clear waters allow you to see staircases, columns, 
              and building details from your boat. This specially protected marine area is also perfect 
              for sea kayaking adventures.
            </p>
          </section>

          {/* Culture */}
          <section className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl shadow-md animate-slideUp delay-700">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-3xl">🎭</span>
              Culture & Events
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Kaş maintains its authentic charm year-round with a vibrant local community. Enjoy the 
              <strong> annual arts festival</strong>, jazz concerts in the ancient Hellenistic theatre, 
              and Friday markets where Greek visitors from nearby Kastellorizo island join locals. 
              The town&apos;s narrow streets are filled with boutique shops, cozy cafes, and excellent restaurants.
            </p>
          </section>

          {/* Fun Facts */}
          <section className="border-2 border-dashed border-blue-300 bg-blue-50/50 p-6 rounded-2xl animate-slideUp delay-800">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-3xl">✨</span>
              Did You Know?
            </h3>
            <div className="grid md:grid-cols-2 gap-3 text-gray-700">
              <p>📍 Population: ~62,866 in district, ~9,084 in town</p>
              <p>🇬🇷 Greek island Kastellorizo is just 6 km offshore</p>
              <p>🎨 Home to underwater ceramics exhibitions</p>
              <p>🌊 Part of the protected Kekova marine area</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-center text-white">
          <p className="text-lg font-medium">
            Experience the magic of Kaş - where history meets paradise! 🌊☀️
          </p>
        </div>
      </div>
    </div>
  );
}
