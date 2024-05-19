async function getData(){
let data = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/npr.json`)
let data2 = await data.json()
console.log(data2['npr']['inr']);

}
getData()
const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

let url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";
let imageSrc = document.querySelectorAll(".select-container img");
let optionAdd = document.querySelectorAll(".select-container select");
let exchngButton = document.querySelector("form button");

for (countryCode in countryList) {
  optionAdd.forEach((ele) => {
    let option = document.createElement("option");
    if (ele.name == "From" && countryCode === "NPR") {
      option.selected = "selected";
    } else if (ele.name == "To" && countryCode === "INR") {
      option.selected = "selected";
    }
    option.value = countryCode;
    option.innerHTML = countryCode;
    ele.append(option);
  });
}

optionAdd.forEach((ele) => {
  ele.addEventListener("change", async () => {
    let countryCode = countryList[ele.value];

    let mainImage = ele.parentElement.querySelector("img");

    mainImage.src = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  });
});

exchngButton.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let from = document.querySelector(".from");
  let to = document.querySelector(".to");
  let msg = document.querySelector(".msg");
 
  let amountVal = document.querySelector("#amount");
  let amnt = amountVal.value;
  if (amnt == "" || amnt <= 0) {
    amountVal.value = "1";
    amnt = 1;
  }
  let num1 = from.value;
  let str1 = num1.toString();
  // console.log(str1);
  let num2 = to.value;
  let str2 = num2.toString();

  let url =` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${str1.toLowerCase()}.json`;
  let response = await fetch(url);
  let data = await response.json();
  let str = str2.toLowerCase();
  console.log(str)
  let exchngRate = data[str1.toLowerCase()][str];
  console.log(typeof(amountVal.value));
  
  let totalAmnt = parseFloat(exchngRate).toFixed(3) * amnt;
  
  msg.innerText = `${amnt} ${str1} = ${totalAmnt} ${str2}`;
});

