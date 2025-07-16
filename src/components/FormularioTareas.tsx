import { useForm } from "react-hook-form"
import Error from "./Error";
import type { DraftTarea } from "../types";
import { useTareaStore } from "../types/store";
import { useEffect } from "react";
import { toast } from "react-toastify";


const FormularioTareas = () => {

    const { agregarTarea, activarId, tareas, ActualizarTarea } = useTareaStore()
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<DraftTarea>()


    const registrarTarea = (data: DraftTarea) => {

        if (activarId) {
            ActualizarTarea(data)
            toast.success('Tarea Actualizada Exitosamente')
        } else {
            console.log('data enviada', data);
            agregarTarea(data)
            toast('Tarea Guardada Exitosamente')
        }
        // agregarTarea(data)
        reset()
    }
    useEffect(() => {

        if (activarId) {
            const activarTareas = tareas.filter(tarea => tarea.id === activarId)[0]
            // console.log('====================================');
            // console.log('desde el use efect en el form',activarTareas);
            // console.log('====================================');
            setValue('tarea', activarTareas.tarea)
            setValue('fecha', activarTareas.fecha)
            setValue('descripcion', activarTareas.descripcion)
        }

    }, [activarId, tareas])

    return (
        <>
            <div className="md:w-1/2 lg:w-2/5 mx-5">
                <p className="font-black text-lg mt-5 text-center mb-10">Añadir Tareas</p>

                <form
                    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                    noValidate
                    onSubmit={handleSubmit(registrarTarea)}
                >
                    <div className="mb-5">
                        <label htmlFor="tarea" className="text-sm uppercase font-bold">
                            Nombre de la Tarea
                        </label>
                        <input
                            id="tarea"
                            className="w-full p-3 border border-gray-100"
                            type="text"
                            placeholder="Nombre de la Tarea"
                            {...register('tarea', {
                                maxLength: {
                                    value: 15,
                                    message: 'maximo 15 caracteres'
                                },
                                required: "Falta el nombre de la tarea"
                            })}
                        />
                        {errors.tarea && <Error>{errors.tarea?.message?.toString()}</Error>}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="fecha" className="text-sm uppercase font-bold">
                            Fecha de la Tarea
                        </label>
                        <input
                            id="fecha"
                            className="w-full p-3 border border-gray-100"
                            type="date"
                            {...register(
                                "fecha", {
                                required: "Selecciona la fecha para la tarea"
                            }
                            )}
                        />
                        {errors.fecha && <Error>{errors.fecha?.message?.toString()}</Error>}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="descripcion" className="text-sm uppercase font-bold">
                            Descripción
                        </label>
                        <textarea
                            id="descripcion"
                            className="w-full p-3 border border-gray-100"
                            placeholder="Descripción de la Tarea"
                            {...register(
                                "descripcion",
                                {
                                    required: "Ingresa una Descripcion de la tarea"
                                }
                            )}
                        />
                        {errors.descripcion && <Error>{errors.descripcion?.message?.toString()}</Error>}
                    </div>

                    <input
                        type="submit"
                        className="bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-700 cursor-pointer transition-colors rounded"
                        value="Guardar Tarea"
                    />
                </form>
            </div>

        </>
    )
}

export default FormularioTareas
