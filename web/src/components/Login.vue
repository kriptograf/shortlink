<template>
    <div>
        <form v-on:submit.prevent="login()" class="form-signin">
            <h2>Login</h2>
            <label>
                <input v-model="data.body.username" placeholder="email">
            </label>
            <label>
                <input v-model="data.body.password" placeholder="password" type="password">
            </label>
            <label>
                <input v-model="data.rememberMe" type="checkbox"> Remember Me
            </label>
            <br>
            <button type="submit" class="btn btn-info">Login</button>
            <div v-show="error" style="color:red; word-wrap:break-word;">{{ error | json }}</div>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                context: 'login context',
                data: {
                    body: {
                        username: 'admin',
                        password: 'secret'
                    },
                    rememberMe: false,
                    fetchUser: true
                },
                error: null
            }
        },
        mounted() {
            console.log(this.$auth.redirect());
            // Can set query parameter here for auth redirect or just do it silently in login redirect.
        },
        methods: {
            login() {
                var redirect = this.$auth.redirect();
                this.$auth.login({
                    body: this.data.body, // Vue-resource
                    data: this.data.body, // Axios
                    rememberMe: this.data.rememberMe,
                    redirect: {name: redirect ? redirect.from.name : 'profile'},
                    fetchUser: this.data.fetchUser
                })
                    .then(() => {
                        console.log('success ' + this.context);
                    }, (res) => {
                        console.log('error ' + this.context);
                        this.error = res.data;
                    });
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
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }
</style>