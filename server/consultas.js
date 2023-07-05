//import { Database } from 'sqlite-async'
//The sqlite3 module provides you with some methods for querying data such as
//all(): devuelve todas las filas (db.all(sql, [], (err, rows) => {)
//each() db.each(sql,params, (err, result) => {
//get(): db.get(sql, [playlistId], (err, row) => {
//devuelve la primera fila. Si se le pasa un id devuelve la fila con el id.
//db.run(sql, params, function(err){} Insertar y actualizar filas

var sqlite3 = require("sqlite3").verbose();
//var sqlite = require("sqlite");
var basePath = "./data/pop-rock.db";
let db3 = null;

//console.log(basePath);
const OpenDatabase = () => {
  /*db = Database.open(basePath)
    .then(db => {
       
    })
    .catch(err => {
      console.log(err.message);
    });*/

  /*db=new sqlite.Database(basePath,(err)=>{
      if (err) {
        console.log("sqlite " + err.message);
        return;
      }   
      console.log("Conectado a sqlite "+ basePath);
    });*/

  db3 = new sqlite3.Database(basePath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log(err.message);
      return;
    }
  });
};

const GetBandasTodas = async () => {
  OpenDatabase();
  try {    
    let data = [];
    let sql = `SELECT gru_nombre as Nombre,gru_codigo as id                    
    FROM grupo     
    ORDER BY gru_nombre`;
    const res = await new Promise((resolve, reject) => {
      db3.all(sql,data, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        data = resolve(rows);
        //console.log(rows);
      });
    });
    return res;
  } catch (error) {
    throw error;
  } finally {
    CloseDatabase();
  }
};

const GetBandas = async (params) => {
  OpenDatabase();
  try {
    console.log(params);
    let data = [];
    let sql = `SELECT gru_nombre as Nombre,gru_codigo as id                    
    FROM grupo 
    WHERE gru_nombre LIKE '%' || ? || '%'
    ORDER BY gru_nombre`;
    const res = await new Promise((resolve, reject) => {
      db3.all(sql,params.nombre, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        data = resolve(rows);
        //console.log(rows);
      });
    });
    return res;
  } catch (error) {
    throw error;
  } finally {
    CloseDatabase();
  }
};

const GetCancion = async (idBanda) => {
  OpenDatabase();
  try {
    let sql = `SELECT med_cancion as Canción,med_year as Año,med_album as Album,
    med_ruta as Ruta                   
    FROM catalogo WHERE gru_codigo = ? ORDER BY med_year `;
    const res = await new Promise((resolve, reject) => {
      db3.get(sql, [idBanda.id], (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
        //console.log(rows);
      });
    });
    return res;
  } catch (error) {
    throw error;
  } finally {
    CloseDatabase();
  }
};

const GetCatalogo = async (idBanda) => {
  OpenDatabase();
  try {
    let datos=[];
    let sql = `SELECT gru_codigo as '#', gru_nombre as Banda, med_cancion as Canción,
    med_year as Año, med_album as Album, med_ruta as Ruta                   
    FROM catalogo WHERE gru_codigo = ? ORDER BY med_year `;
    await new Promise((resolve, reject) => {
      db3.each(sql, [idBanda.id], (err, rows) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(rows);
        datos.push(rows);        
      });
    });
    
    return datos;
  } catch (error) {
    throw error;
  } finally {
    CloseDatabase();
  }
};

const GetCanciones = async (params) => {
  OpenDatabase();
  try {
    
    let datos=[];
    if(params.y1==='') params.y1=1900
    if(params.y2==='') params.y2=3000
    let sql = `SELECT gru_codigo as '#', gru_nombre as Banda, med_cancion as Canción,
    med_year as Año,med_album as Album, med_ruta as Ruta                   
    FROM catalogo 
    WHERE gru_nombre LIKE '%' || ? || '%'
    AND med_cancion LIKE '%' || ? || '%'
    AND med_year BETWEEN ? and ?
    ORDER BY med_year`
    
    console.log(params);
    await new Promise((resolve, reject) => {
      db3.each(sql, [params.nombre,params.cancion,params.y1,params.y2], (err, rows) => {
        if (err) {
          
          reject(err);
          return;
        }
        
        resolve(rows);
        datos.push(rows);        
      });
    });
    console.log('params');
    return datos;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    CloseDatabase();
  }
};
const CloseDatabase = () => {
  db3.close((err) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(`Desconectado de ${basePath}.`);
  });
};

module.exports = {
  GetBandas,
  GetCanciones,
  GetCatalogo,
  GetBandasTodas
};
