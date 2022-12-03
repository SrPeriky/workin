<template>
    <div class="home">
        <TitleComp :title="'Favorite'" :btn="btnTitle"></TitleComp>
        <ListFavorite :list="favorites"></ListFavorite>
        <MenuComp></MenuComp>
    </div>
</template>
  
<script>
import TitleComp from "@/components/TitleComp.vue";
import ListFavorite from "@/components/ListFavorite.vue";
import MenuComp from "@/components/MenuComp.vue";
export default {
    name: "Favorite",
    components: {
        ListFavorite,
        TitleComp,
        MenuComp,
    },
    data() {
        return {
            favorites: [
                {
                    id: 1,
                    title: "trabajo 1",
                    detalle: "fd d gd dfg dfg g dg dfgdf gdg d ",
                },
                {
                    id: 2,
                    title: "trabajo 2",
                    detalle: "fd d gd dfg dfg g dg dfgdf gdg d ",
                },
                {
                    id: 3,
                    title: "trabajo 3",
                    detalle: "fd d gd dfg dfg g dg dfgdf gdg d ",
                },
            ],
            btnTitle: [
                {
                    url: "/login",
                    conte: {
                        type: {
                            ico: false,
                            text: false,
                            btn: true,
                        },
                        ico: {
                            data: null,
                            class: null,
                            style: null,
                        },
                        text: {
                            data: null,
                            class: null,
                            style: null,
                        },
                        btn: {
                            data: "Login",
                            class: "btn btn-outline-dark btn-sm",
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
  