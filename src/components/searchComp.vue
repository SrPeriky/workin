<template>
    <div class="container text-center">
        <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"
                id="exampleDataList" placeholder="Type to search...">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="key" id="ubi" value="option1" checked>
            <label class="form-check-label" for="ubi">
                Key
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="key" id="key" value="key">
            <label class="form-check-label" for="key">
                Ubication
            </label>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchComp',
    //Sprops: ['title', 'parrafo', 'btns'],
}
</script>