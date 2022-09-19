/* Làm việc với Array
 1. To String: truyền từ array sang chuỗi đc ngăn cách cố định bởi dấu ","
 2. Join:  truyeefn tuwf array thanfh 1 chuỗi nhưng có thể thay đổi các kí tự ngăn cách nhau
 3.Pop : Xóa phần tử cuối mảng trong array, trả ra kqua chính là phần tử  đã xóa
 4.Push : Thêm phần tử vào cuối mảng, trả ra kqua độ dài mới của mảng
 5. Shift: Xóa đi phần ở  đầu mảng và trả về kquả là phần tử đã  xóa
 6.Unshift: Thêm phần tử vào đầu mảng, trả ra kqua độ dài mới của mảng
 7.Splicing: Xóa, cắt, chèn phần tử mới vào mảng
 Xóa: languages.splice(a,b): 
      trong đó: a là vị trí muốn bắt đầu xóa; 
                b là số lượng el muốn xóa
 Chèn: languages.splice(a,b,c): 
       trong đó: a là vị trí sẽ chèn; 
                 b là số lượng muốn xóa
                 c là el muồn chèn vào thay thế phần tử đã xóa
 8.Concat: Nối các array lại thành 1
 9.slicing: cắt 1 vài hoặc toàn bộ el của mảng. Trả ra kết quả chính là các phần tử được cắt
   arr.slice(a,b) trong đó: 
                a là vị trí bắt đầu cắt
                b là vị trí kết thúc
    Nếu muốn cắt đến cuối mảng thì bỏ tham số thứ 2.            
*/

var languages = ["Javascript", "PHP", "Ruby"];
console.log(languages.toString()); // kq: Javascript,PHP,Ruby
console.log(languages.join(" - ")); // kq: Javascript-PHP-Ruby
console.log(languages.pop()); // kq: Ruby
console.log(languages); // kq: ["Javascript", "PHP"]
console.log(languages.push("Dart")); // kq: 3
console.log(languages); // kq: ["Javascript", "PHP","Dart"]
console.log(languages.shift()); // kq: Javascript
console.log(languages); // kq: ["PHP","Dart"]
console.log(languages.unshift("C++", "Java")); // 4
console.log(languages); // kq: ["C++","Java","PHP","Dart"]

// languages.splice(1, 2); // xóa 2 phần tử từ vị trí số 1. Tức là xóa phần tử số 1,2
// console.log("splice", languages); // kq: ["C++","Dart"]

languages.splice(1, 2, "Angular", "Typescript"); // xóa 2 phần tử từ vị trí số 1.Chèn thêm 2 phần tử khác thay thế
console.log("spliced", languages); // kq: ['C++', 'Angular', 'Typescript', 'Dart']

var languages2 = ["C#", "PHP"];
console.log(languages.concat(languages2)); // kq: ['C++', 'Angular', 'Typescript', 'Dart', 'C#', 'PHP']

console.log(languages.slice(1, 3)); //kq: ['Angular', 'Typescript']
console.log(languages.slice(1, 3)); //kq: ['Angular', 'Typescript']
