<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "./components/layout/SideBar.vue";
import { ref } from "vue";

const sidebarOpened = ref(false);

const onSidebarChange = (value: boolean): void => {
    sidebarOpened.value = value
};
</script>

<template>
  <div class="flex">
    <SideBar @update:opened="onSidebarChange"/>
    <div :class="['wrapper', sidebarOpened ? 'ml-64' : 'ml-16']">
        <div class="app">
            <RouterView />
        </div>
    </div>
  </div>
</template>
