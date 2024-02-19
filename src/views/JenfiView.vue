<template>
    <h2 class="font-Lato text-3xl text-center font-bold mt-20 lg:mt-32 text-gray-600 underline underline-offset-8 decoration-double p-2"> Prototype - site JENFI</h2>

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600 outline-dotted p-2"> ÉNONCÉ </h3>
    <p class="mt-4 ml-4 font-Roboto text-xl font-semibold text-gray-600">Comment mettre en place un site web offrant une expérience utilisateur de qualité?</p>
    <p class="mt-4 ml-4 font-Roboto text-xl mr-2">Concevez un site qui permet de configurer, personnaliser une chaussure. 
    Ce site s’adresse à la cible définie par le personnage étudié lors de votre travail sur le scénario-usager.
    L’objectif de la marque est de permettre à l’utilisateur de se sentir impliqué dans la création de son produit et de déclencher l’achat.</p>

    <p class="mt-4 ml-4 font-Roboto text-xl underline font-bold">Étapes</p>
    <ul class="list-decimal font-Roboto text-xl ml-16 mr-2">
        <li class="mt-2"><span class="underline">Recherches et croquis sur papier</span> 
        <p class="mt-2">- Imaginer une marque de chaussure personnalisable (Basket, mocassin, pantoufle, ...). Attention à votre cible !</p>
        <p class="mt-2">- Concever l’identité visuelle - Charte graphique simple, 1 planche (Brandboard).</p>
        <p class="mt-2">- Dessiner le «Fil de fer» de votre projet, 1 page accueil, 1 page personnalisation, 1 page compte utilisateur.</p> 
        <p class="mb-2 pl-2">Attention à l’impact visuel et à la facilitation de la navigation.</p>
        </li>
        <li><span class="underline">Prototype</span> 
        <p class="mt-2">- Réaliser la maquette de l’interface (FIGMA) - Rendu : 1 page accueil, 1 page personnalisation,1 page création du compte utilisateur</p>
        <p class="my-2">- Dessin vectoriel de base d’une chaussure : Générer les différents dessins (Illustrator (format svg)).</p>
        </li>
        <li><span class="underline">Tests</span> 
        <p class="mt-2">- Réaliser des tests et écrire un bilan.</p>
        </li>
    </ul> 

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600  outline-dotted p-2">ANALYSE DE SITES - Croquis/Fil de fer (Wireframe)</h3>
    <div class="lg:flex lg:justify-evenly grid">
    <img src="../assets/images/lonestudio_page1.webp" alt="Croquis d'analyse du site Lonestudio" class="p-4 m-auto lg:w-1/4">
    <img src="../assets/images/lonestudio_page2.webp" alt="Croquis d'analyse  du site Lonestudio" class="p-4 m-auto lg:w-1/4">
    <img src="../assets/images/mashoo_page1.webp" alt="Croquis d'analyse du site Mashoo" class="p-4 m-auto lg:w-1/4">
    <img src="../assets/images/mashoo_page2.webp" alt="Croquis d'analyse du site Mashoo" class="p-4 m-auto lg:w-1/4">
    </div>

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600  outline-dotted p-2">CIBLE</h3>
    <ul class="list-outside font-Roboto text-xl mx-4 my-4">
        <li class="mt-2"><span class="underline font-semibold">Persona </span>: Jean-Philippe 57 ans, en couple, directeur du musée archéologique de Besançon. </li>
        <li class="mt-2"><span class="underline font-semibold">Lieu </span>: Piscine municipale.</li>
        <li class="mt-4"><span class="underline font-semibold">Scénario </span>: Il se rend à son cours de natation dans la piscine municipale de Besançon quand soudain il se noie.</li>   
    </ul> 
    <img src="../assets/images/scenario_usager.webp" alt="Scenario usager" class="m-auto py-8 lg:w-1/3">
 
    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600  outline-dotted p-2">Planche de présentation de l'identité visuelle simple - Brandboard</h3>
    <img src="../assets/images/brandboard.webp" alt="Brandboard" class="m-auto py-8  px-4">

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600  outline-dotted p-2">Dessin vectoriel de base de la chaussure : une basket</h3>
    <Basket class="m-auto py-12 px-6 w-9/12"/>

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600  outline-dotted p-2">TRAVAIL RENDU</h3>
    <div class="lg:flex lg:justify-evenly grid">
    <img src="../assets/images/Cover.webp" alt="Livrable du site Jenfi" class="p-4 m-auto lg:w-1/5">
    <img src="../assets/images/jenfi_page_accueil.webp" alt="Page d'accueil du site Jenfi" class="p-4 m-auto lg:w-1/5">
    <img src="../assets/images/page_personnalisation.webp" alt="Page de personnalisation du site Jenfi" class="p-4 m-auto lg:w-1/5">
    <img src="../assets/images/page_personnalisation_baskets_coloree.webp" alt="Page de personnalisation du site Jenfi avec partie de la basket colorée" class="p-4 m-auto lg:w-1/5">
    <img src="../assets/images/page_creation_compte_utilisateur.webp" alt="Page de création de compte du site Jenfi" class="p-4 m-auto lg:w-1/5">
    </div>


    <a href="https://www.figma.com/proto/xSexfTe8g4iyocGYPEoTSf/Projet_configurateur_Agathe_ECCHER_B1?node-id=32%3A17&starting-point-node-id=32%3A17" target="_blank" class="m-12 inline-flex items-center text-center text-2xl text-green-500 font-Roboto hover:underline hover:text-green-700">
    Prototype 
    <IconChevron/>
    </a>

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600 outline-dotted p-2"> Résultats des TESTS </h3>
    <img src="../assets/images/resultats_tests.webp" alt="Tableau des résultats des tests utilisateurs" class="lg:w-1/2 h-1/ py-8 m-auto px-4">

    
</template>

<script>
import IconChevron from "../components/icons/IconChevron.vue";
import Basket from "../components/Basket.vue";

export default {
  components: { IconChevron, Basket },
}

</script>