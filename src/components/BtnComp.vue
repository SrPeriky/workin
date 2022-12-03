<template>
    <div>
        <router-link class="p-1" v-for="e of data" :to="e.url">
            <i v-if="e.conte.type.ico" :style="e.conte.ico.style" :class="e.conte.ico.class"></i>
            <div v-if="e.conte.type.text"  :style="e.conte.text.style"  :class="e.conte.text.class">{{e.conte.text.data}}</div>
            <button v-if="e.conte.type.btn"  :style="e.conte.btn.style" :class="e.conte.btn.class">{{e.conte.btn.data}}</button>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'TitleComp',
    components: {
    },
    data() {
        return {};
    },
    props: ['data'],
}
</script>