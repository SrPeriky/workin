<template>
    <div class="container">
        <div v-for="e of list" class="p-2">
            <div class="card">
                <div class="card-body row">
                    <div class="col">
                        <h6>{{ e.title }}</h6>
                    </div>
                    <div class="col-auto">
                        <button type="button" class="btn btn-outline-dark btn-sm">
                            <i class="fa-solid fa-bookmark"></i>
                        </button>
                    </div>
                    <div class="col-12">
                        {{ e.detalle }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComp',
    props: ['list'],
}
</script>