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
  <div class="ip-address">
    <v-card class="card pa-6" v-for="(address, index) in data" :key="index">
      <div class="card-body">
        <div class="ip-address__address">
          <i class="icon-navigation"></i>
          <p class="l-regular">{{ $t('setting.ip-address') }} - {{ address.ip }}</p>
        </div>

        <div class="ip-address__ubication mt-4">
          <i class="icon-location"></i>
          <p class="l-regular">{{ $t('setting.location') }} - {{ address.location }}</p>
        </div>

        <div class="ip-address__block mt-4">
          <p class="l-regular">{{ $t('setting.block') }}</p>
          <div>
            <v-switch density="compact" hide-details color="primary" inset></v-switch>
          </div>
        </div>

        <hr class="mb-4" />

        <div class="delete">
          <a>{{ $t('setting.delete') }}</a>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
const data = [
  {
    ip: '104.199.26.19',
    location: 'Bogotá, Colombia'
  },
  {
    ip: '104.199.26.19',
    location: 'Bogotá, Colombia'
  },
  {
    ip: '104.199.26.19',
    location: 'Bogotá, Colombia'
  },
  {
    ip: '104.199.26.19',
    location: 'Bogotá, Colombia'
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

.ip-address {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;

  .card-body {
    gap: 16px;
  }

  &__address,
  &__ubication {
    font-size: 24px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    .l-regular {
      color: #001e62;
      font-weight: 400;
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

  .delete {
    text-align: center;
    color: #ef4444;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;

    &__address,
    &__ubication {
      p {
        font-size: 4.2vw;
      }
    }
  }
}

.primary {
  height: 48px;
  border-radius: 16px;
}
</style>
