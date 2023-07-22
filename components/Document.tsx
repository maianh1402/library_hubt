import { document } from "@/api/api";

const Document = () => {
  return (
    <div className="px-[100px] max-w-[1024px] m-auto">
      <h1 className="text-center mb-[10px] text-[30px]">Tài liệu nổi bật</h1>
      <div className="flex flex-wrap justify-between">
        {document.map((item) => (
          <div className="w-[30%] h-[400px] relative truncate">
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
              <h2 className="text-[#6DBFE2]">{item.title}</h2>
              <p>{item.star}</p>
              <p className="text-[#8b8b8b] mx-[12px] my-0">
                {item.description}
              </p>
              <button className="rounded-[5px] h-[35px] w-[150px] text-[#fff] border-none mt-[20px] bg-[#6DBFE2] hover:text-[#6DBFE2] hover:bg-transparent hover:border-solid hover:border-[#6DBFE2] border">
                Xem thêm
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Document;
