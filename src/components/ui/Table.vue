<script setup lang="ts">
export type Column = { label: string; key: string };
export type Row = Record<string, any>;

defineProps<{
  columns?: Column[];
  rows?: Row[];
}>();
</script>

<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th v-for="column in columns">{{ column.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td v-for="column in columns" :key="column.key">
          {{ row[column.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
