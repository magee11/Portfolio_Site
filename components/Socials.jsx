import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialList = [
  { icons: <FaGithub />, url: "https://github.com/magee11" },
  { icons: <FaLinkedin />, url: "https://www.linkedin.com/in/magesh-a-b70a0316b/" },
];
const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socialList.map((item, index) => (
        <Link href={item.url} key={index} target="_blank" className={iconStyle}>
          {item.icons}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
