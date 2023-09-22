<template>
  <div class="filter">
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" variant="outlined" v-bind="props"
          ><i class="icon-filter"></i> {{ $t('filter.filter') }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <h3 class="h3-bold">{{ $t('filter.filter') }}</h3>
          <div class="filter__accordion">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel
                title="Estado"
              >
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


              <v-expansion-panel
                :title="$t('payments.amount')"
              >
                <v-expansion-panel-text>
                  <div class="expansion-content">
                    <div class="expansion-item">
                      <p class="b-regular">{{ $t('payments.range') }}</p>
                      <v-switch v-model="disableAmount" inset></v-switch>
                    </div>

                    <TextField
                      :label="$t('payments.minimum')"
                      placeholder="$0.00"
                      type="number"
                      v-model="filter.amountLow"
                      :disabled="disableAmount"
                    />
                    <TextField
                      :label="$t('payments.maximum')"
                      placeholder="$0.00"
                      type="number"
                      v-model="filter.amountHight"
                      :disabled="disableAmount"
                    />
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>


              <v-expansion-panel
                :title="$t('payments.date')"
              >
                <v-expansion-panel-text>
                  <div class="expansion-content">
                    <div class="expansion-item">
                      <p class="b-regular">{{ $t('payments.range') }}</p>
                      <v-switch v-model="disableDate" inset></v-switch>
                    </div>

                    <TextField
                      :label="$t('payments.dateIn')"
                      placeholder="$0.00"
                      type="date"
                      v-model="filter.dateFrom"
                      :disabled="disableDate"
                    />
                    <TextField
                      :label="$t('payments.dateOut')"
                      placeholder="$0.00"
                      type="date"
                      v-model="filter.dateTo"
                      :disabled="disableDate"
                    />
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-list-item>
        <v-list-item>
          <div class="filter__btn-box">
            <v-btn color="primary" variant="outlined">Clear</v-btn>
            <v-btn color="primary">Save</v-btn>
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
  
  :global( .v-menu > .v-overlay__content > .v-list ){
    box-shadow: 0px 10px 15px -3px rgba(16, 24, 40, 0.10), 0px 4px 6px -4px rgba(16, 24, 40, 0.10);
  }

  :deep(.v-btn) {
    padding: 10px 16px;
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  
  &__btn-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    :deep(.v-btn){
      border-radius: 16px;
      text-transform: none;
    }
  }

  &__accordion{
    max-width: 358px;
    :deep(.v-expansion-panel-title){
      color: #091D8B;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      padding: 0;
      min-width: 358px;
    }
  }

  :deep(.v-btn__content) {
    gap: 8px;
  }
}

.expansion-content{
  height: fit-content;

  .expansion-item{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    :deep(.v-input__details){
      display: none;
    }

    :deep(.v-input){
      flex: none;
    }

    :deep(.v-checkbox .v-selection-control){
      min-height: auto;
    }

    
  }
}

.b-regular{
  color: #001E62;
}

:deep(.v-expansion-panel-text__wrapper){
  padding-left: 0;
  padding-right: 0;
}

:deep(.v-expansion-panel-title--active > .v-expansion-panel-title__overlay){
  opacity: 0;
}

// switch
:deep(.v-switch__track){
  background-color: #E9ECF1;
  opacity: 1;
}

:deep(.v-selection-control--dirty .v-switch__thumb){
  color: #FFF;
}

:deep(.v-selection-control.v-selection-control--dirty.v-selection-control--density-default .v-switch__track){
  background-color: #091D8B;
}

:deep(.v-input__details){
  display: none;
}

:global(.v-menu > .v-overlay__content){
  border-radius: 16px !important;
}

</style>
