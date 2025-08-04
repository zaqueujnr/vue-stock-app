<script setup lang="ts">
import { inject, reactive } from 'vue';
import { useRouter } from 'vue-router'
import { ExitGateway } from '../infra/gateway/GatewaysTypes';
const router = useRouter()
const form = reactive({
  product: '',
  quantity: 0,
  provider: '',
  reason: '',
})
const exitGateway = inject("exitGateway") as ExitGateway;

const saveProvider = async () => {
  try {
    await exitGateway.saveExit(form)
    router.push('/exit')
    alert('Venda feita com sucesso!')
  } catch (error) {
    alert(error.message)
  }
}

const backToProviders = () => {
    router.push('/exit')
}
</script>
<template>
    <h1>Nova Venda</h1>
    <input v-model="form.product" type="text" placeholder="Produto"></input>
    <input v-model="form.quantity" type="number" placeholder="Quantidade"></input>
    <input v-model="form.provider" type="text" placeholder="Fornecedor"></input>
    <input v-model="form.reason" type="text" placeholder="Razão"></input>
      <button class="btn-secondary btn-md" @click="backToProviders()" >Cancelar</button>
      <button class="btn-primary btn-md" @click="saveProvider()">Salvar</button>
</template>

