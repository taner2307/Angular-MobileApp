<template lang="html">
  <div id="app">
    <div class="container-scroller">
      <app-header v-if="authenticated"/>
      <div class="container-fluid page-body-wrapper">
        <app-sidebar v-if="authenticated"/>
        <div class="main-panel">
          <div class="content-wrapper">
            <div id="nav">
              <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
            </div>
            <router-view @authenticated="setAuthenticated" />
          </div>
          <!-- content wrapper ends -->
          <app-footer/>
        </div>
        <!-- main panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>

<script lang="js">
  import AppHeader from '../src/components/partials/AppHeader'
  import AppSidebar from '../src/components/partials/AppSidebar'
  import AppFooter from '../src/components/partials/AppFooter'
  export default {
    name: 'app',
    data() {
      return {
        authenticated: false
      }
    },
    mounted() {
      if (!this.authenticated) {
        this.$router.replace({name: "login"});
      }
    },
    methods: {
      setAuthenticated(status) {
        this.authenticated = status;
      },
      logout() {
        this.authenticated = false
      }
    },
    components: {
      AppHeader,
      AppSidebar,
      AppFooter
    }
  }
</script>

<style>
  @import "../node_modules/mdi/css/materialdesignicons.min.css";
  @import "../node_modules/flag-icon-css/css/flag-icon.min.css";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
</style>

<style lang="scss">
  @import "./assets/scss/style";

</style>
