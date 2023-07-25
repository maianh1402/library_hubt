import { BiSolidLike, BiLike } from "react-icons/bi";
import { LuMessageSquare } from "react-icons/lu";
import { PiShareFat } from "react-icons/pi";
import { FiSend } from "react-icons/fi";
import { BsCamera } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";
import { AiOutlineFileGif } from "react-icons/ai";

const Comment = () => {
  return (
    <>
      <hr />
      <div className="grid grid-cols-3 gap-3 py-[10px] text-[25px] px-[280px]">
        <button className="flex items-center">
          <BiLike className="hover:font-bold hover:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)]" />
          <BiSolidLike />
          <p className="pl-[5px] text-[18px]">Thích</p>
        </button>
        <button className="flex items-center">
          <LuMessageSquare />
          <p className="pl-[5px] text-[18px]">Bình luận</p>
        </button>
        <button className="flex items-center">
          <PiShareFat />
          <p className="pl-[5px] text-[18px]">Chia sẻ</p>
        </button>
      </div>
      <hr />
      <div className="h-[100px] grid grid-cols-6 gap pt-[10px] px-[200px]">
        <div className="pl-[90px] pt-1">
          <img
            src="http://visualcpp.net/wp-content/uploads/2019/10/cpp_avatar.jpg"
            className="w-[50px] h-[50px] rounded-[50%] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_10px_0px_#6DBFE2]"
          />
        </div>
        <div className="col-span-5 rounded-[20px] bg-[#f5f5f5]">
          <div className="flex px-[20px] items-center">
            <input
              placeholder="Viết bình luận..."
              className="w-[100%] h-[60px] bg-[#f5f5f5] rounded-t-[20px] outline-none"
            ></input>
            <button className="text-[20px] rounded-[50%] hover:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)] p-[8px]">
              <FiSend />
            </button>
          </div>
          <div className="flex pl-[20px] pb-[20px]">
            <button className="text-[20px] pr-[10px]">
              <BsCamera />
            </button>
            <button className="text-[20px] pr-[10px]">
              <CiFaceSmile />
            </button>
            <button className="text-[20px] pr-[10px]">
              <AiOutlineFileGif />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
