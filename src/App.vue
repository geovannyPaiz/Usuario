<template>
<div class="col-sm-12" :style="{'background-image': 'url(' + require('./assets/business-office-sunset-architecture-building.jpg') + ')'}">
<div class="col-sm-12" style="padding-left: 5%; padding-top: 2%; padding-bottom: 2%;">
  <h1>{{titulo}}</h1>
</div>
<div class="row" style="font-size:130%">
<form-user></form-user>
<table-crud></table-crud>
</div>
</div>
</template>

<script>
import formUser from './components/formUser.vue'
import tableCrud from './components/tableCrud.vue'

export default {
  name: 'App',
  components: {
    formUser,
    tableCrud
  },
  data () {
    return {
        titulo:'Users List',
      data:{
      }
      //
    }
  }
}
</script>
<style>
body{
  background-image: ('../assets/business-office-sunset-architecture-building.jpg')
}
</style>

