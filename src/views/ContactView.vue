<template>

  <div class="flex-col columns-1 lg:pl-5 lg:justify-evenly lg:columns-2 mt-20 lg:mt-32">
    <section class="text-gray-600 body-font relative ">
  <div class="container py-12 ">
    <div class="flex flex-col text-center w-full mb-12">
      <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-Lato">Contactez-moi</h2>
      <p class="text-lg font-Roboto ">Écrivez votre message ci-dessous, j'y répondrai dans les plus brefs délais.</p>
    </div>
    <div class="">
      <form id="form" class="flex flex-wrap" action="https://formsubmit.co/agatheec@free.fr" method="POST">
        <div class="p-2">
          <div class="relative">
            <label for="name" class="leading-7 text-base text-gray-600 font-Roboto w-full">Prénom &#x26; Nom</label>
            <input type="text" id="name" name="name" placeholder="Prénom NOM" required class="font-Roboto w-10/12 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2">
          <div class="relative">
            <label for="email" class="leading-7 text-base text-gray-600 font-Roboto w-full">Email</label>
            <input type="email" id="email" name="email" placeholder="prenom.nom@exemple.fr" required class="font-Roboto w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://portfolio2023.agathe-eccher.fr/merci">
        <input type="hidden" name="_subject" value="Nouveau message depuis Portfolio - Ag@the ECCHER">
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-base text-gray-600 font-Roboto">Message</label>
            <textarea id="message" name="message" placeholder="Écrivez votre message ici..." required class="font-Roboto w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="g-recaptcha font-Roboto flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
          type="submit" 
          data-sitekey="6Ld6QtUkAAAAACMNGpFFBoyz4WAWmG5-sHAB2SpV"
          data-callback='onSubmit'
          data-action='submit'>Envoyer</button>
        </div>
      </form>
    </div>
  </div>
</section>

<MapOsm/>
</div>
</template>


  <!-- recaptcha
  <script src="https://www.google.com/recaptcha/enterprise.js?render=6Ld6QtUkAAAAACMNGpFFBoyz4WAWmG5-sHAB2SpV"></script> -->


<script >
import MapOsm from '../components/MapOsm.vue';


export default {
  components: { MapOsm },
    }

// recaptcha 
   function onSubmit(token) {
     document.getElementById("form").submit();
   }

</script>





