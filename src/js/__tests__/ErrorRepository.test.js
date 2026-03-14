import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test('должно вернуть описание ошибки для имеющихся кодов', () => {
    expect(repo.translate(400)).toBe('Плохой запрос');
    expect(repo.translate(401)).toBe('Отсутствие авторизации');
    expect(repo.translate(404)).toBe('Страница не найдена');
    expect(repo.translate(500)).toBe('Внутренняя ошибка сервера');
  });

  test('должно вернуть "Неопознанная ошибка" для несуществующих кодов', () => {
    expect(repo.translate(403)).toBe('Неопознанная ошибка');
    expect(repo.translate(999)).toBe('Неопознанная ошибка');
  });

  test('проверим неопределенный код', () => {
    expect(repo.translate(undefined)).toBe('Неопознанная ошибка');
  });
});