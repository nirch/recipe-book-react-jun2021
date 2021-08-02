import React from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

function NewRecipeModal({ show, onClose }) {
    return (
        <Modal show={show} onHide={onClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>New Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                        <Form.Label column sm={3}>
                            Recipe Name
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalDesc">
                        <Form.Label column sm={3}>
                            Recipe Description
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalImage">
                        <Form.Label column sm={3}>
                            Recipe Image URL
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onClose}>
                    Create Recipe
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewRecipeModal;