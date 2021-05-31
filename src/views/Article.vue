<template>
  <div class="article">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题" width="180px">
      </el-table-column>
      <el-table-column prop="content" label="内容">
        <template v-slot="{ row }">
          <div v-if="row.type === 'md'" v-html="row.content"></div>
          <div v-if="row.type === 'img'">
            <img width="200px" height="100px" :src="row.content" alt="" />
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ApiClient from "@/http/ApiClient";
@Component({
  components: {},
})
export default class Home extends Vue {
  tableData = [];

  created(): void {
    ApiClient.server()
      .get("/news")
      .then((res) => {
        this.tableData = res.data.data;
      });
  }
}
</script>

<style lang="scss" scoped></style>
