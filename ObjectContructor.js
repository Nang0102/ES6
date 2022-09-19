// hàm khởi tạo: Object Contructor
// thiết kế lên những mô tả cho các đối tượng sau này:
//this.firstName là thuộc tính có gtri =  tham số firstName truyền vào khi khởi tạo đối tượng

// User: là tên của bản thiết kế đối tượng mà ta tạo ra.
// Coi function User như bản thiết kế đối tượng mà ta tạo ra
// hàm tạo:
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName} `;
  };
}

// author, user chính là 2 đối tượng
var author = new User("Mai", "Lan", "Avatar");
var user = new User("Hoa", "Hue", "Avatar");

author.title = " Cùng nhau chia sẻ"; // thêm thuộc tính vào từng đối tượng
user.comment = " Học tập thật tốt";

console.log(author.getName());
console.log(user.getName());

// expression function:
// var User = function () {};

function Career(Chef, Teacher, IT) {
  this.Chef = Chef;
  this.Teacher = Teacher;
  this.IT = IT;
  // this.getName = function () {
  //   return `${this.Chef} ${this.Teacher}`;
  // };
}

var career = new Career("lead", "primary teachers", "dev");
var job = new Career("cook", "lecturers", "tester");

console.log((career.title = "happy"));
console.log((job.comment = "smile"));

//prototype(nguyên mẫu): Giúp thêm thuộc tính từ bên ngoài hàm tạo. Thêm vào đối tượng được tạo ra
// Bên trong hàm tạo dùng this.
console.log(
  "abc",
  (Career.prototype.getName = function () {
    return `${this.Chef} ${this.Teacher}`;
  })
);

console.log("getChef", career);
console.log(job.getName());

var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1; // do tháng sẽ trả kq từ 0-11 nên ohải +1 để đúng với tháng htai
var year = date.getFullYear();

console.log(`${day}/${month}/${year}`);
console.log(date);

// Câu lệnh rẽ nhánh if-else: Với 1 điều kiện đúng thì nó sẽ trả ra kq và k vần ktra các câu lệnh còn lại
var date = 9;
if (date === 3) {
  console.log("Hôm nay là thứ 2");
} else if (date > 10) {
  console.log("Hôm nay là thứ 3");
} else if (date === 4) {
  console.log("Hôm nay là thứ 4");
} else {
  console.log(" Không biết");
}

// Câu lệnh rẽ nhánh -Switch

date = 5;
switch (date) {
  case 1:
    console.log("Hôm nay trời nắng đẹp");
    break;
  case 2:
    console.log("Hôm nay mát trời");
    break;
  case 3:
    console.log("Hôm nay trời mưa");
    break;
  case 4:
    console.log("Hôm nay mát trời và có chút nắng");
    break;
}
