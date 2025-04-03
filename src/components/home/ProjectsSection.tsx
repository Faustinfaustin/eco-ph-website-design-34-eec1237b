
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ProjectsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-10 md:py-16 bg-eco-sage">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title mx-auto text-2xl md:text-3xl">Featured Projects</h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg">
            Discover some of our ongoing and past projects aimed at biodiversity conservation, sustainable forest management, and community development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
            <div className="h-40 sm:h-48 bg-eco-green-dark overflow-hidden">
              <img 
                src="/lovable-uploads/b24f2d37-c3b4-473e-8938-0af41b3ced6c.png" 
                alt="Community-led Landscape Management Project" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-eco-green">Community-led Landscape Management</h3>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Removing barriers to biodiversity conservation, land restoration, and sustainable forest management through COmmunity-BAsed LAndscape Management.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center text-eco-green-light hover:text-eco-green font-semibold text-sm md:text-base"
              >
                <span>Learn more</span>
                <ArrowRight size={isMobile ? 14 : 16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
            <div className="h-40 sm:h-48 bg-eco-green-dark overflow-hidden">
              <img 
                src="/lovable-uploads/5221a34f-959e-4869-95da-a1874aaf6577.png" 
                alt="Bridge Rehabilitation Project" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-eco-green">Bridge Rehabilitation Project</h3>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Making roads accessible through bridge construction, creating outlets for farm produce, and generating local employment opportunities.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center text-eco-green-light hover:text-eco-green font-semibold text-sm md:text-base"
              >
                <span>Learn more</span>
                <ArrowRight size={isMobile ? 14 : 16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform mt-0 sm:col-span-2 lg:col-span-1 lg:mt-0">
            <div className="h-40 sm:h-48 bg-eco-green-dark overflow-hidden">
              <img 
                src="/lovable-uploads/b2067f20-5d07-4a9c-bc3d-71a7232a9c56.png" 
                alt="Catchment Protection & Reforestation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-eco-green">Catchment Protection & Reforestation</h3>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Increasing water quality and quantity by protecting catchments, planting water-friendly trees, and implementing conservation plans.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center text-eco-green-light hover:text-eco-green font-semibold text-sm md:text-base"
              >
                <span>Learn more</span>
                <ArrowRight size={isMobile ? 14 : 16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Link
            to="/projects"
            className="bg-eco-green-light hover:bg-eco-green-dark text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
