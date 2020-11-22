<template>

  <section class="src-components-listado">
    <div class="jumbotron">
     
    
      <div v-for="(x, index) in list" :key="index" > 
        
        <div v-if="list.length>0" >
          <h4>Nombre: {{x.nombre}}</h4>
          <h4>Edad: {{x.edad}}</h4>
          <h4>Email: {{x.email}}</h4>
          <hr>
        </div>

      </div>

      <div v-if="!list.length && !pidiendo" class="alert alert-warning my-2">
        <p>No hay ningun registro en mockapi</p>
      </div>
    
    </div>
    
  </section>

</template>

<script>

  export default  {
    name: 'src-components-listado',
    props: [],
    mounted () {
      this.getDAtosAxios()
    },
    data () {
      return {
        list:[]
        ,url:'https://5f7cf6e3834b5c0016b05b16.mockapi.io/datosTp6'
        ,pidiendo: true
      }
    },
    methods: {
      async getDAtosAxios(){
        try {
          let res = await this.axios.get(this.url)
          this.list = res.data
        } catch (error) {
          console.error('ERROR HTTP GET', error)
        } finally{
          this.pidiendo = false
        }
      },
      
    },
    computed: {

    }
  }


</script>

<style scoped lang="css">
  .jumbotron{
    background-color: #aaa;
  }
  hr{
    background-color: #fff;
  }
</style>
