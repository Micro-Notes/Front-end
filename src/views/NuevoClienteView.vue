<script setup>
    import { FormKit } from '@formkit/vue'
    import { useRouter } from 'vue-router'
    import ClienteService from '../services/ClienteService';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';

    const router = useRouter()

    defineProps({
        titulo: {
            type: String
        }
    })

    const handleSubmit = (data) => {
        ClienteService.agregarCliente(data)
            .then(respuesta => {
                console.log(respuesta)
                // Redireccionar
                router.push({ name: 'listado-clientes'})
            })
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
                    submit-label="Agregar Nota"
                    incomplete-message="No se pudo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                >
                    <FormKit 
                        type="text"
                        label="Titulo"
                        name="title"
                        placeholder="Titulo de Nota"
                        validation="required"
                        :validation-messages="{ required: 'El titulo se requiere' }"
                    />

<!--                    <FormKit
                        type="text"
                        label="Descripcion"
                        name="description"
                        placeholder="description"
                        validation="required"
                        :validation-messages="{ required: 'La descripcion se requiere' }"
                    />-->

                  <FormKit
                      type="text"
                      label="Categoria"
                      name="category"
                      placeholder="category"
                      validation="required"
                      :validation-messages="{ required: 'Se requiere la categoria' }"
                  />

                    <FormKit 
                        type="textarea"
                        name="description"
                        label="Agregar Nota"
                        placeholder="Agregar Nota"
                        rows="20"
                        cols="90"
                        :validation-messages="{ required: 'La descripcion se requiere' }"
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