<template>
  <div class="article">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题" width="180px">
      </el-table-column>
      <el-table-column prop="content" label="内容"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Home extends Vue {
  tableData = [
    {
      title: "王小虎",
      content: "上海市普陀区金沙江路 1518 弄",
    },
    {
      title: "王小虎",
      content: "上海市普陀区金沙江路 1517 弄",
    },
    {
      title: "王小虎",
      content: "上海市普陀区金沙江路 1519 弄",
    },
    {
      title: "王小虎",
      content: "上海市普陀区金沙江路 1516 弄",
    },
  ];
}
</script>

<style lang="scss" scoped></style>
