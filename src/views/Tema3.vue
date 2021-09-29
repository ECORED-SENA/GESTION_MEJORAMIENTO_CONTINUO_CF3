<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Acciones y planes de mejora
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t3-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.

    p.mb-5  Estos planes de mejora articulados de manera integrada brindan las decisiones estratégicas que se deben incorporar en los múltiples procesos de la empresa, para brindar un mejor servicio y que este sea percibido por los clientes. Estos planes también son la base para descubrir cuáles son las fallas que se están presentando y cuáles son las mejoras que se deben ejecutar, ante las posibles situaciones que se presenten de manera imprevista. El plan de mejora permite:
    .row.mb-5
      .col-lg-3
        figure.slideInLeft
          img(src="@/assets/curso/t3-i2.svg" alt='imagen decorativa')
      .col-lg-9
        p.mb-3  Hay muchas definiciones de diferentes autores y, sin embargo, todos expresan una idea similar a la que se indica a continuación:
        ul.lista-ul
          li
            i.fas.fa-check  
            p.mb-0 Identificar las causas que provocan las debilidades detectadas.
          li
            i.fas.fa-check  
            p.mb-0 Identificar las acciones de mejora a aplicar. Analizar su viabilidad.
          li
            i.fas.fa-check  
            p.mb-0 Establecer prioridades en las líneas de actuación.
          li
            i.fas.fa-check  
            p.mb-0 Disponer de un plan de las acciones a desarrollar en un futuro y de un sistema de seguimiento y control de las mismas.
          li
            i.fas.fa-check  
            p.mb-0 Negociar la estrategia a seguir.
          li
            i.fas.fa-check  
            p.mb-0 Incrementar la eficacia y eficiencia de la gestión.
          li
            i.fas.fa-check  
            p.mb-0 Motivar a la comunidad universitaria a mejorar el nivel de calidad.
          li
            i.fas.fa-check  
            p.mb-0 El plan elaborado en base a este documento permite tener de una manera organizada, priorizada y planificada las acciones de mejora.
          li
            i.fas.fa-check  
            p.mb-0 Su implantación y seguimiento debe ir orientado a aumentar la calidad de la enseñanza universitaria para que sea claramente percibida por su destinatario final.           
            





    #t_3_1.titulo-segundo
      h2 3.1  Para qué sirve un plan de mejoramiento



    Separador
    br
    br
    #t_3_2.titulo-segundo
      h2 3.2  Cómo implementar un plan de mejoramiento




































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
