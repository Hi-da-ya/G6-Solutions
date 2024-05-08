import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import QuoteModal from './QuoteModal';


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Stats />
      <Projects />
      <CallToAction />
      <OurTeam /> 
      <Testimonials />
      <Partners />
      <Newsletter />
      <Footer />
    </div>
  );
};


const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [quote, setQuote] = useState({ content: 'Loading quote...', author: '' });

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote({ content: data.content, author: data.author });
      })
      .catch(error => console.error('Error fetching quote:', error));
  };

  const handleOpenModal = () => {
    fetchQuote();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="https://gritplay.netlify.app/assets/images/logop.png" alt="G6 Solutions Logo" className="mr-3 h-8" />
          <span className="text-xl font-semibold">G6 Solutions</span>
        </a>
        <div className="flex items-center space-x-4">
          <a href="#services" className="hover:text-gray-700">Services</a>
          <a href="#projects" className="hover:text-gray-700">Projects</a>
          <a href="#contact" className="hover:text-gray-700">Contact</a>
          <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get a Quote
          </button>
        </div>
      </nav>
      <QuoteModal quote={quote} isOpen={modalOpen} onClose={handleCloseModal} />
    </header>
  );
};

// RandomQuote.js



const Hero = () => {
  return (
    <div className="bg-blue-500 text-white text-center py-20 relative">
      <img src="https://img.freepik.com/premium-photo/abstract-computer-coding-digital-technology-concept-with-blue-binary-code-streaming-across-cybernetic-background_674594-55421.jpg?w=1380" alt="Tech Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-30" />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold">Bringing Your Digital Dreams to Reality</h1>
        <p className="text-xl mt-4">Cutting-edge web and app development tailored to your business needs.</p>
        <button className="mt-8 bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-8 rounded-full">
          Discover Our Projects
        </button>
      </div>
    </div>
  );
};




