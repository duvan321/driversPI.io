const axios = require("axios");
const { Team } = require("../db");
const obtenerTeams = async () => {
  const api = (await axios.get("http://localhost:5000/drivers")).data;

  api.map(async ({ teams }) => {
    if (teams) {
      let arr = teams.split(",");
      arr.map(async (t) => {
        await Team.findOrCreate({ where: { name: t.trim() } });
      });
    }
  });
};

module.exports = {
  obtenerTeams,
};
