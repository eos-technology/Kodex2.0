<template>
  <section class="transactions">
    <h3 class="h3-bold mb-6">{{ $t('transactions.headerTitle') }}</h3>
    <!-- Cards -->
    <ProjectStats :uuid="uuid" class="mb-4" />

    <Table :uuid="uuid" />
  </section>
</template>
<script setup lang="ts">
import Table from './content/Table.vue'
import ProjectStats from '@/components/ProjectStats.vue'

const props = defineProps({
  uuid: {
    required: true,
    type: String
  }
})
</script>
<style lang="scss" scoped>
.transactions {
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
  &__box {
    display: flex;
    gap: 1rem;
    flex-wrap: nowrap;
  }
  &__container {
    display: grid;
    gap: 1rem;
  }
}
.transaction {
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    height: 100vh;
    overflow-y: scroll;
  }

  &__header {
    @media (max-width: 767px) {
      flex-direction: column;
      flex-direction: column-reverse;
    }

    &-search {
      @media (max-width: 767px) {
        width: 100%;
      }
    }

    &-input {
      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }

  &__table {
    @media (max-width: 767px) {
      display: none;
    }

    &-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      @media (max-width: 1060px) {
        height: 24px;
        width: 24px;
        justify-content: unset;
      }
    }

    &-box {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        max-width: 40px;
        @media (max-width: 1060px) {
          height: 24px;
          width: 24px;
        }
      }

      &-dots {
        display: flex;
        padding: 8px;
        align-items: center;
        border-radius: 12px;
        border: 1px solid #f4f5f8;
        background: #f6f8fa;
        @media (max-width: 1160px) {
          padding: 6px;
          border-radius: 6px;
        }
      }

      &-btn {
        display: flex;
        padding: 7.5rem 7.5rem;
        /* Convertido de 192px a 7.5rem */
        align-items: center;
        gap: 10px;
        /* Convertido de 160px a 6.25rem */
        border-radius: 12px;
        /* Convertido de 160px a 6.25rem */
        border: 1px solid #f4f5f8;
        /* Convertido de 16px a .625rem */
      }
    }

    &-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      /* Convertido de 64px a 2.5rem */

      &-btn {
        display: flex;
        padding: 10px;
        /* Convertido de 96px a 3.75rem */
        align-items: center;
        gap: 6.25rem;
        /* Convertido de 160px a 6.25rem */
        border-radius: 0.875rem;
        /* Convertido de 160px a 6.25rem */
        border: none;
        background: #ebf3ff;
        @media (max-width: 1160px) {
          padding: 6px;
          border-radius: 6px;
        }
      }

      &-text {
        color: #3587ff;
        font-size: 12px;
        text-decoration-line: underline;
        @media (max-width: 330px) {
        }
      }
    }
  }

  .table {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    /* Convertido de 256px a 10px */

    &__box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      &-copy {
        display: flex;
        align-items: center;
        gap: 10px;
        /* Convertido de 256px a 10px */

        @media (max-width: 767px) {
          flex-direction: column;
          flex-direction: column-reverse;
          align-items: end;
        }

        &-value {
          @media (max-width: 767px) {
            max-width: 8.125rem;
          }
        }
      }

      &-status {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        /* Convertido de 128px a 5rem */
      }
    }
  }

  .card-transaction {
    margin: auto;
    width: 28.125rem;

    @media (max-width: 31.25rem) {
      width: 100%;
    }
  }

  .detalle {
    display: flex;
    align-items: flex-start;
    gap: 15rem;
    /* Convertido de 384px a 15rem */

    @media (max-width: 767px) {
      flex-direction: column;
    }

    &__box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 5rem;
      /* Convertido de 128px a 5rem */
    }
  }

  .card-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.container {
  display: none;
  flex-direction: column;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }

  &__button {
    cursor: pointer;
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid #f4f5f8;
    background: #f6f8fa;
    &:hover {
      filter: brightness(90%);
    }
  }

  &__header {
    display: flex;
    padding: 16px;
    /* Convertido de 256px a 10px */
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    /* Convertido de 128px a 5rem */
    border-bottom: 1px solid #f4f5f8;
    /* Convertido de 16px a .625rem */
    background: #f9fbfc;
  }

  &__body {
    display: flex;
    padding: 16px;
    /* Convertido de 256px a 10px */
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    /* Convertido de 256px a 10px */

    &-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      /* Convertido de 128px a 5rem */
      width: 100%;
    }

    &-rows {
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }

    &-links {
      width: 100%;
      display: flex;
      padding-top: 1rem;
      justify-content: space-around;
      align-items: center;
      gap: 8px;
      border-top: 0.0625rem solid #f4f5f8;
    }
  }
}

.card-table {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.dot-status {
  width: 8px;
  height: 8px;
  border-radius: 100%;
}

.primary {
  height: 3rem;
  border-radius: 1rem;
}

.table-custom.transaction__table {
  table {
    border-collapse: collapse;
  }
  td,
  th {
    @media (max-width: 1160px) {
      padding: 8px;
      font-size: 12px;
    }
  }
  td,
  th {
    @media (max-width: 850px) {
      padding: 6px;
      font-size: 10px;
    }
  }
}

.transaction__table-link-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
