const { Driver, Team } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const IMAGEN =
  "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0311%2Fr984952_1296x864_3%2D2.jpg";
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
      team: elem.teams,
      created: false,
    };
  });
  return clean;
};
//---------------------------------------------//
//buscar todos los drivers
const getDriver = async () => {
  // const dataDriver = await Driver.findAll();
  const dataDriver = await Driver.findAll({
    include: [
      {
        model: Team,
        through: {
          attributes: [],
        },
      },
    ],
  });

  const DriverBD = dataDriver.map(
    ({
      id,
      firstName,
      lastName,
      description,
      image,
      nationality,
      birthDate,
      Teams,
    }) => {
      const team = Teams.map((t) => t.name).join(", ");
      return {
        id,
        firstName,
        lastName,
        description,
        image,
        nationality,
        birthDate,
        team,
      };
    }
  );
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
  return [...DriverBD, ...driversImagenDefault];
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
    return [];
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
    console.log("Datos de la API:", apiDriver);
    driver = {
      id: apiDriver.id,
      firstName: apiDriver.name.forename,
      lastName: apiDriver.name.surname,
      description: apiDriver.description,
      image: apiDriver.image.url,
      nationality: apiDriver.nationality,
      birthDate: apiDriver.dob,
      team: apiDriver.teams,
      created: false,
    };
    // Verifica si la API proporciona una URL de imagen
    if (apiDriver.image && apiDriver.image.url) {
      // Utiliza la URL de la imagen de la API
      driver.image = apiDriver.image.url;
    } else {
      // Utiliza la URL de la imagen por defecto
      driver.image = IMAGEN;
    }
  } else {
    //si no es el api obtiene el conductor directamente de la base datos
    // driver = await Driver.findByPk(idDriver);
    driver = await Driver.findByPk(idDriver, {
      include: [
        {
          model: Team,
          through: {
            attributes: [],
          },
        },
      ],
    });
    console.log("Datos de la base de datos:", driver);
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
  teams
) => {
  if (!image) {
    image = IMAGEN;
  }

  const [newDriver, create] = await Driver.findOrCreate({
    where: {
      firstName,
      lastName,
      description,
      image,
      nationality,
      birthDate,
    },
  });
  const teamNames = teams.split(", ");

  // Encuentra los registros de equipos en la base de datos
  const teamRecords = await Team.findAll({
    where: {
      name: teamNames,
    },
  });

  // Asocia los equipos al conductor
  await newDriver.addTeams(teamRecords);
  // const arrayTeams = teams.split(", "); //[feliz, contento]

  // for (const temName of arrayTeams) {
  //   await newDriver.addTeams(temName);
  //   console.log(temName);
  // }

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
  teamIds,
  teams
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
      teams: teams,
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
