<template>
  <h2 class="mt-20 p-2 text-center font-Lato text-3xl font-bold text-gray-600 underline decoration-double underline-offset-[15px] lg:mt-32">
    À propos de moi
  </h2>
  <p class="p-12 font-Roboto text-2xl">
    Intéressée par le développement Front-End, le webdesign ou encore la 3D, je suis actuellement en 3ème année d'un BUT MMI (Bachelor
    Universitaire de Technologie Métiers du Multimédia et de l'Internet) à Montbéliard (25).
  </p>
  <div class="columns-1 flex-col pl-12 lg:columns-2">
    <img class="mx-auto h-80 rounded-xl lg:my-32" src="../assets/images/portrait.webp" alt="Portrait de Agathe ECCHER" />
    <h3 class="mt-6 p-2 text-center font-Lato text-3xl font-bold text-gray-600 underline decoration-double underline-offset-8 sm:mt-80">
      Études
    </h3>
    <ol class="relative m-8 border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-4">
        <div
          class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
        ></div>
        <time class="mb-1 font-Roboto text-base font-normal leading-none text-gray-400 dark:text-gray-500"
          >Septembre 2021 - Août 2024
        </time>
        <h4 class="font-Roboto text-lg font-semibold text-gray-900 dark:text-gray-500">
          BUT MMI (Bachelor Universitaire de Technologie Métiers du Multimédia et de l'Internet)
        </h4>
        <h5 class="font-Roboto text-lg font-semibold text-gray-700 dark:text-gray-500">
          Parcours développement web et dispositifs interactifs / En alternance
        </h5>
        <p class="mb-4 font-Roboto text-base font-normal text-gray-500 dark:text-gray-400">Développement Web - Design - Communication</p>
      </li>
      <li class="mb-10 ml-4">
        <div
          class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
        ></div>
        <time class="mb-1 font-Roboto text-base font-normal leading-none text-gray-400 dark:text-gray-500"
          >Septembre 2020 - Août 2021
        </time>
        <h4 class="font-Roboto text-lg font-semibold text-gray-900 dark:text-gray-500">Licence Sciences du Langage</h4>
        <p class="font-Roboto text-base font-normal text-gray-500 dark:text-gray-400">
          1ère année obtenue - Option LSF (Langue des Signes Française)
        </p>
      </li>
      <li class="ml-4">
        <div
          class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 font-Roboto dark:border-gray-900 dark:bg-gray-700"
        ></div>
        <time class="mb-1 font-Roboto text-base font-normal leading-none text-gray-400 dark:text-gray-500">Juillet 2020</time>
        <h4 class="font-Roboto text-lg font-semibold text-gray-900 dark:text-gray-500">
          Baccalauréat SVT - Spécilaité ISN (Informatique et Sciences du Numérique)
        </h4>
        <p class="font-Roboto text-base font-normal text-gray-500 dark:text-gray-400">Section Européenne - Mention Assez bien</p>
      </li>
    </ol>
  </div>

  <hr class="my-8 h-px w-1/2 border-0 bg-gray-200 dark:bg-gray-700" />
  <div class="columns-1 flex-col pl-12 lg:columns-2">
    <!-- <WomanEquerre/> -->
    <img src="../assets/images/womanequerre.webp" alt="Calligramme d'un personnage en forme d'équerre" class="lg:mx-40" />

    <hr class="my-8 h-px w-1/2 border-0 bg-none" />
    <blockquote
      class="border-l-4 border-gray-300 bg-gray-50 p-2 font-Lato text-2xl dark:border-gray-500 dark:bg-gray-800 lg:my-44 lg:ml-52"
    >
      <p class="font-Roboto italic text-gray-800 dark:text-white">"Je file tout droit tracer mon angle de vie."</p>
    </blockquote>
  </div>
</template>
