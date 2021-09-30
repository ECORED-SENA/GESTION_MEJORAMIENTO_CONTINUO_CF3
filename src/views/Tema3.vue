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
    .row.mb-5
      .col-lg-2
        figure(data-aos="flip-up")
          img.nW(src="@/assets/curso/t3-ic1.png" alt='icono decorativo')   

      .col-lg-10(data-aos="fade-left")
        p.mb-3  Todo plan de mejora es necesario y fundamental para que la empresa logre descubrir por ese medio qué los afecta y la posibilidad de intervenir por medio de acciones de mejora, los cumplimientos y objetivos generales de las diferentes áreas que la conforman.
        p.mb-3  Se pueden describir algunos pasos a seguir para la elaboración del plan de mejora; a continuación, se indican los principales:

    figure(data-aos="flip-up")
      img(src="@/assets/curso/t3-i3.svg" alt='ejemplo de un plan de mejoramiento')    

    p.mb-5  Ahora se presenta una tabla que servirá como herramienta a la hora de establecer una priorización en las acciones de mejora identificadas anteriormente. Una vez establecidas las puntuaciones de cada factor se establecerá la suma de las mismas, lo que servirá de orientación para identificar como prioritarias aquellas que tengan una mayor puntuación total.
    .row.mb-5.justify-content-center
      .col-lg-8
        figure(data-aos="flip-up")
          img.nW(src="@/assets/curso/t3-t1.svg" alt='icono decorativo')   

    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t3-ic1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Priorización en acciones de mejora
                  p.text-small Para afianzar sus conocimientos en establecer las acciones de mejora de la empresa,  le invitamos a descargar la siguiente tabla para colocar en práctica los concepto vistos.
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    
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
