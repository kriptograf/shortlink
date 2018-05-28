<template>
    <div class="card">
        <div class="card-header text-white bg-dark">
            About
        </div>
        <div class="card-body">
            <div class="site-about">
                <h1>{{ name }}</h1>

                <p>
                    This is the About page. You may modify the following file to customize its content:
                </p>

                <code>{{ code }}</code>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "about",
        code: "Lorem ipsum dolor"
    }
</script>

<style scoped>

</style>