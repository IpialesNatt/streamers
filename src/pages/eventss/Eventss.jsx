import "./Eventss.css";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import Events from "../../components/events/Events";
import Notice from "../../components/notice/Notice";

function Eventss() {
  return (
    <>
      <Header />

      <Events/>
      <Notice/>

      <Footer />
    </>
  )
}
export default Eventss