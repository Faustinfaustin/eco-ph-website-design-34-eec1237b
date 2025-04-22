
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
            
           
              
              {/* Bank Transfer Options */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Bank Transfer Details</h4>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Bank:</TableCell>
                      <TableCell>SOCIETE GENERALE CAMEROUN (SGC)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Account Name:</TableCell>
                      <TableCell>Ntarinkon Cooperative Credit Union Ltd. MFE</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">SWIFT Code:</TableCell>
                      <TableCell>SGCMCMCX</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Bank Code:</TableCell>
                      <TableCell>10003</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Branch Code:</TableCell>
                      <TableCell>01600</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Beneficiary Account Number:</TableCell>
                      <TableCell>16160006492</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Key:</TableCell>
                      <TableCell>34</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">IBAN:</TableCell>
                      <TableCell>34</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Currency:</TableCell>
                      <TableCell>XAF</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
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

