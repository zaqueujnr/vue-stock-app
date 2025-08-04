<script setup lang="ts">
import { inject, reactive } from 'vue';
import { useRouter } from 'vue-router'
import { ProductGateway } from '../infra/gateway/GatewaysTypes';

const router = useRouter()
const form = reactive({
  name: '',
  description: '',
  unitPrice: 0,
  barcode: '',
  active: true
})
const productGateway = inject("productGateway") as ProductGateway;

const saveProduct = async () => {
  try {
    await productGateway.saveProduct(form)
    backToProducts()
    alert('Produto salvo com sucesso!')
  } catch (error) {
    alert(error.message)
  }
}

const backToProducts = () => {
    router.push('/product')
}
</script>
<template>
    <h1>Novo Produto</h1>
    <input v-model="form.name" type="text" placeholder="Nome"></input>
    <input v-model="form.description" type="text" placeholder="Descrição"></input>
    <input v-model="form.unitPrice" type="number" placeholder="Preço Unitário"></input>
    <input v-model="form.barcode" type="text" placeholder="Bar Code"></input>
      <button class="btn-secondary btn-md" @click="backToProducts()" >Cancelar</button>
      <button class="btn-primary btn-md" @click="saveProduct()">Salvar</button>
</template>

