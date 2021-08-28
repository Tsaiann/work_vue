<template>
  <div class="home">
    <el-select v-model="select" placeholder="請選擇">
    <el-option
      v-for="(item, i) in options"
      :key="i"
      :label="item.label"
      :value="item.value"
      />
    </el-select>
    <br>
      <el-button type="primary" plain @click="$router.push({name: 'NewPage'})">Next Page</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
      return {
        select:'',
        options: [{
          value: 1,
          label: '甜甜圈'
        }, {
          value: 2,
          label: '蛋糕'
        }, {
          value: 3,
          label: '肉桂捲'
        }, {
          value: 4,
          label: '巧克力'
        }, {
          value: 5,
          label: '糖果'
        }],
      }
  }
}
</script>
