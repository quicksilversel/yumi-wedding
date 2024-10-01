export const convertGenderToWebPath = (genderId: number, suffix?: string) => {
  const suffixWithGender = suffix ? `-${suffix}` : ''

  switch (genderId) {
    case 1:
      return `men${suffixWithGender}`
    case 2:
      return `women${suffixWithGender}`
    case 3:
      return `kids${suffixWithGender}`
    default:
      return suffix ? `${suffix}` : ''
  }
}
