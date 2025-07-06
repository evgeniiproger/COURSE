let courses = [];

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
