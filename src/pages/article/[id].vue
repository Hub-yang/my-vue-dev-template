<script setup lang="ts">
const router = useRouter()
const params = useRoute('/article/[id]').params
</script>

<template>
  <div>{{ params?.id ?? '' }}</div>
  <div @click="router.back()">
    go back
  </div>
</template>
