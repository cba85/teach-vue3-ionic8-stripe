<template>
<form method="post" @submit.prevent="submit">
        <ion-list lines="full" class="ion-no-margin">
            <ion-list-header>
                <ion-label>Abonnement</ion-label>
            </ion-list-header>

        <ion-radio-group value="1" v-model="product">
            <ion-radio value="1" label-placement="end">Monthly subscription</ion-radio><br />
            <ion-radio value="2" label-placement="end">Yearly subscription</ion-radio><br />
            <ion-radio value="4" label-placement="end">Premium</ion-radio><br />
        </ion-radio-group>

        <div class="ion-padding-top">
            <ion-button type="submit">Payer maintenant</ion-button>
        </div>
    </ion-list>
    </form>
</template>

<script>
import {
    IonItem,
    IonInput,
    IonLabel,
    IonButton,
    IonRow,
    IonList,
    IonRadio,
    IonRadioGroup,
    IonListHeader
} from "@ionic/vue";
import axios from "axios";

export default {
    name: "StripeCheckout",
    data() {
        return {
            product: 1
        }
    },
    methods: {
        async submit() {
            let response;
            try {
                  response = await axios.post("http://127.0.0.1:8007/api/stripe/checkout", {
                    product: this.product
                  },
                  {
                    headers: {
                        Authorization: "Bearer 3|SCp8X6S2D6lDKYuNBgBUuCVqcMwFCm9Z5IBC66mJcde5603c" // add your user auth token
                    }
                });
              } catch (error) {
                console.log(error);
              }

              const stripeCheckoutUrl = response.data.url;
              window.location.replace(stripeCheckoutUrl);
        }
    },
    components: {
        IonInput,
        IonLabel,
        IonButton,
        IonList,
        IonRadio,
        IonRadioGroup,
        IonListHeader
    }
}
</script>