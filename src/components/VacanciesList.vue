<template>
  <div class="VacanciesList">
    <h2>Vacancies:</h2>

    <ul class="VacanciesList__list">
      <li class="VacanciesList__item" v-for="vacancy of vacancies" :key="vacancy.vacancyId">
        <div class="VacanciesList__card">
          <p><strong>Position:</strong>{{vacancy.position}}</p>
          <p><strong>Employment Type:</strong>{{vacancy.employmentType}}</p>
          <p><strong>Status:</strong>{{vacancy.status}}</p>
          <p><strong>Expirience:</strong>{{vacancy.experience}}</p>
          <p><strong>Role:</strong>{{vacancy.role}}</p>
          <p><strong>Salary:</strong>
          {{vacancy.salaryFrom}} - {{vacancy.salaryTo}} {{vacancy.currency}}</p>
        </div>
        <button
          type="button"
          class="VacanciesList__button button"
          @click="openVacancy(vacancy.vacancyId)"
          v-if="vacancy.vacancyId !== selectedVacancyId"
        >
          Open
        </button>
        <button
          type="button"
          class="VacanciesList__button button"
          @click="openVacancy('')"
          v-if="vacancy.vacancyId === selectedVacancyId"
        >
          Close
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VacanciesList',
  data() {
    return {
      vacancyId: '',
    };
  },
  props: {
    vacancies: Array,
    selectedVacancyId: String,
  },
  methods: {
    openVacancy(vacancyId) {
      this.$emit('vacancySelected', vacancyId);
    },
  },
};
</script>

<style scoped lang="scss">
.VacanciesList {
  width: 100%;

  &__user-button {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      background-color: lightblue;
    }
  }

  &__list {

    list-style: none;
    padding-left: 5px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 5px;
    background-color: #fafafd;
    line-height: 1.5;
  }

  &__card {
  display: flex;
  flex-direction: column;
  align-items: start;
  }

  &__button {
    background-color: #000060;
    color: #fafafa;
    border-radius: 10px;
    width: 80px;
    height: 30px;
  }
}

</style>
