<template> 
    <div class="new_page">
        <el-select v-model="select" placeholder="請選擇">
            <el-option 
                v-for="(item, i) in options"
                :key="i"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <br>
        <el-button type="primary" plain @click="$router.push({name: 'Home'})">Prev Page</el-button>
    </div>
</template>

<script>
export default {
    name:'NewPage',
    data() {
        return {
            select: '',
            options: [
                { label: 'Pizza', value: 1 },
                { label: 'Fries', value: 2 },
                { label: 'Cola', value: 3 }
            ]
        }
    },
}
</script>