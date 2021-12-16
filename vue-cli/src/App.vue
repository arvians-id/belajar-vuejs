<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <Navbar />
          <router-view />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>