<script setup lang="ts">
import { inject, onMounted, reactive, ref } from "vue";
import EntryTableFeat from "../components/feature/EntryTableFeat.vue";
import Input from "../components/ui/InputSearch.vue";
import Pagination from "../components/ui/Pagination.vue";
import { EntryGateway } from "../infra/gateway/GatewaysTypes";
import EntryList from "../entity/EntryList";

const entryGateway = inject("entryGateway") as EntryGateway;
const entryList = reactive(new EntryList());

const fetchEntries = async () => {
  const entriesResult = await entryGateway.getEntry();
  setEntries(entriesResult);
};

const fetchEntriesByPage = async (page: number) => {
  entryList.setCurrentPage(page);
  const params = {
    page,
    limit: entryList.getPageSize(),
  };
  const entriesResult = await entryGateway.getEntry(params);
  setEntries(entriesResult);
};

const setEntries = (entriesResult: any): void => {
  entryList.setEntries(entriesResult);
};

onMounted(async () => fetchEntries());
</script>
<template>
  <h1>Entradas</h1>
    <div class="flex items-center gap-1.5">
    <Input />
    <router-link to="/createEntry">
      <button class="btn-secondary btn-md" @click="">Nova compra</button>
    </router-link>
    <button class="btn-primary btn-md">Filtrar</button>
  </div>
  <EntryTableFeat :rows="entryList.getEntries()" />
  <Pagination
    :total-pages="entryList.getTotalPages()"
    :current-page="entryList.getCurrentPage()"
    @update:page="fetchEntriesByPage($event)"
  />
</template>
