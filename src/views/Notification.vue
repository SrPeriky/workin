<template>
    <div class="home">
        <TitleComp :title="'Notificaiones'" :btn="btnTitle"></TitleComp>

        <MenuComp></MenuComp>
    </div>
</template>

<script>
import TitleComp from "@/components/TitleComp.vue";
import MenuComp from "@/components/MenuComp.vue";
export default {
    name: "Notification",
    components: {
        TitleComp,
        MenuComp,
    },
    data() {
        return {
            btnTitle: [],
        };
    },
};
</script>

<style scoped>
.home {
    max-width: 895px;
    margin: 0;
}

.text {
    padding-top: 2em;
}

.card-comp {
    max-width: 398px;
    margin-top: 2.6em;
    padding: 0;

}

@media (min-width: 992px) {
    .home {
        margin: 0 auto;
        /* padding: 0 auto;*/
    }
}
</style>
