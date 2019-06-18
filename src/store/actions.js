import firebase from 'firebase/app'
import 'firebase/auth'
import { USER_JOIN, USER_LOGIN, USER_SIGNOUT, SET_USER, SET_IS_AUTHENTICATED } from './mutation-types'
import router from '../router'

import 'firebase/firestore' // todo: move to dedicated data module (https://firebase.google.com/docs/firestore/quickstart?authuser=0)

const actions = {
  [USER_JOIN]({commit}, {email, password}) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        commit(SET_USER, user)
        commit(SET_IS_AUTHENTICATED, true)
        router.push('/')
      })
      .catch(() => {
        commit(SET_USER, null)
        commit(SET_IS_AUTHENTICATED, false)
        router.push('/')
      })
  },
  [USER_LOGIN]({commit}, {email, password}) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        commit(SET_USER, user)
        commit(SET_IS_AUTHENTICATED, true)
        router.push('/')
      })
      .catch(() => {
        commit(SET_USER, null)
        commit(SET_IS_AUTHENTICATED, false)
        router.push('/')
      })
  },
  [USER_SIGNOUT]({commit}) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit(SET_USER, null)
        commit(SET_IS_AUTHENTICATED, false)
        router.push('/')
      })
      .catch(() => {
        commit(SET_USER, null)
        commit(SET_IS_AUTHENTICATED, false)
        router.push('/')
      })
  }
}

export default actions
