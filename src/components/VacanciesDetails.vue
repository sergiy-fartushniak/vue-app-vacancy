<template>

  <div class="VacanciesDetails">
    <div v-if="!vacancy">loading...</div>

    <template v-else>
    <section class="VacanciesDetails__vacancy">
      <p><strong>Position: </strong>{{vacancy.position}}</p>
      <p><strong>Employment Type: </strong>{{vacancy.employmentType}}</p>
      <p><strong>Status: </strong>{{vacancy.status}}</p>
      <p><strong>Expirience: </strong>{{vacancy.experience}}</p>
      <p><strong>Role: </strong>{{vacancy.role}}</p>
      <p><strong>Salary: </strong>
      {{vacancy.salaryFrom}} - {{vacancy.salaryTo}} {{vacancy.currency}}</p>
      <p>
        <ul class="VacanciesDetails__list">
          <strong>Languages: </strong>
          <li v-for="language in vacancy.languages" :key="language.name">
          {{language.name}}: {{language.level}}
          </li>
          </ul>
      </p>
      <p><strong>Client Name: </strong>{{vacancy.clientName}}</p>
      <p>
        <ul class="VacanciesDetails__list">
          <strong>Skills: </strong>
          <li v-for="skill in vacancy.desiredSkills" :key="skill.skill">
          {{skill.skill}}: {{skill.experience}}
          </li>
          </ul>
      </p>
      <div>
        <h2>Description: </h2>
        <p v-html="vacancy.descr"></p>
      </div>
    </section>
    </template>
  </div>
</template>

<script>
import { getVacancyFromServer } from '@/api/vacancies';

export default {
  name: 'VacanciesDetails',
  data() {
    return {
      vacancy: null,
    };
  },
  props: {
    vacancyId: String,
  },

  watch: {
    async vacancyId() {
      this.vacancy = await getVacancyFromServer(this.vacancyId);
    },
  },
};
</script>

<style scoped lang="scss">
.VacanciesDetails {
&__vacancy {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 10px 15px;
  }

  &__list {
    list-style: none;
    text-align: left;
  }

  &__list-item {
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    font-style: italic;
    font-weight: 300;
    font-size: 0.9rem;
    background: linear-gradient(
      to right, rgba(255,255,255,1) 0%,
      rgba(246,246,246,1) 47%,
      rgba(250,250,253,1) 100%
    );
  }

  &__remove-button {
    min-width: 20px;
    color: inherit;
    background-color: transparent;
    transition: color 0.12s;
    margin-right: 10px;

    &:hover {
      color: #e9e6f2;
      background-color: transparent;
    }

    &:hover + p {
      transition: color 0.12s;
      color: #e9e6f2;
    }
  }

  &__form-wrapper {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%234D457BFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 10px;
  }
}
</style>
