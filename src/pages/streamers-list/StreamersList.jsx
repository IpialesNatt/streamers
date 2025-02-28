import Card from "../../components/card/Card"
import Header from "../../components/header/Header"

function StreamersList() {
  const streamers = [
    {
      name: "Auronplay",
      url: "https://www.youtube.com/user/AuronPlay"
    },
    {
      name: "Rubius",
      url: "https://www.youtube.com/user/elrubiusOMG"
    },
    {
      name: "Xokas",
      url: "https://www.twitch.tv/elxokas?lang=es"
    }
  ]



    return (
      <>
        <Header />
        <p>Aqui esta la pagina de listado de streamers</p>

        {
          streamers.map((s) => {
            return (
              <Card item={s} color="green" />
            )
          })
        }
        <p>hasta awui uno</p>
      </>
    )
  }
  export default StreamersList

