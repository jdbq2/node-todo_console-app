const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }

  cargarTareasFromArray(tareas) {
    tareas.forEach((tarea) => {
      let id = tarea.id;
      this._listado[id] = tarea;
    });
  }

  listadoCompleto() {
    
    console.log();
    for (let index = 0; index < this.listadoArr.length; index++) {
      let number = `${index + 1}.`.green;
      let { descripcion, completadoEn } = this.listadoArr[index];

      completadoEn === null
        ? console.log(`${number} ${descripcion} ${" | Pendiente".red}`)
        : console.log(`${number} ${descripcion} ${" | Completa".green}`);
    }

  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
  
}

module.exports = Tareas;
