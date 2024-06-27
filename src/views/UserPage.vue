<template>
<ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>User</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">

      <router-link :to="{ name: 'Home'}">Back to home</router-link>

      <ion-text v-if="user"><p>{{ user }}</p></ion-text>
      <ion-text v-else><p>Sorry, you can't access this page. Please login.</p></ion-text>

    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText
} from '@ionic/vue';
import axios from "axios";

export default {
  data() {
    return {
      user: null
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText
},
  async mounted() {
    let response;

    try {
      response = await axios.get("http://127.0.0.1:8007/api/user", {
       headers: {
        Authorization: "Bearer 3|SCp8X6S2D6lDKYuNBgBUuCVqcMwFCm9Z5IBC66mJcde5603c"
      }
    });
  } catch (error) {
    console.log(error)
    return;
  }

  this.user = response.data;
  }
}
</script>