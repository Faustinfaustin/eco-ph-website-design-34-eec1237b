
import { Phone, Mail, MapPin, Facebook, Whatsapp } from 'lucide-react';

const ContactInfo = () => {
  return (
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
            <div>
              <a href="tel:+237658551999" className="hover:text-eco-green-light transition-colors block">
                +237 658 55 19 99
              </a>
              <a href="tel:+23778003585" className="hover:text-eco-green-light transition-colors block">
                +237 78 00 35 85
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a 
            href="https://www.facebook.com/ecophcm/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-eco-green text-white hover:bg-eco-green-light w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          >
            <Facebook size={18} />
          </a>
          <a 
            href="https://wa.me/23678003585" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-eco-green text-white hover:bg-eco-green-light w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          >
            <Whatsapp size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
