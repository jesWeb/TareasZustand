export type Formulario = {
    id: string,
    tarea: string,
    fecha: Date,
    descripcion: string
}

export type DraftTarea = Omit<Formulario, 'id'>