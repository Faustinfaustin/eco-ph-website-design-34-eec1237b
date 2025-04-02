
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const DonatePage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="page-header-title">Donate</h1>
          <p className="page-header-subtitle">Support our environmental conservation efforts</p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mx-auto">Your Support Makes a Difference</h2>
            <p className="text-lg mb-8">
              Your contribution helps us protect the environment and improve the lives of local communities in Cameroon. 
              Every donation, no matter the size, brings us one step closer to a sustainable future.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-eco-green mb-6">Donation Options</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Button size="lg" className="bg-eco-green-light hover:bg-eco-green-dark">
                  <Heart className="mr-2" /> $25
                </Button>
                <Button size="lg" className="bg-eco-green-light hover:bg-eco-green-dark">
                  <Heart className="mr-2" /> $50
                </Button>
                <Button size="lg" className="bg-eco-green-light hover:bg-eco-green-dark">
                  <Heart className="mr-2" /> $100
                </Button>
              </div>
              
              <div className="mb-8">
                <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Custom Amount
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    id="custom-amount"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-eco-green focus:border-eco-green"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
              
              <Button size="lg" className="w-full bg-eco-green hover:bg-eco-green-dark">
                Donate Now
              </Button>
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-bold text-eco-green mb-4">Other Ways to Support Us</h3>
              <ul className="list-disc pl-5 space-y-2 mb-8">
                <li>Volunteer your time and skills</li>
                <li>Spread awareness about our cause</li>
                <li>Partner with us on conservation projects</li>
                <li>Donate supplies and equipment</li>
              </ul>
              
              <p className="italic">
                For more information about how you can support our work, please contact us at{" "}
                <a href="mailto:ecp.environment@gmail.com" className="text-eco-green-light hover:underline">
                  ecp.environment@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DonatePage;
