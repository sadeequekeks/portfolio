<template>
  <section class="footer" id="footer">
    <v-footer color="black" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="(el, i) in icons"
          :key="i"
          class="mx-4 white--text"
          icon
          :href="el.href"
        >
          <v-icon size="24px" color="red">
            {{ el.icon }}
          </v-icon>
        </v-btn>
        <v-col class="black py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Abubakar Sadeeq</strong>
        </v-col>
      </v-row>
    </v-footer>
  </section>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-twitter", href: "https://twitter.com/sadeeque_keks" },
      {
        icon: "mdi-linkedin",
        href: "https://www.linkedin.com/in/sadeequekeks/",
      },
      { icon: "mdi-github", href: "https://github.com/sadeequekeks" },
    ],
  }),
};
</script>
