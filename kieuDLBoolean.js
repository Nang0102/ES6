/** Các kiểu DL:
 * 1 Kiểu đơn giản
 -Number
 -String
 -Boolean
 -Undefined
 -Null
 -Symbol
 2 Kiểu phức tạp:
 - Object
 - Function

3. Để kiểm tra xem là kiểu DL gì
 */

// 3. Để kiểm tra xem là kiểu DL gì
var fullName = "Mai Mai";
console.log(typeof fullName);

/** Boolean: true or false */

// var a = 1;
// var b = 2;

// var isSuccess = a < b;
// console.log("isSuccess", isSuccess);

/* Điều kiện IF - ElSE
/** Có 6 giá trị sau khi dịch sang Boolean  thì sẽ là false:
 0; false; "(chuỗi rỗng)"; undefined; NaN; null
 */

var fullName = ""; // dieu kien sai vi đang để chuỗi rỗng
// var fullName; // dieu kien sai vì k gán gtri cho  fullName => undefined
if (fullName) {
  console.log("DIEU KIEN DUNG");
} else {
  console.log("DIEU KIEN SAI", fullName);
}
