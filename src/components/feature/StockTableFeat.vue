<script setup lang="ts">
import Table from "../ui/Table.vue";
import type { Column } from "../ui/Table.vue";
import type { Row } from "../ui/Table.vue";
defineProps<{
  rows: Row[];
}>();
const columns: Column[] = [
  { label: "Produto", key: "productId" },
  { label: "Quantidade", key: "quantity" },
  { label: "Localização", key: "location" },
];
</script>

<template>
  <Table :columns="columns" :rows="rows" />
</template>
