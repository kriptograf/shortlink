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

            <b-table striped hover :items="links">
                <template slot="actions" slot-scope="cell">
                    <!-- We use click.stop here to prevent a 'row-clicked' event from also happening -->
                    <b-btn size="sm" @click.stop="removeUrl(cell.item, cell, $event.target)">Details</b-btn>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
    import Vue from '../main.js';
    import router from '../router';

    /**
     *
     * @todo Донастроить таблицу - ширина и прочее
     * @todo Доделать удаление ссылки
     */
    export default {
        name: "profile",
        data(){
            return {
                title: 'Profile',
                url: '',
                links: []
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
        created: function(){
            console.log('in profile');
            Vue.http.get(
                'api/link',
            ).then(response => {
                /**
                 * Заполняем таблицу ссылками при иницализации компонента
                 */
                var self = this;
                var arr = response.data.links;
                arr.forEach(function (item) {
                    self.links.push(item);
                });
            });
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
                    console.log(validation[key]);
                    return validation[key]
                })
            }
        },
        // methods
        methods: {
            addUrl: function () {
                if (this.isValid) {
                    Vue.http.post(
                        'api/link/create',
                        {
                            url: this.url
                        }
                    ).then(response => {
                        this.success = true;
                        if(response.data.data.link != null){
                            this.links.push({OriginalUrl:response.data.data.orig, ShortUrl:response.data.data.link, actions:'<a href="#">Delete</a>'});
                        }
                        console.log(this.links);
                    }, response => {
                        this.response = response.data
                        this.error = true
                    });

                    this.url = ''
                }
            },
            removeUrl: function (user, index, ev) {
                //usersRef.child(user['.key']).remove()
                console.log(user);
                console.log(index);
                console.log(ev);
            }
        }
    }
</script>

<style scoped>

</style>