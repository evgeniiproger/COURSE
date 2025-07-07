let courses = [
  {
    id: '1751881413382',
    title: 'Node2',
    price: 15000,
    img: 'sdasd',
  },
  {
    id: '1751881436236',
    title: 'Node1',
    price: 15000,
    img: 'sdasd',
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
