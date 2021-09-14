<template>
  <section class="clients" id="clients" v-animate-onscroll="'animated flip'">
    <v-container>
      <h2 class="my-5 font-weight-light red--text text-md-h3 text-sm-h4">
        WHAT MY CLIENTS SAY
      </h2>
      <v-row>
        <v-col
          class="col-md-4 col-sm-12"
          v-for="comment in comments"
          :key="comment.client"
        >
          <v-row>
            <v-icon large class="red--text">mdi-format-quote-open</v-icon>
          </v-row>
          <v-card outlined>
            <v-card-text>
              <blockquote class="blockquote">
                {{ comment.comment }}
              </blockquote>
            </v-card-text>
          </v-card>

          <v-row justify="end">
            <v-icon large class="red--text">mdi-format-quote-close</v-icon>
          </v-row>
          <v-row justify="end" class="pr-2">
            <h4 class="text-h6 font-weight-thin red--text">
              {{ comment.client }} |
            </h4>
            <span class="subheading font-weight-light">{{
              comment.company
            }}</span>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    comments: [
      {
        client: "Usman Murtala",
        comment:
          "Sadeeq, the way you handle the project show resilence, experience, knowledge, and critical thinking. I would love to get your perspective in the next project.",
        company: "Lexington Technologies"
      },
      {
        client: "Mubarak Ibrahim",
        comment:
          "Sweet job titan.",
        company: "GeekAxis LTD."
      },
      {
        client: "Faruq Ruwa",
        comment: "You always give everything your best, and what comes out of it is spectaacular. I really appreciate your work.",
        company: "DSC ATBU"
      }
    ]
  })
};
</script>
