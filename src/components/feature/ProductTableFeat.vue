<script setup lang="ts">
import Table from "../ui/Table.vue";
import type { Column } from "../ui/Table.vue";
import type { Row } from "../ui/Table.vue";
defineProps<{
  rows: Row[];
}>();
const columns: Column[] = [
  { label: "Nome", key: "name" },
  { label: "Descrição", key: "description" },
  { label: "Preço Unitário", key: "unitPrice" },
  { label: "Barcode", key: "barcode" },
  { label: "Status", key: "active" },
];
</script>

<template>
  <Table :columns="columns" :rows="rows" />
</template>
