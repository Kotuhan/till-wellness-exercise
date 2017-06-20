export default (balance, monthPay) => {
  if (balance === 0 || monthPay === 0 || balance < monthPay ) return [];

  const remainder = balance % monthPay;
  const months = ~~(balance / monthPay) + (remainder !== 0);
  let data = [];

  for (let i = 0; i < months; i++) {
    data.push({
      name: i,
      left: (balance - i * monthPay)
    });
  }

  data[data.length] = {
    name: data.length,
    left: 0
  };

  return data 
}