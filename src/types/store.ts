import { create } from "zustand";
import type { DraftTarea, Formulario } from ".";
import { v4 as uuidv4 } from "uuid"

type TareasState = {
    tareas: Formulario[],
    agregarTarea: (data: DraftTarea) => void
    eliminarTarea: (id: Formulario['id']) => void
}

const creearTarea = (tarea: DraftTarea): Formulario => {
    return {
        ...tarea,
        id: uuidv4()
    }
}


export const useTareaStore = create<TareasState>((set) => ({
    //estado inicial 
    tareas: [],
    agregarTarea(data) {
        console.log("llega la data del formulario de store", data);
        const nuvaTarea = creearTarea(data)
        set((state) => ({
            tareas: [
                ...state.tareas,
                nuvaTarea
            ]
        }))
    },
    eliminarTarea: (id) => {
        console.log("Recibimos el id para eliminar la tarea en el store", id);
        set((state) => ({
            tareas: state.tareas.filter((tarea)=> tarea.id !== id)
        }))

    }

}))
