<template>
  <div class="home">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px" height="100%">
        <!-- 菜单 -->
        <el-menu default-active="/article" @select="handleSelect">
          <el-menu-item index="/article">
            <template v-slot:title>
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/upload">
            <template v-slot:title>
              <i class="el-icon-upload"></i>
              <span>上传</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 主页面 -->
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

  .el_container {
    height: 100%;
  }
}
</style>
