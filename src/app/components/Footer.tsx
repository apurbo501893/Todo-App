import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerArray = [
    {
      icon: <FaGithub />,
      href: "https://github.com/apurbo501893",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com/@gamingwithapurbo2631",
    },
    { icon: <FaLinkedin />, href: "https://bd.linkedin.com/" },
  ];
  return (
    <footer className="w-full text-gray-400 ">
      <p className="text-sm text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis libero
        eaque officiis. Aperiam nostrum debitis eius, ullam nesciunt ex in sit
        omnis. Ea fugiat commodi quos a aspernatur accusamus sit!
      </p>
      <div className="flex items-center justify-center gap-2 mt-2">
        {footerArray.map((item, index) => (
          <Link key={index} href={item?.href} target="blank">
            {item?.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
