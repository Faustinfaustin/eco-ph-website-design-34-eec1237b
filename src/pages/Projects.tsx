import Layout from '@/components/Layout';

const projectImages1 = [
  '/lovable-uploads/0388e16a-19b2-41f6-8fd2-7605de2df561.png',
  '/lovable-uploads/16f6e220-1767-4ccf-9455-d2e1b29028c7.png',
  '/lovable-uploads/1453deff-7127-4bea-b258-2af247150959.png',
  '/lovable-uploads/8d9c2dff-15e2-41af-bfc3-c432f869af6c.png',
  '/lovable-uploads/211832c8-a33a-44cd-962b-628b31a2c30f.png',
  '/lovable-uploads/4879adb1-b589-46e5-99df-dbe69002162d.png',
];

const projectImages2 = [
  '/lovable-uploads/633e2f21-f48b-414c-adff-1925276a7b69.png',
  '/lovable-uploads/15eb46d5-2acc-48b6-aa9f-f91562c3fc07.png',
  '/lovable-uploads/8ac100c1-f520-490b-a8cb-d7f0e726b7fe.png',
  '/lovable-uploads/e20dfadd-8a2f-4c1e-9c78-9cf949a13208.png',
  '/lovable-uploads/e4336498-49ac-4f2f-b1cf-7768a3441d96.png',
  '/lovable-uploads/7ff57949-6cf2-4487-a52a-1b906b3e0916.png',
  '/lovable-uploads/18fa9a5e-d590-4642-ada9-8a97cc49652f.png',
  '/lovable-uploads/08f9edf8-9817-4f22-8c06-23c28f0668c8.png',
];

