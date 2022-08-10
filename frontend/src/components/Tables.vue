<template>
  <div class="my-5 mx-auto">
    <div class="flex justify-center mb-5">
      <div>
        <h1 class="text-center text-xl mt-12 font-bold">
          RFID CARD TRANSACTIONS
        </h1>
      </div>
    </div>
    <div>
    <table class="border-collapse w-full">
    <thead class="shadow-lg">
        <tr>
            <th class="p-3 hidden border-b lg:table-cell">Customer</th>
            <th class="p-3 hidden border-b lg:table-cell">Initial balance</th>
            <th class="p-3 hidden border-b lg:table-cell">Transport fare</th>
            <th class="p-3 hidden border-b lg:table-cell">New balance</th>
            <th class="p-3 hidden border-b lg:table-cell">Time</th>
            <th class="p-3 hidden border-b lg:table-cell">Actions</th>
        </tr>
    </thead>
    <tbody v-if="rfids.length > 0">
        <tr v-for="(rfid, index) in rfids" :key="index"
        class="bg-white flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 sm:shadow-lg">
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden left-0 px-2 py-1 text-xs headers">Customer</span>
                {{ rfid.customer }}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden left-0 px-2 py-1 text-xs headers">Initial balance</span>
                {{ rfid.initial_balance }}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden left-0 px-2 py-1 text-xs headers">transport fare</span>
                  {{ rfid.transport_fare}}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden left-0 px-2 py-1 text-xs headers">New balance</span>
                <span class="rounded py-2 px-5 text-sm" :class="rfid.new_balance>0 ? 'bg-purple-400' : 'bg-red-400'">
                  {{ rfid.new_balance}}
                </span>
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden left-0 px-2 py-1 text-xs headers">Time</span>
                  {{ rfid.time}}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden left-0 px-2 py-1 text-xs headers">Actions</span>
                <div class="flex item-center justify-center">
                  <div class="w-4 transform hover:text-purple-500 cursor-pointer hover:scale-110" @click="viewCard(rfid)">
                    <img src="../assets/img/view.svg" alt="view"> 
                    <!-- View -->
                  </div>
                  <div class="w-4 mx-6 transform hover:text-purple-500 cursor-pointer hover:scale-110"  @click="deleteCard(rfid)">
                    <img src="../assets/img/delete.svg" alt="delete"> 
                    <!-- Delete -->
                  </div>
                </div>
            </td>
        </tr>
    </tbody>
    <tbody v-else class="words">
      <tr>
        <td></td>
        <td></td>
        <td>Rfid card transaction list is empty.</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
    </table>
    </div>
  </div>
</template>
<script>
import Api from "@/services/Apis";

export default {
  name: "RfidTransactions",
  components: {
  },
  data() {
    return {
      elementsAvailable: false,
      rfids: [],
    };
  },
  methods: {
    async getRfids() {
      await Api.get("rfids").then((response) => {
        this.rfids = response.data;
        if (!this.rfids) {
          this.elementsAvailable = false;
        } else {
          this.elementsAvailable = true;
        }
      }).catch((error) => console.error(error))
    },
    viewCard(card){
      this.$store.commit("card/setCard", card)
      this.$router.push(`/card/${card._id}`)
    },
    async deleteCard(card){
      const deleted = this.rfids.indexOf(card)
      await Api.delete(`rfids/${card._id}`)
      .then(() => {
        this.rfids.splice(deleted, 1)
      }).catch((error) => console.log(error))
    }
  },
  created() {
    this.getRfids();
    this.$watch('rfids', () => {
      this.getRfids()
    })
  },
};
</script>

<style>
thead,
.headers {
  color: #bbbcbd;
  font-weight: bold;
}
.words {
  font-size: 16px;
  text-align: center;
  background-color: #ff5d7d;
  color: #FFF;
}
</style>