<template>
  <div class="max-w-xl px-12 rounded overflow-hidden shadow-lg my-36 mx-auto">
    <div class="px-6 py-4" v-if="card">
      <div class="font-bold text-xl mb-4 text-center">
        {{ card.customer }} Transactions
      </div>
      <div class="text-center">Initial balance: {{ card.initial_balance }}</div>
      <div class="text-center">Transport fare: {{ card.transport_fare }}</div>
      <div class="text-center">New balance: {{ card.new_balance }}</div>
      <div class="text-center">Time: {{ card.time }}</div>
    </div>
    <div class="px-6 py-4 flex">
      <button
        class="bg-purple-600 bg-opacity-75 px-5 md:ml-24 mx-5 py-2 rounded"
        @click="$router.go(-1)"
      >
        Back
      </button>
      <button
        class="bg-red-600 bg-opacity-75 px-4 md:ml-24 mx-5 py-2 rounded"
        @click="deleteCard(card.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Api from "@/services/Apis";
export default {
  computed: {
    ...mapState("card", { card: "cards" }),
  },
  methods: {
    async deleteCard(card) {
      await Api.delete(`rfids/${card}`)
        .then(() => {
          this.$router.push('/table')
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
button {
  color: #ffffff;
}
</style>