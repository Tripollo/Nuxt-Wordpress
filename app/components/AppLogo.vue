<script setup lang="ts">
const props = defineProps<{
  logoUrl: string
}>()
</script>

<template>
  <UColorModeImage :dark="logoUrl" :light="logoUrl" />
</template>
