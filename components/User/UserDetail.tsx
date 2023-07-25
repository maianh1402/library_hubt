import dayjs from "dayjs";
import { AiFillStar } from "react-icons/ai";
import Footer from "../Footer";
import Header from "../Header";
import { BiErrorCircle, BiSolidLockOpenAlt, BiSolidTime } from "react-icons/bi";
import { FaUserCheck, FaUserPlus, FaTransgender } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { BsBookmarkStarFill } from "react-icons/bs";
const UserDetail = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#18191a]">
        <div className="bg-[#242526] px-[200px]">
          <div className="">
            <img
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/312465132_1446884999152525_7217473384523773148_n.jpg?stp=cp6_dst-jpg_s1080x2048&_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zRZW9rz1UHcAX8Ym0Y2&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBB_rG3ntQ1TqUJa9DvV6Wdc50aDsJRHYiPOViSlVO4fg&oe=64C4393C"
              className="w-[100%] h-[60vh] object-cover rounded-b-[8px]"
            />
            <div className="flex items-center  mx-[50px] justify-between w-[100%]">
              <div className="flex">
                <img
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/321203457_607281567830047_82453607623317435_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=euKGpSiSD8QAX-wUEnE&_nc_ht=scontent.fhan2-4.fna&oh=00_AfB47ZpqRU_OVYUrnJUhyjVD2pGShA308y9Dx9hhGlkEjw&oe=64C4FBAD"
                  className="mt-[-30px] border-solid border-4 border-[#242526] w-[200px] rounded-[50%]"
                />
                <div className="block pl-[10px] pt-[50px] leading-[1.5rem]">
                  <div className="flex text-[#fff]">
                    <p className="text-[40px] font-bold pr-[10px]">Mai Anh</p>
                    <p className="text-[25px]">(Bùi)</p>
                  </div>
                  <div className="pt-[20px] text-[20px]">
                    <div className="text-[#7e7c7c] font-sans italic font-thin">
                      TH25.09 - Sinh vien
                    </div>
                    <div className="text-yellow-500 flex pt-[5px]">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex text-[20px] pr-[50px] pt-[100px] text-[#7e7c7c]">
                Tham gia ngày: {dayjs().format("DD/MM/YYYY")}
              </div>
            </div>
            <hr className="border-[#404040] my-2" />
          </div>
          <div className="flex w-[100%] text-[#5a5959] px-[10px]">
            <button className="h-[40px] text-[20px] mr-[10px] w-[100px] mb-[10px]">
              Giới thiệu
            </button>
            <button className="h-[40px] text-[20px] mr-[10px] w-[100px] mb-[10px]">
              Chỉnh sửa
            </button>
          </div>
        </div>
        <div className="bg-[#18191a] h-[167vh] px-[200px] text-[#fff]">
          <div className="rounded-[8px]  bg-[#242526] mt-[20px] py-[20px]">
            <h1 className="text-center relative  text-[30px] py-[15px] font-sans font-bold">
              Chỉnh sửa trang cá nhân
            </h1>
            <hr className="border-[#f5f5f5] my-2" />
            <div className="px-[50px]">
              <div className="mt-[30px]">
                <h2 className="font-bold text-[25px]">Ảnh đại diện</h2>
                <div className="mx-[200px] my-[10px]">
                  <div className="flex py-[10px]">
                    <img
                      src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/312465132_1446884999152525_7217473384523773148_n.jpg?stp=cp6_dst-jpg_s1080x2048&_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zRZW9rz1UHcAX8Ym0Y2&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBB_rG3ntQ1TqUJa9DvV6Wdc50aDsJRHYiPOViSlVO4fg&oe=64C4393C"
                      className=" h-[30vh] w-[50%] object-cover rounded-[50%]"
                    />
                    <input
                      type="file"
                      className="px-[20px] pt-[150px] bg-transparent outline-none text-[20px]"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                <h2 className="font-bold text-[25px]">Ảnh bìa</h2>
                <div className="mx-[200px] my-[10px]">
                  <div className="flex py-[10px]">
                    <img
                      src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/312465132_1446884999152525_7217473384523773148_n.jpg?stp=cp6_dst-jpg_s1080x2048&_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zRZW9rz1UHcAX8Ym0Y2&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBB_rG3ntQ1TqUJa9DvV6Wdc50aDsJRHYiPOViSlVO4fg&oe=64C4393C"
                      className=" h-[30vh] w-[50%] object-cover"
                    />
                    <input
                      type="file"
                      className="px-[20px] pt-[150px] bg-transparent outline-none text-[20px]"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                <h2 className="font-bold text-[25px]">Thông tin cá nhân</h2>
                <div className="mx-[50px] my-[10px]">
                  <div className="flex py-[10px]">
                    <FaUserCheck className="text-[20px] mr-2" />
                    <input
                      type="text"
                      placeholder="Nhập tên..."
                      className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] placeholder:text-[#c3c3c3]"
                    />
                  </div>
                  <hr className="border-[#fff] my-[2px]" />
                  <div className="flex py-[10px]">
                    <FaUserPlus className="text-[20px] mr-2" />
                    <input
                      type="text"
                      placeholder="Nhập họ..."
                      className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] placeholder:text-[#c3c3c3]"
                    />
                  </div>
                  <hr className="border-[#fff] my-[2px]" />
                  <div className="flex py-[10px]">
                    <FaTransgender className="text-[20px] mr-2" />
                    <div>
                      <input
                        type="radio"
                        value="Male"
                        name="gender"
                        className="ml-[50px]"
                      />{" "}
                      Nam
                      <input
                        type="radio"
                        value="Female"
                        name="gender"
                        className="ml-[50px]"
                      />{" "}
                      Nữ
                    </div>
                  </div>
                  <hr className="border-[#fff] my-[2px]" />
                  <div className="flex py-[10px]">
                    <PiStudentFill className="text-[20px] mr-2" />
                    <div>
                      <input
                        type="radio"
                        value="Male"
                        name="gender"
                        className="ml-[50px]"
                      />{" "}
                      Sinh viên
                      <input
                        type="radio"
                        value="Female"
                        name="gender"
                        className="ml-[50px]"
                      />{" "}
                      Giảng viên
                    </div>
                  </div>
                  <hr className="border-[#fff] my-[2px]" />
                  <div className="flex py-[10px]">
                    <BsBookmarkStarFill className="text-[20px] mr-2" />
                    <input
                      type="text"
                      placeholder="Nhập Lớp..."
                      className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] placeholder:text-[#c3c3c3]"
                    />
                  </div>
                  <hr className="border-[#fff] my-[2px]" />
                </div>
              </div>

              <button className="mt-[50px] mb-4 items-center text-[#fff] text-[25px] h-[40px] w-[100%] bg-red-500 hover:bg-red-400">
                Lưu lại chỉnh sửa
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#18191a] h-[167vh] px-[200px] text-[#fff]">
          <div className="rounded-[8px]  bg-[#242526] mt-[20px] py-[20px]">
            <h1 className="text-center relative  text-[30px] py-[15px] font-sans font-bold">
              Giới thiệu
            </h1>
            <hr className="border-[#f5f5f5] my-2" />
            <div className="px-[50px]">
              <div className="mt-[30px]">
                <h2 className="font-bold text-[25px]">Thông tin cá nhân</h2>
                <div className="mx-[50px] my-[10px]">
                  <div className="flex py-[10px]">
                    <FaUserCheck className="text-[20px] mr-2" />
                    <p className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] text-center">
                      Bùi Phương Anh
                    </p>
                  </div>
                  <hr className="border-[#fff] my-[2px]" />
                  <div className="flex py-[10px]">
                    <BsBookmarkStarFill className="text-[20px] mr-2" />
                    <p className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] text-center">
                      TH25.09
                    </p>
                  </div>
                  <hr className="border-[#fff] my-[2px]" />
                  <div className="flex py-[10px]">
                    <PiStudentFill className="text-[20px] mr-2" />
                    <p className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] text-center">
                      Sinh viên
                    </p>
                  </div>
                  <hr className="border-[#fff] my-[2px]" />
                  <div className="flex py-[10px]">
                    <FaTransgender className="text-[20px] mr-2" />
                    <p className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] text-center">
                      Nữ
                    </p>
                  </div>
                  <hr className="border-[#fff] my-[2px]" />
                  <div className="flex py-[10px]">
                    <AiFillStar className="text-[20px] mr-2" />
                    <p className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] text-center">
                      3
                    </p>
                  </div>
                  <hr className="border-[#fff] my-[2px]" />
                  <div className="flex py-[10px]">
                    <BiSolidTime className="text-[20px] mr-2" />
                    <p className="w-[100%] px-[10px] bg-transparent outline-none text-[20px] text-center">
                      25/07/2023
                    </p>
                  </div>
                  <hr className="border-[#fff] my-[2px]" />
                </div>
              </div>

              <button className="mt-[50px] mb-4 items-center text-[#fff] text-[25px] h-[40px] w-[100%] bg-red-500 hover:bg-red-400">
                Chỉnh sửa
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetail;
