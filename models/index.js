// const Anime = require('./Anime');
const User = require('./User');
// const Manga = require('./Manga');
const Entry = require('./Entry')


Entry.belongsTo(User, {
    foreignKey: 'user_id'
})

// Anime.belongsTo(User, {
//     foreignKey: 'user_id'
// })

// Manga.belongsTo(User, {
//     foreignKey: 'user_id'
// })

User.hasMany(Entry, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// User.hasMany(Manga, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// })

// User.hasMany(Anime, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// })

module.exports = {
    // Anime,
    Entry,
    User,
    // Manga
};