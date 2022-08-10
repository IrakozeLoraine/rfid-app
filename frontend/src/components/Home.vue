<template>
  <div class="grid md:grid-cols-2 grid-cols-1 p-10">
    <div class="md:p-10">
      <h1 class="m-2 text-4xl font-bold">The easiest way to keep transport card transactions</h1>
      <div class="info text-gray-500 mt-7 leading-relaxed">
        At Card Tracker, We keep records of all transactions on a transport card.
        You can easily trace the progress of your business in real time. Enjoy the journey with us
      </div>
      <div class="cta mt-7">
        <button class="mx-12 px-5 py-3 bg-purple-900 text-white rounded-full" @click="$router.push('/table')">View current transactions</button>
      </div>
    </div>
    <div class="mt-10">
      <img class="w-full mx-auto max-w-sm" src="../assets/img/header.jpg">
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style>
    button{ color: #FFFFFF;}
</style>