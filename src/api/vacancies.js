// const BASE_URL = 'https://mate.academy/students-api';
const BASE_URL = 'https://cleverstaff.net/hr/public/getVacancies?alias=staffingpartner';

async function get() {
  const response = await fetch(
    BASE_URL, {
      mode: 'no-cors',
    },
  );
  const { objects } = await response.json();
  return objects;
}

function getVacancies() {
  try {
    return get();
  } catch (e) {
    console.warn(e, e.message);
  }
  return get();
}

export default getVacancies;
