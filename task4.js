const students = [
  { name: "sriram", marks: [80, 70, 90] },
  { name: "selva", marks: [60, 50, 40] },
  { name: "rajesh", marks: [90, 85, 95] },
  { name: "nithan", marks: [55, 65, 60] }
];
const totalMarks = students.map(student => ({
  name: student.name,
  total: student.marks.reduce((sum, mark) => sum + mark, 0)
}));
console.log("Total Marks of Each Student:", totalMarks)
l.og