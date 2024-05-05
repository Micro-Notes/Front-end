<script setup>
    import { onMounted, reactive, ref } from 'vue'
    import { FormKit } from '@formkit/vue'
    import { useRouter, useRoute } from 'vue-router'
    import ClienteService from '../services/ClienteService';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';

    const router = useRouter()
    const route = useRoute()

    const { id } = route.params

    const formData = reactive({})

    onMounted(() => {
        ClienteService.obtenerCliente(id)
            .then(({data}) => {
                Object.assign(formData, data)
            })
            .catch(error => console.log(error))
    })

    defineProps({
        titulo: {
            type: String
        }
    })

    const handleSubmit = (data) => {
        ClienteService.actualizarCliente(id, data)
            .then(() => router.push({name: 'listado-clientes'}))
            .catch(error => console.log(error))
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink 
                to="listado-clientes"
            >
                Volver
            </RouterLink>
        </div>

        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                    type="form"
                    submit-label="Guardar Cambios"
                    incomplete-message="No se pudo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                    :value="formData"
                >
                    <FormKit
                        type="text"
                        label="Titulo"
                        name="title"
                        placeholder="Titulo"
                        validation="required"
                        :validation-messages="{ required: 'El titulo se requiere' }"
                        v-model="formData.title"
                    />

                    <FormKit 
                        type="text"
                        label="Categoria"
                        name="category"
                        placeholder="Categoria de Nota"
                        validation="required"
                        :validation-messages="{ required: 'La Categoria es Obligatorio' }"
                        v-model="formData.category"
                    />

                    <FormKit 
                        type="text"
                        label="Nota"
                        name="description"
                        placeholder="Escriba una Nota"
                        validation="required"
                        :validation-messages="{ required: 'La Nota es Obligatorio' }"
                        v-model="formData.description"
                    />

                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>