<template>
  <div>{{ mainStore.name }}</div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/main';

const mainStore = useMainStore();
</script>
