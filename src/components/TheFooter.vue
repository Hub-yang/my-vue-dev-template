<template>
  <nav flex="~ justify-center items-center" fixed bottom-0 left-0 h-15 w-full gap-2 border-t border-color-gray:50 text-xl>
    <button icon-btn>
      <div i-carbon-sun dark:i-carbon-moon @click="toggleDark()" />
    </button>

    <a
      i-carbon-logo-github
      href="https://github.com/Hub-yang/my-vue-dev-template"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
