import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

function App() {
  return (
    <>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={''} element={<Home/>}/>
              <Route path={'products'} element={<Products/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
