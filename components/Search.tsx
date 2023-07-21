const Search = () => {
  return (
    <div>
      <div>
        <img
          src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829783/DJI_0216.jpg"
          width="100%"
          alt=""
        />
      </div>
      <div className="">
        <h1>Trường Đại học Kinh doanh và Công nghệ Hà Nội</h1>
        <p>(Thư viện điện tử Công nghệ thông tin)</p>
        <form action="">
          <h1>Bạn tìm kiếm?</h1>
          <p>Tìm kiếm</p>
          <select>
            <option value="#">--Tìm theo chuyên ngành--</option>
            <option value="#">--Tất cả--</option>
          </select>
          <p>Tên tài liệu </p>
          <input type="text" placeholder="Seach" />
          <p>Tên tác giả</p>
          <input type="text" placeholder="Seach" />
          <button className="btn">Tìm kiếm</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
