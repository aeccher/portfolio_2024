<template>
  <main class="flex h-screen w-full flex-col items-center justify-center bg-white">
    <h1 class="text-9xl font-extrabold tracking-widest text-green-500 font-Roboto">404</h1>
    <div class="absolute rotate-12 rounded bg-white px-2 text-sm font-Lato">Page non trouvée</div>
    <button class="mt-5">
      <a class="group relative inline-block text-sm font-medium text-green-500">
        <span
          class="
            absolute
            inset-0
            translate-x-0.5 translate-y-0.5
            bg-green-500
            transition-transform
            group-hover:translate-y-0 group-hover:translate-x-0
          "
        ></span>

        <span class="relative block border border-current bg-white px-8 py-3 font-Roboto text-base">
          <router-link to="/">Accueil</router-link>
        </span>
      </a>
    </button>
  </main>
</template>