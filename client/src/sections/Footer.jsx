import { FaEnvelope, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import PropTypes from "prop-types";
import { memo, useState } from "react";
import { useI18n } from "../i18nContext";

const footerContent = [
  {
    logo: <FaWhatsapp />,
    info: "+90 543 808 39 97",
    label: "phone number",
    link: "https://wa.me/+905438083997",
  },
  {
    logo: <FaEnvelope />,
    info: "ahmet409809@gmail.com",
    label: "email address",
    link: "mailto:ahmet409809@gmail.com",
  },
  {
    logo: <FaLocationDot />,
    info: "Aydin / Kusadasi",
    label: "whatsapp number",
    link: "https://maps.app.goo.gl/DYKu6NZHdjhnrkiQ7",
  },
];

const Footer = memo(function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const i18nData = useI18n();

  function handleForm(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className=" w-full bg-neutral-dark px-3 py-[14px] sm:px-16 md:px-8">
      <div className="max-container flex items-center justify-between ">
        <div className="flex  items-center gap-2 sm:gap-6">
          <img
            src="./Logo.png"
            alt="logo"
            className=" aspect-square h-16 md:h-20 lg:h-40 "
            loading="lazy"
          />

          <div className="h-11 w-[1px] bg-primary-color opacity-30 md:h-24 lg:h-32"></div>
          <div>
            <h1 className=" text-xs font-light text-primary-color md:text-xl lg:text-2xl">
              {i18nData("footer.title")}
            </h1>

            <h2 className=" text-sm text-neutral md:text-xl lg:text-3xl">
              KusadasiVipTaxi
            </h2>
          </div>
        </div>
        <div className=" flex flex-col items-start justify-center gap-2 px-10 py-4 text-primary-color sm:gap-4 ">
          {footerContent.map((item, index) => (
            <Information
              key={index}
              logo={item.logo}
              info={item.info}
              label={item.label}
              url={item.link}
            />
          ))}
        </div>
      </div>
      <div className=" mb-[7.5px] mt-2 h-[1px] bg-primary-color"></div>
      <div className="max-container my-6 flex flex-col items-center justify-between gap-8 sm:gap-16 ">
        <div className="flex w-full flex-col items-start justify-start">
          <h3 className="text-[14px] font-light text-neutral sm:text-[36px] md:text-[20px] lg:text-[32px]  ">
            {i18nData("footer.slogan")}
          </h3>
          <h4 className=" text-[12px] text-primary-color sm:text-[32px] md:text-[24px] ">
            {i18nData("footer.sub_slogan")}
          </h4>
        </div>
        <form
          className="m-0 w-full"
          action="https://formspree.io/f/myyrbvan"
          method="POST"
        >
          <p className=" mb-4 text-3xl text-white sm:mb-8 sm:text-5xl ">
            {i18nData("footer.get_in_touch")}{" "}
          </p>
          <input
            type="text"
            className="placeholder: mb-3 w-full border-b-[1px]  border-primary-color bg-transparent text-[6px] text-neutral outline-none placeholder:text-primary-color sm:text-[20px] md:text-[16px] "
            placeholder={i18nData("footer.form_name")}
            name="name"
            onChange={handleForm}
            value={formData.name}
            autoComplete="given-name"
            required={true}
          ></input>
          <input
            type="email"
            className="placeholder: mb-3 w-full border-b-[1px]  border-primary-color bg-transparent text-[6px] text-neutral outline-none placeholder:text-primary-color autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_rgb(0,0,0)] sm:text-[20px] md:text-[16px]  "
            placeholder={i18nData("footer.form_email")}
            name="email"
            onChange={handleForm}
            value={formData.email}
            autoComplete="given-email"
            required={true}
          ></input>
          <label
            htmlFor="message"
            className=" text-[6px] text-primary-color  sm:text-[20px] md:text-[16px]"
          >
            {i18nData("footer.form_help")}
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleForm}
            value={formData.message}
            required={true}
            autoComplete="given-message"
            className=" h-[75px] w-full resize-none border-[1px] border-primary-color  bg-transparent p-1 text-[8px] text-neutral outline-none sm:h-[150px] sm:text-[20px] md:text-[16px] "
          ></textarea>
          <button className="mt-3 rounded-lg border-[1px] border-primary-color  bg-transparent px-4 py-1 text-[6px] text-neutral hover:text-primary-color sm:px-6 sm:py-2 sm:text-[16px] ">
            {i18nData("footer.form_button")}
          </button>
        </form>
      </div>
      <div className="flex items-center justify-between gap-1 text-[8px] text-primary-color  sm:text-[10px]">
        <div>
          <a
            href="https://www.linkedin.com/in/gorkem-serin-097606227/"
            aria-label="Developer Linkedin Link"
            className="flex gap-2"
          >
            <p>Desing :</p>
            <img
              src="/devLogo.png"
              className=" w-14 sm:w-16"
              alt="Developer Logo"
            />
          </a>
        </div>
        <div className="flex items-center">
          <p className="text-[9px]"> {i18nData("footer.copyright")} </p>
          <p className="text-[9px]">
            {new Date().getFullYear()} {i18nData("footer.company")}
          </p>
        </div>
      </div>
    </div>
  );
});
const Information = memo(function Information(props) {
  return (
    <div className="flex items-center justify-center gap-2 ">
      <div className=" text-sm sm:text-xl ">{props.logo}</div>
      <a
        href={props.url}
        aria-label={props.label}
        className="w-20 cursor-pointer text-[10px] font-light md:w-48 md:text-[12px] lg:w-72 lg:text-[16px] "
      >
        {props.info}
      </a>
    </div>
  );
});
Information.propTypes = {
  logo: PropTypes.node.isRequired,
  info: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Footer;