import destructuring from '../app.js';

test('Sorting of properties', () => {
    const obj = {
        name: 'Лучник',
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
            },
        ],
    };
    expect(destructuring(obj)).toEqual(
        [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: 'Описание недоступно',
            },
        ],
    );
});

test('Sorting of properties', () => {
    const obj = {
        name: 'Лучник',
        age: 12,
    };
    expect(destructuring(obj)).toEqual([]);
});
