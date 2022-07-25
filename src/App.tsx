import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import AuthForm from "./AuthForm";
import NoPage from "./NoPage";

export default function App() {
    return (
    <div className="App">
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<AuthForm/>}/>
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </Router>
    </div>
  );
}


