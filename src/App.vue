<template>
  <v-app>
    <v-main>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
      <!-- <router-view /> -->
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import Skills from "./views/Skills.vue";
import Portfolio from "./views/Portfolio.vue";
import Clients from "./views/Clients.vue";
import Contact from "./views/Contact.vue";
import Footer from "./views/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Services,
    Skills,
    Portfolio,
    Clients,
    Contact,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
