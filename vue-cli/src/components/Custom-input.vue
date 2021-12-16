<template>
    <div>
        <div class="mb-3" v-if="custom == 'input'">
            <label class="form-label">{{ label }}</label>
            <input :type="type" class="form-control" v-model="inputValue">
        </div>
        <div class="mb-3" v-else-if="custom == 'textarea'">
            <label class="form-label">{{ label }}</label>
            <textarea class="form-control" rows="3" v-model="inputValue"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    props: ['label', 'modelValue', 'type', 'custom'],
    computed: {
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>