//Lab 8
//////Part 1
console.log("PART 1 - Understanding and Creating Objects")

let student = {
    name: "Raj Patel",
    age: 31,
    isEnrolled: true,
    courses: ["SQL", "Web Design", "JavaScript", "Operating Systems"],
    studentInfo: function () {
        console.log(student.name);  //bracket notation
        console.log(this.age);      //dot notation
        console.log(this.isEnrolled);
        console.log(this.courses);
    },
    addCourse: function (courseName) {
        this.courses.push(courseName);
    },
    totalNumCourse: function () {
        return this.courses.length;
    }
};

console.log(student.name);
console.log(student.age);

console.log("\n"); //Added line break for clarity

student.studentInfo();

//////PART 2
console.log("\nPART 2 - Working with JSON")

let jsonString = JSON.stringify(student);
console.log(jsonString);

let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

//////PART 3
console.log("\nPART 3 - Using Destructuring Assignment")


let { name, age, isEnrolled, courses } = student;
console.log(name);
console.log(courses);

let scores = [25, 50, 75, 100];
let [first, dog] = scores;

console.log(first);
console.log(dog);


////// Part 4
console.log("\nPART 4 - The Spread Operator")

let copiedObj = { ...student };

let newProperty = { ...student, gradYear: 2026, enrollYear: 2024 };
console.log(newProperty);

let newCourses = ["C++", "Python", "Javascript 3D"];
let mergeObj = [...student.courses, ...newCourses];
console.log(mergeObj);

//////PART 5
console.log("\nPART 5 - Object Methods")
//Modified student object to add new courses
student.addCourse("PHP");
console.log(student.courses)

console.log(student.totalNumCourse());


//////BONUS TASK
console.log("\nBonus Task - Reduce Method")

let sumScores = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumScores / scores.length); //Average from Scores array