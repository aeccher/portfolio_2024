<template>
  <h3 class="mt-20 p-2 text-center font-Lato text-3xl font-bold text-gray-600 underline decoration-double underline-offset-8 lg:mt-32">
    Travaux
  </h3>

  <div class="flex flex-col justify-center gap-x-12 gap-y-10 align-middle md:flex-row md:flex-wrap md:gap-x-16">
    <!-- Card - Illustration de la Citadelle -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/illustration-citadelle" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/illustration_citadelle.webp" alt="Illustration de la Citadelle de Besançon" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/illustration-citadelle" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mt-4 mb-4 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Illustration de la Citadelle de Besançon
          </h5>
        </Router-link>
        <p class="mb-3 font-Roboto font-normal text-gray-600 dark:text-gray-400">
          Travail de 1ère année (2ème semestre) du cours Production Graphique consistant à réaliser une image vectorielle (en .svg) sur
          Adobe Illustrator et l'aminer en utilisant du CSS.
        </p>
        <Router-link
          to="/illustration-citadelle"
          class="mt-16 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - ChartJs Accidents de vélo Dataviz -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/chartjs" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/accident_velo.webp" alt="Illustration d'un accident de vélo" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/chartjs" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mb-2 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Datavisualisation / Accidentologie en vélo - ChartJs
          </h5>
        </Router-link>
        <p class="mb-2 font-Roboto font-normal text-gray-600 dark:text-gray-400">
          Travail de 2ème année (3ème semestre) du cours Création et Design Interactif (UI) consistant à réaliser une page web avec des
          graphiques en utilisant ChartJs pour répondre aux problématiques de l'accidentologie en vélo.
        </p>
        <Router-link
          to="/chartjs"
          class="mt-2 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - Projet collectif S5 -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/projets5" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/projet.webp" alt="Image du site" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/projets5" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mt-9 mb-5 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projet collectif</h5>
        </Router-link>
        <p class="font-Roboto font-normal text-gray-600 dark:text-gray-400 lg:mb-16">
          Travail de 3ème année (5ème semestre) consistant à réaliser un site web pour une pédicure-podologue.
        </p>
        <Router-link
          to="/projets5"
          class="mt-16 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - Projet indivisuel S6 -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/projets6" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/projets6.webp" alt="Image du site" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/projets6" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mt-9 mb-5 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projet individuel</h5>
        </Router-link>
        <p class="font-Roboto font-normal text-gray-600 dark:text-gray-400 lg:mb-16">
          Travail de 3ème année (6ème semestre) consistant à réaliser une production en rapport avec la spécialité sur le thème de
          l'altérité.
        </p>
        <Router-link
          to="/projets6"
          class="mt-16 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - ThreeJs Balancier Lego -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/threejs" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/balancier_lego.webp" alt="Image d'un balancier avec ThreeJs" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/threejs" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mt-9 mb-5 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Balancier avec ThreeJs</h5>
        </Router-link>
        <p class="font-Roboto font-normal text-gray-600 dark:text-gray-400 lg:mb-16">
          Travail de 2ème année (4ème semestre) du cours Développement Front consistant à réaliser un balancier en WebGL avec ThreeJs.
        </p>
        <Router-link
          to="/threejs"
          class="mt-16 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - ThreeJs Maison Lego -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/maison-threejs" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/maison_lego.webp" alt="Image d'une maison réalisée avec ThreeJs" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/maison-threejs" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mt-9 mb-5 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Maison réalisée avec ThreeJs</h5>
        </Router-link>
        <p class="font-Roboto font-normal text-gray-600 dark:text-gray-400 lg:mb-16">
          Travail de 3ème année (5ème semestre) du cours Hébergement / Développement dispositifs interactifs consistant à réaliser une
          maison en WebGL avec ThreeJs.
        </p>
        <Router-link
          to="/maison-threejs"
          class="mt-16 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - ThreeJs Mo -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/mo-threejs" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/mo.webp" alt="Image du personnage Mo réalisé avec ThreeJs" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/mo-threejs" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mt-9 mb-5 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Animation du personnage Mo réalisé avec ThreeJs
          </h5>
        </Router-link>
        <p class="font-Roboto font-normal text-gray-600 dark:text-gray-400 lg:mb-16">
          Travail de 3ème année (5ème semestre) du cours Hébergement / Développement dispositifs interactifs consistant à réaliser
          l'animation du personnage Mo en WebGL avec ThreeJs.
        </p>
        <Router-link
          to="/mo-threejs"
          class="mt-16 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - Affiche expo universelle et carte postale-->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/exposition-universelle" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/expo_univ.webp" alt="Affiche exposition univirselle Osaka" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/exposition-universelle" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mb-3 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Affiche et carte postale pour l'Exposition Universelle d'Osaka 2025
          </h5>
        </Router-link>
        <p class="mb-3 font-Roboto font-normal text-gray-600 dark:text-gray-400">
          Travail de 2ème année (3ème semestre) du cours Culture Artistique consistant à réaliser une affiche et une carte postale pour
          l'Exposition Universelle d'Osaka 2025.
        </p>
        <Router-link
          to="/exposition-universelle"
          class="inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - Carte postale à la manière de cassandre -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/cassandre" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/cassandre.webp" alt="Illustration d'un cycliste devant son vélo buvant de l'eau" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/cassandre" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mb-4 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Carte postale à la manière de l'artiste Cassandre
          </h5>
        </Router-link>
        <p class="mb-4 font-Roboto font-normal text-gray-600 dark:text-gray-400">
          Travail de 2ème année (3ème semestre) du cours Culture Artistique consistant à réaliser une carte postale à la manière de
          l'artiste Cassandre.
        </p>
        <Router-link
          to="/cassandre"
          class="mt-2 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - Jeu Hypercube -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/hypercube" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/hypercube.webp" alt="plateau du jeu Hypercube" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/hypercube" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mb-4 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Scientific Game Jam - Hypercube</h5>
        </Router-link>
        <p class="mb-3 font-Roboto font-normal text-gray-600 dark:text-gray-400">
          Participation à la Scientific Game Jam de l'unversité du 25 au 27 nov. 2022.
        </p>
        <Router-link
          to="/hypercube"
          class="mt-10 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - Blender -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/blender" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/blender.webp" alt="Clé modélisée en 3D" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/blender" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="my-12 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modélisation d'une clé - Blender</h5>
        </Router-link>
        <p class="mb-3 font-Roboto font-normal text-gray-600 dark:text-gray-400">
          Travail de 2ème année (4ème semestre) du cours Design d'Expérience consistant à réaliser un objet en lien avec notre jeu vidéo
          créé pour le cours de Développement.
        </p>
        <Router-link
          to="/blender"
          class="mt-16 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - SAÉ 202 -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/ecobiking" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/sae202.webp" alt="Site ecobiking" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/ecobiking" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mb-2 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ECOBIKING - SAÉ 202 (Situation d'Apprentissage et d'Évaluation)
          </h5>
        </Router-link>
        <p class="mb-3 font-Roboto font-normal text-gray-600 dark:text-gray-400">
          Travail de 1ère année (2ème semestre) réalisé pour un examen consistant à concevoir un site bilingue (anglais/français) et sa
          promotion par groupe de 3 sur la thématique du velotaf.
        </p>
        <Router-link
          to="/ecobiking"
          class="mt-8 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - Jenfi -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/jenfi" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/jenfi_page_accueil.webp" alt="Maquette du site Jenfi" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/jenfi" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mb-4 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            JENFI - Projet configurateur (prototype)
          </h5>
        </Router-link>
        <p class="font-Roboto font-normal text-gray-600 dark:text-gray-400 lg:mb-5">
          Travail de 2ème année (3ème semestre) du cours Design d'Expérience consistant à réaliser un site qui permet de
          configurer/personnaliser une chaussure.
        </p>
        <Router-link
          to="/jenfi"
          class="mt-8 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - Dossier moi -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/dossier-moi" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/autoportrait_1.webp" alt="Selfie Agathe ECCHER avec photo d'elle petite devant" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/dossier-moi" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mb-4 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            DOSSIER MOI - EPI (Enseignement Pratique Interdisciplinaire)
          </h5>
        </Router-link>
        <p class="font-Roboto font-normal text-gray-600 dark:text-gray-400 lg:mb-20">
          Travail de 4ème (collège) des matières Français et Arts Plastiques consistant à réaliser son "DOSSIER MOI" comprenant une
          autobiographie et un autoportrait.
        </p>
        <Router-link
          to="/dossier-moi"
          class="mt-8 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
    <!-- Card - Œuvres diverses -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/divers" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/eloquence.webp" alt="Ciation de Françoise GIROUD" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/divers" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mb-4 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Œuvres diverses</h5>
        </Router-link>
        <p class="font-Roboto font-normal text-gray-600 dark:text-gray-400 lg:mb-36">
          Œuvres diverses produites lors du défi 24h, du cours d'Arts Plastiques, d'atelier photo, d'écriture, concours d'éloquence etc.
        </p>
        <Router-link
          to="/divers"
          class="mt-8 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>

    <!-- Card - Projet ISN -->
    <div class="m-4 max-w-sm rounded-xl border border-green-500 dark:border-gray-700 dark:bg-gray-800">
      <Router-link to="/isn" class="hover:opacity-70">
        <img class="rounded-t-lg" src="../assets/images/illustration_projet_isn.webp" alt="Dessins bébés qui signent" />
      </Router-link>
      <div class="p-5">
        <Router-link to="/isn" class="hover:text-black hover:underline hover:decoration-wavy">
          <h5 class="mb-4 mt-12 font-Lato text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Projet réalisé en ISN (Informatique et Sciences du Numérique)
          </h5>
        </Router-link>
        <p class="font-Roboto font-normal text-gray-600 dark:text-gray-400 lg:mb-12">
          Projet réalisé dans le cadre de la spécialité choisie en Terminale (lycée), Logiciel d’apprentissage et d’information sur la
          langue des signes pour le dialogue avec un bébé, non abouti malheureusement à cause de la pandémie.
        </p>
        <Router-link
          to="/isn"
          class="mt-8 inline-flex items-center rounded-xl bg-green-500 px-3 py-2 text-center font-Roboto text-sm font-medium text-white hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En savoir plus
          <icon-arrow />
        </Router-link>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from "../components/icons/IconArrow.vue";

export default {
  components: { IconArrow },
};
</script>
