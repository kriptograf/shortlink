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
        code: "Lorem ipsum dolor",
        data(){
            return {
                title: 'About',
            }
        },
        // Usage with context the component
        head: {
            // To use "this" in the component, it is necessary to return the object through a function
            title: function () {
                return {
                    inner: this.title
                }
            },
            meta: [
                { name: 'description', content: 'About description', id: 'desc' }
            ]
        }
    }
</script>

<style scoped>

</style>