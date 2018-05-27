<template>
    <div class="site-about">
        <h1>{{ name }}</h1>

        <p>
            This is the About page. You may modify the following file to customize its content:
        </p>

        <code>{{ code }}</code>
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