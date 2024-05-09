import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        { name: 'Jeremiah', role: 'About Us', image: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100149.jpg?t=st=1715108130~exp=1715111730~hmac=ffbbd1eb3c4b353576e7f8c73793b1044c5dcc9dd22d8c042f5be5b48cff1728&w=740" },
        { name: 'Griffins', role: "UI/UX Designer", image: "https://img.freepik.com/premium-photo/black-afro-girl-kinky-haired-retro-portrait_962508-52146.jpg?w=740" },
        { name: 'Iyan', role: 'Services', image: "https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964612.jpg?t=st=1715107855~exp=1715111455~hmac=d105e141b1091cf257b93f24a5a9fb73dfc8a96696c309ec37b2916c892ad301&w=740" },
        { name: 'Project', role: 'Hidaya', image: "https://img.freepik.com/free-photo/portrait-beautiful-hipster-girl-glasses-cap_1142-39044.jpg?t=st=1715107631~exp=1715111231~hmac=12a445f5605da00a79f16cdb778b26b0f86d7b780196728478bf94c8d994c2be&w=740" },
        { name: 'Contact', role: 'Japheth', image: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100278.jpg?t=st=1715108194~exp=1715111794~hmac=e90a7b6358ef5d44964b032643c6f86d48baf10b9ed973b68963ebe4fac1cc29&w=740" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mt-16 mb-16 px-6">
            <div className="max-w-7xl mx-auto py-6">
                <h1 className="text-4xl font-bold text-center mb-6">About G6 Solutions</h1>
                <img 
                        src="https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003773.jpg?t=st=1715223585~exp=1715227185~hmac=9353d7165faf1c5a1464cef5dabdaf0930a4cf0bcdb371e085d2054b0fff70d4&w=1060" // Add your desired image URL here
                        alt="About Us"
                        className="w-full h-auto object-cover rounded-lg shadow-md mb-6"
                    />
                <p className="text-lg text-gray-600">
                Welcome to G6 Solutions, your go-to software engineering partner in Nairobi, Kenya. Founded by a skilled team with a passion for technology, we specialize in creating innovative, tailored solutions to meet your unique needs. Our founders—Hidaya, Griffins Mbae, Japheth Karani, Jeremiah Maina, and Ian Kinyua—bring decades of expertise in software engineering and project management.

At G6 Solutions, we are committed to excellence, innovation, and customer satisfaction. We excel at translating business objectives into scalable, reliable, and user-centric software solutions, whether you’re a startup needing an MVP, an enterprise looking to modernize, or embarking on a digital transformation.

We offer a broad range of services, including custom software and mobile app development, web development, and cloud services, all designed to help your business thrive in the digital age. Thank you for choosing G6 Solutions as your trusted technology partner. We are excited to help you succeed with cutting-edge solutions.</p>
           
                
                <div className="mt-8">
                    {values.map((value, index) => (
                        <button key={index} onClick={() => handleClick(value)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2">
                            {value.name}
                        </button>
                    ))}
                    <p className="text-gray-700 mt-4">{selectedValue}</p>
                </div>

                <h2 className="text-3xl font-bold mt-12">Our Team</h2>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 text-center">
                            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto" />
                            <h3 className="text-lg font-bold mt-2">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
        <Footer />
    </div>
);
};
export default AboutUs;
