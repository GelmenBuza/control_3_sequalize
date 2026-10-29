import Place from "./Place.js";
import Event from "./Event.js";
import News from "./News.js";

Place.hasMany(Event, {foreignKey: 'placeId', as : 'events'});
Event.belongsTo(Place, {foreignKey: 'placeId', as: 'place'});

export {Event, Place, News};