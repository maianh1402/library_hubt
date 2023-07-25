import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidLockAlt, BiSolidLockOpenAlt } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://thanhtra.com.vn/data/images/0/2023/04/12/nguyendiem/276306091-3580898528803260-6745018814836843395-n.jpg"
          width="100%"
          alt=""
          className="h-[100vh]"
        />
        <div className="absolute px-[50px] rounded-[30px] min-h-[75vh] w-[40%] top-0 left-0 shadow-[2px_2px_10px_0px_rgba(0,0,0,0.7)] my-[100px] mx-[450px]">
          <h1 className="text-center relative  text-[40px] py-[30px] font-sans font-bold">
            Register Form
          </h1>
          <div className="">
            <div className="flex py-[10px]">
              <FaUser className="text-[30px] mr-2" />
              <input
                type="text"
                placeholder="User name..."
                className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] placeholder:text-[#333]"
              />
            </div>
            <hr className="border-[#fff] my-2" />
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
            <div className="flex py-[10px] justify-between relative">
              <BiSolidLockAlt className="text-[30px] mr-2" />
              <input
                type="password"
                placeholder="Confirm password..."
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
            Bạn đã có tài khoản?{" "}
            <Link href="/login" className="cursor-pointer">
              <b>Log In</b>
            </Link>
          </span>
          <button className="my-[30px] items-center text-[#fff] text-[25px] h-[40px] w-[100%] bg-red-500 hover:bg-red-400">
            Register
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Register;
