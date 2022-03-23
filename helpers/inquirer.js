const inquirer = require("inquirer");
require("colors");

const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que quieres hacer?",
    choices: [
      {
        value: "1",
        name: `${"1".green} Crear Tarea`,
      },
      {
        value: "2",
        name: `${"2".green} Listar Tarea`,
      },
      {
        value: "3",
        name: `${"3".green} Listar Tareas Completadas`,
      },
      {
        value: "4",
        name: `${"4".green} Listar Tareas Pendientes`,
      },
      {
        value: "5",
        name: `${"5".green} Completar Tarea(s)`,
      },
      {
        value: "6",
        name: `${"6".green} Borrar Tarea`,
      },
      {
        value: "0",
        name: `${"0".green} Salir\n`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=====================".rainbow);
  console.log("Seleccione una opcion".brightGreen);
  console.log("=====================".rainbow);

  const { opcion } = await inquirer.prompt(menuOpts);

  return opcion;
};

const pause = async () => {
  console.clear();

  const pauseOpts = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];

  const { enter } = await inquirer.prompt(pauseOpts);

  return enter;
};

module.exports = {
  inquirerMenu,
  pause,
};
