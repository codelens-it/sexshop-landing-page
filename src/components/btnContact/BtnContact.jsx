import { useState } from "react";
import "./btnContact.css";

const BtnContact = ({
  backgroundColor = "rgba(0, 0, 0, 0.6)",
  hoverColor = "var( --fucsia-transparent)"
}) => {
  const [bgColor, setBgColor] = useState(backgroundColor);

  return (
    <a
      className="button"
      href="https://codelenstech.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ background: bgColor }}
      onMouseEnter={() => setBgColor(hoverColor)}
      onMouseLeave={() => setBgColor(backgroundColor)}
    >
      Explorá nuestros productos
    </a>
  );
};

export default BtnContact;