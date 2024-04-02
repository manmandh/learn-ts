type Currency = {
  unit: CurrencyUnit
  value: number
}

type CurrencyUnit  = 'EUR' | 'GBP' | 'JPY' | 'USD'

let Currency: {

  DEFAULT: CurrencyUnit,
  from(value: number, unit?: CurrencyUnit): Currency
} = {
  DEFAULT:'USD',
  from(value: number, unit: CurrencyUnit = Currency.DEFAULT): Currency {
    return { unit, value }
  }
}

const amount1 = Currency.from(100)
const amount2 = Currency.from(50, 'EUR')

console.log(amount1);
console.log(amount2);
