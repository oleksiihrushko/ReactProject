export const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const createGoogleUser = googleUser => ({
  userData: {
    name: {
      fullName: googleUser.getBasicProfile().getName(),
      firstName: googleUser.getBasicProfile().getGivenName(),
      lastName: googleUser.getBasicProfile().getFamilyName(),
    },
  },
  photo: googleUser.getBasicProfile().getImageUrl(),
  token: googleUser.wc.access_token,
  googleLogin: true,
});

const filterCosts = (array, year, month, i) => {
  return array.filter(item => {
    const startMonth = new Date(year, month - i, 1, 0, 0);
    const endMonth = new Date(year, month - i + 1, 1, 0, 0);
    const res =
      item.date > startMonth.toISOString() &&
      item.date < endMonth.toISOString();
    return res;
  });
};

const getCostsSum = array =>
  array.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

export const makeSummary = costs => {
  let summaryAcc = [];
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  for (let i = 0; i < 6; i += 1) {
    if (currentMonth - i > 0) {
      const filteredCosts = filterCosts(costs, currentYear, currentMonth, i);
      summaryAcc.push([
        currentYear,
        currentMonth - i,
        getCostsSum(filteredCosts),
        filteredCosts,
      ]);
    } else {
      const filteredCosts = filterCosts(costs, currentYear, currentMonth, i);
      summaryAcc.push([
        currentYear - 1,
        12 - (i - currentMonth),
        getCostsSum(filteredCosts),
        filteredCosts,
      ]);
    }
  }

  return summaryAcc;
};

export const filterProducts = (array, value) =>
  array.filter(item =>
    item.name.toLowerCase().trim().includes(value.toLowerCase().trim()),
  );

export const findProducts = (array, value) =>
  array.find(item =>
    item.name.toLowerCase().trim().includes(value.toLowerCase().trim()),
  );
