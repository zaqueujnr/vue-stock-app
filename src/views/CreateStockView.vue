<script setup lang="ts">
import { inject, reactive } from 'vue';
import { useRouter } from 'vue-router'
import { StockGateway } from '../infra/gateway/GatewaysTypes';
const router = useRouter()
const form = reactive({
  product: '',
  quantity: 0,
  location: '',
})
const stockGateway = inject("stockGateway") as StockGateway;

const saveProvider = async () => {
  try {
    await stockGateway.saveStock(form)
    router.push('/stock')
    alert('Estoque criado com sucesso!')
  } catch (error) {
    alert(error.message)
  }
}

const backToProviders = () => {
    router.push('/stock')
}
</script>
<template>
    <h1>Novo Estoque</h1>
    <input v-model="form.product" type="text" placeholder="Produto"></input>
    <input v-model="form.quantity" type="number" placeholder="Quantidade"></input>
    <input v-model="form.location" type="text" placeholder="Localização"></input>
      <button class="btn-secondary btn-md" @click="backToProviders()" >Cancelar</button>
      <button class="btn-primary btn-md" @click="saveProvider()">Salvar</button>
</template>

