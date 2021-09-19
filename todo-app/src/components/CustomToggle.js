import React from "react";
import { useAccordionButton } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";

function CustomToggle({ eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return <AiFillEye className="show-desc" onClick={decoratedOnClick} />;
}

export default CustomToggle;
