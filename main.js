class Student {
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
    this.socialMedia = { twitter, instagram, facebook };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  aprobarCurso(nuevoCursito) {
    this.approvedCourses.push(nuevoCursito);
  }
}
  
  const natalia = new Student(
    "Natalia",
    20,
    "Curso de diseño de interfaces de usuario",
    "Diseño de interfaces de usuario"
  );
  
  natalia.approvedCourses.push("Curso de Responsive Design");
  natalia.aprobarCurso("Curso de diseño de interfaces de usuario con CSS");
  
  console.log(natalia.cursosAprobados); 
  // ["Curso de Responsive Design", "Curso de diseño de interfaces de usuario con CSS"]
  
  const juanita = new Student(
    "Juanita Alejandra",
    15,
    "Curso de introducción a la producción de video juegos",
    "Creación de personajes"
  );
  
  juanita.aprobarCurso("Curso de programación en JavaScript");
  console.log(juanita.cursosAprobados); // ["Curso de programación en JavaScript"]

  class Student2 {
    constructor({
      name,
      cursosAprobados = [],
      age,
      email,
    }) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.cursosAprobados = cursosAprobados;
    }
  
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    }
  }
  
  const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
  });
  
  console.log(miguelito);
  // Output:
  // Student2 {
  //   name: 'Miguel',
  //   email: 'miguelito@platzi.com',
  //   age: 28,
  //   cursosAprobados: []
  // }
  
  miguelito.aprobarCurso("Curso de JavaScript");
  console.log(miguelito.cursosAprobados);
  // Output: ["Curso de JavaScript"]

 