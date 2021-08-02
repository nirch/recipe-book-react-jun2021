import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col, Image } from 'react-bootstrap';

function NewRecipeModal({ show, onClose, onCreate }) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [imgURL, setImgURL] = useState("");

    function clearForm() {
        setName("");
        setDesc("");
        setImgURL("");
    }

    function createRecipe() {
        onCreate(name, desc, imgURL);
        clearForm();
        onClose();
    }

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
                            <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalDesc">
                        <Form.Label column sm={3}>
                            Recipe Description
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" value={desc} onChange={e => setDesc(e.target.value)}  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalImage">
                        <Form.Label column sm={3}>
                            Recipe Image URL
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" value={imgURL} onChange={e => setImgURL(e.target.value)}  />
                        </Col>
                    </Form.Group>
                </Form>
                <Image src={imgURL}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={createRecipe}>
                    Create Recipe
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewRecipeModal;