import db from "./firebase";
import { set, ref, get, remove, push, update } from "firebase/database";

const dbRef = ref(db, "/opinions");

// Obtener todas las opiniones
const getAllOpinions = () => {
  return get(dbRef);
};

// Agregar una nueva opinión
const addOpinion = (opinion) => {
  const newOpinionRef = push(dbRef);
  return set(newOpinionRef, opinion)
    .then(() => newOpinionRef.key); // Devuelve la clave generada
};

// Actualizar una opinión
const updateOpinion = (key, opinionData) => {
  const opinionRef = ref(db, `/opinions/${key}`);
  return update(opinionRef, opinionData);
};

// Eliminar una opinión (corregir nombre de función)
const removeOpinion = (key) => {  // Cambiado de removeOpinions a removeOpinion
  const opinionRef = ref(db, `/opinions/${key}`);
  return remove(opinionRef);
};

export default {
  getAllOpinions,
  addOpinion,
  updateOpinion,  // Añadida esta función
  removeOpinion   // Nombre corregido
};
