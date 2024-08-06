class Course {
  constructor({ name }) {
    this.name = name;
    this.classes = [];
  }
}

class LearningPath {
  constructor({ name }) {
    this.name = name;
    this.courses = [];
  }
}

class Student {
  constructor({ name, email, username, twitter, instagram, facebook }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = { twitter, instagram, facebook };
    this.approvedCourses = [];
    this.learningPaths = [];
  }
}

const cursoProgBasica = new Course({ name: "Curso Gratis de Programación Básica" });
const cursoDefinitivoHTML = new Course({ name: "Curso Definitivo de HTML y CSS" });
const cursoPracticoHTML = new Course({ name: "Curso Practico de HTML y CSS" });

const escuelaWeb = new LearningPath({ name: "Escuela de Desarrollo Web" });
escuelaWeb.courses = [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML];

const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
escuelaData.courses = [cursoProgBasica, "Curso DataBusiness", "Curso Dataviz"];

const escuelaVgs = new LearningPath({ name: "Escuela de Vidweojuegos" });
escuelaVgs.courses = [cursoProgBasica, "Curso de Unity", "Curso de Unreal"];

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
});
juan2.learningPaths = [escuelaWeb, escuelaVgs];

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
});
miguelito2.learningPaths = [escuelaWeb, escuelaData];