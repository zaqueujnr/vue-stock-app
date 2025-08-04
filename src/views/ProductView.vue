<script setup lang="ts">
import { inject, onMounted, reactive, ref } from "vue";
import ProductTableFeat from "../components/feature/productTableFeat.vue";
import Input from "../components/ui/InputSearch.vue";
import Pagination from "../components/ui/Pagination.vue";
import { ProductGateway } from "../infra/gateway/GatewaysTypes";
import ProductList from "../entity/ProductList";

const productGateway = inject("productGateway") as ProductGateway;
const productList = reactive(new ProductList());

const fetchProducts = async () => {
  const productsResult = await productGateway.getProduct();
  setProducts(productsResult);
};

const fetchProductsByPage = async (page: number) => {
  productList.setCurrentPage(page);
  const params = {
    page,
    limit: productList.getPageSize(),
  };
  const productsResult = await productGateway.getProduct(params);
  setProducts(productsResult);
};

const setProducts = (productsResult: any): void => {
  productList.setProducts(productsResult);
};

onMounted(async () => fetchProducts());
</script>
<template>
  <h1>Produtos</h1>
  <div class="flex items-center gap-1.5">
    <Input />
    <router-link to="/createProduct">
      <button class="btn-secondary btn-md" @click="">Novo Produto</button>
    </router-link>
    <button class="btn-primary btn-md">Filtrar</button>
  </div>
  <ProductTableFeat :rows="productList.getProducts()" />
  <Pagination
    :total-pages="productList.getTotalPages()"
    :current-page="productList.getCurrentPage()"
    @update:page="fetchProductsByPage($event)"
  />
</template>
