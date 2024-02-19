<script>
import AboutView from './AboutView.vue';
import WorkView from './WorkView.vue';
import TypedJs from '../components/TypedJs.vue'


export default {
  components: { AboutView, WorkView, TypedJs},
    }
</script>

<template>
  <TypedJs/>
  <hr class="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700">
  <main>
    <AboutView/>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <WorkView/>
</main>
</template>

<style scoped>
</style>