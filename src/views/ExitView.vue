<script setup lang="ts">
import { inject, onMounted, reactive, ref } from "vue";
import ExitTableFeat from "../components/feature/ExitTableFeat.vue";
import Input from "../components/ui/InputSearch.vue";
import Pagination from "../components/ui/Pagination.vue";
import { ExitGateway } from "../infra/gateway/GatewaysTypes";
import ExitList from "../entity/ExitList";

const exitGateway = inject("exitGateway") as ExitGateway;
const exitList = reactive(new ExitList());

const fetchExits = async () => {
  const exitsResult = await exitGateway.getExit();
  setExits(exitsResult);
};

const fetchExitByPage = async (page: number) => {
  exitList.setCurrentPage(page);
  const params = {
    page,
    limit: exitList.getPageSize(),
  };
  const entriesResult = await exitGateway.getExit(params);
  setExits(entriesResult);
};

const setExits = (exitsResult: any): void => {
  exitList.setExits(exitsResult);
};

onMounted(async () => fetchExits());
</script>
<template>
  <h1>Saidas</h1>
    <div class="flex items-center gap-1.5">
    <Input />
    <router-link to="/createExit">
      <button class="btn-secondary btn-md" @click="">Nova Venda</button>
    </router-link>
    <button class="btn-primary btn-md">Filtrar</button>
  </div>
  <ExitTableFeat :rows="exitList.getExits()" />
  <Pagination
    :total-pages="exitList.getTotalPages()"
    :current-page="exitList.getCurrentPage()"
    @update:page="fetchExitByPage($event)"
  />
</template>
