import { createContext, useState } from "react";
import axios from "axios";

const BandasContext = createContext(null);

const BandasProvider = ({ children }) => {  
  const [bandas, setBandas] = useState([]);  
  const [totalBandas, setTotalBandas] = useState([]);  
  const [cancionesBanda, setCancionesBanda] = useState([]);
  const [codigoBanda, setCodigoBanda] = useState(0);
  const [tituloCancion,setTituloCancion] = useState("");
  const [nombreBanda,setNombreBanda] = useState("");
  const [nombreBandaFiltro,setNombreBandaFiltro] = useState("");
  const [yearIniCancion,setYearIniCancion] = useState("");
  const [yearFinCancion,setYearFinCancion] = useState("");

  const CatalogoBanda = () => {
    axios
      .get(`http://localhost:3000/bandas/${codigoBanda}`)
      .then((response) => {
        setCancionesBanda(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };  

  const ListarBandas = async () => {        
    axios
      .get(`http://localhost:3000/bandasall`)
      .then((response) => {                
        setTotalBandas(response.data.length);
        setBandas(response.data);                
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };    
  const BuscarBanda = () => {
    if(nombreBandaFiltro === "" && tituloCancion ==="" && yearIniCancion ==="" && yearFinCancion ==="")
    {
      return;
    }
    axios            
       .get(`http://localhost:3000/bandaslike?nombre=${nombreBandaFiltro}&cancion=${tituloCancion}&y1=${yearIniCancion}&y2=${yearFinCancion}`)
      .then((response) => {
        setCancionesBanda(response.data);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const FiltrarListarBandas = async () => {        
    axios
      .get(`http://localhost:3000/bandas?nombre=${nombreBanda}`)
      .then((response) => {                
        setTotalBandas(response.data.length);
        setBandas(response.data);                
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };    
  return (
    <BandasContext.Provider value={{ bandas,setBandas,totalBandas,
    cancionesBanda, setCancionesBanda,codigoBanda, setCodigoBanda,
    CatalogoBanda,ListarBandas,BuscarBanda,tituloCancion,setTituloCancion,
    nombreBanda,setNombreBanda,yearIniCancion,setYearIniCancion,
    yearFinCancion,setYearFinCancion,FiltrarListarBandas,
    nombreBandaFiltro,setNombreBandaFiltro }}>
      {children}
    </BandasContext.Provider>
  );
};

export { BandasProvider };
export default BandasContext;
