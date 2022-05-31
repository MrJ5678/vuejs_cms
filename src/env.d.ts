export declare module '@vue/runtime-core' {
  // declare your own store states
  import { ComponentCustomProperties } from 'vue'
  import { Store } from 'vuex'
  interface State {
    count: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
