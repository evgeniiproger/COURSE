const pool = require('../config/db');

class CoursesModel {
  constructor({ id, title, price, img, userId }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.img = img;
    this.userId = userId;
  }

  static async addCourse(data) {
    const { title, price, img, userId } = data;

    const newCourse = await pool.query(
      'INSERT INTO courses (title, price, img, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, price, img, userId]
    );
    console.log(newCourse);
    return newCourse.rows[0];
  }

  static async editCourse(data) {
    const { id, title, price, img, userId } = data;
    const updatedCourse = await pool.query(
      'UPDATE courses SET title = $1, price = $2, img = $3, user_id = $4  WHERE id = $5 RETURNING *',
      [title, price, img, userId, id]
    );
    return updatedCourse.rows[0];
  }

  static async getAll() {
    const result = await pool.query('SELECT * FROM courses');
    return result.rows;
  }

  static async getId(idCourse) {
    const course = await pool.query('SELECT * FROM courses WHERE id =$1', [
      idCourse,
    ]);
    return course.rows[0];
  }
}

module.exports = CoursesModel;
