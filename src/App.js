import { Container } from "react-bootstrap";  
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BandasProvider } from "./contexts/BandasContext";
import PageInicio from "./pages/PageInicio";
function App() {  
  return (
    <Container fluid className="p-0" >
      <BrowserRouter>
        <BandasProvider>         
          <Routes>
            <Route path="/" element={<PageInicio />} />
            {/* <Route path="/pagecatalogo/:codigoBanda" element={<PageCatalogo />} />             */}
          </Routes>
        </BandasProvider>
      </BrowserRouter>
    </Container>
  );
}

export default App;
