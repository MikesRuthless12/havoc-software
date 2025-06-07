import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import copyThatProduct from '../assets/copy-that-product.png';
import havocLogo from '../assets/havoc-logo.png';

const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <img src={havocLogo} alt="Havoc Software Logo" className="h-16 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Havoc Software</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Innovative software solutions designed to streamline your workflow and boost productivity
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-black hover:bg-gray-800 text-white">
            <Link to="/downloads">Download Now</Link>
          </Button>
          <Button asChild variant="outline" className="border-black text-black hover:bg-gray-100">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Featured Product */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Introducing Copy That 1.0</h2>
          <p className="mb-4">
            Our flagship file management and copying utility designed to make your workflow smoother and more efficient. 
            With Copy That, you can easily manage, transfer, and organize your files with just a few clicks.
          </p>
          <p className="mb-6">
            Available in Free, Beta, and Pro versions to suit your needs and budget. Try the Free version today and 
            experience the difference that intelligent file management can make to your productivity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-black hover:bg-gray-800 text-white">
              <Link to="/downloads">Get Copy That</Link>
            </Button>
            <Button asChild variant="outline" className="border-black text-black hover:bg-gray-100">
              <Link to="/about">Learn About Features</Link>
            </Button>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center shadow-md">
          <img src={copyThatProduct} alt="Copy That 1.0 Software Interface" className="max-w-full rounded" />
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Copy That?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Lightning Fast",
              description: "Optimized algorithms ensure your files are copied at maximum speed, saving you valuable time."
            },
            {
              title: "Intelligent Organization",
              description: "Smart file categorization and tagging help you keep your digital assets perfectly organized."
            },
            {
              title: "Secure Transfers",
              description: "Advanced verification ensures your files are transferred without corruption or data loss."
            }
          ].map((feature, index) => (
            <div key={index} className="border border-gray-300 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "Copy That has revolutionized how I manage files across my devices. The interface is intuitive and the speed is remarkable.",
              author: "Sarah J., Graphic Designer"
            },
            {
              quote: "As an IT administrator, I've tried dozens of file management tools. Copy That Pro is by far the most reliable and feature-rich solution.",
              author: "Michael T., IT Manager"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-right">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Copy That 1.0 Official Release",
              date: "June 5, 2025",
              excerpt: "We're excited to announce the official release of Copy That 1.0, our revolutionary file management software designed to streamline your workflow."
            },
            {
              title: "Upcoming Webinar: Mastering File Management",
              date: "May 28, 2025",
              excerpt: "Join our expert team for a free webinar on advanced file management techniques and how to leverage Copy That for maximum productivity."
            },
            {
              title: "Customer Success Story: TechCorp Saves 20 Hours Weekly",
              date: "May 15, 2025",
              excerpt: "Learn how TechCorp implemented Copy That Pro across their organization and dramatically improved their file management efficiency."
            }
          ].map((article, index) => (
            <div key={index} className="border border-gray-300 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm text-gray-600 mb-2">{article.date}</div>
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="mb-4">{article.excerpt}</p>
              <Link to="/blog" className="text-black font-medium hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 border-t border-gray-200 mt-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your File Management?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied users who have streamlined their workflow with Copy That.
        </p>
        <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg">
          <Link to="/downloads">Download Now</Link>
        </Button>
      </section>
    </div>
  );
};

export default HomePage;

