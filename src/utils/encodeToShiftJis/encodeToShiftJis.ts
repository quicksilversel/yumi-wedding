import Encoding from 'encoding-japanese'

export const encodeToShitJis = (value: string): string => {
  const unicodeArray = Encoding.stringToCode(value)

  const sjisArray = Encoding.convert(unicodeArray, {
    to: 'SJIS',
    from: 'UNICODE',
  })

  return Encoding.urlEncode(sjisArray)
}
