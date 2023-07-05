import {
  Col,
  Container,
  Row,
  Image,
  NavLink,
  Button,
  Form,
  Accordion,
} from "react-bootstrap";
import EtiquetaTotalBandas from "./EtiquetaTotalBandas";
import BandasContext from "../contexts/BandasContext";
import { useState, useContext, useEffect } from "react";
import imgBusqueda from "../assets/img/buscador.png";
import imgBusqueda2 from "../assets/img/cancelbusq.png";

const Header = () => {
  const {
    BuscarBanda,
    totalBandas,
    tituloCancion,
    setTituloCancion,   
    nombreBandaFiltro,
    setNombreBandaFiltro,
    yearIniCancion,
    setYearIniCancion,
    yearFinCancion,
    setYearFinCancion,
  } = useContext(BandasContext);  
  let fondo = "text-dark";
  //console.log(tituloCancion);
  useEffect(() => {
    BuscarBanda();
    // eslint-disable-next-line
  }, []);

  return (
    <Container fluid className="sticky-top mb-1 color2 p-0">
      <Row className="pt-2">
        <Col xl={4} lg={4} md={4}>
          <h1 className="text-dark">Música Rock</h1>
        </Col>
        <Col className="align-self-end">
          <EtiquetaTotalBandas filas={totalBandas}></EtiquetaTotalBandas>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Buscar</Accordion.Header>
              <Accordion.Body className="color2 p-0 pt-1">
                <Container fluid className={`${fondo}`}>
                  <Row className="mb-0">
                    <Col>
                      <Form>
                        <Form.Group className="mb-1">
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
                                onChange={(e) =>
                                  setTituloCancion(e.target.value)
                                }
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
                                onChange={(e) =>
                                  setYearIniCancion(e.target.value)
                                }
                              />
                            </Col>
                            {/* Input año2*/}
                            <Col className="col-2">
                              <Form.Control
                                size="sm"
                                type="input"
                                value={yearFinCancion}
                                onChange={(e) =>
                                  setYearFinCancion(e.target.value)
                                }
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
                                value={nombreBandaFiltro}
                                onChange={(e) =>
                                  setNombreBandaFiltro(e.target.value)
                                }
                              />
                            </Col>
                          </Row>
                        </Form.Group>
                      </Form>
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
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <Busqueda></Busqueda> */}
        </Col>
      </Row>

      {/* <Buscador></Buscador> */}
    </Container>
    // </div>
  );
};
const Busqueda = () => {
  const {
    BuscarBanda,
    tituloCancion,
    setTituloCancion,
    nombreBandaFiltro,
    setNombreBandaFiltro,
    yearIniCancion,
    setYearIniCancion,
    yearFinCancion,
    setYearFinCancion,
  } = useContext(BandasContext);
  const [buscando, setBuscando] = useState(true);
  let fondo = "text-dark";
  //console.log(tituloCancion);
  useEffect(() => {
    BuscarBanda();
    // eslint-disable-next-line
  }, []);
  if (buscando) {
    
    return (
      // <Container fluid className={`${fondo} mt-2`}>
      <Row className="justify-content-end mb-2">
        <Col lg={1} md={1} className="">
          <NavLink onClick={() => setBuscando(!buscando)}>
            <Image src={imgBusqueda} alt="buscar" height={24}></Image>
          </NavLink>
        </Col>
      </Row>
      // </Container>
    );
  } else {
    return (
      <Container fluid className={`${fondo}  border border-primary`}>
        <Row className="">
          <Col>
            <div>Buscar</div>
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
                      value={nombreBandaFiltro}
                      onChange={(e) => setNombreBandaFiltro(e.target.value)}
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

export default Header;
