import {
  Col,
  Container,
  Row,
  Image,
  NavLink,
  Form,
  Button,
} from "react-bootstrap";
import imgBusqueda from "../assets/img/buscador.png";
import imgBusqueda2 from "../assets/img/cancelbusq.png";
import { useState } from "react";
import BandasContext from "../contexts/BandasContext";
import { useContext, useEffect } from "react";

const Buscador = () => {
  
  return <Busqueda></Busqueda>;
};

const Busqueda = () => {
  const {
    BuscarBanda,
    tituloCancion,
    setTituloCancion,   
    nombreBanda,setNombreBanda,yearIniCancion,setYearIniCancion,
    yearFinCancion,setYearFinCancion
  } = useContext(BandasContext);
  const [buscando, setBuscando] = useState(true);
  let fondo="text-dark";
  //console.log(tituloCancion);
  useEffect(() => {
    BuscarBanda();
    // eslint-disable-next-line
  }, []);
  if (buscando) {
    let fondo="text-dark mt-2";
    return (
      <Container fluid className={`${fondo} mt-2`}>
        <Row className="row justify-content-end mb-2">
          <Col lg={1} md={1} className="">
            <NavLink onClick={() => setBuscando(!buscando)}>
              <Image src={imgBusqueda} alt="buscar" height={24}></Image>
            </NavLink>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container fluid className={`${fondo}  border border-primary`}>
        <Row className="">
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Row>
                  {/* Etiqueta canción */}
                  <Col className="col-md-auto">
                    <Form.Label size="sm">Cancion</Form.Label>
                  </Col>
                  {/* Input canción */}
                  <Col className="col-sm-3">
                    <Form.Control
                      size="sm"
                      type="input"
                      value={tituloCancion}
                      onChange={(e) => setTituloCancion(e.target.value)}
                    />
                  </Col>
                  {/* Etiqueta año*/}
                  <Col className="col-md-auto">
                    <Form.Label size="sm">Año</Form.Label>
                  </Col>
                  {/* Input año1*/}
                  <Col className="col-2">
                    <Form.Control
                      size="sm"
                      type="input"
                      value={yearIniCancion}
                      onChange={(e) => setYearIniCancion(e.target.value)}
                    />
                  </Col>
                  {/* Input año2*/}
                  <Col className="col-2">
                    <Form.Control
                      size="sm"
                      type="input"
                      value={yearFinCancion}
                      onChange={(e) => setYearFinCancion(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row>
                  {/* Etiqueta banda*/}
                  <Col className="col-md-auto">
                    <Form.Label size="sm">Banda </Form.Label>
                  </Col>
                  {/* Input banda*/}
                  <Col className="col-sm-3 ms-3">
                    <Form.Control
                      size="sm"
                      type="input"
                      value={nombreBanda}
                      onChange={(e) => setNombreBanda(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
          {/* Imagen buscar*/}
          <Col lg={1} md={1} className="">
            <NavLink onClick={() => setBuscando(!buscando)}>
              <Image src={imgBusqueda2} alt="buscar" height={24}></Image>
            </NavLink>
          </Col>
        </Row>
        <Row className="">
          {/* Botón buscar*/}
          <Col className="col-12 text-center">
            <Button size="sm" className="mb-3" onClick={BuscarBanda}>
              Buscar
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Buscador;
