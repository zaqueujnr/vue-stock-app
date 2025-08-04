<script setup lang="ts">
import { inject, reactive } from 'vue';
import { useRouter } from 'vue-router'
import { ProviderGateway } from '../infra/gateway/GatewaysTypes';
const router = useRouter()
const form = reactive({
  name: '',
  cnpj: '',
  phone: 0,
  email: '',
})
const providerGateway = inject("providerGateway") as ProviderGateway;

const saveProvider = async () => {
  try {
    await providerGateway.saveProvider(form)
    router.push('/provider')
    alert('Fornecedor salvo com sucesso!')
  } catch (error) {
    alert(error.message)
  }
}

const backToProviders = () => {
    router.push('/provider')
}
</script>
<template>
    <h1>Novo Fornecedor</h1>
    <input v-model="form.name" type="text" placeholder="Nome"></input>
    <input v-model="form.cnpj" type="text" placeholder="CNPJ"></input>
    <input v-model="form.phone" type="number" placeholder="Telefone"></input>
    <input v-model="form.email" type="text" placeholder="Email"></input>
      <button class="btn-secondary btn-md" @click="backToProviders()" >Cancelar</button>
      <button class="btn-primary btn-md" @click="saveProvider()">Salvar</button>
</template>

