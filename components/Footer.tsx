"use client";
import { BiLogoFacebook, BiPhone } from "react-icons/bi";
import { AiFillYoutube, AiOutlineMail } from "react-icons/ai";
import { ImEarth } from "react-icons/im";

import Navbar from "./Navbar";

const footer = [
  {
    href: "https://www.facebook.com/dhkinhdoanhvacongnghe",
    icon: <BiLogoFacebook />,
  },
  {
    href: "https://www.youtube.com/@ManhLinhNguyensvhubtforum",
    icon: <AiFillYoutube />,
  },
  { href: "http://hubt.edu.vn/", icon: <ImEarth /> },
  { href: "tel:+1900 633 695", icon: <BiPhone /> },
  { href: "mailto:tttt@hubt.edu.vn", icon: <AiOutlineMail /> },
];

export default function Footer() {
  return (
    <>
      <div className="h-[50vh] grid grid-cols-2 gap bg-gray-800 text-gray-300 mt-[5px] px-[530px] py-[50px]">
        <div className="col-span-3 pb-[40px]">
          <Navbar />
        </div>
        <div className="col-span-3 flex space-x-4 px-[60px]">
          {footer.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className=" text-gray-300 hover:text-white hover:font-black rounded-md px-3 py-2 text-[1.25rem]"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center bg-[#f5f5f5]">
        ©2022.Sản phẩm thuộc nhóm nghiên cứu khoa học
      </div>
    </>
  );
}
