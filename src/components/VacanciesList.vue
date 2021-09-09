<template>
  <div class="VacanciesList">
    <h2>Vacancies:</h2>

    <ul class="VacanciesList__list">
      <li class="VacanciesList__item" v-for="vacancie of vacancies" :key="vacancie.id">
        <div>
          <b>[User #{{ vacancie.id }}]: </b>
          {{ vacancie.title }}
        </div>
        <button
          type="button"
          class="VacanciesList__button button"
          @click="openVacancie(vacancie.id)"
        >
          Close/Open
        </button>
        <!-- <router-link to="/">Open</router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VacanciesList',
  data() {
    return {
      vacancieId: 0,
    };
  },
  props: {
    vacancies: Array,
  },
  methods: {
    openVacancie(vacancieId) {
      this.$emit('vacancieSelected', vacancieId);
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
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 5px;
    background-color: #fafafd;
    line-height: 1.5;
  }

  &__button {
    margin-left: 10px;
  }
}

</style>
