<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Fases y técnicas a implementar
    .row.mb-5
      .col-lg-4
        figure.slideInLeft
          img(src="@/assets/curso/t4-i1.svg" alt='imagen decorativa')
      .col-lg-8
        p.mb-3.slideInUp  Para llegar a una mejora de procesos en el entorno empresarial, es casi que obligatorio que se presente un cambio drástico y relevante en la cultura de la misma empresa. Esto implicará o hará que se pueda esperar de los colaboradores, un compromiso paulatino y sostenido en el tiempo, de parte de todos los departamentos de la empresa. Se presentarán obstáculos en el camino como resultado de no tener en cuenta alguna de las fases que son convenientes asumir para lograr un resultado óptimo.
        p.mb-3.slideInUp  Teniendo claro que todo esto se hace con base en que cada acción está sujeta a ser modificada y mejorada, ya que <b>“todo puede hacerse mejor”</b>, se espera que los resultados de un buen proyecto de mejora sean:  
        ul.lista-ul.slideInUp
          li
            i.fas.fa-check
            p.mb-0  Ahorro de costos de funcionamiento.
          li
            i.fas.fa-check
            p.mb-0  Incremento de la productividad.
          li
            i.fas.fa-check
            p.mb-0  Reducción de demoras.
          li
            i.fas.fa-check
            p.mb-0  Agilizar procedimientos.
          li
            i.fas.fa-check
            p.mb-0  Mejorar la calidad de los servicios.    


    #t_4_1.titulo-segundo
      h2 4.1  Etapas necesarias para mejoramiento continuo



    Separador
    br
    br
    #t_4_2.titulo-segundo
      h2 4.2  Tipos de mejoramiento




































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
