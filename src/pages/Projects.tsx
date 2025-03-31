
import Layout from '@/components/Layout';

const ProjectsPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="page-header-title">Our Projects</h1>
          <p className="page-header-subtitle">Discover our work in environmental conservation and community development</p>
        </div>
      </section>

      {/* COBALAM Project */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">Community-led Landscape Management (COBALAM)</h2>
            <p className="text-lg italic mb-6">Project duration: 2020-2025</p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="section-subtitle">Project Title</h3>
              <p className="mb-6">
                "Removing barriers to biodiversity conservation, land restoration, and
                sustainable forest management through COmmunity-BAsed LAndscape Management -
                COBALAM"
              </p>
              
              <h3 className="section-subtitle">Assessment of Main Actors</h3>
              <h4 className="font-semibold text-lg mb-2">Aim of the Project:</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Facilitate the participation of multi-sector stakeholders in the municipality of Santa
                  during the set-up of the Landscape Management Board (LMB) for the Mounts
                  Bamboutos Landscape in the Western Highlands of Cameroon (WHC)
                </li>
              </ul>
              
              <h4 className="font-semibold text-lg mb-2">Results Attained:</h4>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  A total number of six Community Based Organizations (CBO), six Civil Society
                  Organizations (CSO), thirty-four Common Initiative Groups (CIG), five cooperative
                  societies (COOP), and thirteen small Medium Size Enterprises (SME) were identified
                  and assessed (see Annex A transcript list). Eighty-four (84) persons belonging to these
                  groups were identified.
                </li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-64 bg-eco-green-dark rounded-lg flex items-center justify-center text-white">
                  <p className="text-center px-4">Plate 1: Number of respondents affiliated to different organizations</p>
                </div>
                <div className="h-64 bg-eco-green-dark rounded-lg flex items-center justify-center text-white">
                  <p className="text-center px-4">Plate 2: Total number of men and women directly involved</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="section-subtitle">Mobilization for Landscape Management Board</h3>
              <h4 className="font-semibold text-lg mb-2">Aim of the Project:</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Sensitize main actors in CBOs, CSOs, CIGs, and SMEs in the Santa
                  Municipality with direct impacts on the mounts Bamboutos landscape
                </li>
              </ul>
              
              <h4 className="font-semibold text-lg mb-2">Results Obtained:</h4>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  Fifty-six from 56 different groups (37 male and 19 female) were sensitized on
                  community-based landscape management and the necessity to create a Landscape
                  Management Board (LMB) and a Local Landscape Management Commission
                  (LLMC) for the Western Highlands of Cameroon (WHC).
                </li>
              </ul>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-eco-green">
                  <thead className="bg-eco-green text-white">
                    <tr>
                      <th className="py-2 px-4 border-b">VILLAGE</th>
                      <th className="py-2 px-4 border-b" colSpan={2}>PARTICIPANTS</th>
                      <th className="py-2 px-4 border-b" colSpan={3}>AGE GROUPS</th>
                    </tr>
                    <tr>
                      <th className="py-2 px-4 border-b"></th>
                      <th className="py-2 px-4 border-b">Male</th>
                      <th className="py-2 px-4 border-b">Female</th>
                      <th className="py-2 px-4 border-b">18-35 years</th>
                      <th className="py-2 px-4 border-b">36-60 years</th>
                      <th className="py-2 px-4 border-b">&gt;60 years</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">Mbei</td>
                      <td className="py-2 px-4 text-center">12</td>
                      <td className="py-2 px-4 text-center">9</td>
                      <td className="py-2 px-4 text-center">9</td>
                      <td className="py-2 px-4 text-center">12</td>
                      <td className="py-2 px-4 text-center">0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">Awing</td>
                      <td className="py-2 px-4 text-center">14</td>
                      <td className="py-2 px-4 text-center">5</td>
                      <td className="py-2 px-4 text-center">7</td>
                      <td className="py-2 px-4 text-center">9</td>
                      <td className="py-2 px-4 text-center">3</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">Akum</td>
                      <td className="py-2 px-4 text-center">11</td>
                      <td className="py-2 px-4 text-center">5</td>
                      <td className="py-2 px-4 text-center">6</td>
                      <td className="py-2 px-4 text-center">8</td>
                      <td className="py-2 px-4 text-center">2</td>
                    </tr>
                    <tr className="bg-eco-sage font-semibold">
                      <td className="py-2 px-4">TOTAL</td>
                      <td className="py-2 px-4 text-center">37</td>
                      <td className="py-2 px-4 text-center">19</td>
                      <td className="py-2 px-4 text-center">21</td>
                      <td className="py-2 px-4 text-center">30</td>
                      <td className="py-2 px-4 text-center">5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="h-64 bg-eco-green-dark rounded-lg flex items-center justify-center text-white">
                <p className="text-center px-4">Image placeholder - Mobilization photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Rehabilitation Project */}
      <section className="py-16 bg-eco-sage">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">Bridge Rehabilitation Along IRAD-NTAMBANG Road</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="section-subtitle">Aim of the Project</h3>
              <p className="mb-4">Make the road linking IRAD to Nta'mbang quarter accessible to all road users through the:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Construction of a 5m long single lane Road bridge over "IRAD-NTA'BANG" stream crossing.</li>
                <li>Save the lives of young school pupil bearing the risk to tread over the decayed and collapsing mud bridge.</li>
                <li>Create Outlet for Farm to Market produce such as Maize, Beans, and Tubers.</li>
                <li>Create jobs for building and construction technicians through this project.</li>
              </ul>
              
              <h3 className="section-subtitle">Implemented Activities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/c744eaa3-b691-47a2-aa5f-9a1417051d7c.png" 
                    alt="Old broken bridge" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-eco-sage bg-opacity-20 text-center">
                    <p className="text-sm font-medium">Fig1: Old broken bridge</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/a46e7ae0-69d8-4612-b24e-4de14f0c919c.png" 
                    alt="Cleaning and delivery of work materials" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-eco-sage bg-opacity-20 text-center">
                    <p className="text-sm font-medium">Fig2: Cleaning and delivery of work materials</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/ef5067b9-84b1-4f87-9384-7b46ecc5e63e.png" 
                    alt="Preparing concrete and other materials" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-eco-sage bg-opacity-20 text-center">
                    <p className="text-sm font-medium">Fig3: Preparing concrete & other materials</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/548d00ff-5984-4922-8537-53b2a0b5272d.png" 
                    alt="Work on river floor and positioning of rings" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-eco-sage bg-opacity-20 text-center">
                    <p className="text-sm font-medium">Fig4: Work on river floor & positioning of rings</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/e660e61e-16ca-441c-97ed-ac95de3a926b.png" 
                    alt="Work on bridge arms" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-eco-sage bg-opacity-20 text-center">
                    <p className="text-sm font-medium">Fig5: Work on bridge arms</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/9d86543f-3769-4950-b948-7dd881b34dee.png" 
                    alt="Cross section view of bridge after filling" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-eco-sage bg-opacity-20 text-center">
                    <p className="text-sm font-medium">Fig6: Cross section view of bridge after filling</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/4fa057b8-c97b-460e-8f0e-a5f8ebd82f41.png" 
                    alt="Overview after filling" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-eco-sage bg-opacity-20 text-center">
                    <p className="text-sm font-medium">Fig7: Overview after filling</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/9357f098-94da-42ea-84c2-f3eea03c740e.png" 
                    alt="Uncompleted arm" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-eco-sage bg-opacity-20 text-center">
                    <p className="text-sm font-medium">Fig8: Uncompleted arm</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/b382ff7b-f41e-44dc-ab37-ab61e176a8cc.png" 
                    alt="Overview" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-eco-sage bg-opacity-20 text-center">
                    <p className="text-sm font-medium">Fig9: Overview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">Environment</h2>
            <h3 className="section-subtitle">MUNKOU-NGUROORE Catchment Protection, Reforestation, and Pasture Improvement Project</h3>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h4 className="font-semibold text-lg mb-2">Aim of the Project:</h4>
              <ul className="list-disc pl-6 mb-6">
                <li>The project will increase the quantity and quality of drinking water</li>
                <li>Sustain and enhance water generation status for both present and future needs</li>
                <li>It will conserve our environment and improve public health efforts</li>
              </ul>
              
              <h4 className="font-semibold text-lg mb-2">Activities:</h4>
              <ul className="list-disc pl-6 mb-6">
                <li>Construct water catchment protection fencing around the perimeters of five (05) Catchments in Bambui village</li>
                <li>Plan a total of 10,000 water friendly trees around the perimeters of these water catchments. That is 150 trees / catchments on average.</li>
                <li>Fire tracing to protect catchments from wild bush fire</li>
                <li>Propose a water conservation plan for Tubah Sub-Division with components on:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Water levels and eco-system monitoring to ensure sustainability</li>
                    <li>Enforcement measures to curb poor farming methods leading to deforestation</li>
                    <li>Incentives to property owners who practice water conservation activities</li>
                  </ul>
                </li>
              </ul>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                  <div key={index} className="h-40 bg-eco-green-dark rounded-lg flex items-center justify-center text-white">
                    <p className="text-center px-2">Catchment Project Image {index}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Projects */}
      <section className="py-16 bg-eco-sage">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">Education and Capacity Building Programme</h2>
            <h3 className="section-subtitle">Public Awareness Campaign and Workshops</h3>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="font-semibold text-lg mb-2">Aim of the Project:</h4>
              <p className="mb-6">
                Raise public awareness and train trainers on the centrality of water resource,
                and sustainable use of our natural resources.
              </p>
              
              <h4 className="font-semibold text-lg mb-2">Activities:</h4>
              <ul className="list-disc pl-6 mb-6">
                <li>Discussion panels</li>
                <li>Workshops</li>
                <li>Seminars</li>
                <li>Sensitization sessions in primary schools, meeting houses, churches, and other public gatherings</li>
              </ul>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="h-48 bg-eco-green-dark rounded-lg flex items-center justify-center text-white">
                    <p className="text-center px-2">Education Project Image {index}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
