<template>
  <section class="home" id="home">
    <v-row
      class="fill-height text-right pa-sm-5 pa-3 mx-0 align-end justify-end"
    >
      <div class="home--elements">
        <h2 class="text-sm-h3 text-md-h2 font-weight-thin white--text">ABUBAKAR ZUBAIR</h2>
        <h1 class="text-sm-h3 text-md-h2 font-weight-thin red--text">
          MOBILE DEVELOPER
        </h1>
        <p class="text-h6 font-weight-thin hidden-sm-and-down white--text">
          " Every new idea looks crazy at first..."
        </p>
      </div>
    </v-row>
  </section>
</template>


<script>
export default {
  name: "Home",

  data: () => ({}),
};
</script>

<style>
.home {
  height: 100vh;
  background: url("../assets/paper.svg");
  background-size: cover;
}
</style>