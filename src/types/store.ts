import { create } from "zustand";
import type { DraftTarea, Formulario } from ".";
import { v4 as uuidv4 } from "uuid"
import { devtools } from "zustand/middleware";

type TareasState = {
    tareas: Formulario[],
    agregarTarea: (data: DraftTarea) => void
    eliminarTarea: (id: Formulario['id']) => void
    obtenerTarea: (id: Formulario['id']) => void
    ActualizarTarea: (data: DraftTarea) => void
    activarId: Formulario['id']
}

const creearTarea = (tarea: DraftTarea): Formulario => {
    return {
        ...tarea,
        id: uuidv4()
    }
}


export const useTareaStore = create<TareasState>()(
    devtools(
        (set) => ({
            //estado inicial 
            tareas: [],
            activarId: '',
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
                    tareas: state.tareas.filter((tarea) => tarea.id !== id)
                }))

            },
            obtenerTarea: (id) => {
                console.log('verificamos que llege el id en store,[para editarlo', id);
                set(() => ({
                    activarId: id
                }))
            },
            ActualizarTarea: (data) => {
                set((state) => ({
                    tareas: state.tareas.map((tarea) => tarea.id === state.activarId ? { id: state.activarId, ...data } : tarea),
                    activarId: '',
                }))
            },

        })
    )
)
