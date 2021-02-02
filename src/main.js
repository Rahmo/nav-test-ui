import Vue from 'vue'
import App from './App.vue'
import ApolloClient from "apollo-boost"
import { InMemoryCache } from 'apollo-cache-inmemory';
const cache = new InMemoryCache();
import VueApollo from "vue-apollo"

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql"
})

Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
Vue.config.productionTip = false.npmrc

new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app')
