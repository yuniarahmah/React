import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Intro from "./pages/intro";
import Home from "./pages/home";
import DetailProduct from "./pages/detail_product";
import Profile from "./pages/profile";
import TesJs from "./pages/tes";
import EditProduct from "./pages/edit";
import About from "./pages/about";
import TambahProduct from "./pages/tambah";
import Register from "./auth/regsiter";
import Login from "./auth/login";
import PrivateRoute from "./components/privat";

function App() {
  return (
    <>
      {/* <div>
      <Navbar />
      <BrowserRouter>
      <main>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/data' component={Profile} exact/>
          <Route path='/edit/:Id_saja' component={EditProduct} exact />
          <Route path='/about' component={About} exact />
          <Route path='/lengkap/:id' exact component={DetailProduct}/>
          <Route path='/tambah' exact component={TambahProduct} />
          <Route path='/daftar' exact component={Register} />
          <Route path='/masuk' exact component={Login} />
        </Switch>
      </main>
      </BrowserRouter>
      </div> */}
      <div>
      <Navbar />
      <BrowserRouter>
      <main>
        <Switch>
          <PrivateRoute path='/' component={Home} exact/>
          <Route path='/daftar' exact component={Register} />
          <Route path='/masuk' exact component={Login} />
          <PrivateRoute path='/data' component={Profile} exact/>
          <PrivateRoute path='/edit/:Id_saja' component={EditProduct} exact />
          <PrivateRoute path='/about' component={About} exact />
          <PrivateRoute path='/lengkap/:id' exact component={DetailProduct}/>
          <PrivateRoute path='/tambah' exact component={TambahProduct} />
          <Redirect to="/" />
        </Switch>
      </main>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
