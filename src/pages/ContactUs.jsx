import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

function handleChange(event){
  setFormData({
    ...formData,
    [event.target.id]: event.target.value,
  });

}
  function handleSubmit(e){
    e.preventDefault();
  
    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
  
        console.log(formData);
        Swal.fire({
          title: 'Success!',
          text: 'Your form has been submitted successfully.',
          icon: 'success',
        });
      })
      .catch((error) => {
        // Handle errors (e.g., display an error alert)
        console.error('Error submitting form:', error);
      });

  };
  return (
    <div>
        <Header />
        <div class = "containers">
        <form id="contact"  onSubmit={handleSubmit}>
            <h3>Contact Form</h3>
            <h4>Contact us for a custom service</h4>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            name = "name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            autoFocus
            />

            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            name = "email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            />

            <label htmlFor="phone">Phone:</label>
            <input
            type="tel"
            id="phone"
            name = "phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{2}-[0-9]{8}"
            placeholder="07-12345678"
            required
            />

            <label htmlFor="message">Message:</label>
            <textarea
            id="message"
            name = "message"	
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            />
            <button type="submit">Submit</button>
        </form>
        </div>
        <Footer />
    </div>
  );
}


export default ContactUs;