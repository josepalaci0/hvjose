import "./styles.css";
import Home from "./home";
import {
  Datos_personales,
  Experiencia_laboral,
  Idiomas_hablados,
  Educacion
} from "./datos";
const hv = {
  datos_personales: Datos_personales(),
  experiencia_laboral: Experiencia_laboral(),
  idiomas_hablados: Idiomas_hablados(),
  educacion: Educacion()
};

export default function App() {
  return Home(hv);
}
