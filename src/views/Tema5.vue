<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Informes de resultados


    #t_5_1.titulo-segundo
      h2 5.1  Elaboración de un informe de resultados



    Separador
    br
    br
    #t_5_2.titulo-segundo
      h2 5.2  La importancia del informe de resultados






    Separador
    br
    br
    #t_5_3.titulo-segundo
      h2 5.3  Plan de mejora





























</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
