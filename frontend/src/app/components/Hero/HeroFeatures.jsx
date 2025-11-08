// components/HeroFeatures.jsx
const HeroFeatures = () => {
  const categories = [
    { id: 'groceries', name: 'Groceries', icon: '🛒', count: 342 },
    { id: 'pharmacy', name: 'Pharmacy', icon: '💊', count: 127 },
    { id: 'restaurants', name: 'Food & Dining', icon: '🍴', count: 289 },
    { id: 'services', name: 'Services', icon: '🔧', count: 156 },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥', count: 98 },
    { id: 'electronics', name: 'Electronics', icon: '📱', count: 203 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#37353E] mb-4">
            Popular Categories
          </h2>
          <p className="text-xl text-[#44444E] max-w-2xl mx-auto">
            Explore the most sought-after local businesses in your area
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group text-center p-6 rounded-2xl hover:bg-[#D3DAD9] transition-all cursor-pointer border border-transparent hover:border-[#715A5A]/20"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-semibold text-[#37353E] mb-2">{category.name}</h3>
              <div className="text-sm text-[#715A5A] font-medium">
                {category.count} listings
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroFeatures;