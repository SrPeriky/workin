<template>
    <!-- As a heading -->
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">{{ title }}</span>
            <BtnComp :data="btn"></BtnComp>
        </div>
    </nav>
</template>
<script>
import BtnComp from "@/components/BtnComp.vue";
export default {
    name: 'TitleComp',
    components: {
        BtnComp
    },
    data() {
        return {};
    },
    props:['title', 'btn'],
}
</script>