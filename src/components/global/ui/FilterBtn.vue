<template>
  <div class="filter">
    <button class="filter__btn" @click="showMenu = !showMenu">
      <i class="icon-filter"></i>
      <p class="bd1-light">{{ $t('globals.filter') }}</p>
    </button>
    <div v-if="showMenu" class="menu">
      <div class="menu__header">
        <h3 class="h3-bold">{{ $t('globals.filter') }}</h3>
      </div>

      <div class="accordion" id="accordionExample">
        <!-- Estado -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h5 class="h5-semibold">{{ $t('globals.status') }}</h5>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="filter__check">
                <p class="b-regular">{{ $t('globals.active') }}</p>
                <BaseCheckbox />
              </div>
              <div class="filter__check">
                <p class="b-regular">{{$t('globals.inactive')}}</p>
                <BaseCheckbox />
              </div>
            </div>
          </div>
        </div>
        <!-- Amount -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h5 class="h5-semibold">{{ $t('globals.amount') }}</h5>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="filter__check">
                <p class="b-regular">{{ $t('globals.range') }}</p>
                <b-form-checkbox name="check-button" switch> </b-form-checkbox>
              </div>
              <BaseInput :label="$t('globals.minimun')" type="number" placeholder="$0.00"/>
              <BaseInput :label="$t('globals.maximum')" type="number" placeholder="$0.00"/>
            </div>
          </div>
        </div>
        <!-- Date -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h5 class="h5-semibold">{{ $t('globals.date') }}</h5>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="filter__check">
                <p class="b-regular">{{ $t('globals.range') }}</p>
                <b-form-checkbox name="check-button" switch> </b-form-checkbox>
              </div>
              <BaseInput :label="$t('globals.since')" type="date" />
              <BaseInput :label="$t('globals.until')" type="date" />
            </div>
          </div>
        </div>
        <div class="accordion-footer">
          <b-button variant="outline">{{ $t('globals.clear') }}</b-button>
          <b-button class="filter__blue" variant="primary">{{ $t('globals.save') }}</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showMenu = ref(false);
</script>

<style lang="scss" scoped>
.filter {
  position: relative;
  

  &__btn {
    background: #f9fafb;
    color: #295170;
    border: 1px solid #dde4ed;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px 16px;
    outline: none;
  }
  &__check {
    display: flex;
    justify-content: space-between;
  }
  .arrow {
    transition: transform 0.2s ease;
  }

  &__outline {
    font-weight: 700;
    font-size: 17px;
    line-height: 24px;
    background-color: #ffffff;
    text-align: center;
    border: 1px solid #3c82b3;
    border-radius: 1000px;
    color: #3c82b3;
    padding: 8px 16px;
  }

  .rotate {
    transform: rotate(180deg);
  }
  .menu {
    min-width: 360px;
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: 110%;
    right: 0px;
    z-index: 2;
    border: 1px solid rgba(35, 57, 99, 0.05);
    background-color: #ffffff;
    box-shadow: 0px 4px 6px -4px rgba(16, 24, 40, 0.1),
      0px 10px 15px -3px rgba(16, 24, 40, 0.1);
    border-radius: 16px;

    @media (max-width: 500px){
      right: -4.8rem;
    }
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border-bottom: 1px solid rgba(35, 57, 99, 0.05);
    }
  }
  .accordion {
    border-radius: 16px;
    &-body {
      display: grid;
      gap: 1.6rem;
      padding: 1.6rem 2.4rem;
    }
    &-footer {
      display: flex;
      justify-content: space-between;
      padding: 2.4rem;
    }
  }
}


</style>
