<template>
  <div class="Vacancies">
    <header class="Vacancies__header">
    </header>

    <main class="Vacancies__main">
      <div class="Vacancies__sidebar">
        <vacancies-list
          :vacancies="vacancies"
          @vacancieSelected="setVacancieId"
        ></vacancies-list>
      </div>

      <div class="Vacancies__content">
        <vacancies-details :vacancie-id="vacancieId"></vacancies-details>
      </div>
    </main>
  </div>
</template>

<script>
import getVacancies from '@/api/vacancies';
import VacanciesList from '@/components/VacanciesList.vue';
import VacanciesDetails from '@/components/VacanciesDetails.vue';

export default {
  data() {
    return {
      vacancies: [],
      vacancieId: 0,
    };
  },
  components: {
    VacanciesList,
    VacanciesDetails,
  },
  async mounted() {
    this.vacancies = await getVacancies();
  },
  methods: {
    setVacancieId(vacancieId) {
      this.vacancieId = vacancieId;
    },
  },
};
</script>

<style lang="scss" scoped>
  .Vacancies {
  &__header {
    position: sticky;
    padding: 10px;
  }

  &__user-selector {
    padding: 5px;
    cursor: pointer;
    font-size: 1rem;
    color: #4d457b;
    border: 1px solid #4d457b;
    border-radius: 5px;
  }

  &__main {
    display: flex;
    justify-content: stretch;
    align-content: stretch;
  }

  &__sidebar {

    flex-basis: 60%;
    border-color: blue;
  }

  &__content {

    flex-basis: 30%;
    border-color: green;
  }
}
</style>
