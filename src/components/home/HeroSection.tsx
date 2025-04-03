
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[60vh] md:h-[80vh] flex items-center"
      style={{
        backgroundImage: "url('/lovable-uploads/dd235426-be37-4bbf-a452-71db7e79a30a.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-xl md:max-w-3xl animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Conserving Nature for Public Health
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
            Dedicated to promoting sustainable environmental practices and community development in Cameroon.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Link
              to="/about"
              className="bg-eco-green-light hover:bg-eco-green-dark text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-eco-sage text-eco-green font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
