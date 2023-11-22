//Задание 1: Музыкальная коллекция

// Создаем символ для итератора
const albumIteratorSymbol = Symbol.iterator;

// Объект "Музыкальная коллекция"
const musicCollection = {
    albums: [
        { title: "Альбом 1", artist: "Исполнитель 1", year: 2021 },
        { title: "Альбом 2", artist: "Исполнитель 2", year: 2022 },
        { title: "Альбом 3", artist: "Исполнитель 3", year: 2023 }
    ],
    [albumIteratorSymbol]: function* () {
        for (const album of this.albums) {
            yield album;
        }
    }
};

// Итерация по музыкальной коллекции
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Задание 2: Управление заказами в ресторане

// Повара и их специализации
const chefsSpecializations = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
]);

// Блюда и их повара
const dishesChefs = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
]);

// Заказы клиентов
const orders = new Map();

// Функция для добавления заказа
function addOrder(client, dish) {
    if (!orders.has(client)) {
        orders.set(client, []);
    }
    orders.get(client).push(dish);
}

// Заказы клиентов
addOrder('Алексей', 'Пицца "Пепперони"');
addOrder('Алексей', 'Тирамису');
addOrder('Мария', 'Суши "Калифорния"');
addOrder('Мария', 'Пицца "Маргарита"');
addOrder('Ирина', 'Чизкейк');

// Вывод заказов
orders.forEach((dishes, client) => {
    console.log(`${client} заказал(а): $к{dishes.join(', ')}`);
});

// Вывод специализации повара для каждого блюда
dishesChefs.forEach((chef, dish) => {
    const specialization = chefsSpecializations.get(chef);
    console.log(`${dish} готовит повар ${chef}, специализация: ${specialization}`);
});
