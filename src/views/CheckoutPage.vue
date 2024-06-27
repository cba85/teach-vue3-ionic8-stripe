<template>
    <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Stripe Checkout</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">

      <router-link :to="{ name: 'Home'}">Back to home</router-link>

    <StripeCheckout />

    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { ref } from 'vue';
import StripeCheckout from "../components/StripeCheckout.vue";

export default {
    components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    StripeCheckout,
  },
}

</script>
