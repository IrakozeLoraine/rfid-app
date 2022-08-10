<template>
  <div class="container mx-auto">
    <nav class="pt-5 grid md:grid-cols-2 grid-cols-1">
      <div>
        <h1 class="px-5 py-3 font-bold text-purple-900">Card <u>T</u>racker</h1>
      </div>
      <div class="text-right py-3">
        <a href="/" class="px-5">Home</a>
        <a href="#" class="px-5">About Us</a>
        <a
          href="/table"
          class="px-5 py-2 bg-purple-900 text-white rounded-full button"
        >
          Transactions
        </a>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.button{ color: #FFFFFF;}
</style>