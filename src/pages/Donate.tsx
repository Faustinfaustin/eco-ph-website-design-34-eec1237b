
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const Donate = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Support Our Mission</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-8">
            Your donations help us continue our work for environmental conservation and community development in Cameroon.
            Every contribution, no matter the size, makes a difference in our efforts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <DonationCard
              amount="25"
              title="Basic Supporter"
              description="Provides basic supplies for one community workshop"
            />
            <DonationCard
              amount="50"
              title="Key Contributor"
              description="Funds a week of environmental education in schools"
              highlight={true}
            />
            <DonationCard
              amount="100"
              title="Major Donor"
              description="Supports a complete reforestation project"
            />
          </div>
          
          <div className="bg-soft-purple p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">Other Ways to Support</h2>
            <p className="text-center mb-4">
              In addition to financial donations, you can support our work through:
            </p>
            <ul className="list-disc pl-6 mb-4 max-w-xl mx-auto">
              <li className="mb-2">Volunteering your time and skills</li>
              <li className="mb-2">Donating equipment or materials</li>
              <li className="mb-2">Corporate partnerships and sponsorships</li>
              <li>Spreading awareness about our mission</li>
            </ul>
            <div className="text-center mt-6">
              <Button className="bg-primary-purple hover:bg-secondary-purple">
                Contact Us to Learn More
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">For Bank Transfers</h2>
            <p className="mb-6">
              For larger donations or bank transfers, please use the following details:
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm inline-block text-left">
              <p><strong>Bank Name:</strong> Community Bank of Cameroon</p>
              <p><strong>Account Name:</strong> ECO-ph Association</p>
              <p><strong>Account Number:</strong> 0987654321</p>
              <p><strong>SWIFT/BIC:</strong> CBCMCMXX</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const DonationCard = ({ amount, title, description, highlight = false }) => {
  return (
    <Card className={`${highlight ? 'border-primary-purple' : ''}`}>
      <CardHeader className={`${highlight ? 'bg-soft-purple' : ''}`}>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardDescription className="text-center text-2xl font-bold">${amount}</CardDescription>
      </CardHeader>
      <CardContent className="text-center py-6">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button className="bg-primary-purple hover:bg-secondary-purple">
          Donate ${amount}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Donate;