const projectImages3 = [
  '/lovable-uploads/7d5e6051-b44c-4108-8fc7-1b851c85e971.png',
  '/lovable-uploads/4e677f1d-1cb0-446f-8dda-8d05935bce1b.png',
  '/lovable-uploads/f6578ba1-f7a9-4bb7-a9b1-c9fb4c67febc.png',
];

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
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/64268c27-c3ca-477f-8744-f79715f13e94.png"
                    alt="Chart showing number of respondents affiliated to different organizations"
                    className="w-full h-64 object-contain bg-white"
                  />
                  <p className="text-center p-3 bg-eco-sage bg-opacity-20">Plate 1: Number of respondents affiliated to different organizations</p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <div className="grid grid-cols-2 h-64">
                    <img 
                      src="/lovable-uploads/76f10f88-cfc0-47c0-9e1a-13df01b338cc.png"
                      alt="Road construction equipment"
                      className="w-full h-full object-cover"
                    />
                    <img 
                      src="/lovable-uploads/1e2fa79b-12a1-4a12-9fe9-dd36da0e6ad7.png"
                      alt="Lake landscape view"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center p-3 bg-eco-sage bg-opacity-20">Plate 2: Total number of men and women directly involved</p>
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/c0d17b08-525e-4d26-9f88-9a82c56d8eb0.png"
                    alt="Group photo with banner about Community-led Landscape Management"
                    className="w-full h-60 object-cover"
                  />
                  <p className="p-3 bg-eco-sage bg-opacity-20 text-center">Community members with COBALAM project banner</p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/b79a70e2-ad3d-4d32-bf17-5ade4686d3ce.png"
                    alt="Indoor training session with participants"
                    className="w-full h-60 object-cover"
                  />
                  <p className="p-3 bg-eco-sage bg-opacity-20 text-center">Community training session</p>
                </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
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
              
              <div className="mb-6">
                <h5 className="font-semibold text-lg text-center mb-4">Photos showing ECO-ph head office and water friendly tree nursery</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/63710fa6-8735-4961-aed5-db1d9b791a0c.png" 
                      alt="ECO-ph head office" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/70a2b8e1-b74f-41ee-b793-7fc3ed837dff.png" 
                      alt="Staff working in tree nursery" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/b1d30be3-7df3-473d-b7c2-299223061bb0.png" 
                      alt="Child with tree seedling" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                <h5 className="font-semibold text-lg text-center mb-4">Photos showing fire tracing around protected area and catchments</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/c3b2b850-4354-4964-8734-525d15283ee5.png" 
                      alt="Group working in nursery" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/57f52df4-a3eb-4dc7-870a-2749230be3ca.png" 
                      alt="Tree seedlings in bags" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/28746119-abb6-4d9a-ba51-a65b49ef00c6.png" 
                      alt="Project information sign" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                <h5 className="font-semibold text-lg text-center mb-4">Photos showing fire tracing around protected area and catchments</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/16d3cbd6-ec72-4d8e-9016-d8d03845489a.png" 
                      alt="Fire trace path" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/e9c52745-e0ea-4389-85cf-3005aeadb5b0.png" 
                      alt="Person maintaining fire trace" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/1f81a3cc-b9fc-4598-9158-6fa387017857.png" 
                      alt="Fire trace through vegetation" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
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
              
              <div className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/8c9b3d01-86c0-413b-9f44-4b2cf7377822.png" 
                      alt="Community gathering for capacity building" 
                      className="w-full h-60 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/85ce4edf-0332-4030-a815-ebfcd546d75e.png" 
                      alt="Indoor awareness session" 
                      className="w-full h-60 object-cover"
                    />
                  </div>
                </div>
                <p className="text-center italic mb-6">Photos showing capacity building on public awareness at Leide and Tchabbal sabga.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/89dcb5cf-b3a2-47b7-8a63-6281fd99d03f.png" 
                      alt="Community members gathered outside" 
                      className="w-full h-60 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/44773485-934e-4c83-a090-141377eb05b1.png" 
                      alt="Field visit to conservation area" 
                      className="w-full h-60 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Recent Projects in Bambui Village */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">Our Recent Projects in Bambui Village</h2>
            {/* 1.1.3. Tree nursery farm setup */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
              <h3 className="section-subtitle mb-2">
                1.1.3 Facilitate the set up and management of a tree nursery farm (COBALAM_NWR_Tubah_Bbui_N1_2023) in Bambui village for the reforestation of degraded areas of identified sacred forests with the participation of traditional authorities in Bambui Fondom
              </h3>
              <p className="mb-2"><span className="font-semibold underline">Output:</span> set up a community-based tree nursery farm and produce 29,500 seedlings of eleven indigenous tree species (2023-2024)</p>
              <p className="mb-3"><span className="font-semibold underline">Objective:</span> The general objective of the project was to facilitate the set up and management of a tree nursery farm for the production of tree seedlings. The seedlings shall be planted in degraded areas of identified Sacred forests as implementation of key conservation measure for the restoration of 215 ha of degraded areas of Sacred Forests and 340 ha of degraded areas of Water catchments in Bambui Village, Tubah Municipality in the North West Region of Cameroon.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <img src="/lovable-uploads/0388e16a-19b2-41f6-8fd2-7605de2df561.png" alt="tree nursery 1" className="w-full h-48 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/16f6e220-1767-4ccf-9455-d2e1b29028c7.png" alt="tree nursery 2" className="w-full h-48 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/1453deff-7127-4bea-b258-2af247150959.png" alt="tree nursery 3" className="w-full h-48 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/8d9c2dff-15e2-41af-bfc3-c432f869af6c.png" alt="tree nursery 4" className="w-full h-48 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/211832c8-a33a-44cd-962b-628b31a2c30f.png" alt="tree nursery 5" className="w-full h-48 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/4879adb1-b589-46e5-99df-dbe69002162d.png" alt="tree nursery 6" className="w-full h-48 object-cover rounded-lg shadow" />
              </div>
            </div>
            {/* 1.1.4. Restoration of degraded areas */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
              <h3 className="section-subtitle mb-2">
                1.1.4 Restoration of degraded areas of identified sacred forests and water catchments in Bambui village
              </h3>
              <p className="mb-2"><span className="font-semibold underline">Output:</span> Improving the conservation and sustainable management of 245ha of sacred forests and water catchments in Bambui Fondom </p>
              <p className="mb-3"><span className="font-semibold underline">Activity:</span> Accompany the local community in planting and monitoring of 29,376 tree seedlings in degraded areas of 5 identified sacred forests, and 3 water catchments to restore 245 ha in Bambui village - Tubah municipality</p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6">
                <img src="/lovable-uploads/633e2f21-f48b-414c-adff-1925276a7b69.png" alt="sacred forest 1" className="w-full h-44 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/15eb46d5-2acc-48b6-aa9f-f91562c3fc07.png" alt="sacred forest 2" className="w-full h-44 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/8ac100c1-f520-490b-a8cb-d7f0e726b7fe.png" alt="sacred forest 3" className="w-full h-44 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/e20dfadd-8a2f-4c1e-9c78-9cf949a13208.png" alt="sacred forest 4" className="w-full h-44 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/e4336498-49ac-4f2f-b1cf-7768a3441d96.png" alt="sacred forest 5" className="w-full h-44 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/7ff57949-6cf2-4487-a52a-1b906b3e0916.png" alt="sacred forest 6" className="w-full h-44 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/18fa9a5e-d590-4642-ada9-8a97cc49652f.png" alt="sacred forest 7" className="w-full h-44 object-cover rounded-lg shadow" />
                <img src="/lovable-uploads/08f9edf8-9817-4f22-8c06-23c28f0668c8.png" alt="sacred forest 8" className="w-full h-44 object-cover rounded-lg shadow" />
              </div>
            </div>
            {/* 1.1.5. Geo mapping of Sacred Forests */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
              <h3 className="section-subtitle mb-2">1.1.5 Geo mapping of Sacred Forests and water catchments</h3>
              <p className="mb-2 font-medium underline">Objectives:</p>
              <ul className="list-disc pl-6 mb-2">
                <li>To create accurate maps of the sacred forests</li>
                <li>To identify and document key features, including water sources, trails, and sacred sites</li>
                <li>To provide a valuable tool for conservation and management efforts</li>
              </ul>
              <p className="mb-2 font-medium underline">Methodology:</p>
              <ul className="list-disc pl-6 mb-2">
                <li>Group discussions and sketching of mental maps at the Fons palace</li>
                <li>Field Data Collection: A team of surveyors and local guides conducted field data collection using GPS devices and mobile apps.</li>
                <li>Remote Sensing: Satellite imagery and aerial photographs were analysed to supplement field data and provide additional context.</li>
                <li>Data Processing: Collected data was processed using Geographic Information System (GIS) software to create a detailed map.</li>
              </ul>
              <p className="mb-1"><span className="font-semibold underline">Key Findings:</span></p>
              <ul className="list-disc pl-6">
                <li>Sacred Forest Boundaries: The mapping exercise revealed that the four sacred forests mapped cover an area of approximately 106.1 hectares. </li>
                <li>Key Features: The maps identified several key features, including 22 water sources, and 9 sacred sites.</li>
                <li>Conservation Status: The mapping exercise highlighted areas of high conservation value, including rare plant species and habitats.</li>
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <img src="/lovable-uploads/5a9fccd2-a2e4-4b4c-839f-e8a59154a7fd.png" alt="Sacred Forest Munkou Watershed" className="w-full h-56 object-cover rounded" />
                <img src="/lovable-uploads/a6ac3cdb-ff2d-4175-aefb-25c5aa75a117.png" alt="Atunui Sacred Forest and Water Catchment" className="w-full h-56 object-cover rounded" />
                <img src="/lovable-uploads/05185ff0-edd3-44a0-97bd-ce54809fa42a.png" alt="Fegho Sacred Forest Ntafensa Quarter" className="w-full h-56 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-10 bg-eco-sage border-t mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://www.unep.org/gef/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              title="GEF"
            >
              <img
                src="/lovable-uploads/1453deff-7127-4bea-b258-2af247150959.png"
                alt="GEF"
                className="h-20 w-auto mx-auto transition-transform hover:scale-110 drop-shadow-xl"
              />
            </a>
            <a
              href="https://www.rainforest-alliance.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              title="Rainforest Alliance"
            >
              <img
                src="/lovable-uploads/211832c8-a33a-44cd-962b-628b31a2c30f.png"
                alt="Rainforest Alliance"
                className="h-20 w-auto mx-auto transition-transform hover:scale-110 drop-shadow-xl"
              />
            </a>
            <a
              href="https://www.unep.org/node"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              title="UN Environment Programme"
            >
              <img
                src="/lovable-uploads/4879adb1-b589-46e5-99df-dbe69002162d.png"
                alt="UN Environment Programme"
                className="h-20 w-auto mx-auto transition-transform hover:scale-110 drop-shadow-xl"
              />
            </a>
            <a
              href="https://minepded.gov.cm/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              title="MINEPDED"
            >
              <img
                src="/lovable-uploads/16f6e220-1767-4ccf-9455-d2e1b29028c7.png"
                alt="MINEPDED"
                className="h-20 w-auto mx-auto transition-transform hover:scale-110 drop-shadow-xl"
              />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
