<template>
  <div>{{ mainStore.name }}</div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store/mian";

const mainStore = useMainStore();
</script>
