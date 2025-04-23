import Layout from '@/components/Layout';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const ContactPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header bg-soft-yellow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="page-header-title">Contact Us</h1>
          <p className="page-header-subtitle">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg h-[400px] overflow-hidden">
            <img 
              src="/lovable-uploads/047491c7-b5bc-4e76-bab4-bc5cffef3cc2.png"
              alt="Map of Bambui village, North West Region, Cameroon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