const AboutUs = () => {
  return (
    <section className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center">
      <img src="https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252444.jpg?t=st=1715085406~exp=1715089006~hmac=c51314bb670c4bb32cfb69d0cb888f9c5a66eda70ac89d626ec5e579c163c38a&w=1380" alt="About Us" className="w-full md:w-1/2 rounded-lg mr-8" />
      <div>
        <h2 className="text-3xl font-bold text-center md:text-left">About Us</h2>
        <p className="text-gray-600 text-lg mt-4">
          Founded in 2010, G6 Solutions is a leader in innovative digital solutions, including bespoke web applications and captivating games development. Our team of expert engineers and designers is committed to transforming your digital landscape.
        </p>
        <p className="text-gray-600 text-lg mt-4">
          With a deep commitment to excellence and innovation, we strive to exceed our client's expectations and deliver exceptional service and support.
        </p>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { name: "Web Development", description: "Develop robust, scalable, and interactive web solutions that drive business success.", image: "https://img.freepik.com/premium-photo/cyber-security-coding-technology-hacker-working-laptop-dark-digital-data-internet-crime-concept_674594-55417.jpg?w=1380" },
    { name: "App Development", description: "Craft mobile apps with user-centered designs and flawless functionality.", image: "https://img.freepik.com/free-photo/concept-smartphone-trend-social-media-platform_1409-4893.jpg?t=st=1715085552~exp=1715089152~hmac=ec7d239d66cd16c7e4580db38f9e577e84f5bcea451f916a9e3af357f6f8b160&w=1380" },
    { name: "Game Development", description: "Engage users with immersive and visually stunning games crafted by our expert developers.", image: "https://img.freepik.com/free-photo/futuristic-video-game-equipment-illuminated-nightclub-generative-ai_188544-32105.jpg?t=st=1715085587~exp=1715089187~hmac=66a5c2439d56cf80bbba8d70aa1299f2856c3603871870e23a4083f1328ac8ff&w=1380" }
  ];

  return (
    <section id="services" className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Services</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {services.map((service, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 m-4">
              <img className="w-full" src={service.image} alt={service.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{service.name}</div>
                <p className="text-gray-700 text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const OurTeam = () => {
  const teamMembers = [
    { name: "Hidaya", role: "Project Manager", image:  "https://img.freepik.com/free-photo/portrait-beautiful-hipster-girl-glasses-cap_1142-39044.jpg?t=st=1715107631~exp=1715111231~hmac=12a445f5605da00a79f16cdb778b26b0f86d7b780196728478bf94c8d994c2be&w=740"  },
    { name: "Ian", role: "Lead Developer", image: "https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964612.jpg?t=st=1715107855~exp=1715111455~hmac=d105e141b1091cf257b93f24a5a9fb73dfc8a96696c309ec37b2916c892ad301&w=740" },
    { name: "Griffins", role: "UI/UX Designer", image: "https://img.freepik.com/premium-photo/black-afro-girl-kinky-haired-retro-portrait_962508-52146.jpg?w=740" },
    { name: "Japheth", role: "Backend Developer", image: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100278.jpg?t=st=1715108194~exp=1715111794~hmac=e90a7b6358ef5d44964b032643c6f86d48baf10b9ed973b68963ebe4fac1cc29&w=740" },
    { name: "Jeremiah", role: "Frontend Developer", image: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100149.jpg?t=st=1715108130~exp=1715111730~hmac=ffbbd1eb3c4b353576e7f8c73793b1044c5dcc9dd22d8c042f5be5b48cff1728&w=740" },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
              <img className="w-24 h-24 rounded-full mx-auto " src={member.image} alt={member.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{member.name}</div>
                <p className="text-gray-700 text-base">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="container mx-auto px-6 py-10 text-center">
      <h2 className="text-3xl font-bold">Our Impact</h2>
      <div className="flex justify-around items-center my-8">
        <div>
          <h3 className="text-2xl font-bold">300+</h3>
          <p className="text-base text-gray-600">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">100+</h3>
          <p className="text-base text-gray-600">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">10+</h3>
          <p className="text-base text-gray-600">Awards Won</p>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={`https://picsum.photos/400/300?random=${index}`} alt="Project" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Project {index + 1}</div>
                <p className="text-gray-700 text-base">
                  Details about Project {index + 1}. Brief insights into challenges and solutions.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <div className="bg-blue-500 text-white text-center py-10">
      <h2 className="text-3xl font-bold">Ready to start your project with us?</h2>
      <button className="mt-8 bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-8 rounded-full">
        Get Started Now
      </button
      ></div>
  );
};

const Testimonials = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
      <div className="flex flex-col items-center mt-6">
        {[
          { name: "John Doe, CEO of InnovateX", image: "https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-boy-with-backpack-his-back_1142-40542.jpg?t=st=1715085641~exp=1715089241~hmac=5673209b69e6096a642cf6453a5677a7e298d36a91dca33806a6378006331815&w=740", rating: 5, comment: "G6 Solutions not only met our expectations but exceeded them. Their hands-on approach and innovative solutions were exactly what we needed." },
          { name: "Jane Smith, Founder of TechVentures", image: "https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-girl-blue-jacket-glasses_1142-41044.jpg?t=st=1715085692~exp=1715089292~hmac=73e84550b758cca45db7f64be3b1ec75248f69b75e6dac38fdc0bc0cb47b941a&w=740", rating: 4, comment: "The project management and development process was smooth and professional. We are thrilled with the results!" }
        ].map((testimonial, index) => (
          <blockquote key={index} className="bg-gray-100 rounded p-4 shadow-lg my-4 max-w-xl text-center">
            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto" />
            <p className="text-gray-600 mt-4">{testimonial.comment}</p>
            <footer className="mt-4 text-gray-900 font-bold">{testimonial.name}</footer>
            <div className="flex justify-center mt-2">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center mt-6">
          {["https://gritplay.netlify.app/assets/images/logop.png", "https://gritplay.netlify.app/assets/images/logop.png", "https://gritplay.netlify.app/assets/images/logop.png", "https://gritplay.netlify.app/assets/images/logop.png"].map((logo, index) => (
            <img key={index} src={`https://gritplay.netlify.app/assets/images/logop.png`} alt="Partner Logo" className="h-12 m-4" />
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="text-gray-600 mt-2">Subscribe to our newsletter for the latest insights and updates.</p>
        <form className="mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-1 p-2 border-2 border-gray-300 rounded-md"
          />
          <button type="submit" className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>© 2024 G6 Solutions. All rights reserved.</p>
      <div className="flex justify-center mt-4">
        <a href="#" className="text-white mx-2">Privacy</a>
        <a href="#" className="text-white mx-2">Terms</a>
        <a href="#" className="text-white mx-2">Sitemap</a>
        <a href="#" className="text-white mx-2">Careers</a>
      </div>
    </footer>
  );
};

export default App;
