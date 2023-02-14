import { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "../styles/navigation_link.css";

const NavigationLink = (props) => {
  const hoverColor = "rgb(38,237,255)";
  const neutralColor = "rgb(255,255,255)";
  const animationDuration = 0.1;

  const [cursorInside, setCursorInside] = useState(false);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (cursorInside) {
      gsap.to(textRef.current, {
        duration: animationDuration,
        color: hoverColor,
      });
    } else {
      gsap.to(textRef.current, {
        duration: animationDuration,
        color: neutralColor,
      });
    }
  }, [cursorInside]);

  return (
    <Link
      to={"/" + props.name.replaceAll(" ", "-")}
      style={{ textDecoration: "none", cursor: "auto" }}
    >
      <div
        ref={textRef}
        className="navigation-link"
        onMouseEnter={() => setCursorInside(true)}
        onMouseLeave={() => setCursorInside(false)}
      >
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </div>
    </Link>
  );
};

export default NavigationLink;
