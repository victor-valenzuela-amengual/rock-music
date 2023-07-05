
const express = require("express");
const cors = require("cors");
const { GetBandas,GetCanciones,GetCatalogo,GetBandasTodas } = require("./consultas");

const app = express();
app.use(express.json());
app.use(cors());
//var db = require("./database.js")

app.listen(3000, console.log("Server ON port 3000"));

app.get("/bandasall", async (req, res) => {
  try {
    const data = await GetBandasTodas();    
    res.status(200).json(data);
  } catch (error) {
    console.log("errorGet: " + error);
    res.status(400).send(error.message);
  }
});

app.get("/bandas", async (req, res) => {
  try {
    const data = await GetBandas(req.query);    
    res.status(200).json(data);
  } catch (error) {
    console.log("errorGet: " + error);
    res.status(400).send(error.message);
  }
});

app.get("/bandas/:id", async (req, res) => {
  try {
    const idBanda=req.params;
   
    const data = await GetCatalogo(idBanda);    
    res.status(200).json(data);
  } catch (error) {
    console.log("errorGet: " + error);
    res.status(400).send(error.message);
  }
});

app.get("/bandaslike/", async (req, res) => {
  try {    
    const data = await GetCanciones(req.query);       
    res.status(200).json(data);
  } catch (error) {
    console.log("errorGet: " + error);
    res.status(400).send(error.message);
  }
});