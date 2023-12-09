const {CreateTeam, GetAllTeams, AddUserToTeam} = require('../controllers/Teamcontroller')

const express = require('express')

const teamRouter = express.Router()

teamRouter.post('/api/team',CreateTeam)


teamRouter.get('/api/team',GetAllTeams)

teamRouter.post('/api/teamMember',AddUserToTeam)

module.exports = {teamRouter}