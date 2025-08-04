<script setup lang="ts">
import Table from "../ui/Table.vue";
import type { Column } from "../ui/Table.vue";
import type { Row } from "../ui/Table.vue";
defineProps<{
  rows: Row[];
}>();
const columns: Column[] = [
  { label: "Nome", key: "name" },
  { label: "Cnpj", key: "cnpj" },
  { label: "Telefone", key: "phone" },
  { label: "Email", key: "email" },
];
</script>

<template>
  <Table :columns="columns" :rows="rows" />
</template>
