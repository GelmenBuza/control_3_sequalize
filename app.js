import { Op } from 'sequelize';
import {News, Place, Event} from './models/index.js'


const allNews = await News.findAll();

const placeById = await Place.findByPk(1);

const eventsIn2023 = await Event.findAll({
    where: {
        date: { [Op.gt]: '2023-01-01' }
    }
});

const placesWithEvents = await Place.findAll({
    include: [{
        model: Event,
        as: 'events'
    }]
});

const newNews = await News.create({
    title: 'Новое событие',
    description: 'Описание нового события',
    date: '2024-01-15T10:00:00Z'
});


console.log(allNews);
console.log(placeById);
console.log(eventsIn2023);
console.log(placesWithEvents);
console.log(newNews);
