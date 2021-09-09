const BASE_URL = 'http://localhost:8010/proxy/hr/public/getVacancies?alias=staffingpartner';
const URL_ID = 'http://localhost:8010/proxy/hr/public/getVacancy?host=&id=';

async function getVacancies() {
  const response = await fetch(BASE_URL);
  const { objects } = await response.json();
  return objects;
}

export function getVacanciesFromServer() {
  return getVacancies();
}

async function getVacancy(vacancyId) {
  const response = await fetch(`${URL_ID}${vacancyId}`);
  const { object } = await response.json();
  return object;
}

export function getVacancyFromServer(vacancyId) {
  return getVacancy(vacancyId);
}
