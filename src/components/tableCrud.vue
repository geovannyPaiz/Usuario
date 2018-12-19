<template>
    
    <div class="col-sm-12" style="padding-left:5%; padding-top:2%; padding-right:5%; ">
    <table class="table table-hover" >
  <thead class="thead-dark">
    <tr>
      <th >Name</th>
      <th >UserName</th>
      <th >Email</th>
      <th >Phone</th>
      <th >Website</th>
      <th >Actions</th>
    </tr>
  </thead>
  <tbody v-for="data in info" :key="data.id" style="color:white; background-color: rgba(0, 0, 0, 0.5)">
   <tr>
     <td>{{data.name}}</td>
     <td>{{data.username}}</td>
     <td>{{data.email}}</td>
     <td>{{data.phone}}</td>
     <td>{{data.website}}</td>
     <td>
       <v-btn v-b-tooltip.hover @click="showModalEdit (data)" title="Edit user" fab dark small color="primary" style="background-color: blue; important!"><v-icon >edit</v-icon></v-btn>
       <v-btn v-b-tooltip.hover @click="showModalDelete(data)" title="Delete user" fab dark small color="primary" style="background-color: red; important!"><v-icon >delete_outline</v-icon></v-btn>
       <v-btn v-if="rowId==null || rowId==!data.id" @click="showRow(data.id)" v-b-tooltip.hover title="Show details" fab dark small color="primary" style="background-color: orange; important!"><v-icon >list</v-icon></v-btn>
       <v-btn v-if ="rowId==data.id" @click="hideRow()" v-b-tooltip.hover title="Hide details" fab dark small color="primary" style="background-color: orange; important!"><v-icon >highlight_off</v-icon></v-btn>
       </td>
   </tr>
   <tr v-if="rowId == data.id">
     <td colspan="6">
       <div class="row">
     <div class="col-sm-4">
       <h5>Address</h5>
       <br>
       Street: <strong>{{data.address.street}}</strong><br>
       Suite: <strong>{{data.address.suite}}</strong><br>
       City: <strong>{{data.address.city}}</strong><br>
       Zip Code: <strong>{{data.address.zipcode}}</strong>
     </div>
     <div class="col-sm-4" >
       <h5>Company</h5>
       <br>
       Name: <strong>{{data.company.name}}</strong><br>
       Cath Phrase: <strong>{{data.company.catchPhrase}}</strong><br>
       Bussiness: <strong>{{data.company.bs}}</strong>
     </div>
     <div class="col-sm-4">
       <h5>Geolocalization</h5>
       <br>
       Latutude: <strong>{{data.address.geo.lat}}</strong><br>
       Longitude: <strong>{{data.address.geo.lng}}</strong>
     </div>
     </div>
     </td>
   </tr>
  </tbody>
</table>

    <!--Eliminar Modal-->
    <b-modal ref="myModalRef" id="modalsm" size="sm" title="Delete User">
    Are you sure you want to delete the user <strong>{{user.name}}</strong>?
      <div slot="modal-footer" class="w-100">
         <b-btn size="sm" class="float-right btn-success" variant="danger" @click="deleteuser(user.id)" style="margin: 1%;">Ok</b-btn>
         <b-btn size="sm" class="float-right btn-disable" variant="disable" @click="hideModalDelete()" style="margin: 1%;">Cancelar</b-btn>
        </div>
  </b-modal>

    <form-edit-user ref="editUser"></form-edit-user>
    </div>
</template>
<script>
let url = "https://jsonplaceholder.typicode.com/users";

import axios from 'axios'
import formEditUser from './formEditUser.vue'
export default{
  components: {
    formEditUser
  },
  data () {
    return {
      rowId: null,
      info: [],
      user:{},
    }
  },
  created: function(){
    this.listar();
  },
  methods:{
showModalDelete (user) {
      this.$refs.myModalRef.show()
      this.user = user;
    },
    hideModalDelete () {
      this.$refs.myModalRef.hide()
    },
    
showModalEdit (user) {
      this.$refs.editUser.showModalEdit(user);},

    
  deleteuser(id) {
    this.url = url + '/'+ id
    console.log(this.url)
  axios.delete(url, {
    method: 'DELETE',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
 // .then(response => response.json())
  //.then(json => console.log(json))
  .then(
    function(data){ 
    response => response.json(),
    json => console.log(json),
    console.log(data);},
    (response) => {})
  .catch((e) => {
    console.error(e)
  })
  alert("success deleted!");
      this.$refs.myModalRef.hide()
},

  listar: function () {
    axios
      .get(url)
      .then(response => {this.info = response.data}).catch(e=>{
        this.error.push(e)
      })
  },

  showRow(idRow){
    console.log(idRow)
    this.rowId = idRow;
  },

  
  hideRow(){
    this.rowId = null;
  }
  }

}
</script>


