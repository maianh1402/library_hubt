const About = () => {
  return (
    <div className="bg-gray-800 py-[10px]">
      <h1 className="text-center mb-[50px] relative  text-[30px]">
        Giới thiệu
      </h1>
      <div className="mt-[5px] mx-[100px] grid grid-cols-2 gap-2">
        <div>
          <iframe
            width="570"
            height="300"
            src="https://www.youtube.com/embed/n8jtuy_Nnco"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay;
                            clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="italic text-[#f5f5f5]">
          <p className=" text-[25px]">Nhiệm vụ của chúng tôi</p>
          <div className="py-[10px] text-[17px]">
            Thư viện điện tử có chức năng đảm bảo việc thu thập tài liệu và
            sách, hỗ trợ khai thác những nguồn tài liệu phục vụ cho việc học tập
            của sinh viên cũng như các bạn đọc bên ngoài quan tâm.
          </div>
          <div className="py-[10px] text-[17px]">
            Bổ sung - trao đổi, phân tích - xử lý, bảo quản các loại hình tài
            liệu, xây dựng, hoàn thiện hệ thống tra cứu, tìm kiếm phù hợp, hướng
            dẫn bạn đọc truy cập, khai thác kho tư liệu một cách hiệu quả.
          </div>
          <button className="h-[35px] w-[150px] text-[15px]  bg-[#4d607b] hover:bg-[#fff] hover:text-gray-900 rounded-[5px] ">
            Tìm hiểu thêm
          </button>
        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4 pl-[100px] mt-[10px]">
        <span className="bg-gray-900 text-[#f5f5f5] w-[50%] rounded-[5px] p-[20px] text-center">
          Tra cứu nhanh
        </span>
        <span className="bg-gray-900 text-[#f5f5f5] w-[50%] rounded-[5px] p-[20px] text-center">
          Tiện lợi
        </span>
        <span className=" bg-gray-900 text-[#f5f5f5] w-[50%]  rounded-[5px] p-[20px] text-center">
          Tài liệu rõ ràng
        </span>
      </div>
    </div>
  );
};

export default About;
