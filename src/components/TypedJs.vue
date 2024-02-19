<script>
import Typed from 'typed.js';
import IconChevronsDown from "../components/icons/IconChevronsDown.vue";


export default {
  components: { IconChevronsDown },
  mounted() {
        const options = {
        strings: ['Hello...', '¡Hola!', 'Bonjour,'],
        typeSpeed: 200,
        loop: false,
        showCursor: false,
        startDelay: 1, // Ajoute un délai de 1 seconde
        
        }
    const typed = new Typed('#typed', options)
        }
    }
</script>

<template >
  <div class="py-48">
  <div id="typed" class="md:ml-16 text-8xl pb-10 align-text-center text-center font-Roboto text-green-500"></div>
  <IconChevronsDown class="m-auto mt-10"/>
  </div>
</template>

