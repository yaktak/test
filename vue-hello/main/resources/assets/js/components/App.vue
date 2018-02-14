<template>
    <div class="example">
        <p>I'm an example component!</p>
        <div class="box">text here</div>
    </div>
</template>

<style scoped>
    .example {
        & {
            color: blue;
        }

        & > .box {
            display: flex;
            justify-content: center;
            width: 200px;
            height: 200px;
            background-color: green;
            text-align: center;
        }
    }
</style>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
