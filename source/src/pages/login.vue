<template lang="html">

  <section class="register">
    <div class="wrapper d-flex align-items-center auth register-full-bg">
      <div class="row w-100">
        <div class="col-lg-6 mx-auto">
          <div class="auth-form-light text-left p-5">
            <h2>Login</h2>
            <h4 class="font-weight-light">Hello! let's get started</h4>
            <form class="pt-4">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                         placeholder="Username" v-model="username">
                  <i class="mdi mdi-account"></i>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                         v-model="password">
                  <i class="mdi mdi-eye"></i>
                </div>
                <div class="mt-5">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium" v-on:click="login()">Login</a>
                </div>
                <div class="mt-2 text-center">
                  <a class="auth-link text-black">Dont have an account? <span class="font-weight-medium"><router-link
                    to="/register">Sign up</router-link></span></a>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        if (this.username !== '' && this.password !== '') {
          if (this.username === 'admin' && this.password === 'admin') {
            this.$emit('authenticated', true);
            this.$router.replace({ name: 'home' });
          } else {
            console.log('The username and / or password is incorrect');
          }
        } else {
          console.log('A username and password must be present');
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {

  }
</style>
