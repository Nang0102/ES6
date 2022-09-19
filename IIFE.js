//IIFE laf gif? Immediately Invoked Function Expression: là 1 function expression (biểu thức tạo ra 1 hàm) được gọi ngay lập tức. Hàm tự gọi

//function expression

//1. IIFE trông như thế nào? là 1 expression function và có hàm gọi ngay sau đó> ()

var show1 = (function () {
  console.log("Hãy luôn cười tươi và hạnh phúc nhé!");
})();

//2. Luôn có dấu ; trước IIFE để ngăn cách. Giống như thư viện webpack.

let b = "happy"; // dấu ; đây
var show2 = (function (message2) {
  console.log("message:", message2);
})("Chúc bạn luôn vui vẻ và hạnh phúc!");

//3. Hàm IIFE là hàm "private". là riêng tư. không truy xuất được vào nó

var show = (function myFunction(message1) {
  // myFunction(); // Nếu gọi luôn thì bị tràn stack
  console.log("message:", message1);
})("Chúc bạn luôn cười!");

// myFunction(); //  ngoài phạm vi nên k truy cập được
