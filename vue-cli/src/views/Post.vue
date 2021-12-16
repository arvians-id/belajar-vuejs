<template>
    <div class="row">
        <alert-component v-if="status.status" :type="status.type" :message="status.message" />
        <div class="col-3 mt-3" v-for="post in data.slice(0,12)" :key="post.id">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ post.title.substring(0,20) + "..." }}</h5>
                    <p class="card-text">{{ post.body.substring(0, 80) + "..." }}</p>
                    <router-link :to="{ name: 'post.show', params: {id: post.id} }" class="btn btn-primary btn-sm">Detail</router-link> | 
                    <button @click.prevent="deletePost(post.id)" class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import post from '@/mixins/post.js';

export default {
    mixins: [ post ],
    data() {
        return {
            data: [],
        }
    },
    async mounted() {
        const path = 'https://jsonplaceholder.typicode.com/posts';
        await axios.get(path)
                    .then(response => this.data = response.data)
    },
    methods: {
        deletePost(id){
        const path = 'https://jsonplaceholder.typicode.com/posts/' + id;
        axios.delete(path)
                .then(() => {
                    
                        this.status.status = true;
                        this.status.type = 'success';
                        this.status.message = "Data successfuly deleted";
                })
                .catch(e => {
                    this.status.status = true;
                    this.status.type = 'danger';
                    this.status.message = e.message
                })
        }
    },
}
</script>