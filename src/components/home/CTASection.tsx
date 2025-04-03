
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-10 md:py-16 bg-eco-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Join Us in Preserving Our Environment</h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg mb-6 md:mb-8">
          We believe cooperation is a necessary tool for development. Partner with us to empower local communities and promote sustainable practices.
        </p>
        <Link
          to="/contact"
          className="bg-white hover:bg-eco-sage text-eco-green font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
