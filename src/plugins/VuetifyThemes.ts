import { type ThemeDefinition } from 'vuetify'

export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#F9FAFB',
    surface: '#fff',
    primary: '#091D8B',
    'primary-darken-1': '#001E62',
    input: '#F6F7F9',
    secondary: '#F6F7F9',
    'secondary-darken-1': '#3587FF',
    error: '#EF4444',
    success: '#00B183',
    warning: '#F2C744',
    disable: '#040919',
    info: '#1264A3'
  }
}

export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#F9FAFB',
    surface: '#fff',
    primary: '#091D8B',
    'primary-darken-1': '#001E62',
    input: '#F6F7F9',
    secondary: '#F6F7F9',
    'secondary-darken-1': '#3587FF',
    error: '#EF4444',
    success: '#00B183',
    warning: '#F2C744',
    disable: '#040919',
    info: '#1264A3'
  }
}
