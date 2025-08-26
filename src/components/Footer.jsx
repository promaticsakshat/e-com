const Footer = () => {
    return (
        <div className="mt-16 mb-8">
          <div className="bg-[#640442] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Stay Home and Get All<br />
                  Your Essentials From<br />
                  Our Market!
                </h2>
                <p className="text-purple-200 mb-6">
                  Download the app from app store or google play
                </p>
                <div className="flex gap-4">
                  <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                    <div className="text-green-500">▶</div>
                    <div>
                      <div className="text-xs">GET IT ON</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                    <div className="text-white">🍎</div>
                    <div>
                      <div className="text-xs">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-full w-64 h-64 flex items-center justify-center mx-auto relative">
                  <div className="absolute inset-4 bg-orange-300 rounded-full flex items-center justify-center">
                    <div className="text-6xl">👨‍🍳</div>
                  </div>
                  {/* Grocery items floating around */}
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      🥬
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      🍅
                    </div>
                  </div>
                  <div className="absolute top-1/2 -left-8 bg-white rounded-2xl p-3 shadow-lg">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      🥕
                    </div>
                  </div>
                  <div className="absolute bottom-8 -right-8 bg-white rounded-2xl p-3 shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      🍆
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
}
export default Footer;