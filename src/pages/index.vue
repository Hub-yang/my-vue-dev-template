<script setup lang="ts">
const router = useRouter()
const id = ref(0)

function goToArticle() {
  router.push(`/article/${id.value}`)
}
</script>

<template>
  <div flex="~ justify-center items-center" gap-2>
    <button btn @click="id--">
      -
    </button>
    <a
      class="cursor-pointer font-bold underline underline-offset-3 decoration-dashed transition-duration-250 transition-property-color hover:color-#646cff"
      @click="goToArticle"
    >
      Go To Article {{ id }}
    </a>
    <button btn @click="id++">
      +
    </button>
  </div>
</template>
