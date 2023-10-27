const defaultRounded = 2

const formatCurrency =
  () =>
  (x: number | string, round: number = defaultRounded) => {
    x = +x
    if (x != null) {
      x = x.toFixed(round)
      let formated = x
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        .toString()
      return formated
    } else {
      return 0
    }
  }

export default formatCurrency
