import { SET_FACE_HEIGHT, SET_FACE_WIDTH } from '../../store/box/mutation-types'
import store from '../../store'

export default {
  methods: {
    updateFaceDimensions() {
      function setFaceDimensions() {
        const namespace = 'box'
        store.commit(namespace + '/' + SET_FACE_HEIGHT, {
          face,
          value: height
        })
        store.commit(namespace + '/' + SET_FACE_WIDTH, {
          face,
          value: width
        })
      }
      let face
      let height = 100
      let width = 100
      const parent = this.$el.parentNode
      if (parent.className && parent.className.indexOf('side') !== -1) {
        this.$nextTick(function () {
          window.addEventListener('resize', function (e) {
            setFaceDimensions()
          })
        })
        face = parent.className.split(' ').find(name => ['front', 'back', 'right', 'left', 'top', 'bottom'].indexOf(name) !== -1)
        height = this.$el.clientHeight
        width = parent.clientWidth
        setFaceDimensions()
      }
    }
  },
  mounted() {
    this.updateFaceDimensions()
  },
  updated() {
    this.updateFaceDimensions()
  }
}
