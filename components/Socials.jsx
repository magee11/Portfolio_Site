import React from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const socialList = [
  { icons: <FaGithub />, url: "https://github.com/magee11", label: "GitHub" },
  { icons: <FaLinkedin />, url: "https://www.linkedin.com/in/magesh-a-b70a0316b/", label: "LinkedIn" },
  { icons: <FaPhoneAlt />, url: "tel:+919345236199", label: "+91 9345236199" },
  { icons: <FaEnvelope />, url: "mailto:mageshmarch@gmail.com", label: "mageshmarch@gmail.com" },
  {
    icons: <FaMapMarkerAlt />,
    url: "https://www.google.com/maps/search/?api=1&query=Bengaluru%2C+Karnataka",
    label: "Bengaluru, Karnataka",
  },
];
const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socialList.map((item, index) => {
        const isExternal = item.url.startsWith("http");
        return (
          <a
            href={item.url}
            key={index}
            title={item.label}
            aria-label={item.label}
            {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            className={iconStyle}
          >
            {item.icons}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
