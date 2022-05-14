<script lang="ts" setup>
const props = defineProps({
  href: String
});
</script>

<template>
  <a :href="href" target="_blank">
    <slot></slot>
  </a>
</template>