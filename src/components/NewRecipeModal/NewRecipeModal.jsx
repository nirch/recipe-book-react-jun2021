import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col, Image } from 'react-bootstrap';

function NewRecipeModal({ show, onClose, onCreate }) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState(null);

    function clearForm() {
        setName("");
        setDesc("");
        setImg(null);
    }

    function createRecipe() {
        onCreate(name, desc, img ? URL.createObjectURL(img) : "");
        clearForm();
        onClose();
    }

    function handleFileChange(e) {
        setImg(e.target.files[0]);
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
                            Recipe Image
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange}  />
                        </Col>
                    </Form.Group>
                </Form>
                <Image src={img ? URL.createObjectURL(img) : ""}/>
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