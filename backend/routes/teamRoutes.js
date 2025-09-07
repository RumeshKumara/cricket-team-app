const express = require('express');
const router = express.Router();
const {
    registerTeam,
    getTeams,
    getTeamById,
    deleteTeam,
} = require('../controllers/teamController');

router.route('/').post(registerTeam).get(getTeams);
router.route('/:id').get(getTeamById).delete(deleteTeam);

module.exports = router;