import React from 'react';
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
      imageUrl: "https://img.freepik.com/free-photo/3d-character-emerging-from-smartphone_23-2151336694.jpg?t=st=1715145342~exp=1715148942~hmac=d369bce00fff2a53667918bf3b6ea7d214f4bba8940aba3ced6cb40784dd4c9f&w=1380",
    },
    {
      name: "Backend Development",
      description:"Develop robust and scalable server-side solutions to power your applications.",
      imageUrl: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901771.jpg?t=st=1715145018~exp=1715148618~hmac=d07fe5664af992e2567a51e4d85963ee5db2d2f384ba81d647e0b8f34ffa120a&w=1060",
    },
    {
      name: "Cloud Solutions",
      description: "Deploy and manage scalable cloud infrastructure for your applications.",
      imageUrl: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?t=st=1715145110~exp=1715148710~hmac=fdfcfebe052879e38aae3ef1f4b7de5481df999188d13a0c534f17e158e63ffa&w=1380",
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
    </div>
  );
}

export default Services;

