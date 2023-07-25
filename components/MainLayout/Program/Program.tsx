import { program, review } from "@/api/api";
import Link from "next/link";

const Program = () => {
  return (
    <div className="px-[100px] h-[100vh] py-[10px]">
      <h1 className="text-center my-[60px] relative  text-[40px] mb-[10px] pb-[10px]">
        Chương trình học
      </h1>
      <div className="grid grid-cols-2 gap-4 mb-[60px] mt-[5px] mx-[100px]">
        {program.map((item) => (
          <div
            key={item.level}
            className="border-none flex relative px-[20px] py-[12px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)] m-[20px] rounded-[5px]"
            style={{
              background:
                "linear-gradient( 43deg, #3f516b 0%, #111827 46%, #3f516b 100% )",
            }}
          >
            <Link
              className="h-[200px] w-[100%]"
              href="https://translate.google.com.vn/?sl=en&tl=vi&text=Unexpected%20token%20%60div%60.%20Expected%20jsx%20identifier&op=translate"
            >
              <h5 className="text-[#fff] text-[30px] font-sans px-[180px] py-[85px]">
                Năm {item.level}
              </h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
