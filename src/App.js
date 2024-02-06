import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Intro from "./pages/intro";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Profile from "./pages/profile";
import TesJs from "./pages/tes";

function App() {
  return (
    <>
      <div>
      <Navbar />
      {/* <TesJs /> */}
      {/* <Profile /> */}
      {/* <Home />/ */}
      <BrowserRouter>
      <main>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/data' component={Profile} exact/>
          <Route path='/lengkap/:id' exact component={Detail}/>
        </Switch>
      </main>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
