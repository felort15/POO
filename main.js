
  function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
  }
  function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
  }
  
  export class PlatziClass {
    constructor({
      name,
      videoID,
    }) {
      this.name = name;
      this.videoID = videoID;
    }
  
    reproducir() {
      videoPlay(this.videoID);
    }
    pausar() {
      videoStop(this.videoID);
    }
  }

  class Course {
    constructor({ name, classes = [] }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newValue) {
      if (newValue === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = newValue;
      }
    }
  }
  


class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }

  addCourse(course) {
    this.courses.push(course);
  }

  removeCourse(course) {
    this.courses = this.courses.filter((c) => c !== course);
  }
}

class Student {
  constructor({ name, email, username, twitter = undefined, instagram = undefined, facebook = undefined, approvedCourses = [], learningPaths = [] }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = { twitter, instagram, facebook };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  addApprovedCourse(course) {
    this.approvedCourses.push(course);
  }

  removeApprovedCourse(course) {
    this.approvedCourses = this.approvedCourses.filter((c) => c !== course);
  }

  addLearningPath(learningPath) {
    this.learningPaths.push(learningPath);
  }

  removeLearningPath(learningPath) {
    this.learningPaths = this.learningPaths.filter((lp) => lp !== learningPath);
  }
}

const cursoProgBasica = new Course({ name: "Curso Gratis de Programación Básica" });
const cursoDefinitivoHTML = new Course({ name: "Curso Definitivo de HTML y CSS" });
const cursoPracticoHTML = new Course({ name: "Curso Practico de HTML y CSS" });

const escuelaWeb = new LearningPath({ name: "Escuela de Desarrollo Web" });
escuelaWeb.addCourse(cursoProgBasica);
escuelaWeb.addCourse(cursoDefinitivoHTML);
escuelaWeb.addCourse(cursoPracticoHTML);

const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
escuelaData.addCourse(cursoProgBasica);
escuelaData.addCourse("Curso DataBusiness");
escuelaData.addCourse("Curso Dataviz");

const escuelaVgs = new LearningPath({ name: "Escuela de Vidweojuegos" });
escuelaVgs.addCourse(cursoProgBasica);
escuelaVgs.addCourse("Curso de Unity");
escuelaVgs.addCourse("Curso de Unreal");

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
});
juan2.addLearningPath(escuelaWeb);
juan2.addLearningPath(escuelaVgs);

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
});
miguelito2.addLearningPath(escuelaWeb);
miguelito2.addLearningPath(escuelaData);