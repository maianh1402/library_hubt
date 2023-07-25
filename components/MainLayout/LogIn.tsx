import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { BiSolidLockAlt, BiSolidLockOpenAlt } from "react-icons/bi";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";

import Link from "next/link";

const LogIn = () => {
  return (
    <div className="relative">
      <img
        src="https://thanhtra.com.vn/data/images/0/2023/04/12/nguyendiem/276306091-3580898528803260-6745018814836843395-n.jpg"
        width="100%"
        alt=""
        className="h-[100vh]"
      />
      <div className="absolute rounded-[30px] px-[50px] min-h-[75vh] w-[40%] top-0 left-0 shadow-[2px_2px_10px_0px_rgba(0,0,0,0.7)] my-[100px] mx-[450px]">
        <h1 className="text-center relative  text-[40px] py-[30px] font-sans font-bold">
          Log In Form
        </h1>
        <div className="">
          <div className="flex py-[10px]">
            <MdEmail className="text-[30px] mr-2" />
            <input
              type="text"
              placeholder="Email..."
              className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] placeholder:text-[#333]"
            />
          </div>
          <hr className="border-[#fff] my-2" />
          <div className="flex py-[10px] justify-between relative">
            <BiSolidLockOpenAlt className="text-[30px] mr-2" />
            <input
              type="password"
              placeholder="Password..."
              className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] placeholder:text-[#333]"
            />
            <div className="absolute top-5 right-0">
              {/* <AiOutlineEye /> */}
              <AiOutlineEyeInvisible className="cursor-pointer" />
            </div>
          </div>
          <hr className="border-[#fff] my-2" />
        </div>
        <span className="w-[100%] ml-[200px] text-[20px]">
          Bạn chưa có tài khoản?{" "}
          <Link href="/register" className="cursor-pointer">
            <b>Register</b>
          </Link>
        </span>
        <button className="mt-[30px] mb-4 items-center text-[#fff] text-[25px] h-[40px] w-[100%] bg-red-500 hover:bg-red-400">
          Log In
        </button>
        <p className="w-[100%] text-center my-[20px] font-bold">OR</p>
        <div className="flex">
          <button className="w-[100%] flex text-[20px] bg-[#5476aa] items-center h-[40px] rounded-[5px] mx-[5px] hover:bg-[#6286bb]">
            <div className="bg-[#141e2d] h-[100%] w-[40px] rounded-l-[5px]">
              <AiFillGithub className="text-[#fff] m-[10px]" />
            </div>
            <div className="text-[#fff] w-[100%]">Github</div>
          </button>
          <button className="flex hover:bg-[#e0e0e0] w-[100%] text-[20px] bg-[#fff] items-center h-[40px] rounded-[5px] mx-[5px]">
            <div className="h-[100%] w-[40px] bg-[#cdcccc] rounded-l-[5px]">
              <FcGoogle className="m-[10px]" />
            </div>
            <div className="w-[100%]">Google</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
