<template>
  <section class="pa-5 custom__bg mt-6" id="skills">
    <v-container>
      <v-col col-12>
        <v-row justify="space-between">
          <v-col cols="auto">
            <h2 class="my-5 font-weight-light red--text text-md-h3 text-sm-h4">
              WHAT I KNOW?
            </h2>
          </v-col> 
          <!-- <v-col cols="4"> </v-col> -->
        </v-row>
      </v-col>
      <v-col col-12>
        <v-row justify="space-around">
          <v-col class="col-md-6 col-sm-12">
            <h3 class="text-h5 my-5 red--text">My Skills</h3>
            <h4 class="text-h6 red--text font-weight-light">
              Technical Skills
            </h4>
            <v-row v-for="skill in skillTech" :key="skill.title">
              <v-col cols="4" align-self="center"
                ><span class="body-1 font-weight-light ml-4 white--text">
                  {{ skill.title }}
                </span></v-col
              >
              <v-col cols="8">
                <v-rating
                  size="25"
                  v-model="skill.rating"
                  full-icon="mdi-record"
                  half-icon="mdi-record"
                  empty-icon="mdi-record"
                  color="red"
                  background-color="grey darken-3"
                ></v-rating>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="hidden-sm-and-down">
            <h3 class="text-h5 my-5 red--text">My Education</h3>
            <v-row>
              <v-sheet color="transparent">
                <v-row>
                  <v-sheet
                    class="mr-5"
                    tile
                    height="100px"
                    width="1px"
                    color="red"
                  ></v-sheet>
                  <v-col pa5>
                    <v-row
                      ><span class="text-h6 font-weight-light white--text">
                        Abubakar Tafawa Balewa University, Bauchi.
                      </span></v-row
                    >
                    <v-row wrap justify="end"
                      ><span class="text-h5 font-weight-light red--text"
                        >B.tech Computer Science Technology</span
                      ></v-row
                    >
                    <v-row class="font-weight-light" justify="end"
                      ><span class="white--text">2016 - Ongoing</span></v-row
                    >
                  </v-col>
                </v-row>
              </v-sheet>
            </v-row>
            <v-row class="mt-5 hidden-sm-and-down">
              <v-col class="mt-5">
                <h3 class="text-h5 red--text font-weight-light">
                  Skills Detail
                </h3>
                <ul v-for="skill in skillDetail" :key="skill.content">
                  <li class="body-1 font-weight-light my-2 white--text">
                    <span class="red--text">{{ skill.title }}: </span>
                    <span class="white--text">{{ skill.content }}</span>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    skillTech: [
      { title: "Flutter/Dart", rating: 3 },
      { title: "HTML5", rating: 4 },
      { title: "CSS3", rating: 4 },
      { title: "JavaScript", rating: 4 },
      { title: "Vue.js", rating: 3 },
      { title: "Firebase", rating: 2 },
      { title: "Node.js", rating: 2 },
    ],
    skillDetail: [
      { title: "CSS3", content: "SCSS, Bootstrap, Materialize" },
      { title: "JavaScript", content: "ES5 and ES6" },
      {
        title: "Vue.js",
        content: "VueX, Vue Router, Vuetify",
      },
      { title: "Firebase", content: "Firebase CRUD" },
      { title: "Node.js", content: "Express.js, socket.io" },
      { title: "Docker", content: "Docker compose, Docker swarm" },
      { title: "Packet Tracer", content: "Routing & Switching, Subnetting" },
    ],
  }),
};
</script>

<style>
.custom__bg {
  height: 100vh;
  background: url("../assets/skills.svg");
  background-size: cover;
}
</style>
