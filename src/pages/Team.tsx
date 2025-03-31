
import Layout from '@/components/Layout';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "JIBIRILA HAMAN",
      title: "Chief Executive Officer",
      observation: "",
      imagePlaceholder: "Image placeholder - CEO"
    },
    {
      name: "HARRISON FUNII FUBE",
      title: "Project Chief",
      observation: "",
      imagePlaceholder: "Image placeholder - Project Chief"
    },
    {
      name: "YASMIN ALBAOU AMIRA",
      title: "Finance Officer",
      observation: "",
      imagePlaceholder: "Image placeholder - Finance Officer"
    },
    {
      name: "MUSA",
      title: "Staff Member",
      observation: "",
      imagePlaceholder: "Image placeholder - Staff Member"
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="page-header-title">Our Team</h1>
          <p className="page-header-subtitle">Meet the dedicated people behind ECO-ph</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Leadership Team</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Our team is comprised of passionate individuals dedicated to environmental conservation and sustainable community development in Cameroon.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                <div className="h-64 bg-eco-green-dark flex items-center justify-center text-white">
                  <p className="text-center px-4">{member.imagePlaceholder}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-eco-green">{member.name}</h3>
                  <p className="text-eco-green-light font-semibold mb-4">{member.title}</p>
                  {member.observation && <p className="text-gray-600 italic">{member.observation}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16 bg-eco-sage">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Our Staff</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Our dedicated staff works tirelessly to implement our projects and advance our mission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-eco-green flex items-center justify-center text-white">
                  <p className="text-center px-4">Image placeholder - Staff Member</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 text-eco-green">Staff Member Name</h3>
                  <p className="text-eco-green-light font-medium mb-3">Position</p>
                  <p className="text-gray-600">Brief description of their role and expertise.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-center">Join Our Team</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We're always looking for passionate individuals to join our cause. Whether you want to volunteer, intern, or apply for open positions, we'd love to hear from you.
          </p>
          <a 
            href="/contact" 
            className="bg-eco-green-light hover:bg-eco-green-dark text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Get Involved
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
