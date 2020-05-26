<template>
  <div class="iCountUp">
    <ICountUp
      :delay="delay"
      :endVal="endVal"
      :options="options"
      @ready="onReady"
    />
  </div>
</template>

<script type="text/babel">
  import ICountUp from 'vue-countup-v2';
  export default {
    name: 'Counter',
    components: {
      ICountUp
    },
    data() {
      return {
        delay: 1000,
        endVal: 100,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        }
      };
    },
    methods: {
      onReady: function(instance) {
        const that = this;
        instance.update(that.endVal + 100);
      }
    }
  };
</script>

<style scoped>
  .iCountUp {
    font-size: 12em;
    margin: 0;
    color: #00BFA6;
  }
</style>