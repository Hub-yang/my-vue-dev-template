<script setup lang="ts">
const router = useRouter()
const id = ref(0)

function goToArticle() {
  router.push(`/article/${id.value}`)
}
</script>

<template>
  <button @click="id--">
    -
  </button>
  <a @click="goToArticle">go to article {{ id }}</a>
  <button @click="id++">
    +
  </button>
</template>
