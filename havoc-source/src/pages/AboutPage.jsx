import havocLogo from '../assets/havoc-logo.png';
import teamMember1 from '../assets/team-member-1.png';
import teamMember2 from '../assets/team-member-2.png';
import teamMember3 from '../assets/team-member-3.png';
import teamMember4 from '../assets/team-member-4.png';
import teamMember5 from '../assets/team-member-5.png';

const AboutPage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-8">
        <img src={havocLogo} alt="Havoc Software Logo" className="h-16 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-6">About Havoc Software</h1>
        <div className="bg-gray-100 p-6 rounded-lg mb-8 max-w-3xl mx-auto">
          <p className="text-lg">
            Founded in December 2023 with a passion for creating efficient and user-friendly software solutions, 
            Havoc Software is dedicated to developing tools that enhance productivity and simplify workflows 
            for individuals and businesses alike.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Havoc Software began with a simple observation: despite the abundance of file management tools on the market, 
              most were either too complex for everyday users or too basic for power users. Our founder, Michael R., 
              experienced this frustration firsthand while working as a digital content creator.
            </p>
            <p className="mb-4">
              After searching for a solution that balanced power with simplicity, Michael decided to create his own. 
              He assembled a team of like-minded developers and designers who shared his vision for intuitive, 
              efficient software that would make digital life easier.
            </p>
            <p>
              The result was Copy That, our flagship product that has since grown into a suite of productivity tools 
              used by thousands of individuals and organizations worldwide. What started as a solution to a personal 
              frustration has evolved into a mission to simplify digital workflows everywhere.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Company Timeline</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">December 2023</h4>
                <p>Havoc Software founded by Michael R.</p>
              </div>
              <div>
                <h4 className="font-semibold">2024</h4>
                <p>Copy That 0.32b released</p>
              </div>
              <div>
                <h4 className="font-semibold">June 2025</h4>
                <p>Copy That 0.48b released</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              At Havoc Software, our mission is to create innovative software solutions that address real-world challenges. 
              We believe in developing tools that are not only powerful but also intuitive and accessible to users of all skill levels.
            </p>
            <p className="mb-4">
              We're committed to continuous improvement, regularly updating our products based on user feedback and emerging technologies.
              By listening to our users and staying at the forefront of software development, we ensure our tools remain relevant and valuable.
            </p>
            <p>
              We measure our success not by the number of features we implement, but by how much time and frustration we save our users.
              Every decision we make is guided by this principle: will this make our users' lives easier?
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="mb-4">
              We envision a world where technology enhances human potential rather than complicating it. 
              Our goal is to be at the forefront of creating software that simplifies complex tasks and empowers users
              to focus on what truly matters to them.
            </p>
            <p className="mb-4">
              By focusing on user experience and practical functionality, we aim to build a suite of tools that become essential parts of our users' daily workflows.
              We see a future where Havoc Software is synonymous with efficiency, reliability, and innovation.
            </p>
            <p>
              As we grow, we remain committed to maintaining the personal touch and attention to detail that has defined us from the beginning.
              No matter how large we become, we'll never lose sight of the individual user experience.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <p className="mb-6">
          Behind every great product is a team of passionate individuals. Meet the people who make Havoc Software possible.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Michael R.", role: "Founder & CEO", bio: "Former digital content creator with a passion for efficient workflows and user-centered design.", image: teamMember1 },
            { name: "John S.", role: "Lead Developer", bio: "Software engineer with 15+ years of experience in creating high-performance applications.", image: teamMember2 },
            { name: "Alex J.", role: "UX Designer", bio: "Award-winning designer focused on creating intuitive and accessible user experiences.", image: teamMember3 },
            { name: "Maria G.", role: "Product Manager", bio: "Strategic thinker who ensures our products meet real user needs and market demands.", image: teamMember4 },
            { name: "David K.", role: "Marketing Director", bio: "Dedicated to ensuring our users get the most value from our software solutions.", image: teamMember5 }
          ].map((member, index) => (
            <div key={index} className="border border-gray-300 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <img src={member.image} alt={member.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 mb-3">{member.role}</p>
              <p className="text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-6">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Innovation", 
              description: "We constantly seek new ways to improve and evolve our products. We're not afraid to challenge conventions and explore creative solutions to complex problems." 
            },
            { 
              title: "Quality", 
              description: "We maintain high standards in every aspect of our software development. From code efficiency to user interface design, we believe that quality should never be compromised." 
            },
            { 
              title: "User-Centric", 
              description: "We design with our users in mind, prioritizing their needs and feedback. Every feature we develop is a direct response to user requirements and pain points." 
            },
            { 
              title: "Integrity", 
              description: "We operate with honesty and transparency in all our business practices. We believe in building trust through clear communication and ethical decision-making." 
            }
          ].map((value, index) => (
            <div key={index} className="border border-gray-300 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

