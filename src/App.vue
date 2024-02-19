<template>
  <!-- Header -->
  <header class="fixed top-0 z-10 flex w-full bg-green-500">
    <nav class="flex items-center">
      <router-link to="/" class="flex items-center">
        <icon-logo class="ml-4" />
        <h1 class="font-Roboto text-lg font-thin text-white hover:text-gray-100 hover:underline">Ag@the ECCHER</h1>
        <span class="sr-only">Logo retour Accueil</span>
      </router-link>
    </nav>

    <nav class="ml-auto flex items-center">
      <button
        class="relative z-50 hidden text-xl"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <div>
          <div v-if="!menuOuvert">
            <icon-menu />
          </div>
          <div class="fixed top-2 right-0" v-else>
            <icon-cross />
          </div>
        </div>
      </button>

      <div
        id="menu"
        class="fixed inset-0 z-40 translate-x-full overflow-y-hidden bg-green-500 motion-safe:transition-transform motion-safe:duration-1000"
        :class="{ 'translate-x-0': menuOuvert }"
        :style="{ 'transition-delay': 5 }"
      >
        <ul class="font-Roboto mt-24 grid place-content-center gap-8 p-10 text-3xl font-bold text-white">
          <li>
            <Router-link to="/about" @click="menuOuvert = false">À propos de moi</Router-link>
          </li>
          <li>
            <Router-link to="/travail" @click="menuOuvert = false">Travail</Router-link>
          </li>
          <li>
            <Router-link to="/contact" @click="menuOuvert = false">Contact</Router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Menu format Desktop -->
    <div class="hidden flex-auto items-center justify-end gap-24 pb-4 pt-6 pr-16 text-lg text-white md:flex">
      <Router-link to="/about" class="font-Roboto hover:text-gray-100 hover:underline">À propos de moi</Router-link>
      <Router-link to="/travail" class="font-Roboto hover:text-gray-100 hover:underline">Travail</Router-link>
      <Router-link to="/contact" class="font-Roboto rounded-full border border-white px-12 py-3 hover:bg-white hover:text-green-500"
        >Contact</Router-link
      >
    </div>

    <!-- Menu format Téléphone -->
    <nav>
      <div class="visible my-2 flex justify-evenly md:hidden">
        <Router-link to="/travail"
          ><IconWork /><span class="sr-only"
            >Icône du lieu de travail : thé posé sur un bureau à côté d'un ordinateur page /travail</span
          ></Router-link
        >
        <Router-link to="/contact"><IconContact /><span class="sr-only">Icône de contact</span></Router-link>
        <Router-link to="/about"><IconAbout /><span class="sr-only">Icône À propos de moi page /about</span></Router-link>
      </div>
    </nav>
  </header>

  <router-view />
  <!-- Fin Header -->

  <!-- Footer -->
  <footer class="mt-8">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="border-t border-gray-300 pt-4 pb-4 sm:flex sm:items-center sm:justify-between">
        <nav aria-label="Footer Navigation">
          <ul class="flex flex-wrap justify-center gap-4 text-base text-gray-500 lg:justify-end">
            <li>
              <Router-link to="/about" class="font-Roboto mr-6 hover:text-green-500 hover:underline">Qui suis-je ?</Router-link>
            </li>
            <li>
              <Router-link to="/contact" class="font-Roboto mr-6 hover:text-green-500 hover:underline">Contact</Router-link>
            </li>
            <li>
              <Router-link to="/mentions-legales" class="font-Roboto mr-6 hover:text-green-500 hover:underline"
                >Mentions légales</Router-link
              >
            </li>
          </ul>
        </nav>

        <div class="font-Roboto mx-auto mt-3 justify-center text-center text-base lg:mt-0 lg:flex">
          <p class="text-gray-400 lg:mr-14">Portfolio 2023 - Agathe ECCHER [ekɛʀ]</p>

          <a href="https://agathe-eccher.fr/MMI/" target="_blank" class="text-green-500 hover:text-green-600 hover:underline">
            Projets de mes semestres en MMI
          </a>
        </div>

        <div class="mt-3 flex items-center justify-center lg:mr-10 lg:mt-0 lg:justify-end">
          <a href="https://www.linkedin.com/in/agathe-eccher" target="_blank" type="button" class="">
            <span class="sr-only">LinkedIn</span>
            <icon-linked-in />
          </a>
        </div>
      </div>
    </div>
  </footer>
  <!-- fin du Footer -->
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";

import IconMenu from "./components/icons/IconMenu.vue";
import IconCross from "./components/icons/IconCross.vue";

import IconLinkedIn from "./components/icons/IconLinkedIn.vue";
import IconInsta from "./components/icons/IconInsta.vue";

import IconAbout from "./components/icons/IconAbout.vue";
import IconWork from "./components/icons/IconWork.vue";
import IconContact from "./components/icons/IconContact.vue";

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: { IconLogo, IconMenu, IconCross, IconLinkedIn, IconInsta, IconAbout, IconWork, IconContact },
};
</script>
