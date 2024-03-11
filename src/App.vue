<template>
  <main p="x-4 y-10" text="center gray-700 dark:gray-200" min-h-100vh min-w-100vw font-sans>
    <router-view v-slot="{ Component }">
      <keep-alive include="index">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <the-footer />
  </main>
</template>
