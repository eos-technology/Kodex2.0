import { type ThemeDefinition } from 'vuetify'

export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#F9FAFB',
    surface: '#fff',
    primary: '#0A1E8C',
    'primary-darken-1': '#001E62',
    input: '#F6F7F9',
    secondary: '#397EA6',
    'secondary-darken-1': '#3587FF',
    error: '#B42318',
    info: '#2196F3',
    success: '#47CD89',
    warning: '#B54708'
  }
}

export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#3700B3',
    surface: '#131313',
    primary: '#EBBA4B',
    'primary-darken-1': '#3700B3',
    input: '#F6F7F9',
    secondary: '#397EA6',
    'secondary-darken-1': '#018786',
    error: '#B42318',
    info: '#2196F3',
    success: '#47CD89',
    warning: '#B54708'
  }
}
