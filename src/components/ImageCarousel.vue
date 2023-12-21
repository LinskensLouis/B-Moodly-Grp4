<template>
  <div>
    <swiper :options="swiperOptions" :loop="true">
      <swiper-slide v-for="(emotion, index) in emotions" :key="index">
        <div class="emotion-card" :style="{ backgroundColor: transparent }">
          <img :src="emotion.image" alt="emotion.name" />
          <p>{{ emotion.name }}</p>
          {{ console.log(emotion.name) }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/css';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import Heureux from '@/assets/Heureux.svg'  
  import Fatigué from '@/assets/Fatigué.svg'
  import Triste from '@/assets/Triste.svg'
  import Perdu from '@/assets/Perdue.svg'
  import Déprimé from '@/assets/Déprimé.svg'
  import Irritable from '@/assets/Irritable.svg'
  import Distrait from '@/assets/Distrait.svg'
  import Culpabilité from '@/assets/Culpabilité.svg'
  import Energique from '@/assets/Energique.svg'
  import Enjoué from '@/assets/Enjouée.svg'
  import Angoissé from '@/assets/Angoissée.svg'
  import ManqueEnergie from '@/assets/Manque énergie.svg'
  import Calme from '@/assets/Calme.svg'
  import JeNeSaisPas from '@/assets/nope.svg'


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      emotions: [
      { name: 'Heureux', color: '#111111', image: Heureux },
      { name: 'Fatigué', color: '#111111', image: Fatigué },
      { name: 'Triste', color: '#111111' , image: Triste},
      { name: 'Perdu', color: '#111111', image: Perdu },
      { name: 'Déprimé', color: '#111111', image: Déprimé },
      { name: 'Irritable', color: '#111111', image: Irritable },
      { name: 'Distrait', color: '#111111', image: Distrait },
      { name: 'Culpabilité', color: '#111111', image: Culpabilité },
      { name: 'Energique', color: '#111111', image: Energique },
      { name: 'Enjoué', color: '#111111', image: Enjoué },
      { name: 'Angoissé', color: '#111111', image: Angoissé },
      { name: 'Manque énergétique', color: '#111111', image: ManqueEnergie },
      { name: 'Calme', color: '#111111', image: Calme },
      { name: 'Je ne sais pas', color: '#111111', image: JeNeSaisPas },
        // ... Ajoute les autres émotions avec leurs couleurs
      ],
      swiperOptions: {
        // Options du carrousel (voir la documentation de vue-awesome-swiper)
      },
    };
  },
};
</script>

<style scoped>
.emotion-card {
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
  font-family: 'Roboto', sans-serif, bold;

}

.send_button {
  margin-top: 20px;
  width: 100px;
  height: 50px;
  background-color: white;
  color: #040f1e;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif, bold;
  font-size: 20px;
}

</style>
