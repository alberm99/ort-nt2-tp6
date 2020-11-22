<template>

  <section class="src-components-formulario">
    
    <div class="jumbotron container-fluid my-3 mr-3 ml-3" >
      <h1>Formulario</h1>
      <hr>

      <form novalidate autocomplete="off" @submit.prevent="enviar()">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" class="form-control" v-model="v.f.nombre.$model">

          <div v-if="v.f.nombre.$error && v.f.nombre.$dirty" class="alert alert-danger mt-2">
            <div v-if="v.f.nombre.required.$invalid">{{v.f.nombre.required.$message}}</div>
            <div v-if="v.f.nombre.minimo.$invalid">{{v.f.nombre.minimo.$message}}</div>
            <div v-if="v.f.nombre.maximo.$invalid">{{v.f.nombre.maximo.$message}}</div>
          </div>
        </div>

        <div class="form-group">
          <label for="edad">Edad</label>
          <input type="number" id="edad" class="form-control" v-model="v.f.edad.$model">

          <div v-if="v.f.edad.$error && v.f.edad.$dirty" class="alert alert-danger mt-2">
            <div v-if="v.f.edad.required.$invalid">{{v.f.edad.required.$message}}</div>
            <div v-if="v.f.edad.between.$invalid">{{v.f.edad.between.$message}}</div>
          </div>
        </div>


        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control" v-model="v.f.email.$model">

          <div v-if="v.f.email.$error && v.f.email.$dirty" class="alert alert-danger mt-2">
            <div v-if="v.f.email.required.$invalid">{{v.f.email.required.$message}}</div>
            <div v-if="v.f.email.email.$invalid">{{v.f.email.email.$message}}</div>
          </div>
        </div>
      
        <div class="form-group">
          <input type="submit" class="btn btn-success my-3" value="Enviar" :disabled="v.f.$invalid">
        </div>

      </form>
      
      <!-- <Listado /> -->

      
    </div>
  </section>

</template>

<script>
  import { email, required, minLength, maxLength, between} from '@vuelidate/validators'
  import useVuelidate from '@vuelidate/core'

  //import Listado from './Listado.vue'
  
  export default  {
    name: 'src-components-formulario',
    props: [],
    components:{
      //Listado
    }
    ,mounted () {
      
    },
    created() {
      const rules = {
        f: {
          nombre: { 
            required 
            ,minimo: minLength(5)
            ,maximo: maxLength(15)
          }
          ,edad: { 
            required 
            ,between: between(18,120)
          }
          ,email: { required, email }
        }
      }

      const f = this.f
      this.v = useVuelidate(rules, {f})
    },
    data () {
      return {
        f: {
          nombre: '',
          edad : '',
          email : ''
        }
        , url:'https://5f7cf6e3834b5c0016b05b16.mockapi.io/datosTp6'
        ,v : null
        
      }
    },
    
    methods: {
      
      async enviar(){
        this.v.$touch()
        if(!this.v.f.$invalid){
          console.log(this.f)
          await this.sendDatosAxios(this.f)
          this.resetForm()
          this.v.$reset()
        }
      }

      ,async sendDatosAxios(datos){
        try {
          let res = await this.axios.post(this.url, datos, {'content-type': 'application/json'})
          console.log(res.data)
        } catch (error) {
          console.error('ERROR HTTP POST', error)
        }
      }
      ,resetForm(){ 
        this.v.f.nombre.$model = ''
        this.v.f.edad.$model = ''
        this.v.f.email.$model = ''
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
 
  
</style>
