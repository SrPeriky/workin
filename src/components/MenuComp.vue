<template>
    <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid text-center p-2">
            <div class="col">
                <router-link to="/"><i class="fa-solid fa-map-location-dot text-white"></i></router-link>
            </div>
            <div class="col">
                <router-link to="/Favorite"><i class="fa-solid fa-bookmark text-white"></i></router-link>
            </div>
            <div class="col">
                <router-link to="/NewPost"><i class="fa-solid fa-square-plus text-white"></i></router-link>
            </div>
            <div class="col">
                <router-link to="/User"><i class="fa-solid fa-user text-white"></i></router-link>
            </div>
            <div class="col">
                <router-link to="/Notification"><i class="fa-solid fa-bell text-white"></i></router-link>
            </div>
        </div>
    </nav>
</template><i class="fa-solid fa-square-plus"></i>
<script>
export default {
    name: 'MenuComp',
    //Sprops: ['title', 'parrafo', 'btns'],
}
</script>