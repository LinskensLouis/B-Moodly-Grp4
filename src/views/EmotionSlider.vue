<template class ="home">
    <div class="home">
      <ImageCarousel />
    </div>
  </template>
  
  <script>
  import ImageCarousel from '@/components/ImageCarousel';
  
  export default {
    components: {
      ImageCarousel,
    },
  };
  </script>
  
  <style scoped>
  .home {
    background-color: #040f1e;
  }
  </style>
  