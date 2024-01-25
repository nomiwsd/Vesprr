import "./App.css";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import Aboutus from "./components/AboutUsPage/Aboutus";
import Services from "./components/ServicePage/Services";
import Contactus from "./components/ContactUspage/Contactus";
import Teampage from "./components/Teampage/Teampage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
    <Header/>
       <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/about" element={<Aboutus />} />
       <Route path="/service" element={<Services />} />
       <Route path="/contactus" element={<Contactus />} />
       <Route path="/teampage" element={<Teampage />} />
      </Routes>
      <Footer/> 
    </Router>
    </div>
  );
}

export default App;
