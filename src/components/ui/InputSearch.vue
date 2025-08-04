<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
defineProps({
  placeholder: { type: String, default: 'Pesquise seus produtos..' },
});
const modelValue = defineModel<string>();
</script>

<template>
  <div class="input-search-component">
    <MagnifyingGlassIcon class="icon-input" />
    <input
      v-model="modelValue"
      :placeholder="placeholder"
      type="text"
      name="search"
    />
  </div>
</template>

<style scoped></style>