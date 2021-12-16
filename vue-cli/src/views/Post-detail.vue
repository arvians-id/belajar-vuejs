<template>
    <div>
        <p>ID : {{ data.id }}</p>
        <p>User ID : {{ data.userId }}</p>
        <p>Title : {{ data.title }}</p>
        <p>Body : {{ data.body }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            data: []
        }
    },
    async mounted() {
        let id = this.$route.params.id;
        const path = 'https://jsonplaceholder.typicode.com/posts/' + id;
        await axios.get(path)
                    .then(response => this.data = response.data)
    },
}
</script>