class Student {
    constructor(name, age, course, specialization) {
      this.name = name;
      this.age = age;
      this.course = course;
      this.specialization = specialization;
      this.cursosAprobados = []; // initialize the array
    }
  
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    }
  }
  
  const natalia = new Student(
    "Natalia",
    20,
    "Curso de diseño de interfaces de usuario",
    "Diseño de interfaces de usuario"
  );
  
  natalia.cursosAprobados.push("Curso de Responsive Design");
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
