<script setup lang='ts'>

</script>

<template>
  <div flex="~ justify-center items-center" fixed bottom-0 mb-10 w-full gap-2 text-2xl>
    <button icon-btn @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>
    <a icon-btn i-carbon:logo-github href="https://github.com/Hub-yang/my-vue-dev-template" title="GitHub" target="_blank" />
  </div>
</template>
