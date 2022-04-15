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
        ? console.log(`${number} ${descripcion} ${":: Pendiente".red}`)
        : console.log(`${number} ${descripcion} :: ${completadoEn.green}`);
    }
    console.log();
  }

  listarPendientesCompletadas(completadas = true) {
    console.log();
    let contador = 1;
    for (let index = 0; index < this.listadoArr.length; index++) {
      let number = `${contador}.`.green;
      let { descripcion, completadoEn } = this.listadoArr[index];

      if (completadas) {
        if (completadoEn != null) {
          contador++;
          console.log(`${number} ${descripcion} :: ${completadoEn.green} `);
        }
      } else {
        if (completadoEn == null) {
          contador++;
          console.log(`${number} ${descripcion} ${":: Pendiente".red}`);
        }
      }
    }
    console.log();
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        tarea.completadoEn = null;
      }
    });
  }

}

module.exports = Tareas;
