<template lang="html">

  <section class="badges">
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Kategori Listesi</h4>
            <div class="template-demo">
              <table class="table mb-0">
                <thead>
                <tr>
                  <th class="pl-0">Kategori</th>
                  <th class="text-right">Alt Kategori Sayısı</th>
                  <th class="text-right">İşlem</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="pl-0">Default label</td>
                  <td class="pr-0 text-right">
                    <b-badge pill variant="outline-primary">2</b-badge>
                  </td>
                  <td class="pr-0 text-right">
                    <a href="#" class="btn btn-outline-success btn-sm" v-b-modal.modalEdit>Düzenle</a></td>
                </tr>
                <tr>
                  <td class="pl-0">Primary label</td>
                  <td class="pr-0 text-right">
                    <b-badge pill variant="outline-info">5</b-badge>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0">Danger label</td>
                  <td class="pr-0 text-right">
                    <b-badge pill variant="outline-danger">1</b-badge>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0">Success label</td>
                  <td class="pr-0 text-right">
                    <b-badge pill variant="outline-success">9</b-badge>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0">Warning label</td>
                  <td class="pr-0 text-right">
                    <b-badge pill variant="outline-warning">4</b-badge>
                  </td>
                </tr>
                </tbody>
                <tfoot>
                <a href="#" class="btn btn-outline-primary btn-sm"  v-b-modal.modalAdd>Kategori Ekle</a></tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
          <b-modal id="modalEdit" title=".... Kategorisi" size="md">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Kategori Düzenle
        </h4>
        <b-form-group label="Kategori Adı" label-for="input11">
          <b-form-input type="text" id="input11" placeholder="Kategori Adı" size="lg"></b-form-input>
        </b-form-group>
        <b-form-group label="Alt Kategori" label-for="input11">
          <b-form-select v-model="selected" :options="options" size="lg"> </b-form-select>
        </b-form-group>
      </div>
    </div>
  </b-modal>
    <b-modal id="modalAdd" title="Kategori Ekle" size="md">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Kategori Ekle
          </h4>
          <b-form-group label="Kategori Adı" label-for="input11">
            <b-form-input type="text" id="input11" placeholder="Kategori Adı" size="lg"></b-form-input>
          </b-form-group>
        </div>
      </div>
    </b-modal>
  </section>



</template>

<script lang="js">
  export default {
    name: 'category'
  }
</script>

<style scoped lang="scss">
  .badges {

  }
</style>
