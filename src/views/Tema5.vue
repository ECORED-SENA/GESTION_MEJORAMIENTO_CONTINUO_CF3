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
    p.mb-5  Este informe de gestión debe ser realizado por el colaborador que haya ejecutado la acción sobre la cual se va a rendir el informe. No tiene validez el que sea elaborado por una persona distinta. Se debe empezar con los siguientes pasos: 
    .row.mb-5
      .col-lg-3
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-i3.jpg', alt='imagen decorativa')
      .col-lg-9
        TabsC.color-primario.mb-5
          .py-3.py-md-4(titulo="Encabezado")
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                h4 Encabezado
                p.mb-3 Donde vaya registrada la siguiente información básica:
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p.mb-0  Tipo de documento.      
                  li
                    i.fas.fa-check
                    p.mb-0  Fecha de la que será el informe.          
                  li
                    i.fas.fa-check
                    p.mb-0  Área o departamento de la empresa que elabora el informe.
                  li
                    i.fas.fa-check
                    p.mb-0  Empresa o entidad a la cual pertenezca.             
                  li
                    i.fas.fa-check
                    p.mb-0  A quienes va dirigido. Si es abierta al público, este paso se obvia.

          .py-3.py-md-4(titulo="Introducción")
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                h4 Introducción
                p.mb-3 En este espacio se brinda una breve exposición de las razones por la cuales se elabora este informe. Esto se realiza con el fin de que quien lo lea, pueda entender todo el contexto de su objeto central de estudio y que se tuvo en cuenta para hacerlo.

          .py-3.py-md-4(titulo="Desarrollo del informe")
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                h4 Desarrollo del informe
                p.mb-3 Acá va el contenido y es lo que da razón al nombre de la actividad. Su desarrollo variará notablemente según el tipo de público y personajes a quienes vaya a ser expuesto, pero se deben considerar los siguientes puntos clave:
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p.mb-0  <b>Antecedentes:</b> cuáles fueron las razones que dieron pie al estudio realizado y por qué del informe.
                  li
                    i.fas.fa-check
                    p.mb-0  <b>Fuentes de información:</b> de donde se extrajo la información que nutre el informe.
                  li
                    i.fas.fa-check
                    p.mb-0  <b>Metodología:</b> comentar procedimientos que han sido usados para hacerlo.
                  li
                    i.fas.fa-check
                    p.mb-0  <b>Problemas encontrados:</b> qué situaciones se han presentado que han sido obstáculo en su elaboración.
                  li
                    i.fas.fa-check
                    p.mb-0  <b>Otros datos a considerar:</b> en este punto se detallan situaciones de orden jurídico o económico, que son muy relevantes al momento de rendir informes, máxime si se está ante inversores o accionistas de alguna empresa.
                  li
                    i.fas.fa-check
                    p.mb-0  <b>Conclusiones y recomendaciones:</b> en las conclusiones se busca concreción de cifras, detalles y resultados para una mayor comprensión del público a quien se dirige el informe. Las recomendaciones se hacen con la intención de mejorar los datos a la fecha, formuladas de manera que sean realistas, útiles y alcanzables (Fabra, 2017).


    Separador
    br
    br
    #t_5_2.titulo-segundo
      h2 5.2  La importancia del informe de resultados

    .row.mb-5
      .col-lg-2
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t5-ic2.svg', alt='imagen decorativa')
      .col-lg-10
        p.mb-3  Por lo general, en todas las organizaciones, pero especialmente en las grandes empresas, la realización de los informes es una actividad recurrente de la mayoría de los empleados. En ellos se busca resumir las actividades desarrolladas dentro de la empresa, para irradiar lo que se ha hecho y, si los resultados son positivos, estos informes servirán para conseguir nuevos inversionistas, robusteciendo el capital de la empresa.
        p.mb-3  Los elementos más importantes que debe contener un Informe de desempeño laboral son los siguientes:




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
