import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook for navigation

    const projects = [
        {
            imgSrc: "https://img.freepik.com/free-photo/metal-shopping-cart-filled-with-groceries-night-generated-by-ai_188544-53746.jpg?t=st=1715094277~exp=1715097877~hmac=45989d871d7b14a860906b7770a5a20fba66086233f52eabe3f97f3c613c86a2&w=1380",
            imgAlt: "e-commerce store",
            title: "Sasa Nguo Clothing Store",
            description: "Elevate your style with Sasa Nguo, your premier destination for fashion-forward finds...",
        },
        {
            imgSrc: "https://img.freepik.com/premium-photo/tablet-computer-sitting-top-table-cup-coffee_1101924-2055.jpg?w=826",
            imgAlt: "E-learning",
            title: "Elimu Mkononi",
            description: "Dive into a world of limitless learning possibilities with Elimu Mkononi..."
        },
        {
          imgAlt:"Splash",
          imgSrc:"https://img.freepik.com/premium-photo/game-element-design-assets_939196-96.jpg?w=826",
          title:"Splash",
          description:"Splash is an online game.Splash:Embark on a delightful journey through a world of sugary challenges.Match candies, unleash sweet combos, and conquer each level for a deliciously satisfying experience", 
      },
  
    ];
    const services = [
      {
          name: "Web Design",
          description: "Create stunning and user-friendly websites tailored to your needs.",
          imageUrl: "https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?t=1615058916&st=c77b3a5750c8c45d8424c6721b1f876f",
      },
      {
          name: "Mobile App Development",
          description: "Build innovative and scalable mobile applications for iOS and Android.",
          imageUrl: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169852.jpg?t=1615060466&st=7d67faec2cf4e23d2e99b9a2fd12e9b0",
      },
      {
          name: "Software Consulting",
          description: "Get expert advice and guidance on software architecture and development strategies.",
          imageUrl: "https://img.freepik.com/free-photo/trading-company-professional-agents-sitting-desk-while-reviewing-investment-documentation-reports-hedge-fund-agency-employees-sitting-desk-office-workspace-while-analyzing-financial-data_482257-44558.jpg?t=1615060619&st=dd888d6d4c1dce7eeb9b593d4d251ef7",
      },
  ];

  const teamMembers = [
    { name: "Hidaya", role: "Project Manager", image: "https://img.freepik.com/free-photo/portrait-beautiful-hipster-girl-glasses-cap_1142-39044.jpg?t=st=1715107631~exp=1715111231~hmac=12a445f5605da00a79f16cdb778b26b0f86d7b780196728478bf94c8d994c2be&w=740" },
    { name: "Ian", role: "Lead Developer", image: "https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964612.jpg?t=st=1715107855~exp=1715111455~hmac=d105e141b1091cf257b93f24a5a9fb73dfc8a96696c309ec37b2916c892ad301&w=740" },
    { name: "Griffins", role: "UI/UX Designer", image: "https://img.freepik.com/premium-photo/black-afro-girl-kinky-haired-retro-portrait_962508-52146.jpg?w=740" },
    { name: "Japheth", role: "Backend Developer", image: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100278.jpg?t=st=1715108194~exp=1715111794~hmac=e90a7b6358ef5d44964b032643c6f86d48baf10b9ed973b68963ebe4fac1cc29&w=740" },
    { name: "Jeremiah", role: "Frontend Developer", image: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100149.jpg?t=st=1715108130~exp=1715111730~hmac=ffbbd1eb3c4b353576e7f8c73793b1044c5dcc9dd22d8c042f5be5b48cff1728&w=740" },
  ];
  const reasons = [
    {
        imageUrl: "https://img.freepik.com/free-photo/view-brain-with-circuit-board_23-2150834083.jpg?t=st=1715223085~exp=1715226685~hmac=d9cb49b6b6ddc1c05c27c13876200ba3a336dd90e6c3e8c541c53d83f62ed895&w=740", // Replace with your images
        title: "Innovation",
        description: "We leverage cutting-edge technology to deliver innovative solutions that meet your unique needs."
    },
    {
        imageUrl: "https://img.freepik.com/free-photo/machine-gear-low-poly-design_587448-4974.jpg?t=st=1715223211~exp=1715226811~hmac=8b186e559f46da1b5d50203e2359bb3698654ec2a10ed7156d490efc3ff529f9&w=1380",
        title: "Unmatched Quality",
        description: "Our commitment to quality ensures that we deliver only the best products and services to our clients."
    },
    {
        imageUrl: "https://img.freepik.com/free-photo/portrait-woman-with-headset-ai-generated-image_268835-6649.jpg?t=st=1715223270~exp=1715226870~hmac=9bbd4444b7cc6c41aba14dedc3f83129d4a5cbf8cd23e9ec80f05a4aaef2849b&w=1060",
        title: "Exceptional Support",
        description: "We provide round-the-clock support to ensure your queries and issues are resolved promptly."
    },
    {
        imageUrl: "https://img.freepik.com/premium-photo/abstract-business-background-with-doodle-icons-diagramsmagnifierscogwheelstargetsgears_1237084-45674.jpg?w=1060",
        title: "Efficiency",
        description: "Our processes are optimized to ensure fast delivery times and the highest level of efficiency."
    }
];

  const handleMoreTeam = () => {
    navigate('/about-us');
};

  const handleMoreServices = () => {
    navigate('/services');
};

    const handleMoreProjects = () => {
        navigate('/projects'); // Use navigate function to redirect to the Projects page
    };

    const handleReadMore = () => {
      navigate('/about');
  };
    return (
      <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16 mb-16"> {/* Adjust these margins based on your header and footer height */}
         
                {/* Hero Section */}
                <div className="bg-blue-500 text-white text-center py-20 relative">
               
                    <img src="https://img.freepik.com/premium-photo/abstract-computer-coding-digital-technology-concept-with-blue-binary-code-streaming-across-cybernetic-background_674594-55421.jpg?w=1380" alt="Tech Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-30" />
                    <div className="relative z-10">
                        <h1 className="text-5xl font-bold">Bringing Your Digital Dreams to Reality</h1>
                        <p className="text-xl mt-4">Cutting-edge web and app development tailored to your business needs.</p>
                        <button className="mt-8 bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-8 rounded-full">
                            Discover Our Projects
                        </button>
                    </div>
                </div>
            
              {/* About Us Section */}
              <section className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center">
                <img src="https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003773.jpg?t=st=1715223585~exp=1715227185~hmac=9353d7165faf1c5a1464cef5dabdaf0930a4cf0bcdb371e085d2054b0fff70d4&w=1060" 
                     alt="About Us" 
                     className="w-full md:w-1/2 rounded-lg mr-8 mb-4 md:mb-0" />
                <div>
                    <h2 className="text-3xl font-bold text-center md:text-left">About Us</h2>
                    <p className="text-gray-600 text-lg mt-4">
                        Founded in 2010, G6 Solutions is a leader in innovative digital solutions, including bespoke web applications...
                    </p>
                    <button 
                        onClick={handleReadMore} 
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Read More
                    </button>
                </div>
            </section>

{/* Services Section */}
<section className="container mx-auto px-6 py-10">
                <h2 className="text-3xl font-bold text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    {services.map((service, index) => (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full" src={service.imageUrl} alt={service.name} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{service.name}</div>
                                <p className="text-gray-700 text-base">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <button onClick={handleMoreServices} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        More Services
                    </button>
                </div>
            </section>

                {/* Our Impact Section */}
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

  {/* Projects Section */}
  <section className="container mx-auto px-6 py-10">
                <h2 className="text-3xl font-bold text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    {projects.slice(0, 3).map((project, index) => ( // Only show the first two projects
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full" src={project.imgSrc} alt={project.imgAlt} />
                            <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{project.title}</div>
                                <p className="text-gray-700 text-base">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <button 
                        onClick={handleMoreProjects} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        More Projects
                    </button>
                </div>
            </section>

                {/* Call to Action Section */}
                <div className="bg-blue-500 text-white text-center py-10">
                    <h2 className="text-3xl font-bold">Ready to start your project with us?</h2>
                    <button className="mt-8 bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-8 rounded-full">
                        Get Started Now
                    </button>
                </div>

                   {/* Why Us Section */}
            <section className="py-10 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>
                    <p className="text-center text-gray-600 mt-4">
                        Discover the key factors that set us apart from the competition.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
                                <img src={reason.imageUrl} alt={reason.title} className="w-full h-56 object-cover rounded-lg" />
                                <div className="mt-4 text-center">
                                    <h3 className="text-xl font-semibold">{reason.title}</h3>
                                    <p className="text-gray-600 mt-2">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
                <section className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
              <img className="w-24 h-24 rounded-full mx-auto" src={member.image} alt={member.name} />
              <div className="px-6 py-4 text-center">
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
                {/* Client Testimonials Section */}
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

                {/* Partners Section */}
                <section className="bg-white py-10">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center">Our Partners</h2>
                        <div className="flex flex-wrap justify-center items-center mt-6">
                            {["https://gritplay.netlify.app/assets/images/logop.png", "https://gritplay.netlify.app/assets/images/logop.png", "https://gritplay.netlify.app/assets/images/logop.png", "https://gritplay.netlify.app/assets/images/logop.png"].map((logo, index) => (
                                <img key={index} src={logo} alt="Partner Logo" className="h-12 m-4" />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section id="newsletter" className="mt-4">
                    <div className="bg-gray-200 py-10">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl font-bold">Stay Updated</h2>
                            <p className="text-gray-600 mt-2">Subscribe to our newsletter for the latest insights and updates.</p>
                            <form className="mt-4">
                                <input type="email" placeholder="Enter your email" className="mt-1 p-2 border-2 border-gray-300 rounded-md" />
                                <button type="submit" className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
<br></br>
            <Footer />
        </div>
    );
};

export default Home;
