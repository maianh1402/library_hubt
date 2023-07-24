import { document } from "@/api/api";

const Document = () => {
  return (
    <div className="h-[100vh] px-[100px] max-w-[1024px] m-auto">
      <h1 className="text-center my-[60px] relative  text-[40px]">
        Tài liệu nổi bật
      </h1>
      <div className="flex flex-wrap justify-between">
        {document.map((item) => (
          <div className="w-[30%] h-[400px] relative truncate rounded-[8px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)]">
            <img
              key={item.id}
              src={item.src}
              className="h-[100%] w-[100%] absolute object-cover"
            />
            <div
              className="h-[150px] w-[100%] absolute bottom-0 p-[10px]"
              style={{
                background: "linear-gradient(to right, #000000cc, #ffffff4d)",
              }}
            >
              <h2 className="text-[#fff] text-[20px]">{item.title}</h2>
              <>{item.star}</>
              <p className="text-[#fff] mx-[12px] my-0">{item.description}</p>
              <button className="rounded-[5px] h-[35px] w-[150px] text-[#fff] border-none mt-[20px] bg-[#263453] hover:text-[#fff] hover:bg-transparent hover:border-solid hover:border-[#6d7d93] border">
                Xem thêm
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-[60px] relative  text-[20px]">
        <button className="rounded-[5px] h-[35px] w-[150px] text-[#fff] border-none mt-[20px] bg-[#263453] hover:text-[#263453] hover:bg-transparent hover:border-solid hover:border-[#6d7d93] border">
          Tìm kiếm thêm
        </button>
      </div>
    </div>
  );
};

export default Document;
