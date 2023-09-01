
<template>
  <main>
    <TheNavbarComponent />
    <section class="Sub_navigation_menu">
      <div class="entry_field">
        <img src="../assets/search.svg" alt="Search icon" />
        <input v-model="countriesStore.search" type="text" placeholder="Search for a country…" />
      </div>
      <div class="region-box">
        <select v-model="countriesStore.selectedRegion" name="region" id="region">
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
    <div v-if="countriesStore.filteredCountries.length > 0" class="card-container">
      <div
        v-for="country in countriesStore.filteredCountries"
        :key="country.name.common"
        class="country-card"
        @click="redirectToCountryDetail(country.name.common)"
      >
        <img :src="country.flags.png" alt="Flag" class="flag" />
        <div class="country-info">
          <h3>{{ country.name.common }}</h3>
          <p><strong>Population:</strong> {{ country.population }}</p>
          <p><strong>Region:</strong> {{ country.region?.common }}</p>
          <p><strong>Capital:</strong> {{ country.capital?.[0] }}</p>
        </div>
      </div>
    </div>
    <p v-else>No results</p>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCountriesStore } from '../stores/counter'
import { useRouter } from 'vue-router'
import TheNavbarComponent from '../components/TheNavbarComponent.vue'

const countriesStore = useCountriesStore()
const router = useRouter()

const redirectToCountryDetail = (countryName) => {
  router.push({ name: 'detail', params: { name: countryName } })
}

onMounted(() => {
  countriesStore.getCountriesData()
})
</script>

<style scoped>
section {
  background: #fafafa;
  padding: 24px 16px 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.entry_field {
  display: flex;
  align-items: center;
  gap: 26px;
  padding: 16px 32px;
  border-radius: 5px;
  background: #fff;
}

.entry_field img {
  width: 15.556px;
  height: 15.556px;
}

input {
  width: 100%;
  color: #c4c4c4;
  font-family: 'Nunito Sans';
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  border: none;
}

select {
  width: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #111517;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  background-repeat: no-repeat;
  background-position: right center;
}

select::-ms-expand {
  display: none;
}

option {
  color: #111517;
  background-color: #fff;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
}

select option:checked {
  background-color: #f0f0f0;
}

select:focus {
  outline: none;
  border-color: #1e87f0;
  box-shadow: 0 0 0 2px rgba(30, 135, 240, 0.2);
}

select:hover {
  border-color: #aaa;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.country-card {
  border-radius: 5px;
  background: #fff;
}

.country-card img {
  width: 267px;
  height: 160px;
}

.country-info {
  padding: 24px 0px 48px 24px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
}

.country-info h3 {
  color: #111517;
  font-family: 'Nunito Sans';
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
}

.country-info p {
  color: #111517;
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
}

@media (min-width: 1024px) {
  section {
    flex-direction: row;
    justify-content: space-between;
    padding: 48px 80px;
  }

  .entry_field {
    padding: 19px 200px 19px 32px;
  }

  .entry_field img {
    width: 17.5px;
    height: 17.5px;
  }

  input {
    color: #848484;
    font-size: 14px;
    width: 100%;
  }

  select {
    font-size: 14px;
    padding: 19px 77px 19px 24px;
  }
}
</style>
