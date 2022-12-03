<template>
    <div class="home">
        <TitleComp :title="'Trabajos'" :btn="btnTitle"></TitleComp>
        <SearchComp></SearchComp>
        <MapComp></MapComp>
        <MenuComp></MenuComp>
    </div>
</template>
  
<script>
import MapComp from "@/components/MapComp.vue";
import SearchComp from "@/components/searchComp.vue";
import TitleComp from "@/components/TitleComp.vue";
import MenuComp from "@/components/MenuComp.vue";
export default {
    name: "Home",
    components: {
        MapComp,
        SearchComp,
        TitleComp,
        MenuComp,
    },
    data() {
        return {
            btnTitle: [
                {
                    url: "#",
                    conte: {
                        type: {
                            ico: true,
                            text: false,
                            btn: false,
                        },
                        ico: {
                            data: "",
                            class: "fa-solid fa-briefcase text-dark",
                            style: "",
                        },
                        text: {
                            data: null,
                            class: null,
                            style: null,
                        },
                        btn: {
                            data: null,
                            class: null,
                            style: null,
                        },
                    }
                },
            ],
            btnArray: [
                {
                    title: "Iniciar Sesión",
                    txt: "Iniciar sesión",

                    class: "btn-success",
                },
            ],
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
  