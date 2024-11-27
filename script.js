//Lab 8
//PART 1

let student = {
    name: "Raj Patel",
    age: 31,
    isEnrolled: true,
    courses: ["SQL", "Web Design", "JavaScript", "Operating Systems"],
    studentInfo: function () {
        console.log(student.name);  //bracket notation
        console.log(this.age);      //dot notation
    }
};

// student.studentInfo();

// //PART 2
// let jsonString = JSON.stringify(student);
// console.log(jsonString);

// let jsonObj = JSON.parse(jsonString);
// console.log(jsonObj);

// //PART 3

// let { name, age, isEnrolled, courses } = student;
// console.log(name);
// console.log(courses);

// let scores = [25, 50, 75, 100];
// let [first, dog] = scores;

// console.log(first);
// console.log(dog);


// Part 4

let copiedObj = { ...student };

let newProperty = { ...student, gradYear: 2026, enrollYear: 2024 };
console.log(newProperty);

let newCourses = ["C++", "Python", "Javascript 3D"];
let mergeObj = [...student.courses, ...newCourses];
console.log(mergeObj);

