class LearningPath {}

const escuelaWeb = new LearningPath();
const escuelaData = new LearningPath();
const escuelaVgs = new LearningPath();

class Student3 {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [escuelaWeb, escuelaData],
});

console.log(juan2);
// Output:
// Student {
//   name: 'JuanDC',
//   email: 'juanito@juanito.com',
//   username: 'juandc',
//   socialMedia: { twitter: 'fjuandc', instagram: undefined, facebook: undefined },
//   approvedCourses: [],
//   learningPaths: [ LearningPath {}, LearningPath {} ]
// }

console.log(miguelito2);
// Output:
// Student {
//   name: 'Miguelito',
//   email: 'miguelito@juanito.com',
//   username: 'migelitofeliz',
//   socialMedia: { twitter: undefined, instagram: 'migelito_feliz', facebook: undefined },
//   approvedCourses: [],
//   learningPaths: [ LearningPath {}, LearningPath {} ]
// }