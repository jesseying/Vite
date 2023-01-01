<template>
  <el-row :gutter="10">
    <el-col :span="14" :offset="2">
      <el-card class="box-card" style="height: 1900px">
        <el-table :data="tableData">
          <el-table-column prop="_id" label="主键" />
          <el-table-column prop="name" label="分类名称" />
          <el-table-column prop="parent" label="上级分类" />
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card" style="height: 300px"> </el-card>
      <el-card class="box-card" style="height: 300px; margin-top: 1%"> </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { getCategories } from '@/api'
import { ElMessage } from 'element-plus'
import { loading } from '@/utils/loading'

const [tableData, tableLoading] = [ref([]), ref(true)]
const getTableData = () => {
  getCategories().then((res) => {
    if (res.code === 200) {
      tableData.value = res.data
      ElMessage.success(res.message)
    } else {
      tableData.value = []
      ElMessage.error(res.message)
    }
  })
}
onMounted(() => {
  getTableData()
})
watch(tableLoading, () => {
  tableLoading.value === true ? loading.show() : loading.hide()
})
</script>

<style scoped>
.box-card {
  box-shadow: none;
  border: none;
}
</style>
