const Search = () => {
  return (
    <div className="relative pt-[60px]">
      <img
        src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829783/DJI_0216.jpg"
        width="100%"
        alt=""
        className="h-[100vh]"
      />
      <div className="absolute top-0 left-0 min-h-[100vh] bg-[#ffffff1a] text-center w-[400px] pt-[150px] px-[50px]">
        <h1 className="text-[#6DBFE2] text-[2rem] font-bold">
          Trường Đại học Kinh doanh và Công nghệ Hà Nội
        </h1>
        <p className="text-[#6DBFE2] mt-[-5px]">
          (Thư viện điện tử Công nghệ thông tin)
        </p>
        <form action="" className="py-[30px] px-[12px] bg-white mt-[30px]">
          <h1 className="text-[27px] font-semibold">Bạn tìm kiếm?</h1>
          <p className="text-[#6DBFE2] text-left mt-[8px] mb-[3px]">Tìm kiếm</p>
          <select>
            <option>--Tìm theo chuyên ngành--</option>
            <option>--Tất cả--</option>
          </select>
          <p className="text-[#6DBFE2] text-left mt-[8px] mb-[3px]">
            Tên tài liệu{" "}
          </p>
          <input
            type="text"
            placeholder="Seach"
            className="w-[100%] h-[35px] pl-[12px] bg-[#dddd] outline-none border-none"
          />
          <button className="rounded-[5px] h-[35px] w-[150px] text-[#fff] border-none mt-[20px] bg-[#6DBFE2] hover:text-[#6DBFE2] hover:bg-transparent hover:border-solid hover:border-[#6DBFE2] border">
            Tìm kiếm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
