<template>
  <div>
    <el-upload drag action="http://localhost:5000/uploadfile" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Upload extends Vue {}
</script>

<style lang="scss" scoped></style>
