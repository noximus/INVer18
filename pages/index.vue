<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        interactive-nerd
      </h1>
      <h2 class="subtitle">
        portfolio
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>
<script src="https://www.gstatic.com/firebasejs/5.4.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8-8_WSXTyfHX8NuSg2J-JVoIzdYEmFgI",
    authDomain: "interactive-nerd.firebaseapp.com",
    databaseURL: "https://interactive-nerd.firebaseio.com",
    projectId: "interactive-nerd",
    storageBucket: "interactive-nerd.appspot.com",
    messagingSenderId: "958981326130"
  };
  firebase.initializeApp(config);
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

