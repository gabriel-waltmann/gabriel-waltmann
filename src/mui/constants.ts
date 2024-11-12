import { Jost } from "next/font/google";

const jost = Jost({ subsets: ['latin'] })

export const global = {
  fontFamily: [
    jost.style.fontFamily,
    'Arial',
    'sans-serif',
  ].join(',')
}

export const h1 = {
  fontSize: 24,
}