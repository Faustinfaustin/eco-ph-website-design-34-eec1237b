
import Layout from '@/components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="page-header-title">About Us</h1>
          <p className="page-header-subtitle">Our History, Mission, and Values</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="mb-6">
                Environment Conservation for Public Health (ECO-ph) is a Cameroonian
                non-governmental civil society organization dedicated to promoting
                sustainable environmental practices and community development.
              </p>
              <p className="mb-6">
                Created on April 5th 2014, by community conservators in Bambui village –
                North West Region of Cameroon and became operational on the 4th of August
                2014 as a non-governmental, non-political and non-profit making
                organization with a mission of promoting sustainable environmental
                practices and community development.
              </p>
              <p className="mb-6">
                ECO-ph is committed in enhancing and enabling environmental protection
                and natural resource conservation to promote sustainable future and socio-
                economic enhancement of local communities within Tubah municipality and
                Cameroon as a whole. In order to achieve this, ECO-ph is devoted to work with
                different range of stakeholders to foster cooperation and joint work for the
                purpose of achieving sustainable future and gain recognition.
              </p>
            </div>
            <div className="bg-eco-sage rounded-lg p-8 shadow-lg">
              <h3 className="section-subtitle">Our Focus Areas</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eco-green-light mr-3 mt-1 flex items-center justify-center text-white font-bold text-sm">1</div>
                  <span>Environmental conservation and restoration</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eco-green-light mr-3 mt-1 flex items-center justify-center text-white font-bold text-sm">2</div>
                  <span>Community-led Forest management</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eco-green-light mr-3 mt-1 flex items-center justify-center text-white font-bold text-sm">3</div>
                  <span>Sustainable livelihoods</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eco-green-light mr-3 mt-1 flex items-center justify-center text-white font-bold text-sm">4</div>
                  <span>Climate change mitigation and adaptation</span>
                </li>
              </ul>
              <div className="h-48 bg-eco-green-dark rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/d3ff4332-a084-4219-ac78-938d5a8a909f.png" 
                  alt="Community-led Forest management" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-eco-sage">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="section-subtitle">Our Vision</h2>
              <p className="mb-4">
                A Cameroon where communities live in harmony with nature, protecting biodiversity while improving livelihoods through sustainable practices.
              </p>
              <div className="h-48 bg-eco-green-dark rounded-lg overflow-hidden mt-6">
                <img 
                  src="/lovable-uploads/b16f9cb6-8f0e-4c9a-a7dc-f4f82eba770a.png" 
                  alt="Vision - Child with plant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="section-subtitle">Our Mission</h2>
              <p className="mb-4">
                To enhance and enable environmental protection and natural resource conservation to promote a sustainable future and socio-economic enhancement of local communities within Tubah municipality and Cameroon as a whole.
              </p>
              <div className="h-48 bg-eco-green-dark rounded-lg overflow-hidden mt-6">
                <img 
                  src="/lovable-uploads/f8c42a1d-b1ba-44eb-b910-89f3bdaef370.png" 
                  alt="Mission - Community meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperation and Membership */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Cooperation & Membership</h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-8 text-lg">
              We consider cooperation as necessary tool for development process. We
              maintain partnership with different stakeholders, being aware of the
              importance of every single stake: local communities, administrative and
              traditional authorities, other organizations, and individuals at national and
              international level. The organization is committed to empowering local
              communities to take ownership of their natural resources and promoting
              sustainable development practices.
            </p>
            <div className="bg-eco-sage p-8 rounded-lg shadow-lg">
              <h3 className="section-subtitle mb-6">Our Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a 
                  href="https://www.unep.org/gef/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg overflow-hidden bg-white p-2 hover:shadow-lg transition"
                >
                  <img 
                    src="/lovable-uploads/ab5e2257-5f97-47fe-b358-052795774db8.png"
                    alt="GEF Logo"
                    className="object-contain h-16"
                  />
                </a>
                <a 
                  href="https://www.rainforest-alliance.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg overflow-hidden bg-white p-2 hover:shadow-lg transition"
                >
                  <img
                    src="/lovable-uploads/be2d0198-1b56-4603-b774-ee3f10cc6e7d.png"
                    alt="Rainforest Alliance Logo"
                    className="object-contain h-16"
                  />
                </a>
                <a
                  href="https://www.unep.org/node"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg overflow-hidden bg-white p-2 hover:shadow-lg transition"
                >
                  <img
                    src="/lovable-uploads/f1263ce4-9dae-4591-b797-e6e602ba5644.png"
                    alt="UN Environment Programme Logo"
                    className="object-contain h-16"
                  />
                </a>
                <a
                  href="https://minepded.gov.cm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg overflow-hidden bg-white p-2 hover:shadow-lg transition"
                >
                  <img
                    src="/lovable-uploads/4abe85d1-3705-45a1-930a-2b2f4666212e.png"
                    alt="MINEPDED Logo"
                    className="object-contain h-16"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
