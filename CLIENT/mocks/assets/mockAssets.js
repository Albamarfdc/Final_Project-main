import { http, passthrough } from 'msw'

const src = http.get('/src/*', () => passthrough())
const assets = http.get('/assets/img/*', () => passthrough())
const img = http.get('http://dummyimage.com/*', () => passthrough())
const webImg = http.get('https://images.ctfassets.net/*', () => passthrough())
const font = http.get('https://fonts*', () => passthrough())
const url = http.get('https://*', () => passthrough())
const localhostGet = http.get('http://localhost:3000/*', () => passthrough())
const localhostPut = http.put('http://localhost:3000/*', () => passthrough())
const localhostPost = http.post('http://localhost:3000/*', () => passthrough())
const localhostDelete = http.delete('http://localhost:3000/*', () => passthrough())

export default [src, assets, img, webImg, font, url, localhostGet, localhostPut, localhostPost, localhostDelete]
