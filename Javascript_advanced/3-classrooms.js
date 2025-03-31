function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }
    const students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }
    return students;
}
  // classRoom creation 
const classRoom = createClassRoom(10);

console.log(classRoom[0]()); // should be 1
console.log(classRoom[3]());  // should be 4
console.log(classRoom[9]()); // should be 10
