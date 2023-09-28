<template>
  <section class="timeline">
    <h3 class="h3-bold mb-6">{{ $t('setting.title') }}</h3>
    <router-link :to="{ name: 'config' }" style="text-decoration: none" class="text-black">
      <BackDummy />
    </router-link>
    <v-card class="card pa-6 mt-8">
      <div class="card-body small-gap">
        <div class="filter">
          <v-text-field class="search" :placeholder="$t('transactions.search')" variant="solo">
            <template v-slot:prepend-inner>
              <i class="icon-search"></i>
            </template>
          </v-text-field>

          <div class="filter__option">
            <input type="date" class="input-date" />

            <select>
              <option value="" selected>{{ $t('setting.select') }}</option>
            </select>
          </div>
        </div>
        <div class="timeline big-gap">
          <div v-for="(items, index) in dataGroupedByDate" :key="index">
            <h1 class="h5-bold">{{ $t(isTodayOrYesterday(index)) }}</h1>

            <div class="timeline__box gap">
              <div v-for="(item, index) in items" class="timeline__box-message" :key="index">
                <img src="@/assets/images/chat.png" />

                <v-card class="card pa-6">
                  <div class="card-body">
                    <p class="timeline__header-message l-bold">
                      <span class="data-user">
                        <span class="name">{{ item.username }}</span>
                        <span class="dot">&#8226;</span>
                        <span class="light">{{ item.category }}</span>
                        <span class="dot">&#8226;</span>
                        <span class="project">{{ item.projectname }}</span>
                      </span>

                      <span class="light">{{ shortDate(item.date) }}</span>
                    </p>

                    <div v-if="item.comment" class="timeline__message">
                      <v-card class="card pa-6 mt-6">
                        <div class="card-body">
                          <p class="l-regular">{{ item.comment }}</p>
                        </div>
                      </v-card>
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </section>
</template>

<script setup lang="ts">
const isTodayOrYesterday = (day: any) => {
  const today = new Date()
  const dateParts = day.split('-')
  const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])

  // Formatear las fechas a formato YYYY-MM-DD para compararlas
  const formattedToday = today.toString().slice(0, 10)
  const formattedDate = date.toString().slice(0, 10)

  // Comparar si la fecha es de hoy o de ayer
  if (formattedDate === formattedToday) {
    return 'today'
  } else {
    // Obtener la fecha de ayer restando un día a la fecha de hoy
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)

    // Formatear la fecha de ayer a formato YYYY-MM-DD para compararla
    const formattedYesterday = yesterday.toString().slice(0, 10)

    if (formattedDate === formattedYesterday) {
      return 'yesterday'
    } else {
      return day
    }
  }
}

const data = [
  {
    username: 'user1',
    category: 'Category',
    projectname: 'Project A',
    date: '2023-07-22 17:15:30',
    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    img: '@/assets/images/chat.png'
  },
  {
    username: 'user2',
    category: 'Category',
    projectname: 'Project A',
    date: '2023-07-22 15:30:09',
    comment: '',
    img: '@/assets/images/chat.png'
  },
  {
    username: 'user3',
    category: 'Category',
    projectname: 'Project A',
    date: '2023-07-22 04:15:40',
    comment: '',
    img: '@/assets/images/chat.png'
  },
  {
    username: 'user4',
    category: 'Category',
    projectname: 'Project A',
    date: '2023-07-21 09:23:42',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laborum quasi ullam atque consequuntur. Doloribus mollitia rem incidunt veritatis impedit omnis architecto ipsum, saepe qui rerum commodi ipsa laudantium quibusdam? Obcaecati distinctio necessitatibus ducimus voluptates.',
    img: '@/assets/images/chat.png'
  },
  {
    username: 'user5',
    category: 'Category',
    projectname: 'Project A',
    date: '2023-07-21 11:04:30',
    comment: '',
    img: '@/assets/images/chat.png'
  },
  {
    username: 'user2',
    category: 'Category',
    projectname: 'Project A',
    date: '2023-07-21 18:15:30',
    comment: '',
    img: '@/assets/images/chat.png'
  },
  {
    username: 'user2',
    category: 'Category',
    projectname: 'Project A',
    date: '2023-07-20 23:21:30',
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, esse.',
    img: '@/assets/images/chat.png'
  }
]

const dataGroupedByDate = data.reduce((groups: any, item: any) => {
  const { date } = item
  const dateKey = date.slice(0, 10)

  if (!groups[dateKey]) {
    groups[dateKey] = []
  }

  groups[dateKey].push(item)

  return groups
}, {})

const dates = Object.keys(dataGroupedByDate)

const shortDate = (date: any) => {
  const dateTime = new Date(date)

  const dateOptions: any = { day: 'numeric', month: 'long', time: 'short' }

  const timeOptions: any = { hour: '2-digit', minute: '2-digit' }

  return `${dateTime.toLocaleDateString('es-ES', dateOptions)} ${dateTime.toLocaleTimeString(
    'es-ES',
    timeOptions
  )}`
}
</script>

<style lang="scss" scoped>
.filter {
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: space-between;

  input,
  select {
    width: 100%;
    height: 50px;
    padding: 8px 12px;
    background-color: #f9fafb;
    border: 1px solid #dde4ed;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #394357;

    &:focus-visible {
      outline: none;
    }
  }

  &__option {
    display: flex;
    gap: 16px;

    .input-date {
      flex-direction: row-reverse;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__option {
      flex-direction: column;
    }
  }
}

.timeline {
  &__box {
    padding-top: 2.56vw;
  }

  &__box-message {
    padding: 0 48px;

    display: flex;
    gap: 24px;

    img {
      width: 50px;
      height: 50px;
    }

    .card {
      width: 100%;
      background-color: #f6f8fa;
    }

    @media (max-width: 767px) {
      padding: 0;

      img {
        width: 35px;
        height: 35px;
      }
    }
  }

  &__header-message {
    display: flex;
    justify-content: space-between;
    color: #001e62;

    .dot {
      font-size: 24px;
      color: #91939c;
    }

    .light {
      font-weight: 300;
    }

    .project {
      color: #3587ff;
    }

    .data-user {
      display: flex;
      flex-direction: row;
      gap: 8px;
      flex-wrap: wrap;

      text-align: center;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 8px;
    }

    @media (max-width: 420px) {
      .data-user span:nth-child(4) {
        display: none;
      }
    }
  }

  &__message {
    .card {
      background-color: #fff;
    }

    .l-regular {
      color: #001e62;
    }

    @media (max-width: 767px) {
      p {
        font-size: 3.5vw;
        line-height: normal;
      }
    }
  }
}

.h5-bold {
  padding: 1vw 1.67vw;
  border-bottom: 1px solid #dde4ed;

  @media (max-width: 767px) {
    font-size: 5.5vw;
    padding: 3vw 3.67vw;
    margin-bottom: 5.2vw;
  }
}

.big-gap {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.gap {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.small-gap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

:deep(.v-field--variant-solo) {
  border-radius: 12px;
  border: 1px solid var(--border-border-input, #f4f5f8);
  background: var(--inputs-fondo-2, #f6f7f9);
  box-shadow: none;
  color: #394357;
  max-width: 250px;
  width: 100%;
}
</style>
