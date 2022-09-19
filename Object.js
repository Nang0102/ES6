//Object: lưu trữ thong tin cụ thể. khai báo các cặp key:value
var myInfo = {
  name: "Nguyen Van A",
  age: 18,
  address: "Ha Noi",
};
var myKey = "address";
// Thêm key:value vào mảng
myInfo.date = 20; //Cách 1:
myInfo["my-email"] = "nva@gmail.com"; // Cách 2:
console.log(myInfo);

// Lấy value ra khỏi mảng:
console.log(myInfo.name); // cách 1: sử dụgn dấu .
console.log(myInfo[myKey]); // cách 2: sử dụng  []

// Xóa phần tử trong mảng:

delete myInfo.age;
console.log("deleted", myInfo);

// value là 1  function: key là getClass, value là 1 function
// trong TH bình thường thì key:value được gọi chung là thuộc tính (property)
// TH value là 1 function thì key:value được gọi là method:
// VD: method getName...
//     property: grade: 1
var school = {
  class: "1A",
  grade: 1,
  getClass: function () {
    return this.class;
  },
};
console.log(school.getClass()); // kquả là : 1A
