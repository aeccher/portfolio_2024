import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import AboutView from '../views/AboutView.vue'
import WorkView from '../views/WorkView.vue'
import ContactView from '../views/ContactView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'

import IllustrationCitadelleView from '../views/IllustrationCitadelleView.vue'
import ChartJsView from '../views/ChartJsView.vue'
import ProjetS5View from '../views/ProjetS5View.vue'
import ProjetS6View from '../views/ProjetS6View.vue'
import ThreeJsView from '../views/ThreeJsView.vue'
import MaisonThreeJSView from '../views/MaisonThreeJSView.vue'
import MoThreeJSView from '../views/MoThreeJSView.vue'
import ExpoUnivView from '../views/ExpoUnivView.vue'
import CassandreView from '../views/CassandreView.vue'
import HypercubeView from '../views/HypercubeView.vue'
import BlenderView from '../views/BlenderView.vue'
import SAE202View from '../views/SAE202View.vue'
import JenfiView from '../views/JenfiView.vue'
import DossierMoiView from '../views/DossierMoiView.vue'
import DiversView from '../views/DiversView.vue'
import ISNView from '../views/ISNView.vue'

import NotFoundView from '../views/NotFoundView.vue'

import MerciView from '../views/MerciView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/travail', name: 'Travail', component: WorkView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/mentions-legales', name: 'MentionsLegales', component: MentionsLegalesView },

    { path: '/illustration-citadelle', name: 'IllustrationCitadelle', component: IllustrationCitadelleView },
    { path: '/chartjs', name: 'ChartJs', component: ChartJsView },
    { path: '/projets5', name: 'ProjetS5', component: ProjetS5View },
    { path: '/projets6', name: 'ProjetS6', component: ProjetS6View },
    { path: '/threejs', name: 'ThreeJs', component: ThreeJsView },
    { path: '/maison-threejs', name: 'MaisonThreeJS', component: MaisonThreeJSView },
    { path: '/mo-threejs', name: 'MoThreeJS', component: MoThreeJSView },
    { path: '/exposition-universelle', name: 'ExpoUniv', component: ExpoUnivView },
    { path: '/cassandre', name: 'Cassandre', component: CassandreView },
    { path: '/hypercube', name: 'Hypercube', component: HypercubeView },
    { path: '/blender', name: 'Blender', component: BlenderView },
    { path: '/ecobiking', name: 'Ecobiking', component: SAE202View },
    { path: '/jenfi', name: 'Jenfi', component: JenfiView },
    { path: '/dossier-moi', name: 'DossierMoi', component: DossierMoiView },
    { path: '/divers', name: 'Divers', component: DiversView },
    { path: '/isn', name: 'ISN', component: ISNView },

    { path: '/404', alias: '/:catchAll(.*)', name: 'NotFound', component: NotFoundView },

    { path: '/merci', name: 'Merci', component: MerciView },

  ],
  scrollBehavior (to, from, savedPosition) {

    return { left: 0, top: 0 }

  }
})

export default router



