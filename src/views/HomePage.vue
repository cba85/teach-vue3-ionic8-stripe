<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Vue 3 Stripe Checkout</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">

      <router-link :to="{ name: 'Checkout'}">Go to checkout page</router-link> |
      <router-link :to="{ name: 'User'}">User account</router-link>

    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { ref } from 'vue';

</script>
