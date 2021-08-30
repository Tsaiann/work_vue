<template>
    <div class="navigator">
        <ul>
            <li @click="$router.push({name: 'Home'})">TOP</li>
            <li @click="$router.push({name: 'products'})">PRODUCTS</li>
            <li @click="$router.push({name: 'about'})">ABOUT</li>
            <li @click="$router.push({name: 'contact'})">CONTACT</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"navigator",
    data(){
        return{

        }
    }
}
</script>