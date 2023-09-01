
<template>
  <main>
    <TheNavbarComponent />
    <section class="country-details">
      <img
        :src="countryStore.countryData[0]?.flags.png"
        :alt="countryStore.countryData[0]?.name.common"
        class="flag"
      />
      <div class="details">
        <h2>{{ countryStore.countryData[0]?.name.common }}</h2>
        <div class="text-1">
          <p><strong>Native Name:</strong> <span v-for="nativeName in countryStore.countryData[0]?.name.nativeName" :key="nativeName">{{ nativeName.official }}</span></p>
          <p><strong>Population:</strong> {{ countryStore.countryData[0]?.population }}</p>
          <p><strong>Region:</strong> {{ countryStore.countryData[0]?.region }}</p>
          <p><strong>Subregion:</strong> {{ countryStore.countryData[0]?.subregion }}</p>
          <p><strong>Capital:</strong> {{ countryStore.countryData[0]?.capital[0] }}</p>
        </div>
        <div class="text-2">
          <p><strong>Top Level Domain:</strong> {{ countryStore.countryData[0]?.tld[0] }}</p>
          <div class="lang">
            <p><strong>Languages:</strong></p>
            <ul>
              <li v-for="language in countryStore.countryData[0]?.languages" :key="language">{{ language }}</li>
            </ul>
          </div>
        </div>
        <div class="b-countries">
          <p><strong>Border Countries:</strong></p>
          <ul>
            <li v-for="borderCountry in countryStore.countryData[0]?.borders" :key="borderCountry">{{ borderCountry }}</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCountriesStore } from '../stores/counter'
import TheNavbarComponent from '../components/TheNavbarComponent.vue'

const route = useRoute()
const countryStore = useCountriesStore()

countryStore.updateCountry(route.params.name)

onMounted(() => {
  countryStore.getCountryData()
})
</script>

<style scoped>
section {
  background: #fafafa;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.country-details {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.country-details img {
  width: 320px;
  height: 276px;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.details h2 {
  color: #111517;
  font-family: 'Nunito Sans';
  font-size: 22px;
  font-weight: 800;
}

.text-1 p,
.text-2 p {
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-weight: 600;
  line-height: 32px;
}

.lang ul {
  display: flex;
  gap: 5px;
  list-style: none;
}

.lang ul li {
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-weight: 600;
  line-height: 32px;
}

.b-countries ul {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  list-style: none;
}

.b-countries ul li {
  border-radius: 2px;
  background: #fff;
  padding: 6px 30px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.10);
}

@media (min-width: 1024px) {
  section {
    flex-direction: row;
  }

  .country-details {
    padding: 20px 80px;
  }

  .country-details img {
    width: 400px;
    height: 276px;
  }
}
</style>
