export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, 'Плохой запрос'],
      [401, 'Отсутствие авторизации'],
      [404, 'Страница не найдена'],
      [500, 'Внутренняя ошибка сервера'],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Неопознанная ошибка';
  }
}