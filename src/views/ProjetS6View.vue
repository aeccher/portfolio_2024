<template>
  <h2 class="mt-20 p-2 text-center font-Lato text-3xl font-bold text-gray-600 underline decoration-double underline-offset-8 lg:mt-32">
    Éni'com - Projet individuel
  </h2>

  <h3 class="mt-8 p-2 text-center font-Roboto text-xl font-bold text-gray-600 outline-dotted">SUJET</h3>

  <p class="ml-4 mt-4 font-Roboto text-xl font-light">
    Vous vous emparerez de la question de l’altérité et de la rencontre de la différence pour orienter votre projet. J'ai choisi de réaliser
    un site qui propose des petits jeux sous forme d'énigmes qui abordent le thème de la différence en faisant découvrir différents moyens
    de communiquer (ex : l’écriture braille, la langue des signes, …).
  </p>

  <a
    href="https://drive.google.com/file/d/15IkozLQlCrgJBxYcMjdpono6BTpRPNZ5/view"
    target="_blank"
    class="m-12 inline-flex items-center text-center font-Roboto text-2xl text-green-500 hover:underline"
  >
    Dossier d'analyse
    <IconChevron />
  </a>

  <h3 class="mt-8 p-2 text-center font-Roboto text-xl font-bold text-gray-600 outline-dotted">SITE FINAL</h3>
  <a href="https://enicom.agathe-eccher.fr" target="_blank">
    <img src="../assets/images/site_final_s6.webp" alt="Mockup du site final" class="m-auto w-1/2 pt-12" />
  </a>
</template>

<script>
import IconChevron from "../components/icons/IconChevron.vue";

export default {
  components: { IconChevron },
};
</script>
