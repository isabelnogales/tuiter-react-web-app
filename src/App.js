import logo from './logo.svg';
//import WelcomeToFSD from "./WelcomeToFSD";

//asi podemos acceder a la carpeta entera
import Labs from "./Labs";
import HelloWorld from "./Labs/a6/hello-world";
import Tuiter from "./Tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router";
import {Link} from "react-router-dom";

//we can not forget div , if not it will break
//use className instead of class

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    // lab component as default landing screen
                    <Route index element={<Labs/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                    <Route path="/tuiter" element={<Tuiter/>}/>
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
