require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("=====================".rainbow);
    console.log("Seleccione una opcion".brightGreen);
    console.log("=====================".rainbow);

    console.log(`${"1".green} Crear Tarea`);
    console.log(`${"2".green} Listar Tarea`);
    console.log(`${"3".green} Listar Tareas Completadas`);
    console.log(`${"4".green} Listar Tareas Pendientes`);
    console.log(`${"5".green} Completar Tarea(s)`);
    console.log(`${"6".green} Borrar Tarea`);
    console.log(`${"0".green} Salir\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Seleccione una opcion: ", (opt) => {
      resolve(opt);
      readLine.close();
    });

  });
};

const pausa = () => {
  return new Promise((resolve) => {

    console.clear();
    console.log("=====================".rainbow);
    console.log("Seleccione una opcion".brightGreen);
    console.log("=====================".rainbow);

    console.log(`${"1".green} Crear Tarea`);
    console.log(`${"2".green} Listar Tarea`);
    console.log(`${"3".green} Listar Tareas Completadas`);
    console.log(`${"4".green} Listar Tareas Pendientes`);
    console.log(`${"5".green} Completar Tarea(s)`);
    console.log(`${"6".green} Borrar Tarea`);
    console.log(`${"0".green} Salir\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`Presione ${"ENTER".green} para continuar`, (opt) => {
      resolve();
      readLine.close();
    });
    
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
