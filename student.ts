// class Student {
//     private studentId: string;
//     private name: string;
//     private age: number;
//     private courses: Course[] = [];
//     private grades: Grade[] = [];

//     constructor(studentId: string, name: string, age: number) {
//         this.studentId = studentId;
//         this.name = name;
//         this.age = age;
//     }

//     // Method to add a course
//     addCourse(course: Course): void {
//         this.courses.push(course);
//         console.log(`Course ${course.getCourseName()} added to student ${this.name}.`);
//     }

//     // Method to add a grade
//     addGrade(grade: Grade): void {
//         this.grades.push(grade);
//         console.log(`Grade ${grade.getGradeValue()} added for course ${grade.getCourse().getCourseName()} for student ${this.name}.`);
//     }

//     // Method to calculate GPA
//     calculateGPA(): number {
//         let totalPoints = 0;
//         let totalCredits = 0;

//         for (let grade of this.grades) {
//             totalPoints += grade.getGradeValue() * grade.getCourse().getCredits();
//             totalCredits += grade.getCourse().getCredits();
//         }

//         return totalCredits === 0 ? 0 : totalPoints / totalCredits;
//     }

//     // Method to display student details
//     getStudentDetails(): void {
//         console.log(`Student ID: ${this.studentId}, Name: ${this.name}, Age: ${this.age}`);
//         console.log("Courses Enrolled:");
//         for (let course of this.courses) {
//             console.log(`- ${course.getCourseName()} (${course.getCredits()} credits)`);
//         }
//         console.log(`GPA: ${this.calculateGPA().toFixed(2)}`);
//     }
// }
