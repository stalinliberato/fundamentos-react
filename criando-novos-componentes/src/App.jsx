import Title from "./components/Title/Title"
import Subtitle from "./components/Subtitle/Subtitle"
import Status from "./components/Status/Status"
import styles from "./App.module.css";




function sum (a, b) {
  return a + b
}

export default function App() {
  const tech = "React"
  return (
    <div className={styles.app}>
      <Title />
      <h1>{tech} is awesome!</h1>
      <Subtitle />
      <Status />
    </div>
  )
}