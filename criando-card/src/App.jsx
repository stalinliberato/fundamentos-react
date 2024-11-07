import rotposterImg from "./assets/star-wars.jpg"
import swposterImg from "./assets/return-jedi.jpg"
import pesposterImg from "./assets/empire.jpg"
import Card from "./components/Card"

export default function App() {
  return (
    <>
      <Card title="Pôster: Start Wars (1977)" posterImg={rotposterImg}/>
      <Card title="Pôster: Empire Stikes Back (1980)" posterImg={pesposterImg}/>
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={swposterImg}/>
    </>
     
  )
}

