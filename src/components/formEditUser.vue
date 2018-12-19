<template>
    <b-modal ref="myModalEdit" size="lg" title="Edit User">
      <div class="col-sm-12">
        <b-form >
          <b-card no-body>
      <b-tabs small card v-model="tabIndex">
        <b-tab title="General">
        <h5>General</h5> <b-form-group id="nombregroup"
                    label="Name:"
                    label-for="nombreInput">
        <b-form-input id="nombreInput"
                      type="text"
                      v-model="form.nombre"
                      required
                      placeholder="Name">
        </b-form-input>
      </b-form-group>
      
      <b-form-group id="usernameGroup"
                    label="Username:"
                    label-for="usernameInput">
        <b-form-input id="usernameInput"
                      type="text"
                      v-model="form.username"
                      required
                      placeholder="Username">
        </b-form-input>
      </b-form-group>
        
      <b-form-group id="emailGroup"
                    label="Email address:"
                    label-for="emailInput">
        <b-form-input id="emailInput"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="phoneGroup"
                    label="Phone:"
                    label-for="phoneInput">
        <b-form-input id="phoneInput"
                      type="text"
                      v-model="form.phone"
                      required
                      placeholder="phone">
        </b-form-input>
      </b-form-group>

      <b-form-group id="SitioWebGroup"
                    label="Website:"
                    label-for="SitioWebInput">
        <b-form-input id="SitioWebInput"
                      type="text"
                      v-model="form.website"
                      required
                      placeholder="Website">
        </b-form-input>
      </b-form-group>
        </b-tab>
        <b-tab title="Address"><h5>Address</h5>
      <b-form-group id="StreetGroup"
                    label="Street:"
                    label-for="StreetInput">
        <b-form-input id="StreetInput"
                      type="text"
                      v-model="form.street"
                      required
                      placeholder="Street">
        </b-form-input>
      </b-form-group>
      <b-form-group id="SuiteGroup"
                    label="Suite:"
                    label-for="SuiteInput">
        <b-form-input id="SuiteInput"
                      type="text"
                      v-model="form.suite"
                      required
                      placeholder="Suite">
        </b-form-input>
      </b-form-group>
      <b-form-group id="CityGroup"
                    label="City:"
                    label-for="CityInput">
        <b-form-input id="CityInput"
                      type="text"
                      v-model="form.city"
                      required
                      placeholder="City">
        </b-form-input>
      </b-form-group>
        </b-tab>
        <b-tab title="Company">
        <h5>Company</h5>
        
      <b-form-group id="nameGroup"
                    label="name:"
                    label-for="nameInput">
        <b-form-input id="nameInput"
                      type="text"
                      v-model="form.namecompany"
                      required
                      placeholder="name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="catchPhraseGroup"
                    label="Catch Phrase:"
                    label-for="catchPhraseInput">
        <b-form-input id="catchPhraseInput"
                      type="text"
                      v-model="form.catchPhrase"
                      required
                      placeholder="catchPhrase">
        </b-form-input>
      </b-form-group>
      <b-form-group id="bsGroup"
                    label="Busssiness:"
                    label-for="bsInput">
        <b-form-input id="bsInput"
                      type="text"
                      v-model="form.bs"
                      required
                      placeholder="bs">
        </b-form-input>
      </b-form-group>
        </b-tab>
        <b-tab title="Geolocation">
          
          <label>Please drag the map marker</label>
      <div class="row" style="height:350px;"> 
        <div class="col-sm-4">
          <h5>Geolocation</h5>
          
      <b-form-group id="latGroup"
                    label="Latitude:"
                    label-for="latInput">
        <b-form-input id="latInput"
                      type="text"
                      v-model="form.lat"
                      required
                      placeholder="latitude">
        </b-form-input>
      </b-form-group>
      
      <b-form-group id="lngGroup"
                    label="Longitude:"
                    label-for="lngInput">
        <b-form-input id="lngInput"
                      type="text"
                      v-model="form.lng"
                      required
                      placeholder="longitude">
        </b-form-input>
      </b-form-group>
        </div>
        <div class="col-sm-8">
        <GmapMap 
  :center="center"
  :zoom="15"
  map-type-id="terrain"
  style="width: 100%; height: 300px"
>
   <GmapMarker ref="myMarker"
    :position="center"
    :draggable= true
    @drag="updateCoordinates"
    />
</GmapMap>
</div>
      </div>
        </b-tab>
      </b-tabs>
    </b-card>
      </b-form>
      <div class="text-center">
      <b-button-group class="mt-2">
        <b-btn @click="tabIndex--">Previous</b-btn>
        <b-btn @click="tabIndex++">Next</b-btn>
      </b-button-group>
    </div>
      </div>
      <div slot="modal-footer" class="w-100">
         <b-btn size="sm" class="float-right btn-primary" variant="Primary" @click="updatePost(user.id)" style="margin: 1%;">Edit</b-btn>
         <b-btn size="sm" class="float-right btn-disable" variant="disable" @click="hideModalEdit" style="margin: 1%;">Cancelar</b-btn>
        </div>
    </b-modal>
</template>
<script>
import axios from 'axios'
import {gmapApi} from 'vue2-google-maps'
let url = "https://jsonplaceholder.typicode.com/users";
export default {
  computed: {
    google: gmapApi
  },
  data () {
    return {
      tabIndex: 0,
      center:{
        lat:'',
        lng:''
      },
      user:{},
      form: {
          id:'',
        email: '',
        nombre: '',
        username: '',
        phone: '',
        website: '',
        street:'',
        suite:'',
        city:'',
            lat:'',
            lng:'',
        zipcode:'',
        namecompany:'',
        catchPhrase:'',
        bs:'',
              },
    }
  },
  methods:{
    
showModalEdit (user) {
      this.$refs.myModalEdit.show();
      this.form.nombre=user.name;
      this.form.email= user.email;
      this.form.username= user.username;
      this.form.phone = user.phone;
      this.form.website = user.website;
      this.form.street = user.address.street;
      this.form.suite = user.address.suite;
      this.form.city = user.address.city;
      this.form.zipcode = user.address.zipcode;
      this.form.lat = user.address.geo.lat;
      this.form.lng = user.address.geo.lng;
      this.form.namecompany= user.company.name;
      this.form.catchPhrase = user.company.catchPhrase;
      this.form.bs = user.company.bs;
      this.form.id = user.id;
      this.user = user;
      this.center.lat = Number(user.address.geo.lat);
      this.center.lng = Number(user.address.geo.lng);
    },
    hideModalEdit () {
      this.$refs.myModalEdit.hide()
    },
     updateCoordinates(location) {
          console.log(location)
          this.form.lat=location.latLng.lat();
          this.form.lng=location.latLng.lng();
           /* this.coordinates = {
                lat: location.latLng.lat(),
                lng: location.latLng.lng(),
            };*/
        },
  updatePost: function (id) {
      console.log(id)
  axios.put(url+'/'+id, {
    method: 'PUT',
    body: JSON.stringify({
    name: this.form.name,
    username: this.form.username,
    email: this.form.email,
    phone: this.form.phone,
    website: this.form.website,
    address:{
      street:this.form.street,
      city:this.form.city,
      suite:this.form.suite,
      zipcode:this.form.zipcode,
      geo:{
        lat:this.form.lat,
        lng:this.form.lng
      }
      },
    company:{
      name:this.form.namecompany,
      catchPhrase:this.form.catchPhrase,
      bs:this.form.bs
    } 
    }),
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
  alert("successfully updated");
      this.$refs.myModalEdit.hide()
},
    }

  
}
</script>

