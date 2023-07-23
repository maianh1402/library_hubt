import { review } from "@/api/api";

const Program = () => {
  return (
    // <div className="px-[100px]">
    //   <h1 className="text-center mb-[10px] relative  text-[30px]">
    //     Chương trình học
    //   </h1>
    //   <div className="w-[900px] lex flex-wrap justify-between">
    //     <div className="tour-content-item lex flex-wrap justify-between">
    //       <button
    //         className="w-[50%] h-[300px] relative flex"
    //         style={{
    //           background:
    //             "linear-gradient( 43deg, #b6dcec 0%, #6DBFE2 46%, #b6dcec 100% )",
    //             border: "none"
    //         }}
    //       >
    //         <h5 className="card__title">Năm 1</h5>
    //       </button>
    //       <div className="w-[50px] pt-[20px] pl-[50px]">
    //         <h2 className="font-sans font-normal text-[#6DBFE2]">Năm 1</h2>
    //         <p className="text-[18px] mx-[20px] font-sans">
    //           Chương trình học nhẹ nhàng tập trung chủ yếu các môn đại cương
    //           phối hợp các môn giáo dục thể chất.
    //         </p>
    //         <button className="btn">Xem thêm</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="tour-content row" data-aos="zoom-out-left">
    //     <div className="tour-content-item row">
    //       <div className="tour-content-item-text">
    //         <h2>Năm 2</h2>
    //         <p>
    //           Cho sinh viên làm quen các môn nền tảng của một lập trình viên và
    //           tạo thói quen tự học, tự tìm hiểu.
    //         </p>
    //         <button className="btn">Xem thêm</button>
    //       </div>
    //       <button className="tour-content-item-img card">
    //         <h5 className="card__title">Năm 2</h5>
    //       </button>
    //     </div>
    //   </div>
    //   <div className="tour-content row" data-aos="zoom-out-right">
    //     <div className="tour-content-item row">
    //       <button className="tour-content-item-img card">
    //         <h5 className="card__title">Năm 3</h5>
    //       </button>
    //       <div className="tour-content-item-text">
    //         <h2>Năm 3</h2>
    //         <p>
    //           Phân chia chuyên ngành, tập trung vào các môn đòi hỏi sinh viên
    //           phải học được những kỹ năng chuyên môn.
    //         </p>
    //         <button className="btn">Xem thêm</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="tour-content row" data-aos="zoom-out-left">
    //     <div className="tour-content-item row">
    //       <div className="tour-content-item-text">
    //         <h2>Năm 4</h2>
    //         <p>
    //           Sinh viên đi thực tập thực tế, viết báo cáo sau khi kết thúc thực
    //           tập và bảo vệ luận văn của mình.
    //         </p>
    //         <button className="btn">Xem thêm</button>
    //       </div>
    //       <button className="tour-content-item-img card">
    //         <h5 className="card__title">Năm 4</h5>
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="px-[100px]">
      <h1 className="text-center mb-[10px] relative  text-[30px]">
        Chương trình học
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="px-[20px] py-[12px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_10px_0px_#6DBFE2]">
          <div className="align-center pb-[20px] border-solid border-[#dddd] border-b">
            <img
              src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png"
              alt=""
              className="w-[50px]"
            />
            <p className="text-[16px] mx-[20px] font-sans">
              <span className="text-[#6DBFE2]">&ldquo;</span>
              Tài liệu đọc dễ hiểu, tìm kiếm nhanh gọn, tiện lợi
              <span className="text-[#6DBFE2]">&rdquo;</span>
            </p>
          </div>
          <div className="p-[12px] flex flex-wrap justify-between">
            <img
              src="/img/Trường đại học Kinh doanh và Công nghệ Hà Nội.png"
              alt=""
              className="w-[50px] h-[50px] rounded-[50%]"
            />
            <div className="w-[70%]">
              <h2 className="font-sans text-[16px] text-[#6DBFE2]">
                Ngô Sỹ Nguyên
              </h2>
              <p className="font-sans text-[14px] text-[#333]">04/10/2022</p>
            </div>
          </div>
        </div>

        <div className="px-[20px] py-[12px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_10px_0px_#6DBFE2]">
          <div className="align-center pb-[20px] border-solid border-[#dddd] border-b">
            <img
              src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png"
              alt=""
              className="w-[50px]"
            />
            <p className="text-[16px] mx-[20px] font-sans">
              <span className="text-[#6DBFE2]">&ldquo;</span>
              Tài liệu đọc dễ hiểu, tìm kiếm nhanh gọn, tiện lợi
              <span className="text-[#6DBFE2]">&rdquo;</span>
            </p>
          </div>
          <div className="p-[12px] flex flex-wrap justify-between">
            <img
              src="/img/Trường đại học Kinh doanh và Công nghệ Hà Nội.png"
              alt=""
              className="w-[50px] h-[50px] rounded-[50%]"
            />
            <div className="w-[70%]">
              <h2 className="font-sans text-[16px] text-[#6DBFE2]">
                Ngô Sỹ Nguyên
              </h2>
              <p className="font-sans text-[14px] text-[#333]">04/10/2022</p>
            </div>
          </div>
        </div>

        <div className="px-[20px] py-[12px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_10px_0px_#6DBFE2]">
          <div className="align-center pb-[20px] border-solid border-[#dddd] border-b">
            <img
              src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png"
              alt=""
              className="w-[50px]"
            />
            <p className="text-[16px] mx-[20px] font-sans">
              <span className="text-[#6DBFE2]">&ldquo;</span>
              Tài liệu đọc dễ hiểu, tìm kiếm nhanh gọn, tiện lợi
              <span className="text-[#6DBFE2]">&rdquo;</span>
            </p>
          </div>
          <div className="p-[12px] flex flex-wrap justify-between">
            <img
              src="/img/Trường đại học Kinh doanh và Công nghệ Hà Nội.png"
              alt=""
              className="w-[50px] h-[50px] rounded-[50%]"
            />
            <div className="w-[70%]">
              <h2 className="font-sans text-[16px] text-[#6DBFE2]">
                Ngô Sỹ Nguyên
              </h2>
              <p className="font-sans text-[14px] text-[#333]">04/10/2022</p>
            </div>
          </div>
        </div>

        <div className="px-[20px] py-[12px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_10px_0px_#6DBFE2]">
          <div className="align-center pb-[20px] border-solid border-[#dddd] border-b">
            <img
              src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png"
              alt=""
              className="w-[50px]"
            />
            <p className="text-[16px] mx-[20px] font-sans">
              <span className="text-[#6DBFE2]">&ldquo;</span>
              Tài liệu đọc dễ hiểu, tìm kiếm nhanh gọn, tiện lợi
              <span className="text-[#6DBFE2]">&rdquo;</span>
            </p>
          </div>
          <div className="p-[12px] flex flex-wrap justify-between">
            <img
              src="/img/Trường đại học Kinh doanh và Công nghệ Hà Nội.png"
              alt=""
              className="w-[50px] h-[50px] rounded-[50%]"
            />
            <div className="w-[70%]">
              <h2 className="font-sans text-[16px] text-[#6DBFE2]">
                Ngô Sỹ Nguyên
              </h2>
              <p className="font-sans text-[14px] text-[#333]">04/10/2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
