import api from "../lib/axios";


export default {
    obtenerClientes() {
        return api.get('/api/Notes')
    },
    agregarCliente(data) {
        return api.post('/api/Notes', data)
    },
    obtenerCliente(id) {
        return api.get('/api/Notes/' + id)
    },
    actualizarCliente(id) {
       return api.put('/api/Notes/' + id, data)
    },

    eliminarCliente(id) {
        return api.delete('/api/Notes/' + id)
    }
}
