<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to='/'>
        <a class="navbar-brand" href="#">Formulario</a>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- <router-link to='/'>
            <li class="nav-item">
              <a class="nav-link" href="#">Binding</a>
            </li>
          </router-link> -->
          <router-link to='/listado'>
            <li class="nav-item">
              <a class="nav-link" href="#">Listado</a>
            </li>
          </router-link>

        </ul>
      </div>
    </nav>  
    
    
   </section>
</template>


<script>

  export default  {
    name: 'src-components-vista',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-vista {

  }
</style>
