<template>
    <div class="home">
        <TitleComp :title="'Nombre Usuario'" :btn="btnTitle"></TitleComp>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <img src="https://lh3.googleusercontent.com/a/ALm5wu0eoubUJ3w0BjcPzCyzVG0iu2Fp_yDxTOw-slj8zg=s576-p-rw-no"
                        style="width: 150px; height: 150px" class="card-img-top" alt="..."><br>

                    <button type="button" class="btn btn-outline-success btn-sm">
                        Editar Perfil
                    </button>
                </div>
                <div class="col-12 p-1">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 p-1">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MenuComp></MenuComp>
    </div>
</template>

<script>
import TitleComp from "@/components/TitleComp.vue";
import MenuComp from "@/components/MenuComp.vue";
export default {
    name: "User",
    components: {
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
                            ico: true,
                            text: false,
                            btn: false,
                        },
                        ico: {
                            data: null,
                            class: "fa-solid fa-right-to-bracket text-dark",
                            style: null,
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
