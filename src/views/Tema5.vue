<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Informes de resultados
    .row.mb-5
      .col-lg-4.slideInLeft
        figure
          img(src='@/assets/curso/t5-i1.jpg', alt='imagen decorativa')
      .col-lg-8.slideInUp
        p.mb-3  El informe de resultados es una evaluación global que se ejecuta en los procesos de la empresa, reflejando la calidad y satisfacción de los productos o servicios obtenidos en el tiempo, que pueden ser presentados en un documento para evaluar la ejecución de una tarea o conjunto de tareas en relación a unos objetivos propuestos.
        p.mb-3  Al momento de realizar este tipo de informes, se debe tener en cuenta que los mismos deben ser eficaces, comprensibles, bien presentados, con una estructura ordenada, ser claros y diáfanos en su exposición, con una redacción eficaz y ser breve.

    .row.mb-5.justify-content-center
      .col-lg-7
        figcaption.customCaption.mb-2 <b>Figura</b> La norma ISO 9004:2018 y la aplicación del cuadro de mando integral para el éxito sostenido
        figure
          img.shadow-box(src='@/assets/curso/t5-i2.jpg', alt='imagen decorativa')
        figcaption  Nota.  Tomada de Superservicios.gov.co (2015).

    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t5-ic1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Priorización en acciones de mejora
                  p.text-small Para afianzar sus conocimientos en establecer las acciones de mejora de la empresa,  le invitamos a descargar la siguiente tabla para colocar en práctica los concepto vistos.
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/auditoria_interna_de_gestion_mejora_continua_2015.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download




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
