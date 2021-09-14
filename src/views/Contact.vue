<template>
  <section class="contact" id="contact">
    <v-container>
      <h2
        class="my-5 font-weight-light red--text text-md-h3 text-sm-h4 text-center"
      >
        GET IN TOUCH
      </h2>
      <v-row justify="center">
        <v-col class="col-md-4 col-sm-12">
          <h3 class="font-weight-light red--text text-h5 text-center">
            What can i do for you?
          </h3>
          <p class="body-1 font-weight-light text-center">
            Do you have a project you want to work with me on? Send me a message
            and i will get back to you within 1-2 business days.
          </p>
        </v-col>
        <v-col class="col-md-2 hidden-sm-and-down" align="center">
          <v-avatar size="100">
            <img src="../assets/sadiq.jpg" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="col-md-6 col-sm-12">
          <v-card>
            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-text-field
                  label="Name"
                  prepend-icon="mdi-account"
                  v-model="name"
                  :rules="nameRules"
                ></v-text-field>
                <v-text-field
                  label="Email"
                  prepend-icon="mdi-email"
                  v-model="email"
                  :rules="emailRules"
                ></v-text-field>
                <v-textarea
                  label="Message"
                  prepend-icon="mdi-lead-pencil"
                  v-model="message"
                  :rules="messageRules"
                ></v-textarea>

                <v-btn
                  block
                  class="red white--text"
                  @click="submit()"
                  :loading="loading"
                  >Send</v-btn
                >
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-snackbar v-model="snackbar" :timeout="10000" bottom app color="red"
          >Message Sent successfully.
          <v-btn outlined color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    snackbar: false,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 15) || "Name must be less than 15 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "Message is required",
      (v) => (v && v.length >= 5) || "Message must be more than 5 characters",
    ],
  }),
  methods: {
    submit() {
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      fetch("https://evening-anchorage-07512.herokuapp.com/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((response) => {
          console.log(response);
          this.loading = false;
          this.snackbar = true;
        })
        .catch((error) => {
          console.log("Error>>>", error);
        });
    },
  },
};
</script>
