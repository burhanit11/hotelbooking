import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12   items-center  text-center  px-5 text-gray-400 text-sm   py-5">
        <div className="flex items-center justify-center">
          <a href="https://www.facebook.com/">
            <AiFillFacebook size={25} className="cursor-pointer" />
          </a>
          <a href="https://x.com/">
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </a>
          <a href="https://www.instagram.com/">
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </a>
          <a href="https://www.youtube.com/">
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </a>
        </div>
        <p className="md:py-0 py-6 ">
          © 2025 Burhan Rabbani. All rights reserved.
        </p>
        {/* <span>Terms · Privacy Policy</span> */}
        <div className="sm:block flex items-center justify-center ">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
