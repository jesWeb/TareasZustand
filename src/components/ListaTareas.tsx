import type { Formulario } from "../types";
import { useTareaStore } from "../types/store"

const ListaTareas = () => {

  const { tareas, eliminarTarea, obtenerTarea } = useTareaStore()
  console.log('son las tareas', tareas);


  // const handleclick = (tarea: Formulario) => {
  //   console.log('====================================');
  //   console.log('Eliminamos la tarea', tarea.id);
  //   console.log('====================================');
  //   eliminarTarea(tarea.id)
  // }

  const handleAccion = (accion: 'eliminar' | 'editar', tarea: Formulario) => {
    console.log(`${accion === 'eliminar' ? 'Eliminamos' : 'Editamos'}la tarea con el id`, tarea.id);

    if (accion === 'eliminar') {
      eliminarTarea(tarea.id)
 
      console.log('estas en eliminar');
   
    } else if (accion === 'editar') {
      obtenerTarea(tarea.id)
      console.log('estas en ediar');

    }

  }



  return (
    <>
      <div className=" md:w-2/3 md:h-screen overflow-auto">
        {tareas.length ? (
          <>
            <h2 className="text-center font-black text-lg mt-5 mb-10">Listado de <span className="text-blue-800">Tareas </span>para Gestionar</h2>
            {tareas.map(tarea =>
              <div key={tarea.id} className="w-2/3  px-4 lg:w-1/3">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Nombre de la Tarea:<span className="font-bold">{tarea.tarea}</span></h2>
                    <p className=" text-gray-600">Fecha de la Tarea: <span className="font-bold">{tarea.fecha.toString()}</span> </p>
                    <p className=" text-gray-600">Descripcion de la Tarea: <span className="font-bold">{tarea.descripcion}</span> </p>
                  </div>
                </div>
                <div className="flex flex-col lg-flex-row gap-3 justify-between mt-10 px-10">
                  <button
                    onClick={() => handleAccion('editar', tarea)}
                    type="button"
                    className="py-2 px-10 text-white font-bold uppercase rounded-lg bg-indigo-600 hover:bg-indigo-600"
                  >Editar</button>
                  <button
                    onClick={() => handleAccion('eliminar', tarea)}
                    type="button"
                    className="py-2 px-10 text-white font-bold uppercase rounded-lg bg-red-600  hover:bg-red-600 "
                  >Eliminar</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="text-center font-black text-lg mt-5 mb-10">No hay Tareas</h2>
            <p className="text-gray-600 text-center">Agrega tu primer tarea...</p>
          </>
        )}

      </div>

    </>
  )
}

export default ListaTareas
