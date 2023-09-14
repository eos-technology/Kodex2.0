import 'vuetify/_styles.scss'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { dark, light } from './VuetifyThemes'

let defaultTheme = 'dark'

let settings = localStorage.getItem('settings')
if (settings) {
  let setting = JSON.parse(settings)
  const mode = setting.preferences.find((obg: any) => obg.name == 'Modo Oscuro')
  if (mode) {
    defaultTheme = mode.status == true ? 'dark' : 'light'
  }
}

console.log({ defaultTheme })

const vuetify = createVuetify({
  components: { ...components },
  directives,
  theme: {
    defaultTheme: defaultTheme,
    themes: {
      light,
      dark
    }
  }
})

export default vuetify
