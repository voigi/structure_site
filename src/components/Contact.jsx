import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./Contact.css";
import imgContact from "../assets/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    surname:"",
    name: "",
    email: "",
    subject: "Demande générale",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.surname.trim()) newErrors.surname = "Le prenom est requis.";
    if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Entrez une adresse email valide.";
    }
    if (!formData.message.trim()) newErrors.message = "Le message est requis.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Efface l'erreur dès que l'utilisateur corrige le champ
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Form data submitted:", formData);
      setSubmitted(true); // Active le message de confirmation
    }
  };

  return (
    <Container className="py-2 mt-4">
      <Row className="justify-content-center">
        <Image id="imgcontact" className=" rounded" src={imgContact} fluid />
        <Col md={8} lg={6}>
          <h2 className="text-center">Me contacter</h2>
          {!submitted ? (
            <Form onSubmit={handleSubmit} className=" p-4 ">
          <Form.Group className="mb-3" controlId="formSurname">
                <Form.Label>Prenom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Jean"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  isInvalid={!!errors.surname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.surname}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Dupont"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="jean.dupont@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Sujet</Form.Label>
                <Form.Select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="Demande générale">Demande générale</option>
                  <option value="Information produit">Information produit</option>
                  <option value="Support technique">Support technique</option>
                  <option value="Autre">Autre</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Bonjour, je souhaiterais..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Envoyer
              </Button>
            </Form>
          ) : (
            <div className="text-center">
              <h4>Merci pour votre message !</h4>
              <p>Nous vous répondrons dans les plus brefs délais.</p>
              <Button
                variant="secondary"
                onClick={() => {
                  setFormData({
                    surname :"",
                    name: "",
                    email: "",
                    subject: "Demande générale",
                    message: "",
                  });
                  setErrors({});
                  setSubmitted(false);
                }}
              >
                Envoyer un autre message
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;