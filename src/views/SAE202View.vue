<template>
  <h2 class="mt-20 p-2 text-center font-Lato text-3xl font-bold text-gray-600 underline decoration-double underline-offset-8 lg:mt-32">
    Site ECOBIKING - SAÉ 202
  </h2>

  <h3 class="mt-8 p-2 text-center font-Roboto text-xl font-bold text-gray-600 outline-dotted">ANALYSE / CONCEPT</h3>
  <div class="grid justify-center md:flex md:justify-evenly md:py-12">
    <img src="../assets/images/map_positionnement.webp" alt="Map de positionnment du site" class="m-auto p-4 lg:w-2/6" />
    <img src="../assets/images/entretien.webp" alt="Graphique analyse des entretiens du concept" class="m-auto p-4 lg:w-2/6" />
  </div>

  <a
    href="https://docs.google.com/document/d/1jYq2TOkcss2bjyj0LVbDWKSxzLE91zqv6JG5e4XM1iM/edit"
    target="_blank"
    class="m-12 inline-flex items-center text-center font-Roboto text-2xl text-green-500 hover:underline"
  >
    En lire plus
    <IconChevron />
  </a>

  <h3 class="mt-8 p-2 text-center font-Roboto text-xl font-bold text-gray-600 outline-dotted">
    CRÉATION DE L'IDENTITÉ VISUELLE / HARMONIE COLORÉE
  </h3>

  <img src="../assets/images/logo_sae202.webp" alt="Décomposition de l'identité visuelle du site" class="m-auto h-1/2 w-1/2 py-8" />
  <img src="../assets/images/harmonie_coloree.webp" alt="Harmonie colorée du site" class="m-auto h-1/2 w-1/2" />

  <a
    href="https://www.figma.com/file/QX9qPbEhslozR1jG5PQ9ri/SAE_202_Gillot_Chamberlin_Eccher?node-id=1%3A3&t=sgIknC37iUSpXts9-1"
    target="_blank"
    class="m-12 inline-flex items-center text-center font-Roboto text-2xl text-green-500 hover:underline"
  >
    Maquette Graphique
    <IconChevron />
  </a>

  <h3 class="mt-8 p-2 text-center font-Roboto text-xl font-bold text-gray-600 outline-dotted">TECHNIQUE UTILISÉE</h3>
  <img
    src="../assets/images/technique.webp"
    alt="Wordpress, thème Avada et plug-in : Polylang et Contac Form 7"
    class="h-1/ m-auto w-1/2 py-8"
  />

  <h3 class="mt-8 p-2 text-center font-Roboto text-xl font-bold text-gray-600 outline-dotted">SITE FINAL</h3>
  <a href="https://ecobiking.mariongillot.com/" target="_blank">
    <img src="../assets/images/site_final.webp" alt="Mockup du site final" class="m-auto w-1/2 pt-12" />
  </a>
</template>

<script>
import IconChevron from "../components/icons/IconChevron.vue";

export default {
  components: { IconChevron },
};
</script>
