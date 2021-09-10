<template>
  <div class="Vacancies">
    <header class="Vacancies__header">
    </header>

    <main class="Vacancies__main">
      <div class="Vacancies__sidebar">
        <vacancies-list
          :vacancies="vacancies"
          @vacancySelected="setVacancyId"
          :selected-vacancy-id="vacancyId"
        ></vacancies-list>
      </div>

      <div class="Vacancies__content" v-show="vacancyId">
        <vacancies-details :vacancy-id="vacancyId"></vacancies-details>
      </div>
    </main>
  </div>
</template>

<script>
import { getVacanciesFromServer } from '@/api/vacancies';
import VacanciesList from '@/components/VacanciesList.vue';
import VacanciesDetails from '@/components/VacanciesDetails.vue';

export default {
  data() {
    return {
      vacancies: [],
      vacancyId: '',
    };
  },
  components: {
    VacanciesList,
    VacanciesDetails,
  },
  async mounted() {
    this.vacancies = await getVacanciesFromServer();
  },
  methods: {
    setVacancyId(vacancyId) {
      this.vacancyId = vacancyId;
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
    flex-grow: 1;
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    background-color: white;

    flex-basis: 30%;
    border-color: blue;
  }

  &__content {
    flex-grow: 1;
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    background-color: white;

    flex-basis: 60%;
    border-color: green;
  }
}
</style>
