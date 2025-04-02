
import Layout from '@/components/Layout';
import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="page-header-title">Contact Us</h1>
          <p className="page-header-subtitle">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-lg mb-8">
                Do you have any questions about our projects or want to collaborate? We'd love to hear from you. Fill out the form, and one of our team members will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-eco-green-light mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p>Bambui village, North West Region, Cameroon</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-eco-green-light mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:ecp.environment@gmail.com" className="hover:text-eco-green-light transition-colors">
                      ecp.environment@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-eco-green-light mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href="tel:+23778003585" className="hover:text-eco-green-light transition-colors">
                      +237 78 00 35 85
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-eco-green text-white hover:bg-eco-green-light w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-eco-green text-white hover:bg-eco-green-light w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-eco-green text-white hover:bg-eco-green-light w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-eco-green mb-6">Send Us a Message</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green focus:border-eco-green transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green focus:border-eco-green transition-colors"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green focus:border-eco-green transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green focus:border-eco-green transition-colors"
                      placeholder="Please write your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-eco-green-light hover:bg-eco-green-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-eco-green-dark rounded-lg h-[400px] flex items-center justify-center text-white">
            <p className="text-center text-lg">
              Map placeholder - This would be replaced with an actual Google Maps or other mapping service.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
