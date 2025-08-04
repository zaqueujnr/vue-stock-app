<script setup lang="ts">
const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: "update:page", value: number): void;
}>();

const nextPage = () => {
  if (props.currentPage < props.totalPages) emit("update:page", props.currentPage + 1);
};

const prevPage = () => {
  if (props.currentPage > 1) emit("update:page", props.currentPage - 1);
};
</script>

<template>
  <div class="pagination-component">
    <button @click="prevPage()" :disabled="currentPage === 1" class="btn-primary btn-sm">Anterior</button>
    <span>Página {{ currentPage }} de {{ totalPages }}</span>
    <button @click="nextPage()" :disabled="currentPage === totalPages" class="btn-primary btn-sm">
      Próximo
    </button>
  </div>
</template>
