<template>
    <h2 class="font-Lato text-3xl text-center font-bold mt-20 lg:mt-32 text-gray-600 underline underline-offset-8 decoration-double p-2"> Projet - ISN</h2>

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600 outline-dotted p-2"> PRÉAMBULE</h3>
    <p class="mt-4 ml-4 font-Roboto text-xl mr-4">Ce <span class="font-semibold text-gray-600">choix de spécialité</span>, s’est fait en ayant la crainte de ne pas y arriver car mes deux amies et moi n’avions jamais touché une ligne de code.
    Nous nous sommes alors lancées dans cette aventure pour <span class="font-semibold text-gray-600">apprendre quelque chose de nouveau</span>, en prenant cela comme un pacte, <span class="font-semibold text-gray-600">un défi</span>.
    Je ne l'ai pas regretté c'était un cours où j'avais hâte d'y être, un cours agréable où je me sentais satisfaite de mon travail accompli lorsque celui-ci fonctionnait enfin.
    J'y ai compris que l'essentiel <span class="font-semibold text-gray-600">ce n'est pas le chiffre sur la copie, mais plutôt ce que j'en retenais</span> (apprentissage des erreurs commises par exemple).</p>
    <p class="mt-4 ml-4 font-Roboto text-xl mr-4"> Le professeur n’avait jamais eu autant de filles dans son cours, nous étions 7 sur 20 élèves. Il partait à la retraite à la fin de l'année et venait d'être grand-père, fortement intéressé par le projet qui sortait des jeux souvent réalisés. 
    Aidant tout au long, il répondait alors à mes nombreuses questions avec souvent une pointe d'humour. </p>
    

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600 outline-dotted p-2"> CONCEPT</h3>
    <p class="mt-4 ml-4 mr-4 font-Roboto text-xl font-semibold text-gray-600">Logiciel d’apprentissage et d’information autour de la LANGUE (et non langage) des signes pour le dialogue avec un bébé.</p>
    <p class="mt-4 ml-4 font-Roboto text-xl mr-4"> Nous avons choisi de réaliser ce projet, car nous aimons la langue des signes et que l’idée de <span class="font-semibold text-gray-600">l’apprendre à son bébé est de plus en plus recommandée et d’actualité</span>.</p>
    <p class="mt-4 ml-4 font-Roboto text-xl mr-4"> Notre <span class="font-semibold text-gray-600">objectif</span> était de créer un logiciel permettant d’apprendre comment signer avec son bébé par le biais de vidéos et guider par la description du geste à effectuer pour faire le signe du mot ou de l’expression.</p>
   

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600 outline-dotted p-2"> SON FONCTIONNEMENT </h3>
    <p class="mt-4 ml-4 font-Roboto text-xl mr-4">Lorsque nous lançons l’application, il suffit de cliquer sur le bouton de notre choix (Commencer, Historique de la langue des signes …).</p>
    <p class="mt-4 ml-4 font-Roboto text-xl mr-4">Lorsqu’on clique sur le bouton « Commencer », on ouvre une autre fenêtre, qui nous permet de choisir un mot ou une expression et de lancer la vidéo correspondante au signe de notre choix.</p>
   
    <div class="grid justify-center md:flex md:justify-evenly md:py-12">
    <img src="../assets/images/projet_isn_accueil.webp" alt="Accueil de l'application" class="p-4 m-auto lg:w-2/6">
    <img src="../assets/images/projet_isn_fenetre.webp" alt="Fenêtre qui s'ouvre" class="p-4 m-auto lg:w-2/6">
    </div>

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600  outline-dotted p-2">MA PARTIE DANS CE PROJET</h3>
    <p class="mt-4 ml-4 font-Roboto text-xl mr-4"><span class="font-semibold text-gray-600">En charge</span> de l'Interface Homme-Machine <span class="font-semibold text-gray-600">(IHM)</span> pour la fonctionnalité de l'apprentissage de la langue par des vidéos : l’opérateur choisit un mot ou une expression dans une liste et le logiciel lui affiche un commentaire et une vidéo, possibilité de séquences de formation.</p>

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600  outline-dotted p-2">EXTRAIT DE CODE</h3>
    <img src="../assets/images/extrait_code_isn.webp" alt="Image d'un extrait du code du projet" class="scale-75 hover:scale-90 block m-auto">

    <h3 class="font-Roboto text-xl text-center font-bold mt-8 text-gray-600  outline-dotted p-2">CONCLUSION</h3>
    <p class="mt-4 ml-4 font-Roboto text-xl mr-4">Nous n'avons pas réussi à aller au bout de nos fonctionnalités malgré une communication importante au sein du groupe. En effet, la <span class="font-semibold text-gray-600">pandémie a été un énorme frein</span> seules, sans personnes pour nous aider, alors démunies face à nos erreurs dans le code. Avoir retrouvé ce projet me donne envie de me replonger dans mes cours, me reformer à Python pour m'habituer au concept de création d'algorithmes par exemple.</p>

</template>

<script>
import IconChevron from "../components/icons/IconChevron.vue";

export default {
  components: { IconChevron },
}

</script>