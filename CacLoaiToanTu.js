/**
 * Các loại toán tử:
 * 1.Toán tử số học
 * 2.Toán tử gán
 * 3.Toán tử so sánh
 * 4.Toán tử logic
 */

/** 1 Toán tử số học
 * (" + ": phép cộng)
 * (" - ": phép trừ)
 * (" * ": phép nhân)
 * (" ** ": lũy thừa)
 * (" / ": phép chia)
 * (" % ": phép chia lấy số dư)
 * (" ++ ": Tăng  1 giá trị số)
 * (" -- ": Giảm 1 giá trị số)
 */

var a = 8;
var h = 3;

var c = a % h;
var d = a ** h;

console.log("d", d);
console.log("c", c);

var x = 8;
x++;
x++;
x++;
x--;
console.log("x", x);

/** Tiền tố và hậu tố
 * Tiền tố(prefix): ++a: +1 cho a trước rồi mới thực hiện phép tính
 * hậu tố (suffix): a++: thực hiện a rồi mới +1
 */

var a = 6;
//Tiền tố:
//Bước 1: +1 cho a, a = a+1 => a=7
//Bước 2: Trả về a sau khi được +1

var output = ++a;
console.log("a tiền tố", output);

var e = 6;
//Hậu tố:
//Bước 1: coppy biến b thành 1 biến "b coppy" =6
//Bước 2: Cộng 1 của b, b = b+1 => b =7
//Bước 3: trả về biến "b coppy"

var output2 = e++;
console.log("b hậu tố", output2);
console.log("b", e);

var number = 6;
// var output = number++ + --number; //output = 6+6=12
// var output = number-- - number-- - number--; //output = 6-5-4 =-3
var output = ++number * 2 - number-- * 2; // output = 7*2 -7*2 =0
console.log("ouput", output);

/**
 * 2. Toán tử  gán
  Toán tử            Ví dụ               Tương đương
   =                  x = y                 x = y  
  +=                  x += y                x = x + y
  -=                  x -= y                x = x - y
  *=                  x *= y                x = x * y
  **=                 x **= y               x = x ** y
  /=                  x /= y                x = x / y
   
 * var a =1 : Khi nhìn toán tử gán thì đọc vế phải của toán tử trước, vế phải được gán cho vế trái
 * 
 */

/**
 * 3. Toán tử chuỗi - String Operator
 */

var firstname = "Mai";
var lastname = "Nguyen";

console.log("toan tu chuoi ", firstname + " " + lastname);
//Cộng là toán tử số học khi cả 2 vế đều là số. trả về kquả là tổng
// Cộng là toán tử chuỗi khi 1 trong 2 vế không phải là số. Trả về kết quả nối chuỗi

var name = "Mai";
name = name + " " + "Lan";
console.log(name);

/**3. Toán tử so sánh
  
Toán tử
 ==             ==> Bằng: chỉ quan tâm đến value của 2 biến
 ===            ==> Bằng: so sánh cả value và kiểu DL
 !=             ==> Không Bằng, Khác: chỉ quan tấm đên value của 2 biến
 !==            ==> Không Bằng, khác: quan tâm đến cả value và kiểu DL của 2 biến
 >              ==> Lớn hơn
 <              ==> Nhỏ hơn
 >=             ==> Lớn hơn hợc bằng
 <=             ==> Nhỏ hơn hợc bằng
 */

// var a = 2;
// var b = "2";
var a = "Mai Nguyen";
var f = "Mai nguyen";

if (a > f) {
  //dieu kien sai // a=b: dieu kien dung
  console.log("Dieu kien dung", a);
} else {
  console.log(" dieu kien sai", f);
}

/** 4 Toán tử logic
 1. && - And
 2. || - or
 3. !  - Not: phủ định lại
 */

var a = -1;
var g = -2;
var c = -3;

// a > 0 && b > 0 && c < 0 : điều kiện này sai: false
// !(a > 0 && b > 0 && c < 0): phủ định của false thành true => diều kiện này đúng
if (!(a > 0 && g > 0 && c < 0)) {
  console.log(" điều kiện này đúng");
}

// Câu điều kiện if-else và phép so sánh

var n = 1;
var m = 2;

var results = "N" && "p" && "M";
console.log(results); // result = M
// Vì có 6 giá trị mà khi converst sang Boolean thì nó sẽ hiểu là false. Nếu ngoài 6 gtri này thì
//khi thực hiện toán tử && thì nó sẽ đọc từ trái qua phải:
// nếu thấy giá trị khác 6 gtri trên thì nó sẽ đọc qua vế phải và lấy gtri là vế bên phải và gán gia trị đó vào biến.
// Nếu thấy 1 trong 6 gtri đó thì nó gán luôn vào biến và trả ra két quả
//VD
var Log = "N" && null && "p" && "M";
console.log("kqua là 1 trong 6 gtri:", Log); // Log = null

//var results = "N" && undefined && "p" && "M"; // đúng
if (results) {
  console.log("Đúng");
} else {
  console.log("Sai");
}

// Khi thực hiện toán tử ||:
// Đọc value bên trái mà thấy khác 6 gtri trên thì lấy luôn và gán cho biến k quan tam đến các giá trị phía sau

var Or = null || "A" || "p" || "M";
console.log("kqua là gtri ben trai khi khac 6 gtri tren:", Or);
