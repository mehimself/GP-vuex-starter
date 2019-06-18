<template>
  <div class="carousel">
    <swiper
      :options="swiperOption"
      ref="carouselSwiper"
      @sliderMove="onUserChangesSlide"
      @touchEnd="onUserChangesSlide"
      @transitionEnd="onChangedSlide"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
      >
        <img
          :src="slide.src"
          :class="slideImageClass(index)"
        >
        <div class="frame">
          <v-layout>
            <v-flex xs8 sm6 md4 offset-xs2 offset-sm3 offset-md4>
              <v-card
                class="bannerCard"
                elevation-12
                grey
                lighten-5
              >
                <v-card-title primary-title>
                  <h2
                    v-text="slide.title"
                  ></h2>
                  <p v-html="slide.body"></p>
                  <span
                    v-if="slide.tag"
                    class="hidden"
                  >{{ slide.tag }}</span>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </swiper-slide>
      <template
        v-if="slides.length > 1"
      >
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
        <div
          class="swiper-button-prev"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next"
          slot="button-next"
        ></div>
      </template>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {SET_ACTIVE_TAG} from '../../store/mutation-types'

export default {
  name: 'Carousel',
  data: () => ({
    swiperOption: {
      initialSlide: 0,
      spaceBetween: 30,
      loop: false,
      autoplay: {
        delay: 8000,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    touchTmeout: null
  }),
  computed: {
    slides() {
      let slides = []
      const store = this.$store.state[this.$route.name]
      if (store) {
        slides = store.slides
      }
      return slides
    },
    swiper() {
      return this.$refs.carouselSwiper.swiper
    },
    activeTag: {
      get() {
        return this.$store.state.activeTag
      },
      set(value) {
        this.$store.commit(SET_ACTIVE_TAG, {
          routeName: this.$route.name,
          value
        })
      }
    }
  },
  methods: {
    slideImageClass(index) {
      let imgClass = {}
      const slides = this.slides
      if (slides) {
        const slide = slides[index]
        if (slide) {
          imgClass.right = slide.align === 'right'
          imgClass.left = slide.align === 'left'
        }
      }
      return imgClass
    },
    onUserChangesSlide(e) {
      if (this.touchTmeout) {
        this.clearTouchTimeout()
      } else {
        let tag = e.target.querySelector('.hidden')
        if (tag) this.activeTag = tag.innerText
      }
      this.touchTmeout = setTimeout(this.clearTouchTimeout, 1000)
    },
    onChangedSlide(e) {
      const currentSlide = this.swiper.slides[this.swiper.activeIndex]
      let tag
      if (currentSlide) {
        tag = currentSlide.querySelector('.hidden')
        if (tag) this.activeTag = tag.innerText
      }
    },
    clearTouchTimeout() {
      clearTimeout(this.touchTmeout)
      this.touchTmeout = null
    }
  },
}
</script>

<style scoped>
  .carousel {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;

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

  .swiper-container .swiper-slide:nth-child(2n) {
    height: 400px;
  }

  .swiper-container .swiper-slide {
    height: 400px;
  }

  .hidden {
    position: absolute;
    opacity: 0;
  }
</style>
