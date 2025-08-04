<script setup lang="ts">
import { ref, watch } from "vue";
import {
  UserGroupIcon,
  ArchiveBoxIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  TagIcon,
} from "@heroicons/vue/24/outline";
const sidebarOpened = ref(false);
const emit = defineEmits<{
  (e: "update:opened", value: boolean): void;
}>();
watch(sidebarOpened, (val) => {
  emit("update:opened", val);
});
</script>

<template>
  <aside
    :class="[sidebarOpened ? 'w-64' : 'w-16']"
    class="side-bar"
    @mouseenter="sidebarOpened = true"
    @mouseleave="sidebarOpened = false"
  >
    <nav class="li-side-bar">
      <ul>
        <li>
          <a href="/product">
            <TagIcon class="icon-sidebar" />
            <span v-if="sidebarOpened">Produtos</span>
          </a>
        </li>
        <li>
          <a href="/provider">
            <UserGroupIcon class="icon-sidebar" />
            <span v-if="sidebarOpened">Fornecedores</span>
          </a>
        </li>
        <li>
          <a href="/entry">
            <ArrowTrendingDownIcon class="icon-sidebar" />
            <span v-if="sidebarOpened">Entradas</span>
          </a>
        </li>
        <li>
            <a href="/exit">
              <ArrowTrendingUpIcon class="icon-sidebar" />
              <span v-if="sidebarOpened">Saídas</span>
            </a>
        </li>
        <li>
          <a href="/stock">
            <ArchiveBoxIcon class="icon-sidebar" />
            <span v-if="sidebarOpened">Estoque</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>
