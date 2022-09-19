/**
 * Giới thiệu 1 số hàm built-in
 * 1.Alert: bật lên cửa sổ thông báo: Chỉ message
 * 2.Confirm: bật lên cửa sổ thông báo: Hỏi cancel or ok
 * 3.Prompt: bật lên cửa sổ thông báo: có ô input để nhập dữ liệu
 * 4.Set Timeout: Chạy 1 đoạn code sau 1 khoảng tgian và chỉ chạy 1 lần
 * 5.Set Interval: Chạy 1 đoạn code sau 1 khoảng tgian và chạy lien tục, lặp đi lặp lại
 */

// function Show() {
//   alert("Hi everyone");
// }
// Show();

var ham_built = document.getElementById("ham_built-in");
console.log("Tra ve doi tuong", ham_built); //trả về thẳng đối tượng

const built_item = document.getElementsByClassName("item-built-in");
console.log(
  "Tra ve mot mang om nhieu el ben trong select qua class",
  built_item
); // trả về một mảng gồm nhiều element bên trong.seclect  qua class

const tag_item = document.getElementsByTagName("h3");
console.log(
  "Tra ve mot mang om nhieu el ben trong select qua tên thẻ",
  tag_item
); // trả về một mảng gồm nhiều element bên trong. select qua tên thẻ

const fun_props = document.querySelector(".function-properties");
console.log(
  "lấy thẳng luôn 1 đối tượng truyền vào matching với class",
  fun_props
); //lấy thẳng luôn 1 đối tượng truyền vào matching với class

// function writeLog() {
//   var myString = "";
//   for (var param of arguments) {
//     myString += `${param} - `;
//     // console.log(myString);
//   }
//   console.log(myString);
// }
// writeLog("log1", "log2", "log3");

//arguments là 1 array
function writeLog() {
  var lucky = "";
  for (var param of arguments) {
    lucky += `${param} - `;
  }
  console.log(lucky);
}

writeLog("smile!", "love", "happy");

/*
Có 3 cách để hiện ra bảng thông báo: confirm, alert, prompt
*/
// var isConfirm = confirm("Message?");
// console.log(isConfirm);

function sum(a, b) {
  // return a + b;
  return a.toString() + b.toString(); // tao thanh chuoi vd: result 28
}
const result = sum(2, 8);
console.log(result);

// setTimeout(function () {
//   alert("Thong bao");
// }, 1000);

// setInterval(function () {
//   alert("Thong bao");
// }, 10000);
