import sequelize from './database.js';

import {News, Place, Event} from './models/index.js'


async function init() {
    try {
        await sequelize.sync({force: true});
        console.log('Sequelize done');


        await News.bulkCreate([
            {
                id: 1,
                title: 'Старая новость',
                description: 'Эта новость была опубликована до 2023 года',
                date: '2022-11-15T10:00:00Z'
            },
            {
                id: 2,
                title: 'Свежая новость',
                description: 'Важное событие этого года',
                date: '2023-05-20T12:00:00Z'
            },
            {
                id: 3,
                title: 'Последние новости',
                description: 'Самая актуальная информация',
                date: '2023-10-25T09:00:00Z'
            }
        ]);

        await Place.bulkCreate([
            {
                id: 1,
                title: 'Центральный парк',
                description: 'Главный парк города с большой сценой'
            },
            {
                id: 2,
                title: 'Городская библиотека',
                description: 'Тихое место для встреч и лекций'
            },
            {
                id: 3,
                title: 'Заброшенный склад',
                description: 'Место, где пока не проводятся мероприятия'
            }
        ]);

        await Event.bulkCreate([
            {
                id: 1,
                title: 'Летний джазовый концерт',
                description: 'Музыка под открытым небом',
                date: '2023-07-15T18:00:00Z',
                placeId: 1
            },
            {
                id: 2,
                title: 'Встреча с известным писателем',
                description: 'Презентация новой книги и автограф-сессия',
                date: '2023-08-10T17:00:00Z',
                placeId: 2
            },
            {
                id: 3,
                title: 'Ночной фуд-маркет',
                description: 'Еда и сувениры от местных производителей',
                date: '2023-06-01T20:00:00Z',
                placeId: 1
            }
        ]);

    } catch (error) {
        console.error('Error: ', error);
    } finally {
        await sequelize.close();
    }
}

init();