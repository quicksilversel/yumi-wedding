export const appendQueryStringToPath = (path: string, queryString: string) => {
  if (!queryString) return path

  const seperator = path.indexOf('?') !== -1 ? '&' : '?'

  return path + seperator + queryString
}
