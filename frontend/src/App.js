import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Profile from "./pages/profile";
import {Btnlogin} from "./components/btnlogin";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/signup'} element={<Signup/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
            </Routes>
        </>

    );
}

export default App;
