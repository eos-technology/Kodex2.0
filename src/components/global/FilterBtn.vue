<template>
  <div class="filter">
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn variant="outlined" v-bind="props"
          ><i class="icon-filter"></i> {{ $t('filter.filter') }}
        </v-btn>
      </template>

      <v-list class="pa-0">
        <v-list-item class="pa-0">
          <h3 class="h4-bold pa-4 text-primary">{{ $t('filter.filter') }}</h3>
          <div class="filter__accordion">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel title="Estado">
                <v-expansion-panel-text>
                  <div class="expansion-content">
                    <div class="expansion-item">
                      <p class="l-regular">Activo</p>
                      <v-checkbox
                        v-model="filter.status"
                        value="active"
                        color="#091D8B"
                      ></v-checkbox>
                    </div>
                    <div class="expansion-item">
                      <p class="l-regular">Inactivo</p>
                      <v-checkbox
                        v-model="filter.status"
                        value="desactive"
                        color="#091D8B"
                      ></v-checkbox>
                    </div>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel :title="$t('payments.amount')">
                <v-expansion-panel-text>
                  <div class="expansion-content">
                    <div class="filter__inputs">
                      <div class="expansion-item">
                        <p class="b-regular">{{ $t('payments.range') }}</p>
                        <v-switch v-model="disableAmount" inset></v-switch>
                      </div>
                      <label for="minimum">
                        <p class="b-regular mb-1">{{ $t('payments.minimum') }}</p>
                        <v-text-field
                          placeholder="$0.00"
                          type="number"
                          v-model="filter.amountLow"
                          :disabled="!disableAmount"
                          variant="outlined"
                          density="compact"
                          rounded="lg"
                          id="minimum"
                          flat
                        ></v-text-field>
                      </label>
                      <label for="high">
                        <p class="b-regular mb-1">{{ $t('payments.maximum') }}</p>
                        <v-text-field
                          placeholder="$0.00"
                          type="number"
                          v-model="filter.amountHight"
                          :disabled="!disableAmount"
                          variant="outlined"
                          density="compact"
                          rounded="lg"
                          id="high"
                          flat
                        ></v-text-field>
                      </label>
                    </div>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel :title="$t('payments.date')">
                <v-expansion-panel-text>
                  <div class="expansion-content">
                    <div class="expansion-item">
                      <p class="b-regular">{{ $t('payments.range') }}</p>
                      <v-switch v-model="disableDate" inset></v-switch>
                    </div>

                    <div class="filter__inputs">
                      <label for="dateIn">
                        <p class="b-regular mb-1">{{ $t('payments.dateIn') }}</p>
                        <v-text-field
                          type="date"
                          v-model="filter.dateFrom"
                          :disabled="!disableDate"
                          variant="outlined"
                          density="compact"
                          rounded="lg"
                          id="dateIn"
                          flat
                        ></v-text-field>
                      </label>
                      <label for="dateOut">
                        <p class="b-regular mb-1">{{ $t('payments.dateOut') }}</p>
                        <v-text-field
                          type="date"
                          v-model="filter.dateTo"
                          :disabled="!disableDate"
                          variant="outlined"
                          density="compact"
                          rounded="lg"
                          id="dateOut"
                          flat
                        ></v-text-field>
                      </label>
                    </div>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-list-item>
        <v-list-item class="pa-4 filter__footer">
          <div class="filter__btn-box">
            <v-btn size="large" color="primary" variant="outlined">Clear</v-btn>
            <v-btn size="large" color="primary">Save</v-btn>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const disableAmount = ref(false)
const disableDate = ref(false)

const filter = reactive({
  status: null,
  amountLow: null,
  amountHight: null,
  dateFrom: null,
  dateTo: null
})
</script>

<style lang="scss" scoped>
.filter {
  &__inputs {
    display: grid;
    gap: 1rem;
  }
  &__footer {
    border-top: 1px solid #dde4ed;
  }
  :global(.v-menu > .v-overlay__content > .v-list) {
    box-shadow: 0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -4px rgba(16, 24, 40, 0.1);
  }

  :deep(.v-btn) {
    border-radius: 12px;
    border: 1px solid #f4f5f8;
    color: #051255;
    width: fit-content;
    height: 44px;
    padding: 10px 16px;
    font-size: 17px;
    font-weight: 500;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
  }

  &__btn-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    :deep(.v-btn) {
      border-radius: 16px;
      text-transform: none;
    }
  }

  &__accordion {
    max-width: 300px;
    :deep(.v-expansion-panel-title) {
      color: #091d8b;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      padding: 12px 24px;
    }
  }

  :deep(.v-btn__content) {
    gap: 8px;
  }
}

.expansion-content {
  height: fit-content;

  .expansion-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 28px;

    :deep(.v-input__details) {
      display: none;
    }

    :deep(.v-input) {
      flex: none;
    }

    :deep(.v-checkbox .v-selection-control) {
      min-height: auto;
    }
  }
}

.b-regular {
  color: #001e62;
}

:deep(.v-expansion-panel-text__wrapper) {
  padding: 16px 24px;
}

:deep(.v-expansion-panel-title--active > .v-expansion-panel-title__overlay) {
  opacity: 0;
}




:deep(.v-input__details) {
  display: none;
}

:global(.v-menu > .v-overlay__content) {
  border-radius: 16px !important;
}
</style>
