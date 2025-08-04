<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";
import Input from "../components/ui/InputSearch.vue";
import Pagination from "../components/ui/Pagination.vue";
import { ProviderGateway } from "../infra/gateway/GatewaysTypes";
import ProviderList from "../entity/ProviderList";
import ProviderTableFeat from "../components/feature/ProviderTableFeat.vue";
const providerGateway = inject("providerGateway") as ProviderGateway;
const providerList = reactive(new ProviderList());

const fetchProviders = async () => {
  const providersResult = await providerGateway.getProvider();
  setProviders(providersResult);
};

const fetchProviderByPage = async (page: number) => {
  providerList.setCurrentPage(page);
  const params = {
    page,
    limit: providerList.getPageSize(),
  };
  const providersResult = await providerGateway.getProvider(params);
  setProviders(providersResult);
};

const setProviders = (providersResult: any): void => {
  providerList.setProviders(providersResult);
};

onMounted(async () => fetchProviders());
</script>

<template>
  <h1>Fornecedores</h1>
    <div class="flex items-center gap-1.5">
    <Input />
    <router-link to="/createProvider">
      <button class="btn-secondary btn-md">Novo Fornecedor</button>
    </router-link>
    <button class="btn-primary btn-md">Filtrar</button>
  </div>
  <ProviderTableFeat :rows="providerList.getProviders()" />
  <Pagination
    @update:page="fetchProviderByPage($event)"
    :total-pages="providerList.getTotalPages()"
    :current-page="providerList.getCurrentPage()"
  />
</template>

<style scoped></style>
