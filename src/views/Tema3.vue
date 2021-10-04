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
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t3-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Los planes de mejoramiento continuo son conjuntos de medidas que se toman para generar los cambios necesarios para que una organización, empresa o negocio pueda mejorar su rendimiento. De allí se desprenden las acciones de mejora que se deben aplicar para lograr estos objetivos (Educación Navarra, s.f.).

    p.mb-5  Estos planes de mejora articulados de manera integrada brindan las decisiones estratégicas que se deben incorporar en los múltiples procesos de la empresa, para brindar un mejor servicio y que este sea percibido por los clientes. Estos planes también son la base para descubrir cuáles son las fallas que se están presentando y cuáles son las mejoras que se deben ejecutar, ante las posibles situaciones que se presenten de manera imprevista. El plan de mejora permite:
    .row.mb-5
      .col-lg-3
        figure.slideInLeft
          img(src="@/assets/curso/t3-i2.svg" alt='imagen decorativa')
      .col-lg-9
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
            p.mb-0 El plan elaborado con base a este documento permite tener de una manera organizada, priorizada y planificada las acciones de mejora.
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
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/auditoria_interna_de_gestion_mejora_continua_2015.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .row.mb-5.justify-content-center
      .col-lg-8
        .bloque-texto-d.color-acento-contenido.p-4.mb-5
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            .h5.text-bold La administración de la calidad total requiere de un proceso constante, que será llamado mejoramiento continuo, donde la perfección nunca se logra, pero siempre se busca.
            i.fas.fa-quote-right
          .bloque-texto-d__autor.text-normal
            .h6.mb-0 - De acuerdo con Deming (1996)

    
    Separador
    br
    br
    #t_3_2.titulo-segundo
      h2 3.2  Cómo implementar un plan de mejoramiento

    .row.mb-5
      .col-lg-7
        p.mb-3  Para tener una mayor certeza de que el plan de mejora será un éxito, es muy importante que se identifique y defina de la mejor manera el problema. Muy seguramente existan varios problemas por tratar, pero se debe destacar o conocer muy bien la importancia del mismo para saber si se puede solucionar.
        p.mb-3  Se debe tener presente que la implementación o puesta en marcha de un plan de mejora empresarial, siempre está ligado y depende de los recursos financieros de la empresa, por lo que se deben maximizar los resultados que se obtengan al hacerlo en una problemática que sea relevante y que su solución dependa de lo que se pueda hacer internamente por parte de la organización. 

      .col-lg-5
        figure(data-aos="flip-up")
          img.nW(src="@/assets/curso/t3-i4.jpg" alt='icono decorativo')

    .row.mb-5
      .col-lg-5
        figure(data-aos="flip-left")
          img.nW(src="@/assets/curso/t3-i4.svg" alt='icono decorativo')
      .col-lg-7
        p.mb-3  Para seleccionar el problema te recomendamos realizar lo siguiente:
        ul.lista-ul.slideInUp(data-aos="fade-up")
          li
            i.fas.fa-check
            p.mb-0  Listar todos los posibles problemas a solucionar.
          li
            i.fas.fa-check
            p.mb-0  Identificar causas y relaciones en la lista de problemas para simplificar.
          li
            i.fas.fa-check
            p.mb-0  Definir criterios para cuantificar la relevancia del problema, por ejemplo: ¿qué impacto tiene el problema en los ingresos de la empresa?, ¿qué consecuencias implica la no atención del problema?, ¿es viable financiera o técnicamente?, entre otros.
          li
            i.fas.fa-check
            p.mb-0  Definir una escala para evaluar cada problema según los criterios establecidos. Por ejemplo: la escala puede ser del 1 al 5, donde 1 indica que el problema tiene poco impacto en los ingresos de la empresa y 5 que el problema tiene un impacto significativo en los ingresos de la empresa.
          li
            i.fas.fa-check
            p.mb-0  El grupo de trabajo debe puntuar cada problema según los criterios establecidos y posteriormente se realizará una ponderación de los resultados para clasificar los problemas; para esta etapa se puede usar una herramienta especializada en encuestas como QuestionPro.
          li
            i.fas.fa-check
            p.mb-0  Discutir los resultados finales con el grupo de trabajo, en caso que se detecte empates en los resultados para llegar a un consenso.































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
