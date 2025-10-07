import React from "react";

function Footer(props) {
  return (
    <div>
      <h2>
        © {props.year} {props.name} Website
      </h2>
    </div>
  );
}

export default Footer;
