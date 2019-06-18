import _ from 'lodash'
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { SET_BOX_FACE } from '../store/box/mutation-types'
import Home from '../components/Home'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/join',
      name: 'join',
      component: () => import('../components/Auth/Join.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../components/Auth/SignIn.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../components/Portfolio')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../components/Services.vue')
    },
    {
      path: '/workshop',
      name: 'workshop',
      component: () => import('../components/Workshop.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../components/Resources.vue')
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('../components/People/People.vue')
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('../components/Links.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/Contact.vue')
    },
    {
      path: '/underConstruction',
      name: 'underConstruction',
      component: () => import('../components/UnderConstruction.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('../components/UnderConstruction.vue')
    }
  ]
})
const boxFaces = ['front', 'back', 'right', 'left', 'top', 'bottom']
const pathFaces = {
  /*
   * Bind selected routes to specific cube faces here
   */
  '/': 'front',
  '/portfolio': 'left',
  '/services': 'back',
  '/people': 'right',
  '/workshop': 'top'
}

function getComponent(route) {
  let component = route.matched[0]
  const path = component.path || '/' // home path is just empty, but route configured with /
  if (component) {
    const matchingRoute = router.options.routes.find(route => route.path === path)
    if (matchingRoute) {
      component = matchingRoute.component
    } else {
      console.log('route not found')
    }
  }
  return component
}
function maintainViews(to, from) {
  if (from.matched[0]) {
    _.assign(to.matched[0].components, from.matched[0].components)
  }
}
function setToFaceComponents(to, from, toFace) {
  maintainViews(to, from)
  let faces = getOtherFaces()
  faces.splice(toFace)
  to.matched[0].components[toFace] = getComponent(to)
}

function findRenderedViewFace(to, from) {
  let routeViews = from.matched[0]
  let componentView
  if (routeViews) {
    routeViews = routeViews.components
    for (let view in routeViews) {
      if (routeViews[view].name.toLowerCase() === to.path) { // to.matched[0].path ?
        componentView = view
      }
    }
  }
  return componentView
}
function getRandomOtherFace() {
  let otherFaces = getOtherFaces()
  return otherFaces.splice(Math.floor(Math.random() * otherFaces.length), 1)[0]
}
function getOtherFaces() {
  const fromFace = store.state.box.face
  let otherFaces = _.clone(boxFaces)
  if (boxFaces.indexOf(fromFace) !== -1) {
    otherFaces.splice(boxFaces.indexOf(fromFace), 1)
  }
  return otherFaces
}
function getViewFace(to, from) {
  let toFace = pathFaces[to.path]
  if (!toFace) {
    toFace = findRenderedViewFace(to, from)
  }
  if (!toFace) {
    toFace = getRandomOtherFace(to, from)
  }
  return toFace
}
function turnBoxToShowView(toFace) {
  store.commit('box/' + SET_BOX_FACE, toFace) // turn router-view box to requested view
}
function mapViewsToBoxFaces(to, from, next) {
  const toFace = getViewFace(to, from)
  setToFaceComponents(to, from, toFace)
  turnBoxToShowView(toFace)
  next()
}

router.beforeEach(mapViewsToBoxFaces)
export default router
