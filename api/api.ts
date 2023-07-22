export const navigation = [
  { name: "Trang chủ", href: "/home", current: true },
  { name: "Tài liệu", href: "/document", current: false },
  { name: "Giới thiệu", href: "/about", current: false },
  { name: "Đánh giá", href: "/review", current: false },
  { name: "Liên hệ", href: "/footer", current: false },
];

export const about = [
  {
    src: "http://diaoc5sao.vn/wp-content/uploads/2016/02/2.png",
    text: "Tra cứu nhanh",
  },
  {
    src: "https://www.freeiconspng.com/thumbs/like-icon-png/black-like-icon-png-13.png",
    text: "Tiện lợi",
  },
  {
    src: "data:image/png;base64,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",
    text: "Tài liệu rõ ràng",
  },
];

export const document = [
  {
    id: 1,
    title: "Lập trình C++",
    description:
      "C++ là một loại ngôn ngữ lập trình bậc trung. Đây là ngôn ngữ lập trình đa năng được tạo ra bởi Bjarne Stroustrup",
    star: 5,
    src: "http://visualcpp.net/wp-content/uploads/2019/10/cpp_avatar.jpg",
    text: "Tra cứu nhanh",
  },
  {
    id: 2,
    title: "Lập trình java",
    description:
      "Java là một trong những ngôn ngữ lập trình hướng đối tượng. Nó được sử dụng trong phát triển phần mềm, trang web, game hay ứng dụng",
    star: 5,
    src: "https://images.careerbuilder.vn/content/news/20160802/java-stuff-696x557_1470108126.png",
    text: "Tiện lợi",
  },
  {
    id: 3,
    title: "Ngôn ngữ Python",
    description:
      "Python là một ngôn ngữ lập trình bậc cao cho các mục đích lập trình đa năng, do Guido van Rossum tạo ra và lần đầu ra mắt vào năm 1991.",
    star: 5,
    src: "https://tuhocict.com/wp-content/uploads/2020/06/Python-programming-language-feature-image-1024x576.jpg",
    text: "Tài liệu rõ ràng",
  },
];
