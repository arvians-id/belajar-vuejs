<template>
    <div>
        <div :class="'alert alert-dismissible fade show alert-' + type" role="alert">
            {{ message }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'secondary'
        },
        message: {
            type: String,
            default: 'Something went wrong'
        }
    }
}
</script>