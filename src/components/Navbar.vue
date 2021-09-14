<template>
  <section class="navbar" id="navbar">
    <nav>
      <v-app-bar
        v-scroll="onScroll"
        :color="!isScrolling ? 'transparent' : 'red'"
        fixed
        flat
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4 pr-6">
          <span class="font-weight-bold white--text"
            >Titan_That_Code</span
          >
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <div class="mr-8 ">
          <v-btn color="transparent" depressed href="#home">
            <span
              class="white--text pr-6 text-md-h5 text-sm-body-1 font-weight-light hidden-sm-and-down"
              >Home</span
            >
          </v-btn>
          <v-btn color="transparent" depressed href="#about">
            <span
              class="white--text pr-6 text-md-h5 text-sm-body-1 font-weight-light hidden-sm-and-down"
              >About</span
            >
          </v-btn>
          <v-btn color="transparent" depressed href="#services">
            <span
              class="white--text pr-6 text-md-h5 text-sm-body-1 font-weight-light hidden-sm-and-down"
              >Services</span
            >
          </v-btn>
          <v-btn color="transparent" depressed href="#portfolio">
            <span
              class="white--text pr-6 text-md-h5 text-sm-body-1 font-weight-light hidden-sm-and-down"
              >Portfolio</span
            >
          </v-btn>
          <!-- <v-btn color="transparent" depressed link to="/">
            <span
              class="white--text pr-6 text-md-h5 text-sm-body-1 font-weight-light hidden-sm-and-down"
              >Contact</span
            >
          </v-btn> -->
        </div>
      </v-app-bar>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    showLogo: false,
    isScrolling: false,
  }),

  methods: {
    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 50;
      this.showLogo = offset > 200;
    },
  },
};
</script>
