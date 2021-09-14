<template>
  <section class="about" id="about">
    <v-container>
      <h2 class="my-5 font-weight-light red--text text-md-h3 text-sm-">
        ABOUT ME
      </h2>
      <v-row wrap class="text-h6 font-weight-thin">
        <v-col class="col-md-4 col-sm-12">
          <p class="font-weight-light">
            Abubakar Sadiq or Sadiq my name and a student of a prestigious
            university of Abubakar Tafawa Balewa University. I've a 2 years
            experience in Web design, Web Apps, Networking and Mobile
            development in Lexington Technologies, Kaduna. I focus on Mobile
            development to create a full working Android Apps that are
            accesible, performant, scalable and responsive to all type of
            android screens.
          </p>
        </v-col>
        <v-col class="py-auto col-md-4 col-sm-12 hidden-sm-and-down">
          <v-row>
            <h4 class="mx-4">Location:</h4>
            <span>Kaduna, Nigeria</span>
          </v-row>
          <v-row>
            <h4 class="mx-4">Email:</h4>
            <span>abubakarzubair08@gmail.com</span>
          </v-row>
          <v-row>
            <h4 class="mx-4">Phone:</h4>
            <span>+2348039352100</span>
          </v-row>
        </v-col>
        <!-- <v-col
          class="text-right text-uppercase text-no-wrap hidden-sm-and-down col-md-4"
        >
          <h2 class="font-weight-light">Front End Developer</h2>
          <span class="red--text font-weight-light">Usman Murtala</span>
        </v-col> -->
      </v-row>
      <v-row>
        <v-col md8>
          <h2
            class="my-5 font-weight-light red--text text-md-h3 text-sm-h4 text-uppercase"
          >
            Services:
          </h2>
          <span class="font-weight-thin text-md-h4 text-sm-h5"
            >What Sadeeq can offer</span
          >
        </v-col>
        <v-col md4 class="hidden-sm-and-down" align="right" justify="right">
          <v-img
            src="../assets/andoid.svg"
            height="400px"
            width="400px"
            contain
          ></v-img>
          <!-- <div class="text-center">
            <v-sheet color="red--text grey darken-4 body-1"
              >"Usman, you are a software engineer and also a ninja, a
              ninjaneer" - Fredreca King, CEO GG2</v-sheet
            >
          </div> -->
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style></style>
