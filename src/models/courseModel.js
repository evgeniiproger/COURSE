let courses = [
  {
    id: '1751881413382',
    title: 'NodeJS',
    price: 15000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    id: '1751881436236',
    title: 'TypeScript',
    price: 20000,
    img: 'https://api.plusinfosys.com/public/technology/14/typescriptlogo.png',
  },
];

class CoursesModel {
  constructor({ id, title, price, img }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.img = img;
  }
  static addCourse(data) {
    const newCourse = new CoursesModel({ id: Date.now().toString(), ...data });
    courses.push(newCourse);
    return newCourse;
  }
  static getAll() {
    return courses;
  }
  static getId(id) {
    const course = courses.find((el) => el.id === id);
    return course;
  }
}

module.exports = CoursesModel;
