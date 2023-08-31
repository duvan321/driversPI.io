const { Driver } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const IMAGEN =
  "https://www.las2orillas.co/wp-content/uploads/2023/01/McLaren.jpeg";
//-----------------------------------//
//PARA MANDAR LA MISMA INFORMACION QUE TIENE EL BDD
const cleanArray = (arr) => {
  const clean = arr.map((elem) => {
    return {
      id: elem.id,
      firstName: elem.name.forename,
      lastName: elem.name.surname,
      description: elem.description,
      image: elem.image.url,
      nationality: elem.nationality,
      birthDate: elem.dob,
      teamIds: elem.teams,
      created: false,
    };
  });
  return clean;
};
//---------------------------------------------//
//buscar todos los drivers
const getDriver = async () => {
  const dataDriver = await Driver.findAll();

  const apiDriverRaw = (await axios.get("http://localhost:5000/drivers")).data;

  const apiDriver = cleanArray(apiDriverRaw);
  const driversImagenDefault = apiDriver.map((driver) => {
    if (!driver.image) {
      return {
        ...driver,
        image: IMAGEN,
      };
    }
    return driver;
  });
  return [...dataDriver, ...driversImagenDefault];
};
//--------------------------------------------------//
//buscar por nombre
const searhName = async (name) => {
  const driveName = await Driver.findAll({
    where: { firstName: { [Op.iLike]: name } },
    limit: 15,
  });

  const apiDriverRaw = (await axios.get("http://localhost:5000/drivers")).data;

  const apiDriver = cleanArray(apiDriverRaw);
  const filterdApi = apiDriver.filter(
    (driver) => driver.firstName.toLowerCase() === name.toLowerCase()
  );
  if (!driveName.length && !filterdApi.length) {
    throw new Error(`No hay personajes con el nombre ${name}`);
  }
  if (driveName.length >= 15) {
    return driveName;
  }
  const completarQuince = 15 - driveName.length;
  const limites = filterdApi.slice(0, completarQuince);

  return [...driveName, ...limites];
};

//BUSCAR POR ID
const getDriverId = async (idDriver, origin) => {
  let driver; //variable para utilizar el objecto del conductor
  //verifico si la origen del conductor es la api
  if (origin === "api") {
    const apiDriver = (
      await axios.get(`http://localhost:5000/drivers/${idDriver}`)
    ).data;
    //mapeo las propiedades del objecto de la api al formato deseado
    driver = {
      id: apiDriver.id,
      firstName: apiDriver.name.forename,
      lastName: apiDriver.name.surname,
      description: apiDriver.description,
      image: apiDriver.image.url,
      nationality: apiDriver.nationality,
      birthDate: apiDriver.dob,
      created: false,
    };
  } else {
    //si no es el api obtiene el conductor directamente de la base datos
    driver = await Driver.findByPk(idDriver);
  }
  // devuelvo el objecto del conductor
  return driver;
};
//-------------------------------------//
//Para eliminar
const deleteId = async (id) => {
  const driverId = await Driver.destroy({ where: { id } });
  if (!driverId) return { error: "driver inexistente!" };
  else {
    return { message: "Driver eliminado exitosamente" };
  }
};

//CREACION DE LOS DRIVERS EN LA BASE DE DATOS
const createDriver = async (
  firstName,
  lastName,
  description,
  image,
  nationality,
  birthDate,
  teamIds
) => {
  if (!image) {
    image = IMAGEN;
  }
  const newDriver = await Driver.create({
    firstName,
    lastName,
    description,
    image,
    nationality,
    birthDate,
  });

  await newDriver.addTeam(teamIds);

  return newDriver;
};
//Actualizar informacion
const putDriver = async (
  id,
  firstName,
  lastName,
  description,
  image,
  nationality,
  birthDate,
  teamIds
) => {
  if (!image) {
    image = IMAGEN;
  }
  const driversFind = await Driver.update(
    {
      firstName: firstName,
      lastName: lastName,
      description: description,
      image: image,
      nationality: nationality,
      birthDate: birthDate,
      teamIds: teamIds,
    },
    { where: { id } }
  );
  if (!driversFind) return { error: "usuario inexistente" };
  else {
    return driversFind;
  }
};
module.exports = {
  getDriverId,
  createDriver,
  getDriver,
  searhName,
  deleteId,
  putDriver,
};
