export const getRates = (rate) => {
  if (rate.monthly) {
    return `${rate.monthly.toLocaleString()}/month`;
  } else if (rate.weekly) {
    return `${rate.weekly.toLocaleString()}/week`;
  } else if (rate.nightly) {
    return `${rate.nightly.toLocaleString()}/night`;
  }
};
