
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, BookOpen, Globe } from 'lucide-react';

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('/lovable-uploads/90149dfe-0db2-4dba-8986-0fdf880a7693.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Conserving Nature for Public Health
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Dedicated to promoting sustainable environmental practices and community development in Cameroon.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="bg-eco-green-light hover:bg-eco-green-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-eco-sage text-eco-green font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="section-title">About ECO-ph</h2>
              <p className="mb-6">
                Environment Conservation for Public Health (ECO-ph) is a Cameroonian
                non-governmental civil society organization dedicated to promoting
                sustainable environmental practices and community development.
              </p>
              <p className="mb-6">
                Created on April 5th 2014, by community conservators in Bambui village –
                North West Region of Cameroon and became operational on the 4th of August
                2014 as a non-governmental, non-political and non-profit making
                organization.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-eco-green-light hover:text-eco-green font-semibold"
              >
                <span>Read more about us</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="bg-eco-sage rounded-lg p-8 shadow-lg">
              <h3 className="section-subtitle">Our Focus Areas</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Leaf className="flex-shrink-0 h-6 w-6 text-eco-green-light mr-3 mt-1" />
                  <span>Environmental conservation and restoration</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="flex-shrink-0 h-6 w-6 text-eco-green-light mr-3 mt-1" />
                  <span>Community-led Forest management</span>
                </li>
                <li className="flex items-start">
                  <Users className="flex-shrink-0 h-6 w-6 text-eco-green-light mr-3 mt-1" />
                  <span>Sustainable livelihoods</span>
                </li>
                <li className="flex items-start">
                  <Globe className="flex-shrink-0 h-6 w-6 text-eco-green-light mr-3 mt-1" />
                  <span>Climate change mitigation and adaptation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-eco-sage">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Featured Projects</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Discover some of our ongoing and past projects aimed at biodiversity conservation, sustainable forest management, and community development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <div className="h-48 bg-eco-green-dark overflow-hidden">
                <img 
                  src="/lovable-uploads/b24f2d37-c3b4-473e-8938-0af41b3ced6c.png" 
                  alt="Community-led Landscape Management Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-eco-green">Community-led Landscape Management</h3>
                <p className="text-gray-700 mb-4">
                  Removing barriers to biodiversity conservation, land restoration, and sustainable forest management through COmmunity-BAsed LAndscape Management.
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-eco-green-light hover:text-eco-green font-semibold"
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <div className="h-48 bg-eco-green-dark overflow-hidden">
                <img 
                  src="/lovable-uploads/5221a34f-959e-4869-95da-a1874aaf6577.png" 
                  alt="Bridge Rehabilitation Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-eco-green">Bridge Rehabilitation Project</h3>
                <p className="text-gray-700 mb-4">
                  Making roads accessible through bridge construction, creating outlets for farm produce, and generating local employment opportunities.
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-eco-green-light hover:text-eco-green font-semibold"
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <div className="h-48 bg-eco-green-dark overflow-hidden">
                <img 
                  src="/lovable-uploads/b2067f20-5d07-4a9c-bc3d-71a7232a9c56.png" 
                  alt="Catchment Protection & Reforestation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-eco-green">Catchment Protection & Reforestation</h3>
                <p className="text-gray-700 mb-4">
                  Increasing water quality and quantity by protecting catchments, planting water-friendly trees, and implementing conservation plans.
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-eco-green-light hover:text-eco-green font-semibold"
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-eco-green-light hover:bg-eco-green-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-eco-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Preserving Our Environment</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            We believe cooperation is a necessary tool for development. Partner with us to empower local communities and promote sustainable practices.
          </p>
          <Link
            to="/contact"
            className="bg-white hover:bg-eco-sage text-eco-green font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
