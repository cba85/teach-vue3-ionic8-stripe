<template>
<ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Stripe</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">

      <router-link :to="{ name: 'Home'}">Back to home</router-link>

     <ion-text><p>Payment canceled.</p></ion-text>

    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText
} from '@ionic/vue';
import { ref } from 'vue';

</script>