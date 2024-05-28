import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [formMessage, setFormMessage] = useState('');
    const [formMessageType, setFormMessageType] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormMessage('Thank you! Your message has been sent successfully. We will contact you shortly.');
        setFormMessageType('success');

    };

    return (
        <div className="contact-form">
            <h2>Contact us</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name (mandatory)</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="email">Email (mandatory)</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="phone">phone (optional)</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                
                <label htmlFor="message">Message (mandatory)</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

                <button type="submit">send a message</button>
            </form>
            {formMessage && (
                <div className={`message ${formMessageType}`}>
                    {formMessage}
                </div>
            )}
        </div>
    );
};

export default ContactForm;
