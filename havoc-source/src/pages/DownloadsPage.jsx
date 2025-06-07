import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import copyThatProduct from '../assets/copy-that-product.png';

const DownloadsPage = () => {
  const softwareVersions = [
    {
      id: 'free',
      name: 'Copy That 1.0 - Free Version',
      description: 'Basic file copying and management functionality for personal use.',
      size: '4.32 MB',
      features: [
        'Basic file copying',
        'Simple interface',
        'File verification'
      ]
    },
    {
      id: 'beta',
      name: 'Copy That 1.0 - Beta Version',
      description: 'Preview of upcoming features with community feedback integration.',
      size: '4.33 MB',
      features: [
        'All Free Version features',
        'Advanced copying options',
        'Batch processing',
        'Early access to new features'
      ]
    },
    {
      id: 'pro',
      name: 'Copy That 1.0 - Pro Version',
      description: 'Full-featured solution for professional use with advanced capabilities.',
      size: '4.35 MB',
      features: [
        'All Beta Version features',
        'Scheduled operations',
        'Priority support',
        'No ads or limitations'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">Downloads</h1>
          <p className="text-lg mb-8">
            Download the latest version of Copy That, our flagship file management utility.
            Choose the version that best suits your needs.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center shadow-md">
          <img src={copyThatProduct} alt="Copy That 1.0 Software Interface" className="max-w-full rounded" />
        </div>
      </section>

      <section className="space-y-8">
        {softwareVersions.map((version) => (
          <div 
            key={version.id} 
            className="border border-gray-300 rounded-lg p-6 transition-all hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{version.name}</h2>
                <p className="mb-4">{version.description}</p>
                <p className="text-sm mb-4">Size: <span className="font-semibold">{version.size}</span></p>
                
                <h3 className="font-semibold mb-2">Features:</h3>
                <ul className="list-disc pl-5 mb-4">
                  {version.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-shrink-0">
                <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
                  <Download size={18} />
                  Download
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
        <div>
          <h3 className="font-semibold mb-2">Windows</h3>
          <ul className="list-disc pl-5">
            <li>Windows 10 or later</li>
            <li>2 GB RAM</li>
            <li>50 MB free disk space</li>
            <li>.NET Framework 4.7.2 or later</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Previous Versions</h2>
        <p>
          Looking for older versions of our software? Please contact our support team for access to the archive.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Copy That Description</h2>
        <p className="mb-4">
          Copy That is a powerful file management utility designed to replace the standard Windows copy and paste functionality. 
          Built specifically for Windows 10 and newer operating systems, it offers a range of advanced features to streamline your workflow.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div>
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc pl-5">
              <li>Multi-threading support for faster file transfers</li>
              <li>Multiple progress indicators for detailed transfer monitoring</li>
              <li>Dark and light mode to match your system preferences</li>
              <li>Advanced file verification to ensure data integrity</li>
              <li>Customizable transfer settings for optimal performance</li>
              <li>Pause and resume functionality for large transfers</li>
              <li>Detailed transfer logs and statistics</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Screenshots:</h3>
            <div className="bg-gray-200 p-4 rounded-lg text-center h-48 flex items-center justify-center">
              <p className="text-gray-600">Space for your custom screenshots</p>
            </div>
          </div>
        </div>
        <p>
          Whether you're a casual user or a professional who handles large amounts of data daily, 
          Copy That provides the tools you need to manage your files efficiently and reliably.
        </p>
      </section>
    </div>
  );
};

export default DownloadsPage;

