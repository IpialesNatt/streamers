import db from "./firebase";
import { set, ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/opinions");

// Obtener todas las opiniones
const getAllOpinions = () => {
  return get(dbRef);
};

// Agregar una nueva opinión
const addOpinion = (opinion) => {
  const newOpinionRef = push(dbRef); // Crea una nueva referencia en Firebase
  return set(newOpinionRef, opinion); // Establece los valores en la base de datos
};

// Eliminar una opinión
const removeOpinions = (key) => {
  const dbRefOpinions = ref(db, `/opinions/${key}`);
  return remove(dbRefOpinions);
};

export default {
  getAllOpinions,
  addOpinion,
  removeOpinions,
};
