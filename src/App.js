import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Intro from "./pages/intro";
import Home from "./pages/home";
import DetailProduct from "./pages/detail_product";
import Profile from "./pages/profile";
import TesJs from "./pages/tes";
import EditProduct from "./pages/edit";
import About from "./pages/about";
import TambahProduct from "./pages/tambah";

function App() {
  return (
    <>
      <div>
      <Navbar />
      {/* <TesJs /> */}
      {/* <Profile /> */}
      {/* <About /> */}
      <BrowserRouter>
      <main>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/data' component={Profile} exact/>
          <Route path='/edit/:Id_saja' component={EditProduct} exact />
          <Route path='/about' component={About} exact />
          <Route path='/lengkap/:id' exact component={DetailProduct}/>
          <Route path='/tambah' exact component={TambahProduct} />
        </Switch>
      </main>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
