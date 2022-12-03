<template>
    <div class="home">
        <TitleComp :title="'Publicar trabajo'" :btn="btnTitle"></TitleComp>
        <div class="container">
            aquí ca el formulario
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
        <MenuComp></MenuComp>
    </div>
</template>

<script>
import CardComp from "@/components/CardComp.vue";
import TitleComp from "@/components/TitleComp.vue";
import MenuComp from "@/components/MenuComp.vue";
export default {
    name: "NewPost",
    components: {
        CardComp,
        TitleComp,
        MenuComp,
    },
    data() {
        return {
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
