<template>
  <div class="header">
    <v-text-field
      class="inpt inpt-search"
      :placeholder="$t('transactions.search')"
      variant="solo-filled"
      density="compact"
    >
      <template v-slot:prepend-inner>
        <i class="icon-search"></i>
      </template>
    </v-text-field>
    <v-btn class="btn primary" color="#091D8B">{{ $t('setting.add') }}</v-btn>
  </div>
  <div class="buyers">
    <v-card class="card pa-6" v-for="(user, index) in buyers" :key="index">
      <div class="card-body">
        <div class="buyers__info">
          <div class="info">
            <img src="@/assets/images/Basic.png" />
            <div>
              <p class="l-bold">{{ user.name }}</p>
              <p class="email">{{ user.email }}</p>
            </div>
          </div>

          <div class="delete">
            <a>{{ $t('setting.delete') }}</a>
          </div>
        </div>
        <hr class="my-4" />
        <div class="buyers__block">
          <p class="l-regular">{{ $t('setting.block') }}</p>
          <div>
            <v-switch density="compact" hide-details color="primary" inset></v-switch>
          </div>
        </div>

        <div class="delete-2">
          <hr />
          <div class="delete">
            <a>{{ $t('setting.delete') }}</a>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
const buyers = [
  {
    name: 'UserName1',
    email: 'nombrecomprador@email.com'
  },
  {
    name: 'UserName2',
    email: 'nombrecomprador@email.com'
  },
  {
    name: 'UserName3',
    email: 'nombrecomprador@email.com'
  },
  {
    name: 'UserName4',
    email: 'nombrecomprador@email.com'
  }
]
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
}

.buyers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;

  .delete-2 {
    display: none;
  }

  .card-body {
    gap: 16px;
  }

  hr {
    margin: 0;
  }

  &__info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .info {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;

      img {
        width: 35px;
      }

      .l-bold {
        color: #001e62;
        font-weight: 500;
      }

      .email {
        font-weight: 300;
      }
    }

    .delete {
      color: #ef4444;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &__block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .l-regular {
      color: #001e62;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;

    .email {
      font-size: 3.3vw;
    }

    .delete {
      display: none;
    }

    .delete-2 {
      display: block;

      .delete {
        display: flex;
        justify-content: center;
        padding: 3.5vw 0 0 0;
        color: #ef4444;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}

.primary {
  height: 48px;
  border-radius: 16px;
}
</style>
