<template>
  <main p="x-4 y-10" text="center gray-700 dark:gray-200" h-100vh w-100vw font-sans>
    <router-view v-slot="{ Component }">
      <keep-alive include="index">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>
