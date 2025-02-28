import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import StreamersList from "./pages/streamers-list/StreamersList"
import Community from "./pages/community/Community"
import Contact from "./pages/contact/Contact"
import Places from "./pages/places/Places"
import Eventss from "./pages/eventss/Eventss"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/streamers_list" element={<StreamersList />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/eventss" element={<Eventss/>}></Route>
        <Route path="/places" element={<Places/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
