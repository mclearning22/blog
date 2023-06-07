<template>
  <MenuBar />
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import MenuBar from "./components/MenuBar.vue";
</script>
