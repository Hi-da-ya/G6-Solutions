
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';


const AboutUs = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const values = [
    { name: 'Our Vision', content: 'At G6 Solutions, our vision is to be the leading provider of transformative software solutions that drive positive change and empower businesses and organizations to thrive in the digital age.' },
    { name: 'Our Mission ', content: 'Our mission is to leverage our technical expertise, collaborative approach, and industry insights to deliver cutting-edge software solutions that exceed our clients expectations. We are committed to fostering long-term partnerships, delivering measurable results, and driving innovation at every opportunity.' },
    { name: 'Meet Our Founders', content: 'G6 Solutions was founded by a team of seasoned professionals, including Hidaya, Griffins Mbae, Japheth Karani, Jeremiah Maina, and Ian Kinyua. Collectively, our founders bring decades of experience in software engineering, project management, and technology leadership.' },
    { name: 'What Sets Us Apart', content: ' What sets G6 Solutions apart is our relentless focus on quality, innovation, and customer satisfaction. We take pride in our ability to understand your business objectives and translate them into scalable, reliable, and user-centric software solutions.From custom software development and mobile app development to web development, cloud services, and beyond, G6 Solutions offers a comprehensive suite of services designed to address your evolving technology needs.' },
  ];

  const handleClick = (value) => {
    setSelectedValue(value.content);
  };

  const teamMembers = [
    { name: 'Jeremiah', role: 'About Us', image: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100149.jpg?t=st=1715108130~exp=1715111730~hmac=ffbbd1eb3c4b353576e7f8c73793b1044c5dcc9dd22d8c042f5be5b48cff1728&w=740"  },
    { name: 'Griffins', role: "UI/UX Designer", image:"https://img.freepik.com/premium-photo/black-afro-girl-kinky-haired-retro-portrait_962508-52146.jpg?w=740"},
    { name: 'Iyan', role: 'Services', image: "https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964612.jpg?t=st=1715107855~exp=1715111455~hmac=d105e141b1091cf257b93f24a5a9fb73dfc8a96696c309ec37b2916c892ad301&w=740" },
    { name: 'Project', role: 'Hidaya', image: "https://img.freepik.com/free-photo/portrait-beautiful-hipster-girl-glasses-cap_1142-39044.jpg?t=st=1715107631~exp=1715111231~hmac=12a445f5605da00a79f16cdb778b26b0f86d7b780196728478bf94c8d994c2be&w=740"},
    { name: 'Contact', role: 'Japheth', image:"https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100278.jpg?t=st=1715108194~exp=1715111794~hmac=e90a7b6358ef5d44964b032643c6f86d48baf10b9ed973b68963ebe4fac1cc29&w=740" },
  ];

  return (

    <div className='container' style={{color:'black' }}>
        <Header/>
      <div className = 'point' >
      
      
      <div className='header'>
      <h1 className='header'>THE G 6 </h1>
      <p className='us' >Welcome to G6 Solutions, your premier software engineering partner based in Nairobi, Kenya. Founded by a team of passionate and experienced professionals, G6 Solutions brings together a diverse range of expertise to deliver innovative solutions tailored to meet your unique needs.

At the heart of G6 Solutions is a commitment to excellence and collaboration. Our founders, Hidaya, Griffins Mbae, Japheth Karani, Jeremiah Maina, and Ian Kinyua, collectively bring decades of experience in software engineering, project management, and technology leadership. With a shared vision for driving positive change through technology, our team is dedicated to delivering cutting-edge solutions that empower businesses and organizations to thrive in today's digital landscape.

What sets G6 Solutions apart is our relentless focus on quality, innovation, and customer satisfaction. We take pride in our ability to understand your business objectives and translate them into scalable, reliable, and user-centric software solutions. Whether you're a startup looking to build a Minimum Viable Product (MVP), an enterprise seeking to modernize your systems, or an organization embarking on a digital transformation journey, G6 Solutions is here to guide you every step of the way.

From custom software development and mobile app development to web development, cloud services, and beyond, G6 Solutions offers a comprehensive suite of services designed to address your evolving technology needs. Our collaborative approach, combined with our technical expertise and industry insights, ensures that we deliver results that exceed your expectations, time and time again.

Thank you for considering G6 Solutions as your trusted technology partner. We look forward to embarking on this journey with you and helping you achieve your goals through the power of software innovation.</p>
      </div>
</div>
      <h2 style={{fontSize:'30px'}}>About G6 Solutions</h2>
      <div>
        {values.map((value, index) => (
       <button key={index} onClick={() => handleClick(value)}  className='button '>
       {value.name} <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 16.172l-4.243-4.243 1.415-1.415 2.828 2.828 2.828-2.828 1.415 1.415z"/></svg>
     </button>
     
        ))}
        <p className='us'>{selectedValue}</p>
      </div>

      <h2 style={{fontSize:'30px'}}>Our Journey</h2>
      <p className='journey'>
        Learning to code will probably take more time than you expect. Getting stuck drains time. And you will get stuck.
        Trying to get unstuck is frustrating. But the moment you spot the issue, correct the code, and run the code
        successfully, the feeling of achievement is amazing!
      </p>

      <h2 className='header'>Our Team</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' ,}}>
        {teamMembers.map((member, index) => (
          <div key={index} className='header'>
            <img src={member.image} alt={member.name}  style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
            <p>{member.role}</p>
            <p>{member.name}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;




