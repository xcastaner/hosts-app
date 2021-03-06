import Hosts from './services/hosts'
import { Host } from './components/Host'
import { initPolyfills } from './utils/polyfilll'

initPolyfills()

window.onload = () => {
  const hosts = new Hosts()
  const objHosts = hosts.getHosts()
  const keys = Object.keys(objHosts)

  const checkboxElement = document.getElementById('toggleListView')
  const wrapperElement = document.getElementById('wrapper')

  checkboxElement.addEventListener('change', (e: Event) => {
    (e.target as HTMLInputElement).checked
      ? wrapperElement.classList.add('listView')
      : wrapperElement.classList.remove('listView')
  })

  keys.map((host) => {
    const hostComponent = new Host(hosts.getTopAppsByHost(host))
    hostComponent.render()
  })
}
