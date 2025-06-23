import { mount } from 'svelte'
import './app.scss'
import Index from './Index.svelte'

const app = mount(Index, {
  target: document.getElementById('app'),
})

export default app
