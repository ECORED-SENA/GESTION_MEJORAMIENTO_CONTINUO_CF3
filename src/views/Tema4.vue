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

    .row.mb-5.justify-content-center
      .col-lg-8
        .bloque-texto-d.color-acento-contenido.p-4.mb-5
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            .h5.text-bold Mejorar un proceso significa cambiarlo para hacerlo más efectivo, eficiente y adaptable. Es decir, qué cambiar y cómo cambiar depende del enfoque específico del empresario y del proceso.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 - De acuerdo con James Harrington (1993)

        .bloque-texto-d.color-acento-contenido.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            .h5.text-bold El mejoramiento continuo es una conversión en el mecanismo viable y accesible al que las empresas de los países en vías de desarrollo cierren la brecha tecnológica que mantienen con respecto al mundo desarrollado.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 - Fadi Kabboul (1994)



    #t_4_1.titulo-segundo
      h2 4.1  Etapas necesarias para mejoramiento continuo

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.custom-cardBlock.ltr.slideInUp
          .bloque-texto-g__texto.p-4
            p.mb-0 Una de las técnicas sugeridas para implementar el plan de mejora es <b>el ciclo PDCA</b>, también conocido como ciclo de mejora continua o ciclo de <i>Deming</i>; y suele ser el más empleado en la implementación de sistema alguno para hacer un plan de mejoramiento continuo.
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t4-i2.svg')})`}"
          )


    p.mb-5  Estas etapas se explican a continuación:
    TabsA.color-secundario.mb-5
      .tarjeta.color-acento-contenido.p-4(titulo="<i>Plan</i> (planificar)")
        h4 <i>Plan</i> (planificar)
        .row.mb-5
          .col-lg-3
            figure.slideInLeft
              img(src='@/assets/curso/t4-i3.svg', alt='imagen decorativa')
          .col-lg-9
            p En esta etapa se identifican cuáles son las actividades que la organización debe mejorar, y se planifican las acciones para fijar los objetivos que logren este fin.

      .tarjeta.color-acento-contenido.p-4(titulo="<i>Do</i> (hacer)")
        h4 <i>Do</i> (hacer)
        .row.mb-5
          .col-lg-3
            figure.slideInLeft
              img(src='@/assets/curso/t4-i4.svg', alt='imagen decorativa')
          .col-lg-9
            p Acá se hacen los cambios que se necesiten para lograr los cambios necesarios, con base en una pequeña muestra que permita evaluarlos antes de hacerlos efectivos.

      .tarjeta.color-acento-contenido.p-4(titulo="<i>Check</i> (verificar)")
        h4 <i>Check</i> (verificar)
        .row.mb-5
          .col-lg-3
            figure.slideInLeft
              img(src='@/assets/curso/t4-i5.svg', alt='imagen decorativa')
          .col-lg-9
            p Una vez se ejecuten los cambios, se toman un periodo de prueba para confirmar que estén funcionando correctamente. Si no hay mejora con lo realizado, se deben volver a modificar las acciones para mejorar.

      .tarjeta.color-acento-contenido.p-4(titulo="<i>Check</i> (verificar)")
        h4 <i>Act</i> (actuar)
        .row.mb-5
          .col-lg-3
            figure.slideInLeft
              img(src='@/assets/curso/t4-i6.svg', alt='imagen decorativa')
          .col-lg-9
            p Al finalizar el periodo de prueba los resultados son evaluados y comparados con los históricos que se tengan sobre la actividad a la cual se la ha hecho la mejora. Si ha habido mejora, se establece de manera definitiva. En caso contrario, hay dos posibilidades: se mejora lo realizado o se cambia esa acción.
    
    p.mb-5  Estas fases en español son las mismas de Planificar, Hacer, Verificar y Actuar: PHVA.
    .row.mb-5.justify-content-center
      .col-lg-5
        figure
          img(src='@/assets/curso/t4-i7.svg', alt='imagen decorativa')



    Separador
    br
    br
    #t_4_2.titulo-segundo
      h2 4.2  Tipos de mejoramiento

    p.mb-5  Hay una gran variedad de tipos de formas para lograr aumentar la efectividad en los procesos que tienen que ver con el mejoramiento continuo en las empresas que desean alcanzar un nivel de excelencia en sus procesos internos para satisfacción de sus accionistas, propietarios y en aras de los clientes finales, como los siguientes:
    .row.justify-content-center.mb-5
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row.justify-content-center(titulo="Tipo 1: El modelo PDCA")
          .col-md-4
            figure.slideInLeft
              img(src='@/assets/curso/t4-i8.svg', alt='imagen decorativa')

          .col-md-7.mb-4.mb-md-0
            p Ya definido anteriormente, es considerado el modelo base de la mejora continua, porque su ciclo es repetido y sin fin. Tiene relación con algunas normas ISO, como la ISO 9001 sobre la gestión de calidad.
        
        .row.justify-content-center(titulo="Tipo 2: Análisis de valor")
          .col-md-4
            figure.slideInLeft
              img(src='@/assets/curso/t4-i9.svg', alt='imagen decorativa')

          .col-md-7.mb-4.mb-md-0
            p Hace hincapié en buscar valores agregados o añadidos al producto, pero tomando en consideración la reducción de costos. Busca alcanzar los mismos estándares de calidad a menor precio.

        .row.justify-content-center(titulo="Tipo 3: Los 5 porqués")
          .col-md-4
            figure.slideInLeft
              img(src='@/assets/curso/t4-i10.svg', alt='imagen decorativa')

          .col-md-7.mb-4.mb-md-0
            p Este método plantea la elaboración de preguntas en sentido inverso a la ocurrencia del hecho, para detectar las fallas que se hayan dado en el proceso; no necesariamente son cinco preguntas.

        .row.justify-content-center(titulo="Tipo 4: Estratificación")
          .col-md-4
            figure.slideInLeft
              img(src='@/assets/curso/t4-i11.svg', alt='imagen decorativa')

          .col-md-7.mb-4.mb-md-0
            p Herramienta que divide en niveles la información del evento. Al presentarse un problema, los datos se seleccionan con base en criterios como materiales, tipos de defectos, grupos de trabajo entre otros criterios. Al hacerlo así, se busca separar lo que ha originado el fallo y atenderlas por separado.


        .row.justify-content-center(titulo="Tipo 5: <i>Lean Manufacturing</i>")
          .col-md-4
            figure.slideInLeft
              img(src='@/assets/curso/t4-i12.svg', alt='imagen decorativa')

          .col-md-7.mb-4.mb-md-0
            p Este modelo Lean Manufacturing se centra en las necesidades del cliente o consumidor. Desde allí inicia el proceso de mejoramiento y con base en ello se hace uso de los recursos para la reducción de costos, respuestas inmediatas y la optimización de los ciclos de trabajo. 

        .row.justify-content-center(titulo="Tipo 6: DFSS")
          .col-md-4
            figure.slideInLeft
              img(src='@/assets/curso/t4-i13.svg', alt='imagen decorativa')

          .col-md-7.mb-4.mb-md-0
            p Siglas de <i>Desing for Six Sigma</i>. Es un método específico para lanzamiento de productos o servicios nuevos. Para llegar al nivel requerido de calidad y poder ser lanzados, deben pasar por cinco etapas que las empresas deben tener en cuenta al instante de introducir ese nuevo elemento al mercado.

        .row.justify-content-center(titulo="Tipo 7: Diagrama de afinidad")
          .col-md-4
            figure.slideInLeft
              img(src='@/assets/curso/t4-i14.svg', alt='imagen decorativa')

          .col-md-7.mb-4.mb-md-0
            p Este método busca dar claridad a situaciones que se presentan en algunos problemas, donde es muy difícil encontrarlos a primera vista. Se trata de agrupar ideas o temas que se relacionen entre sí, estableciendo vínculos que no se consideraron al inicio, al momento de tomar las decisiones.






























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
