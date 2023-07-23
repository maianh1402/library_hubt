import { review } from "@/api/api";
import { BsArrowRight } from "react-icons/bs";

const Review = () => {
  return (
    <div className="px-[100px]">
      <h1 className="text-center mb-[10px] relative  text-[30px]">Review</h1>
      <div className="flex flex-wrap justify-between">
        {review.map((item) => (
          <div className="w-[30%] px-[20px] py-[12px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_10px_0px_#6DBFE2]">
            <div className="align-center pb-[20px] border-solid border-[#dddd] border-b">
              <img
                src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png"
                alt={item.name}
                className="w-[50px]"
              />
              <p className="text-[16px] mx-[20px] font-sans">
                <span className="text-[#6DBFE2]">&ldquo;</span>
                {item.cmt}
                <span className="text-[#6DBFE2]">&rdquo;</span>
              </p>
            </div>
            <div className="p-[12px] flex flex-wrap justify-between">
              <img
                src={item.avatar}
                alt=""
                className="w-[50px] h-[50px] rounded-[50%]"
              />
              <div className="w-[70%]">
                <h2 className="font-sans text-[16px] text-[#6DBFE2]">
                  {item.name}
                </h2>
                <p className="font-sans text-[14px] text-[#333]">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="flex ">
        <span>Xem thêm</span> <BsArrowRight />
      </button>
    </div>
  );
};

export default Review;
