import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Community from "./pages/community/Community";
import Contact from "./pages/contact/Contact";
import Places from "./pages/places/Places";
import Eventss from "./pages/eventss/Eventss";
import Cookies from "./pages/cookies/Cookies";
import Legal from "./pages/legal/Legal";
import Privacity from "./pages/privacity/Privacity";
import Notice from "./components/notice/Notice";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/eventss" element={<Eventss />} />
          <Route path="/places" element={<Places />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacity" element={<Privacity />} />
          <Route path="/notice" element={<Notice/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

