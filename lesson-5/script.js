


// const students = [
//   {
//     id: 10,
//     name: 'John Smith',
//     marks: [10, 8, 6, 9, 8, 7]
//   },
//   {
//     id: 11,
//     name: 'John Doe',
//     marks: [ 9, 8, 7, 6, 7]
//   },
//   {
//     id: 12,
//     name: 'Thomas Anderson',
//     marks: [6, 7, 10, 8]
//   },
//   {
//     id: 13,
//     name: 'Jean-Baptiste Emanuel Zorg',
//     marks: [10, 9, 8, 9]
//   }
// ]

// averageStudentMark(Number(prompt('Enter id')));

// averageGroupMark(students);

// function averageStudentMark(x) {

//   let student = students.find(student => student.id === x)

//       const markSum = student.marks.reduce((acc, curent) => {
//           const Sum = acc + curent;
//           return Sum });

//   let averageMark = markSum / student.marks.length

// return alert(`id of the student ${student.name} is ${averageMark}`)
// }

// function averageGroupMark(x) {

//   let averageMarksArray = []

//   for (let i = 0; i < x.length; i++) {
//       averageMarksArray.push(
//           x[i].marks.reduce((acc, curent) => {
//               const Sum = acc + curent;
//               return Sum }
//           ) / x[i].marks.length)
//   }

//   GroupMark=averageMarksArray.reduce((acc, curent) => {
//       const Sum = acc + curent;
//       return Sum }
//   ) / averageMarksArray.length

// return alert(`id of the group is ${GroupMark}`)
// }

decrement(5);

function decrement(i) {
  if( i === 0) {
    return;
  }
  console.log(i);
  decrement(i - 1);
}
