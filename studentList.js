var studentList = [];
//khoi tao ra 10 sinh vien -> add vao mang studentlist
for (i = 0; i < 10; i++) {
  var student = {
    fullname: "Tran Van " + 1,
    gender: "Nam",
    age: i,
    email: i + "@gmail.com",
    address: "HN_" + 1,
  };
  studentList.push(student);
}
//Hien thi sinh vien co trong mang studentList ra table
//studentList.length -> tra ve so phan tu trong mang
for (i = 0; i < studentList.length; i++) {
  //cach 1
  document.writeln(`<tr>
				<td>${i + 1}</td>
				<td>${studentList[i].fullname}</td>
				<td>${studentList[i].gender}</td>
				<td>${studentList[i].age}</td>
				<td>${studentList[i].email}</td>
				<td>${studentList[i].address}</td>
			</tr>`);
}
