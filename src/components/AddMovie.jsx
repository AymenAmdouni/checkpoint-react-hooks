import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BiSolidVideoPlus } from "react-icons/bi";
import ReactStars from "react-stars";

const AddMovie = ({addMovie}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddMovie = () => {
    addMovie({ title, description, posterUrl, rate });
    handleClose();
  };
  return (
    <>
     
        <Button variant="dark" onClick={handleShow}>
          <BiSolidVideoPlus style={{ margin: "1px 6px" }} /> Add Movie
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              <BiSolidVideoPlus style={{ margin: "1px 6px" }} /> Movie Details{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title :</Form.Label>
                <Form.Control
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Name of the movie"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Movie description </Form.Label>
                <Form.Control
                  onChange={(e) => setDescription(e.target.value)}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Poster Image URL</Form.Label>
                <Form.Control
                  onChange={(e) => setPosterUrl(e.target.value)}
                  type="text"
                  placeholder="https://google.com/images/movie.png "
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Rating (from 1 to 5) </Form.Label>
                <ReactStars
                  onChange={(rate) => setRate(rate)}
                  count={5}
                  size={24}
                  color2={"#ffd700"}
                  half={false}
                  value={rate}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleAddMovie()}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    
  );
};

export default AddMovie;
