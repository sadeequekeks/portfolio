<template>
  <section class="portfolio custom__bg" id="portfolio" v-animate-onscroll="'animated flip'">
    <v-container>
      <h2 class="my-5 font-weight-light red--text text-md-h3 text-sm-h4">
        My Portfolio
      </h2>

      <v-carousel height="670" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="(project, index) in project_detail"
          :key="index"
        >
          <v-sheet color="transparent" height="100%">
            <v-row justify="center" class="my-5">
              <div class="font-weight-light">
                <h3 class="text-h6 red--text">{{ project.project_name }}</h3>
                <h4 class="body-1 white--text">{{ project.project_skill }}</h4>
              </div>
            </v-row>
            <v-row justify="center">
              <v-col class="pa-5 col-md-6 col-sm-12">
                <v-row class="pa-5">
                  <h3 class="mb-2 text-h6 red--text">Project Details</h3>
                  <p class="body-1 font-weight-light white--text">
                    {{ project.project_desc }}
                  </p>
                </v-row>
                <v-row class="px-5">
                  <v-col cols="12">
                    <h3 class="text-h6 red--text">Project info</h3>
                  </v-col>
                  <v-col class="col-md-12">
                    <v-list color="transparent">
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="red">mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title
                          class="body-1 font-weight-light hidden-sm-and-down white--text"
                        >
                          Client Name:
                        </v-list-item-title>
                        <v-list-item-subtitle
                          class="mr-5 body-1 font-weight-light white--text"
                        >
                          {{ project.client_name }}
                        </v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-col>
                  <v-col cols="12">
                    <v-list color="transparent">
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="red" large>mdi-calendar</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title
                          class="body-1 font-weight-light hidden-sm-and-down white--text"
                        >
                          Project Date:
                        </v-list-item-title>
                        <v-list-item-subtitle
                          class="mr-5 body-1 font-weight-light white--text"
                        >
                          {{ project.project_date }}
                        </v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-col>
                  <v-col cols="12">
                    <v-list color="transparent">
                      <v-list-item>
                        <!-- <v-list-item-icon>
                          <v-icon color="red" large>mdi-link</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title
                          class="body-1 font-weight-light hidden-sm-and-down white--text"
                        >
                          Live Preview
                        </v-list-item-title> -->
                        <!-- <v-list-item-subtitle class="mr-5">
                          <v-btn
                            outlined
                            target="_blank"
                            :href="project.project_url"
                            color="red"
                            dark
                            >Click Me</v-btn
                          >
                        </v-list-item-subtitle> -->
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6" class="pa-5 hidden-sm-and-down">
                <v-img
                  :src="project.project_image"
                  height="400px"
                  width="400px"
                  contain
                ></v-img>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-row wrap>
        <v-col cols="12"> </v-col>
        <v-col> </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    project_detail: [
      {
        project_name: "Flex Home",
        project_skill: "Flutter/Dart",
        project_desc:
          "FlexHome is a mobile app offering users easy life easy transport such as Payment of Bills, Restaurant Services, Transportation.",
        project_date: "2-Feb-2021",
        client_name: "C.E.O Flexwave Hub",
        project_image: require("../assets/hhome.jpg"),
      },
      {
        project_name: "VirveBook",
        project_skill: "Flutter/Dart, Nodejs, MongoDB, and Docker.",
        project_desc: "A Flutter project for saving contacts.",
        project_date: "12-Dec-2020",
        client_name: "Personal project",
        project_image: require("../assets/virve.jpg"),
      },
      {
        project_name: "Barcode Scanner",
        project_skill: "Flutter/Dart",
        project_desc: "An Android app use for barcode scanning",
        project_date: "23-Mar-2021",
        client_name: "Personal project",
        project_image: require("../assets/qr.jpg"),
      },
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
