<template>
 <div class="clock">
   <div class="circle">
     <div class="face">
       <div
         class="hour"
         :style="hourTransform"
       ></div>
       <div
         class="minute"
         :style="minuteTransform"
       ></div>
       <div
         class="second"
         :style="secondTransform"
       ></div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
      timestamp: this.moment(),
      interval: null
    }
  },
  computed: {
    secondDegrees() { return this.timestamp.seconds() * 6 },
    minuteDegrees() { return this.timestamp.minutes() * 6 + this.secondDegrees / 60 },
    hourDegrees() { return (this.timestamp.hours() % 12 / 12) * 360 + 90 + this.minuteDegrees / 12 },
    secondTransform() {
      return {
        transform: `rotate(${this.secondDegrees}deg)`
      }
    },
    minuteTransform() {
      return {
        transform: `rotate(${this.minuteDegrees}deg)`
      }
    },
    hourTransform() {
      return {
        transform: `rotate(${this.hourDegrees}deg)`
      }
    }
  },
  mounted() {
    const vm = this
    this.interval = setInterval(function () { vm.timestamp = vm.moment() }, 1000)
  }
}
</script>

<style scoped>
  .circle {
    width: 180px;
    height: 180px;
    margin: 0 auto;
    position: relative;
    border: 8px solid #002546;
    border-radius: 50%;
    box-shadow: 0 1px 8px rgba(34, 34, 34, 0.3), inset 0 1px 8px rgba(34, 34, 34, 0.3);
  }
  .face {
    width: 100%;
    height: 100%;
  }
  .face > * {
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #002546;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }
  .hour {
    margin: -4px 0 -4px -25%;
    padding: 4px 0 4px 25%;
    border-radius: 4px 0 0 4px;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }
  .minute {
    margin: -40% -3px 0;
    padding: 40% 3px 0;
    border-radius: 3px 3px 0 0;
  }
  .second {
    margin: -40% -1px 0 0;
    padding: 40% 1px 0;
  }
</style>
