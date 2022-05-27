import { useState } from "react";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import WeatherApp from "./profile/Weather/WeatherApp";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 example">
        Виджеты
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Погода</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            <WeatherApp />
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Example;
