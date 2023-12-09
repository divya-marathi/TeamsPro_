const { teamModel } = require("../models/teamModel");

//create team
const CreateTeam = async (req, res) => {
  const { teamName } = req.body;

  try {
    const team = await teamModel.findOne({ teamName });

    if (team) {
      res.status(401).json({ message: "team exist" });
      return;
    }
    const newTeam = new teamModel({
      teamName,
    });
    await newTeam.save();
    res.status(200).json({ message: "team created succussfully" });
  } catch (error) {
    res.send({ message: error.message });
  }
};

//add user to team
const AddUserToTeam = async (req, res) => {
  const { teamName, teamMember } = req.body;

  try {
    const existingTeam = await teamModel.findOne({ teamName });

    if (!existingTeam) {
      res.status(404).json({ message: "Team not found" });
      return;
    }

    if (existingTeam.teamMembers.includes(teamMember)) {
      res.status(401).json({ message: "User already exists in the team" });
      return;
    }

    existingTeam.teamMembers.push(teamMember);
    await existingTeam.save();

    res.status(200).json({ message: "User added to the team successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const GetAllTeams = async (req, res) => {
  try {
    const teams = await teamModel.find().populate("teamMembers");
    res.send(teams);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { CreateTeam, GetAllTeams, AddUserToTeam };
