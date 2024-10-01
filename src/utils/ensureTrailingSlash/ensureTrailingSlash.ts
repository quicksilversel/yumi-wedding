export const ensureTrailingSlash = (path: string) =>
  path.replace(/\/?(\?|#|$)/, '/$1')
