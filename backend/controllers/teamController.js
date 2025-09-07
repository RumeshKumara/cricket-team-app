const asyncHandler = require('express-async-handler');
const Team = require('../models/Team');

// @desc    Register a new team
// @route   POST /api/teams
// @access  Public
const registerTeam = asyncHandler(async (req, res) => {
    const { teamName, captainName, coachName, contactEmail, contactPhone, players } = req.body;

    // Check if team already exists
    const teamExists = await Team.findOne({ teamName });
    if (teamExists) {
        res.status(400);
        throw new Error('Team already exists');
    }

    // Create team
    const team = await Team.create({
        teamName,
        captainName,
        coachName,
        contactEmail,
        contactPhone,
        players,
    });

    if (team) {
        res.status(201).json({
            _id: team._id,
            teamName: team.teamName,
            captainName: team.captainName,
            coachName: team.coachName,
            contactEmail: team.contactEmail,
            contactPhone: team.contactPhone,
            players: team.players,
        });
    } else {
        res.status(400);
        throw new Error('Invalid team data');
    }
});

// @desc    Get all teams
// @route   GET /api/teams
// @access  Public
const getTeams = asyncHandler(async (req, res) => {
    const teams = await Team.find({});
    res.json(teams);
});

// @desc    Get team by ID
// @route   GET /api/teams/:id
// @access  Public
const getTeamById = asyncHandler(async (req, res) => {
    const team = await Team.findById(req.params.id);

    if (team) {
        res.json(team);
    } else {
        res.status(404);
        throw new Error('Team not found');
    }
});

// @desc    Delete team
// @route   DELETE /api/teams/:id
// @access  Public
const deleteTeam = asyncHandler(async (req, res) => {
    const team = await Team.findById(req.params.id);

    if (team) {
        await team.remove();
        res.json({ message: 'Team removed' });
    } else {
        res.status(404);
        throw new Error('Team not found');
    }
});

module.exports = {
    registerTeam,
    getTeams,
    getTeamById,
    deleteTeam,
};