<template lang="html">
  <section class="dashboard">
    <div class="row">
      <div class="col-xl-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="d-flex justify-content-between flex-wrap">
              <div>
                <i class="mdi mdi-cube text-danger icon-lg"></i>
              </div>
              <div>
                <p class="card-text text-right">Toplam Kullanıcı</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">450</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="d-flex justify-content-between flex-wrap">
              <div>
                <i class="mdi mdi-receipt text-warning icon-lg"></i>
              </div>
              <div>
                <p class="card-text text-right">Toplam Profesyonel Sayısı</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">3455</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="d-flex justify-content-between flex-wrap">
              <div>
                <i class="mdi mdi-poll-box text-teal icon-lg"></i>
              </div>
              <div>
                <p class="card-text text-right">Toplam Başarılı İşlem Sayısı</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">5693</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">İşlemler</h5>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                <tr>
                  <th class="border-bottom-0">İşlem No</th>
                  <th class="border-bottom-0">Kategori</th>
                  <th class="border-bottom-0">ALt Kategori</th>
                  <th class="border-bottom-0">Kullanıcı</th>
                  <th class="border-bottom-0">Ödeme Durumu</th>
                  <th class="border-bottom-0">Statu</th>
                  <th class="border-bottom-0"></th>
                  <th class="border-bottom-0"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>034</td>
                  <td>Iphone 7</td>
                  <td>12 May 2017</td>
                  <td>Dispatched</td>
                  <td>Credit card</td>
                  <td><label class="badge badge-teal">Approved</label></td>
                  <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                  <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
                </tr>
                <tr>
                  <td>035</td>
                  <td>Galaxy S8</td>
                  <td>15 May 2017</td>
                  <td>Dispatched</td>
                  <td>Internet banking</td>
                  <td><label class="badge badge-warning">Pending</label></td>
                  <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                  <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
                </tr>
                <tr>
                  <td>036</td>
                  <td>Amazon Echo</td>
                  <td>17 May 2017</td>
                  <td>Dispatched</td>
                  <td>Credit card</td>
                  <td><label class="badge badge-teal">Approved</label></td>
                  <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                  <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
                </tr>
                <tr>
                  <td>037</td>
                  <td>Google Pixel</td>
                  <td>17 May 2017</td>
                  <td>Dispatched</td>
                  <td>Cash on delivery</td>
                  <td><label class="badge badge-danger">Rejected</label></td>
                  <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                  <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
                </tr>
                <tr>
                  <td>038</td>
                  <td>Mac Mini</td>
                  <td>19 May 2017</td>
                  <td>Dispatched</td>
                  <td>Debit card</td>
                  <td><label class="badge badge-teal">Approved</label></td>
                  <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                  <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
  export default {
    name: 'home'
  }
</script>

<style scoped lang="scss">
</style>
