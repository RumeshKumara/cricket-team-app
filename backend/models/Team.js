const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    battingStyle: {
        type: String,
        required: true,
    },
    bowlingStyle: {
        type: String,
        required: true,
    },
});

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
        unique: true,
    },
    captainName: {
        type: String,
        required: true,
    },
    coachName: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String,
        required: true,
    },
    contactPhone: {
        type: String,
        required: true,
    },
    players: [playerSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Team', teamSchema);