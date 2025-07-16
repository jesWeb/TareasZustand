import { ToastContainer } from 'react-toastify';
import FormularioTareas from "./components/FormularioTareas"
import ListaTareas from "./components/ListaTareas"

function App() {
  return (
    <>
      <div className="container mx-auto mt-20 bg-slate-200 shadow-lg   ">
        <h1 className="font-bold text-center md:w-2/3 md:mx-auto text-2xl">Mis Tareas!</h1>
        <div className="">
          <div className="mt-12 md:flex">
            <FormularioTareas />
            <ListaTareas />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
    </>
  )
}

export default App
