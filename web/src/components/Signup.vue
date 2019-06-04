<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Registration form</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="username"></v-text-field>
                        <v-text-field prepend-icon="person" name="email" label="Email" type="email" v-model="email"></v-text-field>
                        <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary">Sign up</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Signup",
        data() {
            return {
                username: null,
                email: null,
                password: null,
                error: false,
                title: 'Registration'
            }
        },
    }
</script>

<style scoped>

</style>