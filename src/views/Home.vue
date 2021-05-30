<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-menu
          default-active="/article"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="/article">文章</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Home extends Vue {
  handleSelect(index: string): void {
    this.$router.push(index);
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
