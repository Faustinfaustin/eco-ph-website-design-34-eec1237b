
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, BookOpen, Globe } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="section-title text-2xl md:text-3xl">About ECO-ph</h2>
            <p className="mb-4 md:mb-6 text-sm md:text-base">
              Environment Conservation for Public Health (ECO-ph) is a Cameroonian
              non-governmental civil society organization dedicated to promoting
              sustainable environmental practices and community development.
            </p>
            <p className="mb-4 md:mb-6 text-sm md:text-base">
              Created on April 5th 2014, by community conservators in Bambui village –
              North West Region of Cameroon and became operational on the 4th of August
              2014 as a non-governmental, non-political and non-profit making
              organization.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-eco-green-light hover:text-eco-green font-semibold text-sm md:text-base"
            >
              <span>Read more about us</span>
              <ArrowRight size={isMobile ? 14 : 16} className="ml-2" />
            </Link>
          </div>
          <div className="bg-eco-sage rounded-lg p-5 md:p-8 shadow-lg mt-4 md:mt-0">
            <h3 className="section-subtitle text-xl md:text-2xl">Our Focus Areas</h3>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li className="flex items-start">
                <Leaf className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 text-eco-green-light mr-2 md:mr-3 mt-0.5 md:mt-1" />
                <span>Environmental conservation and restoration</span>
              </li>
              <li className="flex items-start">
                <BookOpen className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 text-eco-green-light mr-2 md:mr-3 mt-0.5 md:mt-1" />
                <span>Community-led Forest management</span>
              </li>
              <li className="flex items-start">
                <Users className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 text-eco-green-light mr-2 md:mr-3 mt-0.5 md:mt-1" />
                <span>Sustainable livelihoods</span>
              </li>
              <li className="flex items-start">
                <Globe className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 text-eco-green-light mr-2 md:mr-3 mt-0.5 md:mt-1" />
                <span>Climate change mitigation and adaptation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
