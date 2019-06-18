<template>
  <div class="banner">
    <transition name="fade" mode="out-in">
      <div class="content">
        <img :src="banner.src">
        <div class="frame" :style="{top: offsetTop + 'px'}">
          <v-layout>
            <v-flex xs4 offset-xs4>
              <v-card
                class="bannerCard"
                elevation-12
                grey
                lighten-5
              >
                <v-card-title primary-title>
                  <div
                    class="headline"
                    v-html="banner.title"
                  ></div>
                  <p v-html="banner.body"></p>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      offsetTop: 0
    }
  },
  computed: {
    banner() {
      return this.$store.getters.pageBanner(this.$route.name)
    },
  },
  mounted() {
    let that = this
    this.$nextTick(function () {
      window.addEventListener('resize', function (e) {
        that.offsetTop = that.$el.offsetTop
      })
    })
    that.offsetTop = that.$el.offsetTop
  }
}
</script>

<style scoped>

  .banner {
    position: absolute;
    top: 0px;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .frame {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    position: relative;
    height: 400px;
  }
  .bannerCard {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9) !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .bannerCard > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .v-card > * {
    height: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }

  .fade-enter, .fade-leave-to
  {
    opacity: 0.2
  }

</style>
