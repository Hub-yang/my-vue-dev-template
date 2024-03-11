<script setup lang="ts">
const router = useRouter()
const params = useRoute('/article/[id]').params
</script>

<template>
  <div mb-2 text-5 font-bold>
    Article {{ params?.id ?? '' }}
  </div>
  <div btn @click="router.back()">
    go back
  </div>
</template>
