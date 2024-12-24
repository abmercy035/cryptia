import { Algo, shuffledAlgo } from './core/engine.js'
export const cryptia = () => {
  const t = Algo(),
    e = shuffledAlgo()
  return {
    encrypt: function (r) {
      let n = ''
      for (let c = 0; c < r.length; c++) {
        let l = t.indexOf(r.charAt(c))
        n += -1 !== l ? e.charAt(l) : r.charAt(c)
      }
      return n
    },
    decrypt: function (r) {
      let n = ''
      for (let c = 0; c < r.length; c++) {
        let l = e.indexOf(r.charAt(c))
        n += -1 !== l ? t.charAt(l) : t.charAt(c)
      }
      return n
    }
  }
}
