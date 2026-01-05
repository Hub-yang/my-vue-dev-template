<script setup>
import { Edit } from '@element-plus/icons-vue'
</script>

<template>
  <div>
    <el-space wrap>
      <span i-ep-edit text-xl />
      <i-ep-share text-xl />
      <IEpSearch text-xl />
      <el-button type="primary" :icon="Edit">
        Edit
      </el-button>
      <el-icon />
    </el-space>
  </div>
</template>
