<template>
    <div class="card">
        <div class="card-header text-white bg-dark">Profile</div>
        <div class="card-body">
            <p>Yay you made it!</p>
            <form id="form" v-on:submit.prevent="addUrl">
                <div class="form-group">
                    <label for="exampleInputUrl">Url address</label>
                    <input type="text" v-model="url" name="url" class="form-control" id="exampleInputUrl" aria-describedby="emailHelp" placeholder="Enter url">
                    <small id="emailHelp" class="form-text text-muted">Enter url in format http://example.com/params/params2?t=params.</small>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import Vue from '../main.js';
    import router from '../router';
    export default {
        name: "profile",
        data(){
            return {
                title: 'Profile',
                url: ''
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
                { name: 'description', content: 'Profile description', id: 'desc' }
            ]
        },
        // computed property for form validation state
        computed: {
            validation: function () {
                return {
                    url: !!this.url.trim()
                }
            },
            isValid: function () {
                var validation = this.validation
                return Object.keys(validation).every(function (key) {
                    return validation[key]
                })
            }
        },
        // methods
        methods: {
            addUrl: function (url) {
                if (this.isValid) {
                    Vue.http.post(
                        'api/link/create',
                        {
                            url: url
                        }
                    ).then(response => {
                        context.success = true
                    }, response => {
                        context.response = response.data
                        context.error = true
                    });

                    this.url = ''
                }
            },
            removeUrl: function (user) {
                //usersRef.child(user['.key']).remove()
            }
        }
    }
</script>

<style scoped>

</style>