<template>
    <div>
        <alert-component v-if="status.status" :type="status.type" :message="status.message" />
        <form @submit.prevent="handleSubmit">
            <custom-input v-model="title" label="Judul" type="text" custom="input"/>
            <custom-input v-model="body" label="Deskripsi" custom="textarea"/>

            <button class="btn btn-primary btn-sm">Simpan</button>
        </form>
    </div>
</template>

<script>
import CustomInput from "@/components/Custom-input.vue"
import axios from 'axios'
import post from '@/mixins/post.js';

export default {
    mixins: [ post ],
    data() {
        return {
            title: '',
            body: '',
        }
    },
    components: {
        CustomInput
    },
    methods: {
        handleSubmit(){
            let data = {
                userId: 1,
                title: this.title,
                body: this.body
            }
            const path = 'https://jsonplaceholder.typicode.com/posts';
            axios.post(path, JSON.stringify(data))
                    .then(response => {
                        this.status.status = true;
                        this.status.type = 'success';
                        this.status.message = "Data successfuly " + response.statusText;
                    })
                    .catch(e => {
                        this.status.status = true;
                        this.status.type = 'danger';
                        this.status.message = e.message
                    })
                    .finally(() => {
                        this.title = '';
                        this.body = '';
                    })
        }
    },
}
</script>