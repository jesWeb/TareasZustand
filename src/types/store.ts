import { create } from "zustand";
import type { DraftTarea, Formulario } from ".";

type TareasState = {
    tareas: Formulario[],
    agregarTarea: (data: DraftTarea) => void
}
export const useTareaStore = create<TareasState>(() => ({
    //estado inicial 
    tareas: [],
    agregarTarea(data) {
        console.log("llega la data del formulario de store", data);

    },

}))
