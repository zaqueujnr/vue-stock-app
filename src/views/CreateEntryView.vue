<script setup lang="ts">
import { inject, reactive } from 'vue';
import { useRouter } from 'vue-router'
import { EntryGateway } from '../infra/gateway/GatewaysTypes';
const router = useRouter()
const form = reactive({
  product: '',
  quantity: 0,
  provider: '',
})
const entryGateway = inject("entryGateway") as EntryGateway;

const saveProvider = async () => {
  try {
    await entryGateway.saveEntry(form)
    router.push('/entry')
    alert('Compra feita com sucesso!')
  } catch (error) {
    alert(error.message)
  }
}

const backToProviders = () => {
    router.push('/entry')
}
</script>
<template>
    <h1>Nova Compra</h1>
    <input v-model="form.product" type="text" placeholder="Produto"></input>
    <input v-model="form.quantity" type="text" placeholder="Quantidade"></input>
    <input v-model="form.provider" type="number" placeholder="Fornecedor"></input>
      <button class="btn-secondary btn-md" @click="backToProviders()" >Cancelar</button>
      <button class="btn-primary btn-md" @click="saveProvider()">Salvar</button>
</template>

