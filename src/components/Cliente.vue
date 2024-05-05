<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router'

    const props = defineProps({
        cliente: {
            type: Object
        }
    })

    defineEmits(['actualizar-estado', 'eliminar-cliente'])

    // const nombreCliente = computed(() => {
    //     return props.cliente.name + ' ' + props.cliente.apellido
    // })

    const estadoCliente = computed(() => {
        return props.cliente.estado
    })

    
</script>


<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ cliente.title }}</p>
            <p class="text-gray-500">{{ cliente.name }} </p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{cliente.description}}</p>
            <p class="text-gray-600">{{cliente.date_update}}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
          <p class="text-gray-500">{{ cliente.category }} </p>

        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink 
                :to="{ name: 'editar-cliente', params: { id: cliente.id } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
            >Editar</RouterLink>

            <button
                class="text-red-600 hover:text-red-900"
                @click="$emit('eliminar-cliente', cliente.id)"
            >
                Eliminar
            </button>
        </td>
    </tr>
</template>
