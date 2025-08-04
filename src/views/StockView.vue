<script setup lang="ts">
import { inject, onMounted, reactive, ref } from "vue";
import StockTableFeat from "../components/feature/StockTableFeat.vue";
import Input from "../components/ui/InputSearch.vue";
import Pagination from "../components/ui/Pagination.vue";
import { StockGateway } from "../infra/gateway/GatewaysTypes";
import StockList from "../entity/StockList";

const stockGateway = inject("stockGateway") as StockGateway;
const stockList = reactive(new StockList());

const fetchStocks = async () => {
  const stocksResult = await stockGateway.getStock();
  setStocks(stocksResult);
};

const fetchStockByPage = async (page: number) => {
  stockList.setCurrentPage(page);
  const params = {
    page,
    limit: stockList.getPageSize(),
  };
  const stocksResult = await stockGateway.getStock(params);
  setStocks(stocksResult);
};

const setStocks = (stocksResult: any): void => {
  stockList.setStocks(stocksResult);
};

onMounted(async () => fetchStocks());
</script>
<template>
  <h1>Estoque</h1>
  <div class="flex items-center gap-1.5">
    <Input />
    <router-link to="/createStock">
      <button class="btn-secondary btn-md" @click="">Novo estoque</button>
    </router-link>
    <button class="btn-primary btn-md">Filtrar</button>
  </div>
  <StockTableFeat :rows="stockList.getStocks()" />
  <Pagination
    :total-pages="stockList.getTotalPages()"
    :current-page="stockList.getCurrentPage()"
    @update:page="fetchStockByPage($event)"
  />
</template>
