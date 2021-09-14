<template>
  <section class="services" id="services">
    <v-row>
      <v-card
        class="mx-auto"
        flat
        max-width="400"
        v-for="(sev, index) in services"
        :key="index"
      >
        <v-card-title class="d-flex justify-center">
          <v-icon size="60" color="black">
            {{sev.icon}}
          </v-icon>
        </v-card-title>

        <v-card-text class="text-h5 font-weight-light">
          <p class="text-h6 font-weight-bold text-center red--text">
            {{sev.title}}
          </p>
          {{sev.content}}
        </v-card-text>
      </v-card>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "Services",
  data: () => ({
    services: [
      {
        icon: "mdi-cellphone-settings",
        title: "MOBILE APP DEVELOPMENT",
        content:
          "I build a full fledge mobile apps (Android apps) and fully functional bug free code, based on real world standards.",
      },
      {
        icon: "mdi-code-tags",
        title: "WEB DEVELOPMENT",
        content:
          "Websites, Landing pages and Web Apps (still working on it), i got you covered. I build them with hosting and the rest.",
      },
      {
        icon: "mdi-database",
        title: "SERVER AND DATABASE DEVELOPMENT",
        content:
          "Fast and highly scalable Backend and database design that is test driven, secure and well equipped with no non-sense authentication and authorization mechanisms for users.",
      },
      {
        icon: "mdi-cellphone",
        title: "RESPONSIVE DESIGN",
        content:
          "Clean and mordern looking websites and web aaplications that are designed to be user friendly,responsive ( fits well on every device ) and optimized for performance with well co-ordinated workflow and best practices.",
      },
    ],
  }),
};
</script>
