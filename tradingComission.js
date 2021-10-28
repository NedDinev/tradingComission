function tradingCommission(city, sales) {
  sales = Number(sales);
  let comission = -1;
  if (sales > 0) {
    if (city === "Sofia") {
      if (0 <= sales && sales <= 500) {
        comission = 0.05;
      } else if (500 < sales && sales <= 1000) {
        comission = 0.07;
      } else if (1000 < sales && sales <= 10000) {
        comission = 0.08;
      } else if (sales > 10000) {
        comission = 0.12;
      }
    } else if (city === "Varna") {
      if (0 <= sales && sales <= 500) {
        comission = 0.045;
      } else if (500 < sales && sales <= 1000) {
        comission = 0.075;
      } else if (1000 < sales && sales <= 10000) {
        comission = 0.1;
      } else if (sales > 10000) {
        comission = 0.13;
      }
    } else if (city === "Plovdiv") {
      if (0 <= sales && sales <= 500) {
        comission = 0.055;
      } else if (500 < sales && sales <= 1000) {
        comission = 0.08;
      } else if (1000 < sales && sales <= 10000) {
        comission = 0.12;
      } else if (sales > 10000) {
        comission = 0.145;
      }
    } else {
      console.log("error");
    }
    let calculation = comission * sales;
    console.log(calculation.toFixed(2));
  } else {
    console.log("error");
  }
}

tradingCommission("Sofia", 1500);
tradingCommission("Plovdiv", 499.99);
tradingCommission("Varna", 3874.5);
tradingCommission("Kaspichan", -50);
