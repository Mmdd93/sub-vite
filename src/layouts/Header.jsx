import {
  faArrowRightLong,
  faGear,
  faSliders,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  const icons = [faSliders, faToggleOff, faGear, faArrowRightLong];

  return (
    <>
      <Container className="header pt-5">
        
      </Container>
      <div className="justify-content-center d-flex pt-1 pb-5 title">
        <span className="text-span">{"!"}</span>
        <h1>{"به پنل کاربری خوش آمدید"}</h1>
      </div>
    </>
  );
};

export default Header;
