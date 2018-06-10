<template>
    <div class="card">
        <div class="card-header text-white bg-dark">
            Registration
        </div>
        <div class="card-body">
            <div class="alert alert-danger" v-if="error && !success">
                <p>There was an error, unable to complete registration.</p>
            </div>
            <div class="alert alert-success" v-if="success">
                <p>Registration completed. You can now sign in.</p>
            </div>
            <form autocomplete="off" v-on:submit="register" v-if="!success">
                <div class="form-group" v-bind:class="{ 'has-error': error && response.username }">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control" v-model="name" required>
                    <span class="help-block" v-if="error && response.name">{{ response.name }}</span>
                </div>
                <div class="form-group" v-bind:class="{ 'has-error': error && response.email }">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" class="form-control" placeholder="gavin.belson@hooli.com" v-model="email" required>
                    <span class="help-block" v-if="error && response.email">{{ response.email }}</span>
                </div>
                <div class="form-group" v-bind:class="{ 'has-error': error && response.password }">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" v-model="password" required>
                    <span class="help-block" v-if="error && response.password">{{ response.password }}</span>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import auth from '../auth.js';
    export default {
        name: "signup",
        data() {
            return {
                name: null,
                email: null,
                password: null,
                success: false,
                error: false,
                response: null,
                title: 'Signup'
            };
        },
        methods: {
            register(event) {
                console.log('register method');
                event.preventDefault()
                auth.register(this, this.name, this.email, this.password)
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
                { name: 'description', content: 'Signup description', id: 'desc' }
            ]
        }
    }
</script>

<style scoped>

</style>