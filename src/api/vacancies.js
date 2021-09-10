const BASE_URL = 'http://localhost:8010/proxy/hr/public/getVacancies?alias=staffingpartner';
const URL_ID = 'http://localhost:8010/proxy/hr/public/getVacancy?host=&id=';

async function getVacancies() {
  try {
    const response = await fetch(BASE_URL);
    const { objects } = await response.json();
    return objects;
  } catch (e) {
    throw new Error(`${e.message}`);
  }
}

export function getVacanciesFromServer() {
  return getVacancies();
}

async function getVacancy(vacancyId) {
  try {
    const response = await fetch(`${URL_ID}${vacancyId}`);
    const { object } = await response.json();
    return object;
  } catch (e) {
    throw new Error(`${e.message}`);
  }
}

export function getVacancyFromServer(vacancyId) {
  return getVacancy(vacancyId);
}
