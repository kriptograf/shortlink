<template>
    <div class="card">
        <div class="card-header text-white bg-dark">
            Login
        </div>
        <div class="card-body">
            <div class="alert alert-danger" v-if="error">
                <p>There was an error, unable to sign in with those credentials.</p>
            </div>
            <form v-on:submit="signin" class="form-signin">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input id="username" v-model="username" placeholder="username" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input id="password" class="form-control" v-model="password" placeholder="password" type="password">
                </div>

                <br>
                <button type="submit" class="btn btn-info">Login</button>
                <div v-show="error" style="color:red; word-wrap:break-word;">{{ error | json }}</div>
            </form>
        </div>

    </div>
</template>

<script>
    import auth from '../auth.js';
    export default {
        data() {
            return {
                username: null,
                password: null,
                error: false
            }
        },
        methods: {
            signin(event) {
                event.preventDefault()
                auth.signin(this, this.username, this.password)
            }
        }
    }
</script>

<style>
    .error {
        color: red;
    }
    .form-signin {
        width: 100%;
    }
</style>