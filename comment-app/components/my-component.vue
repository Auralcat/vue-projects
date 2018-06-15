<template>
    <div class="random-class">I'm a {{ whatsThis }} loaded from a file</div>
</template>

<script>
    module.exports = {
        data() {
            return {
                whatsThis: 'component'
            };
        }
    }
</script>
<style>
    .random-class {
        font-size: 2em;
        text-align: center;
    }
</style>
