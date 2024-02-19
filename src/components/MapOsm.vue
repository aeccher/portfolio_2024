<script setup>
// import éléments de vue 
import { onMounted, ref, reactive } from 'vue'
// import leaflet 
import * as Leaflet from 'leaflet'
// css leaflet
import 'leaflet/dist/leaflet.css'

// Canevas leaflet pour la carte 
let titleLayer = Leaflet.tileLayer
// Initialisation de la carte sous forme de ref 
let map = ref()

// Losrque le composant est monté dans la vue 
// On affiche la carte 
onMounted( async () => {
    // Caractéristiques visuelles de la carte 
    titleLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
    );

    // Crétaion de la carte sur la div ayant : id= 'map'
    map = Leaflet.map('map',
    {
        zoomControl: true,      // Contrôle du Zoom 
        layers: [titleLayer],   // Canevas pour dessiner la carte 
        maxZoom: 18,            // Zoom maxi autorisé 
        minZoom: 6              // Zoom mini autorisé 
    })
      // projection de la carte avec centrage aux coordonnées indiquées, avec facteur d'agrandissemet 
      .setView([47.495328, 6.8044455], 17) 

    // Création d'un icone 
    let myIcon = Leaflet.icon({
        iconUrl: 'images/marker-icon.png', // Image de l'icône 
        shadowUrl: 'images/marker-shadow.png', // Image de l'ombreO
            iconSize:       [25, 41],   // taille de l'icône
            shadowSize:     [25, 41],   // taille de l'ombre
            iconAnchor:     [0, 0],     // point de position de l'icône
            shadowAnchor:   [-10, -10], // point de position de l'ombre 
            popupAnchor:    [0, 0]      // point de position popup si elle existe, relativement à l'icône
    });

    // Ajout d'un marqueur
    let marker = Leaflet.marker([47.495328, 6.8044455], {icon: myIcon}).addTo(map)

    // Ajout d'une infobulle 
    marker.bindPopup("J'étudie ici.")

    // Recentrage de la carte au bout de 5 secondes
    // à une autre position
    setTimeout(function () {
      map.panTo([46.219044, 5.242970])
   }, 5000);

    // Ajout d'un marqueur 
    // à la position de centrage 
   let marker2 = Leaflet.marker(
     [46.219044, 5.242970],
      {icon: myIcon}
   ).addTo(map)

    // Ajout d'une infobulle 
    marker2.bindPopup("Je travaille ici.")

})

// Hors de onMounted 
// Coordonnées de l'utilisateur 
const coordMe = reactive({ latitude:0, longitude:0 })

// Fonction de détection de la géocalisation via navigateur 
const locMe = () => {
    let watcher = navigator.geolocation.watchPosition(
        // fontcion à appelr en cas de success
        showLocation 
    )
}
// Fonction de sa localisation si elle réussi 
const showLocation = (position) => {
    // Récupération latitude et longitude 
    coordMe.latitude = position.coords.latitude;
    coordMe.longitude = position.coords.longitude;
    // Recentrage de la carte sur la position utilisateur 
    map.panTo([coordMe.latitude, coordMe.longitude])
    // Création d'un marqueur 
    // L'icone ayant déjà été instancié
    // On n'a pas à le préciser, on le reprend par défaut 
    let markerMe = Leaflet.marker(
        [coordMe.latitude, coordMe.longitude],
    ).addTo(map)
    // Ajout d'une infobulle 
    markerMe.bindPopup("Vous êtes ici !")
}

</script>

<template>
<div>
    <button type="button" @click="locMe()">Se localiser</button>
    <span v-if="coordMe">
        coordonnées : {{ coordMe.latitude }} - {{ coordMe.longitude }}
    </span>
    <span v-else>
        Pas de coordonnées 
    </span>
    <hr/>
    <div class="container">
        <div id="map">
        </div>
    </div>
</div>
</template>

<style scoped>
#map {
    width:100%;
    height:70vh;
    z-index: 0;
}
</style>