<template>
  <div class="table-custom">
    <table>
      <thead>
        <tr>
          <th>{{ $t('reports.typeTransaction') }}</th>
          <th>{{ $t('reports.quantity') }}</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="table-custom__flex">
              <div class="dot bg-success"></div>
              {{ $t('reports.approved') }}
            </div>
          </td>
          <td>100</td>
          <td>$130.00</td>
        </tr>
        <tr>
          <td>
            <div class="table-custom__flex">
              <div class="dot bg-yellow"></div>
              {{ $t('reports.earring') }}
            </div>
          </td>
          <td>100</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>
            <div class="table-custom__flex">
              <div class="dot bg-red"></div>
              {{ $t('reports.cancel') }}
            </div>
          </td>
          <td>100</td>
          <td>$100.00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.projects-chart {
  height: 100%;
}

.card-btn {
  height: 55px;
  border-radius: 12px;
  border: 1px solid var(--border-border-complementario, #dde4ed);
  margin-left: 8px;

  @media (max-width: 767px) {
    padding: 0.75rem 1rem;
  }
}

.card-btn:hover {
  background-color: #3587ff;
  color: white;
}

.card__buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  @media (max-width: 530px) {
    width: 100%;
  }
  &-approved {
    height: 46px;
    background-color: rgba(3, 121, 89, 0.05);
    border: none;
    @media (max-width: 530px) {
      width: 100%;
    }
  }

  &-approved:hover {
    background-color: #091d8b;
    color: white;
  }

  &-pending {
    height: 46px;
    border: none;
    background-color: rgba(242, 199, 68, 0.05);
    @media (max-width: 530px) {
      width: 100%;
    }
  }

  &-pending:hover {
    background-color: #091d8b;
    color: white;
  }

  &-cancel {
    height: 46px;
    border: none;
    background-color: rgba(224, 30, 90, 0.05);
    @media (max-width: 530px) {
      width: 100%;
    }
  }

  &-cancel:hover {
    background-color: #091d8b;
    color: white;
  }
}
</style>
