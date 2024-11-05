import Title from "./components/Title/Title"
import { Subtitle } from "./components/Subtitle"
import Status from "./components/Status"

function sum (a, b) {
  return a + b
}

export default function App() {
  const tech = "React"
  return (
    <div>
      <Title />
      <h1>{tech} is awesome!</h1>
      <Subtitle />
      <Status />
    </div>
  )
}