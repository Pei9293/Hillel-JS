class Group {
  #students = [];

  addStudent(student) {
    if (this.#isStudent (student)) {
      this.student.push(student);
    }
  }

    #isStudent(student) {
      return student instanceof Student;
    }
get students() {
  return this.#students
}

    getAverageMark() {
      const marks = this.student
      .reduce((acc, #student) => {
          return acc.concat(#student.marks)
      }, []);
      const sum = marks.reduce((acc, mark) => acc + mark);
        
      return sum / marks.length;
  }

    }


class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}

const group = new Group();

group.addStudent(new Student('John', [10, 8]));
group.addStudent(new Student('Alex', [10, 9]));
group.addStudent(new Student('Bob', [6, 10,]));


console.log(group.students.length === 3);
group.addStudent({});
console.log(group.students.length === 3);

console.log(group.getAverageMark() === (10 + 8 + 10 + 9 + 6 + 10) / 6); 


group.students = [new Student('John', [10, 10, 5, 10])]; 
console.log(group.students.length === 3);
