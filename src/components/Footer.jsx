import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Contact Us</h1>
        </div>

        <div className="w-full md:w-3/4 flex flex-col md:flex-row md:gap-8">
          <div className="md:w-1/2 flex flex-col gap-20px">
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faLocationDot} color="white" className="mr-2 flex-shrink-0" />
              <span> Street No. 6, Vikramnagar Society 1, Punagam Road, near Sitanagar chowk, Surat, Gujarat 395010</span>
            </div>
            {/* <div className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 flex-shrink-0" />
              <a href="mailto:abc@gmail.com">abc@gmail.com</a>
            </div> */}
            <div className="mb-4 flex items-center">
              <a href="tel:+918140314173">
                <FontAwesomeIcon icon={faPhone} className="mr-2 flex-shrink-0" />
                <span>8140314173</span>
              </a>
            </div>
            <div className="mb-4 flex items-center md:gap-6">
              <a href="https://wa.me/+918140314173" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="mr-2 flex-shrink-0 h-8 w-8" /></a>
              <a href="https://www.instagram.com/maruti_20rs_sale" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="mr-2 flex-shrink-0 h-8 w-8" /></a>
            </div>
          </div>
          <div className="md:w-1/2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="300"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119051.49809016059!2d72.74136493888057!3d21.177880539252094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f981a837e39%3A0xbeced4c7963f7fba!2sMaruti%20Sale%20House!5e0!3m2!1sen!2sin!4v1721116445602!5m2!1sen!2sin">
              </iframe>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;