import { Col, Table } from "react-bootstrap";
import { useEffect,useContext } from "react";
import BandasContext from "../contexts/BandasContext";

const Catalogo = () => {  
  const {CatalogoBanda,cancionesBanda,codigoBanda } = useContext(BandasContext);      

  useEffect(() => {
   
    CatalogoBanda();   
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [codigoBanda]);
  return (
    //variant="dark"
    <Col className="border-start bg-image  ">
      <Table variant="dark" hover bordered size="sm">
        <thead>
          <tr>            
            <th>Banda</th>
            <th>Canción</th>
            <th>Año</th>
            <th>Album</th>
            <th>Play</th>
           
          </tr>
        </thead>
        <tbody>
          {cancionesBanda.map((cancion, key) => {            
            return (              
              <tr  key={key}>               
                <td>{cancion.Banda}</td>
                <td>{cancion.Canción}</td>
                <td>{cancion.Año}</td>
                <td>{cancion.Album}</td>
                <td>
                  <a
                    href={`./assets/${cancion.Ruta.replaceAll('\\','/')}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="./assets/img/play.png"
                      alt="play"
                      height={24}
                    ></img>
                  </a>
                </td>
                <td hidden={true}>{codigoBanda}</td>
                <td hidden={true}>{cancion.Ruta}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Col>
  );
};
export default Catalogo;
