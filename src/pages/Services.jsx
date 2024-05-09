import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';

function Services() {

  const [searchQuery, setSearchQuery] = useState('');


  const handleClick = (service) => {
    alert(`Thank you for choosing ${service.name}. We will get back to you in a second.`);
  };
  
  const services = [

    {
      name: "Web Design",
      description:"Create stunning and user-friendly websites tailored to your needs.",
      imageUrl:"https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?t=1615058916&st=c77b3a5750c8c45d8424c6721b1f876f",
    },
    {
      name: "Mobile App Development",
      description:"Build innovative and scalable mobile applications for iOS and Android.",
      imageUrl:"https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169852.jpg?t=1615060466&st=7d67faec2cf4e23d2e99b9a2fd12e9b0",
    },
    {
      name: "Software Consulting",
      description:"Get expert advice and guidance on software architecture and development strategies.",
      imageUrl: "https://img.freepik.com/free-photo/trading-company-professional-agents-sitting-desk-while-reviewing-investment-documentation-reports-hedge-fund-agency-employees-sitting-desk-office-workspace-while-analyzing-financial-data_482257-44558.jpg?t=1615060619&st=dd888d6d4c1dce7eeb9b593d4d251ef7",
    },
    {
      name: "UI/UX Design",
      description: "Craft intuitive and visually appealing user interfaces for your applications.",
      imageUrl: "https://img.freepik.com/free-photo/3d-character-emerging-from-smartphone_23-2151336694.jpg?t=st=1715205560~exp=1715209160~hmac=394d7ac071747179e2b663d4f49c5743eeb501b22532d9bbc9d85af01350bd00&w=1380",
    },
    {
      name: "Backend Development",
      description:"Develop robust and scalable server-side solutions to power your applications.",
      imageUrl: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901771.jpg?t=st=1715205641~exp=1715209241~hmac=e77854b3aedc45f8c9dd2f85832b267b59a337f90158118c55468a0603b76e6c&w=1060",
    },
    {
      name: "Cloud Solutions",
      description: "Deploy and manage scalable cloud infrastructure for your applications.",
      imageUrl: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?t=st=1715205703~exp=1715209303~hmac=e2ec7cf3e1db6a10b8a0b49879f32c2792eb02de096bf16c098d9792620bb5b2&w=1380",
    },
    {
      name: "Quality Assurance",
      description: "Ensure the performance and reliability of your applications through comprehensive testing.",
      imageUrl: "https://img.freepik.com/free-photo/standard-quality-control-collage_23-2149631023.jpg?t=st=1715145163~exp=1715148763~hmac=76da828745999beb974823011ea28fdb5a4088fcf9fae2eec8d8833cd6fd35d2&w=1380",
    },
    {
      name: "Database Management",
      description: "Design and optimize databases to efficiently store and manage your data.",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149262965.jpg?t=st=1715145222~exp=1715148822~hmac=8aa6dc32232aa0eb00767caad1e263d84d8ca3680ce2bc1d0bf6df3dbda84edc&w=1380",
    },
    {
      name: "Project Management",
      description:"Streamline project workflows and ensure timely delivery of software solutions.",
      imageUrl: "https://img.freepik.com/free-photo/high-angle-employees-working-together_23-2150152254.jpg?t=st=1715145269~exp=1715148869~hmac=64638b9ea4b7d1611d5f13fdc67ed2435da52cdab30363041713202963fde304&w=1380",
    },
  ];
 
  
  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };



  return (

    
    <div className="services-container">
    <Header/>


      <div className='header-div'>
      <h1 className="service-header">Our Services</h1>
      </div>
     




      <input
        type="text"
        placeholder="Search services..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />

    <div className='service-item-container'>
      {filteredServices.map((service, index) => (
      
        <div key={index} className="service-item">
          <img src={service.imageUrl} alt={service.name} className="service-icon" />
          <h3 className="service-name">{service.name}</h3>
          <p className="service-description">{service.description}</p>
          <button className="get-started-button" onClick={() => handleClick(service)}>Get Started</button>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
   
  );
}

export default Services;

