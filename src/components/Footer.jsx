import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
  
  { href: "https://github.com/jgtwenty3", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/justin-guerrero-a9636524/", icon: <FaLinkedin/> },
  
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;