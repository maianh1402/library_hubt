import Header from "@/components/Header";
import dayjs from "dayjs";
import Footer from "@/components/Footer";
import Comment from "@/components/Comment";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ProgramItem = () => {
  return (
    <>
      <Header />
      <div className="py-[60px] px-[100px]">
        <h1 className="text-center relative  text-[40px] py-[10px]">
          Lập trình java
        </h1>
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex">
            <img
              src="http://visualcpp.net/wp-content/uploads/2019/10/cpp_avatar.jpg"
              className="w-[50px] h-[50px] rounded-[50%] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_10px_0px_#6DBFE2]"
            />
            <div className="block pl-[10px] leading-[1.5rem]">
              <p className="text-[25px] font-bold">Nguyễn văn a</p>
              <p className="text-[15px] text-[#7e7c7c] font-sans italic font-thin">
                Đăng ngày: {dayjs().format("DD/MM/YYYY")}
              </p>
            </div>
          </div>
          <div className="flex text-[30px]">
            <AiOutlineStar />
            <AiFillStar className="" />
          </div>
        </div>
        <div className="pt-[30px]">
          <img
            src="http://visualcpp.net/wp-content/uploads/2019/10/cpp_avatar.jpg"
            className="w-[100%] h-[400px] object-cover"
          />
          <p className="text-[20px] py-[40px]">
            Tại vòng chung kết cuộc thi STEM Olympiad quốc tế năm 2023 vừa diễn
            ra tại thủ đô Paris (Pháp) từ ngày 18 đến 23-7, Tuyên Quang vinh dự
            có 1 học sinh tham dự và đoạt được giải Khuyến khích môn lập trình.
            Học sinh xuất sắc đoạt được giải thưởng danh giá này là em Ma Trung
            Đức, lớp 8 E, Trường THCS Phan Thiết (TP Tuyên Quang). Trước khi
            đoạt được giải thưởng quốc tế lần này, Đức là học sinh có nhiều
            thành tích cao trong học tập, em đã từng đoạt giải nhì cấp tỉnh cuộc
            thi Khoa học kỹ thuật dành cho học sinh trung học, đoạt 2 Huy chương
            Vàng chung kết quốc gia và 1 Huy chương Đồng chung kết quốc tế (thi
            vượt cấp với học sinh khối 9,10,11,12) Kỳ thi Olympic Tin học quốc
            tế Hồng Kông mở rộng HKICO, 1 Huy chương Vàng chung kết quốc gia Kỳ
            thi Olympic tiếng Anh quốc tế HIPPO, đoạt Huy chương Vàng vòng thi
            quốc tế tổ chức online tại Kỳ thi Anh ngữ quốc tế Teeneagle do Đại
            học Brunel Anh quốc tổ chức... Cuộc thi Olympiad quốc tế 2023 có 440
            thí sinh đến từ 22 quốc gia tham dự. Qua cuộc thi, giúp học sinh
            Việt Nam nâng cao kiến thức, kỹ năng trong lĩnh vực STEM và Tiếng
            Anh, vận dụng trong thực tiễn. Kết quả đã cho thấy sự quan tâm, định
            hướng của ngành giáo dục tỉnh trong hoạt động giáo dục STEM tại các
            trường học đã phát huy hiệu quả. Trường THCS Phan Thiết đã thành lập
            các câu lạc bộ học tập theo sở thích của học sinh, trong đó em Ma
            Trung Đức là thành viên tích cực của Câu lạc bộ Tin học của nhà
            trường. Tại vòng chung kết cuộc thi STEM Olympiad quốc tế năm 2023
            vừa diễn ra tại thủ đô Paris (Pháp) từ ngày 18 đến 23-7, Tuyên Quang
            vinh dự có 1 học sinh tham dự và đoạt được giải Khuyến khích môn lập
            trình. Học sinh xuất sắc đoạt được giải thưởng danh giá này là em Ma
            Trung Đức, lớp 8 E, Trường THCS Phan Thiết (TP Tuyên Quang). Trước
            khi đoạt được giải thưởng quốc tế lần này, Đức là học sinh có nhiều
            thành tích cao trong học tập, em đã từng đoạt giải nhì cấp tỉnh cuộc
            thi Khoa học kỹ thuật dành cho học sinh trung học, đoạt 2 Huy chương
            Vàng chung kết quốc gia và 1 Huy chương Đồng chung kết quốc tế (thi
            vượt cấp với học sinh khối 9,10,11,12) Kỳ thi Olympic Tin học quốc
            tế Hồng Kông mở rộng HKICO, 1 Huy chương Vàng chung kết quốc gia Kỳ
            thi Olympic tiếng Anh quốc tế HIPPO, đoạt Huy chương Vàng vòng thi
            quốc tế tổ chức online tại Kỳ thi Anh ngữ quốc tế Teeneagle do Đại
            học Brunel Anh quốc tổ chức... Cuộc thi Olympiad quốc tế 2023 có 440
            thí sinh đến từ 22 quốc gia tham dự. Qua cuộc thi, giúp học sinh
            Việt Nam nâng cao kiến thức, kỹ năng trong lĩnh vực STEM và Tiếng
            Anh, vận dụng trong thực tiễn. Kết quả đã cho thấy sự quan tâm, định
            hướng của ngành giáo dục tỉnh trong hoạt động giáo dục STEM tại các
            trường học đã phát huy hiệu quả. Trường THCS Phan Thiết đã thành lập
            các câu lạc bộ học tập theo sở thích của học sinh, trong đó em Ma
            Trung Đức là thành viên tích cực của Câu lạc bộ Tin học của nhà
            trường. Tại vòng chung kết cuộc thi STEM Olympiad quốc tế năm 2023
            vừa diễn ra tại thủ đô Paris (Pháp) từ ngày 18 đến 23-7, Tuyên Quang
            vinh dự có 1 học sinh tham dự và đoạt được giải Khuyến khích môn lập
            trình. Học sinh xuất sắc đoạt được giải thưởng danh giá này là em Ma
            Trung Đức, lớp 8 E, Trường THCS Phan Thiết (TP Tuyên Quang). Trước
            khi đoạt được giải thưởng quốc tế lần này, Đức là học sinh có nhiều
            thành tích cao trong học tập, em đã từng đoạt giải nhì cấp tỉnh cuộc
            thi Khoa học kỹ thuật dành cho học sinh trung học, đoạt 2 Huy chương
            Vàng chung kết quốc gia và 1 Huy chương Đồng chung kết quốc tế (thi
            vượt cấp với học sinh khối 9,10,11,12) Kỳ thi Olympic Tin học quốc
            tế Hồng Kông mở rộng HKICO, 1 Huy chương Vàng chung kết quốc gia Kỳ
            thi Olympic tiếng Anh quốc tế HIPPO, đoạt Huy chương Vàng vòng thi
            quốc tế tổ chức online tại Kỳ thi Anh ngữ quốc tế Teeneagle do Đại
            học Brunel Anh quốc tổ chức... Cuộc thi Olympiad quốc tế 2023 có 440
            thí sinh đến từ 22 quốc gia tham dự. Qua cuộc thi, giúp học sinh
            Việt Nam nâng cao kiến thức, kỹ năng trong lĩnh vực STEM và Tiếng
            Anh, vận dụng trong thực tiễn. Kết quả đã cho thấy sự quan tâm, định
            hướng của ngành giáo dục tỉnh trong hoạt động giáo dục STEM tại các
            trường học đã phát huy hiệu quả. Trường THCS Phan Thiết đã thành lập
            các câu lạc bộ học tập theo sở thích của học sinh, trong đó em Ma
            Trung Đức là thành viên tích cực của Câu lạc bộ Tin học của nhà
            trường.
          </p>
          <Comment />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProgramItem;
