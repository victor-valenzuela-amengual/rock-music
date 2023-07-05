import { Col, Form, Row } from "react-bootstrap";
import BandasContext from "../contexts/BandasContext";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Catalogo from "./Catalogo";

const ListadoBandas = () => {
  const {
    bandas,
    codigoBanda,
    setCodigoBanda,
    ListarBandas,
    nombreBanda,
    setNombreBanda,
    FiltrarListarBandas,
  } = useContext(BandasContext);
  
  useEffect(() => {
    if (!nombreBanda) ListarBandas();
    else {
      FiltrarListarBandas();
    }
    
    // eslint-disable-next-line
  }, [codigoBanda, nombreBanda]);
  return (
    //border border-danger
    <Row className="background ">
      <Col className="col-3">
        <div className="">
          <Form.Control
            size="sm"
            type="input"
            placeholder="Buscar..."
            onChange={(e) => setNombreBanda(e.target.value)}
          ></Form.Control>
        </div>
        {bandas.map((banda,num) => {
          let fondo= num % 2 ? "color1":"color2";
          return (
            <div
              key={banda.id}              
              className={`${fondo}`}
              onClick={(e) => {
                setCodigoBanda(banda.id);
              }}
            >
              <NavLink className="a:link">{banda.Nombre}</NavLink>
            </div>
          );
        })}
      </Col>
      <Catalogo></Catalogo>
    </Row>
  );
};

export default ListadoBandas;
