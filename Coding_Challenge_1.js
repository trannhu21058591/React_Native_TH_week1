// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).


function markHigherBMI(mass_marks, height_marks, mass_john, height_john) {
    var marksBMI = mass_marks / height_marks ** 2;
    var johnBMI = mass_john / height_john ** 2;
    return marksBMI > johnBMI;
}

var markHigherBMI_data1 = markHigherBMI(78, 1.69, 92, 1.95); // truyền dữ liệu vào hàm
console.log("Mark co chi so lon hon John: ", markHigherBMI_data1);

var markHigherBMI_data2 = markHigherBMI(95, 1.88, 85, 1.76);
console.log("Mark co chi so lon hon John: ", markHigherBMI_data2);