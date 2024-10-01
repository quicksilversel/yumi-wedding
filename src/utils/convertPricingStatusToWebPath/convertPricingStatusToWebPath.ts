export const convertPricingStatusToWebPath = (pricingStatus: number) => {
  switch (pricingStatus) {
    case 1:
      return 'proper'
    case 2:
      return 'sale'
    default:
      return ''
  }
}
