const {
  searhName,
  createDriver,
  getDriverId,
  getDriver,
} = require("../controller/driverController");
const driverGetHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const result = name ? await searhName(name) : await getDriver();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//id
const driverGetIdHandrer = async (req, res) => {
  const { idDriver } = req.params;
  const origin = isNaN(idDriver) ? "bdd" : "api";

  try {
    const driver = await getDriverId(idDriver, origin);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const driverPostHandler = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      description,
      image,
      nationality,
      birthDate,
      teamIds,
    } = req.body;
    const newDriver = await createDriver(
      firstName,
      lastName,
      description,
      image,
      nationality,
      birthDate,
      teamIds
    );
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  driverGetHandler,
  driverGetIdHandrer,
  // driverGetNameHandler,
  driverPostHandler,
};
