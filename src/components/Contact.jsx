
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import "./Contact.css";
import  imgContact from"../assets/contact.jpg"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        // Ici, ajoutez le traitement pour envoyer les données au serveur
      };
  return (
      <Container className="py-2 mt-4">
      <Row className="justify-content-center">
      <Image id='imgcontact' src={imgContact} fluid/>
        <Col md={8} lg={6}>
          <h2 className="text-center mt-4">Me contacter</h2>
          <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez votre nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Entrez votre message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

   
  )
}

export default Contact