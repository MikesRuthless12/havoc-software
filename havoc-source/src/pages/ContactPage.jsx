import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-8">
          We'd love to hear from you! Reach out with any questions, feedback, or support needs.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Your email address"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-1 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Message subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <Button type="submit" className="bg-black hover:bg-gray-800 text-white">
              Send Message
            </Button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="mr-3 flex-shrink-0 text-gray-700" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>123 Software Lane</p>
                <p>Tech City, TC 12345</p>
                <p>United States</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="mr-3 flex-shrink-0 text-gray-700" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="mr-3 flex-shrink-0 text-gray-700" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>support@havocsoftware.com</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-300">
              <h3 className="font-semibold mb-3">Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "How do I get technical support?",
              answer: "For technical support, please email support@havocsoftware.com or use the contact form on this page."
            },
            {
              question: "Do you offer refunds?",
              answer: "Yes, we offer a 30-day money-back guarantee on all our Pro version purchases."
            },
            {
              question: "How often do you release updates?",
              answer: "We typically release major updates quarterly and minor updates monthly."
            }
          ].map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

