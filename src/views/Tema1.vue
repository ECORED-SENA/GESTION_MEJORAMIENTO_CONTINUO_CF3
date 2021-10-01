<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Indicadores de gestión
    .row.mb-5
      .col-lg-4
        figure.slideInLeft
          img(src='@/assets/curso/t1-i1.jpg', alt='imagen decorativa')
      .col-lg-8.slideInUp
        p.mb-3  Los indicadores de gestión o conocidos como KPI (del inglés <i>Key Performance Indicator</i>) son las formas o medios que una empresa utiliza para conocer si sus objetivos generales, sus áreas funcionales y operativas, su personal o algún proyecto en específico, se están logrando.
        p.mb-3  También conocidos como indicadores de calidad, que <b>“evalúan el resultado final de las empresas basándose en un estándar el cual responde al nivel de calidad objetivo que la empresa espera y desea alcanzar”</b> (isotools.org, 2015).
        p.mb-3  Este tipo de método permite conocer qué está funcionando y qué no. Es una forma de analizar resultados de manera numérica y permite conocer si las acciones que se adelantan por parte de la empresa son consecuentes y logran los objetivos propuestos por la organización. 

    p.mb-5  A continuación, se mencionan las siguientes características que componen un plan de mejora empresarial utilizando KPI.

    .row.mb-5.justify-content-center
      .col-lg-10 
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t1-info1.svg', alt='caracteristicas de un plan de mejora')

          .tarjeta.color-secundario.p-3.shadow-box(x="9%" y="80%")
            p Si una acción no puede ser medida cuantitativamente, no puede ser considerada un KPI.
          .tarjeta.color-secundario.p-3.shadow-box(x="29.5%" y="80%")
            p El resultado que arroje la muestra, debe ser fuente de toma de decisiones para la organización.
          .tarjeta.color-secundario.p-3.shadow-box(x="50%" y="80%")
            p Los indicadores que se tomen para estas muestras, deben ser muy realistas y centrados. No son válidos los que solamente puedan ir a favor de la organización.
          .tarjeta.color-secundario.p-3.shadow-box(x="71%" y="80%")
            p Teniendo buenos datos se pueden tomar decisiones que sean relevantes para la organización.
          .tarjeta.color-secundario.p-3.shadow-box(x="91%" y="80%")
            p Deben ser medidos constantemente, ya que esto será fundamental para saber que funciona y que no funciona de lo que se está haciendo.


    h3.titulo-tercero Ahora bien, ¿cuáles son los requisitos de los KPI?
    p.mb-5  Entre los requisitos más conocidos de los indicadores KPI, deducimos que siguen la metodología SMART (Specific, Measurable, Achievable, Relevant, Timely) o lo que en español viene a ser específicos, medibles, adaptados, relevantes y oportunos. A continuación, se pueden ver los que se utilizan.
    .row.mb-5.justify-content-center
      .col-lg-10 
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t1-info2.svg', alt='requisitos de los indicadores')

          .tarjeta.color-secundario.p-3.shadow-box(x="9%" y="80%")
            p Deben medir un único aspecto, tienen que ser concretos y un indicador por cada elemento a medir.
          .tarjeta.color-secundario.p-3.shadow-box(x="29.5%" y="80%")
            p Los indicadores deben ser medibles y cuantificables, medidas exactas para conocer con precisión la situación. Por ejemplo, euros, dólares, kilómetros.
          .tarjeta.color-secundario.p-3.shadow-box(x="50%" y="80%")
            p Deben tener la posibilidad de ajustarse dependiendo de las necesidades que se requieran.
          .tarjeta.color-secundario.p-3.shadow-box(x="71%" y="80%")
            p Es importante que los indicadores KPI de los que se dispone, sean importantes. De nada sirve tener muchos indicadores que nos aporten datos si no ofrecen datos útiles.
          .tarjeta.color-secundario.p-3.shadow-box(x="91%" y="80%")
            p Deben ofrecer la oportunidad de medirlos en un tiempo determinado. Ya sea diariamente o semanalmente.

    h3.titulo-tercero Tipos de KPI
    p.mb-5 Según el tipo de negocio, se tienen unos KPI específicos; así, para cada sector empresarial o tipo de empresa, hay formas de mediciones que son ayudas en la obtención de datos y que brindan ventajas competitivas. Encontrando los siguientes:

    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario.p-4(titulo="1. KPI de ventas")
        h4 1. KPI de ventas
        .row.mb-5
          .col-lg-2
            figure.slideInLeft
              img(src='@/assets/curso/t1-ic1.svg', alt='imagen decorativa')
          .col-lg-9
            p.mb-3 Esta forma de medición está enfocada en el área de ventas para facturar servicios o productos. Generalmente se compone de alrededor de 30 indicadores que son los que monitorizan las ventas.
            p.mb-3.text-bold  Ejemplos de KPI de ventas:
            ul.lista-ul.slideInUp(data-aos="fade-up")
              li
                i.fas.fa-check
                p.mb-0  La satisfacción del cliente.
              li
                i.fas.fa-check
                p.mb-0  El compromiso y la motivación del equipo comercial.
              li
                i.fas.fa-check
                p.mb-0  Niveles de facturación.
              li
                i.fas.fa-check
                p.mb-0  Número de visitas cerradas.

      .tarjeta.color-secundario.p-4(titulo="2. KPI de redes sociales")
        h4 2. KPI de redes sociales
        .row.mb-5
          .col-lg-2
            figure.slideInLeft
              img(src='@/assets/curso/t1-ic2.svg', alt='imagen decorativa')
          .col-lg-9
            p.mb-3 Este KPI muestra y cuantifica el impacto o repercusión de la inversión que han efectuado las empresas en redes sociales. Con esto se evalúa el rendimiento y lo que este tipo de canal o redes sociales, contribuye al desarrollo de la empresa.
            p.mb-3.text-bold  Ejemplos de KPI de redes sociales:
            ul.lista-ul.slideInUp(data-aos="fade-up")
              li
                i.fas.fa-check
                p.mb-0  Número de seguidores
              li
                i.fas.fa-check
                p.mb-0  Alcance
              li
                i.fas.fa-check
                p.mb-0  Engagement
              li
                i.fas.fa-check
                p.mb-0  CTR (<i>Click Through Rate</i>)

      .tarjeta.color-secundario.p-4(titulo="3. KPI Retail")
        h4 3. KPI Retail
        .row.mb-5
          .col-lg-2
            figure.slideInLeft
              img(src='@/assets/curso/t1-ic3.svg', alt='imagen decorativa')
          .col-lg-9
            p.mb-3 El objetivo de este indicador de gestión es el de hacer crecer las ventas y disminuir los gastos en el sector de consumo y de textiles.
            p.mb-3.text-bold  Ejemplos de KPI de retail:
            ul.lista-ul.slideInUp(data-aos="fade-up")
              li
                i.fas.fa-check
                p.mb-0  Número de visitas
              li
                i.fas.fa-check
                p.mb-0  Horas con mayor tránsito
              li
                i.fas.fa-check
                p.mb-0  Ventas por visita
              li
                i.fas.fa-check
                p.mb-0  Ticket promedio

      .tarjeta.color-secundario.p-4(titulo="4. KPI de logística")
        h4 4. KPI de logística
        .row.mb-5
          .col-lg-2
            figure.slideInLeft
              img(src='@/assets/curso/t1-ic4.svg', alt='imagen decorativa')
          .col-lg-9
            p.mb-3 Son indicadores de gestión específicos y sirven para calcular el rendimiento y alcanzar el nivel óptimo sobre los distintos procesos del negocio. Dentro de estos se pueden considerar: mejorar la calidad, aumentar productividad y disminuir errores, teniendo esto como base del mejoramiento continuo.
            p.mb-3.text-bold  Ejemplos de KPI de logística:
            ul.lista-ul.slideInUp(data-aos="fade-up")
              li
                i.fas.fa-check
                p.mb-0  Rotación de inventario
              li
                i.fas.fa-check
                p.mb-0  Rotura de <i>stock</i>
              li
                i.fas.fa-check
                p.mb-0  Plazo de aprovisionamiento
              li
                i.fas.fa-check
                p.mb-0  Coste de transporte sobre ventas

      .tarjeta.color-secundario.p-4(titulo="5. KPI de producción")
        h4 5. KPI de producción
        .row.mb-5
          .col-lg-2
            figure.slideInLeft
              img(src='@/assets/curso/t1-ic5.svg', alt='imagen decorativa')
          .col-lg-9
            p.mb-3 Va acorde con el indicador de gestión previamente descrito y está encaminado en favorecer la mejora constante de los procesos de producción al interior de la organización. 
            p.mb-3.text-bold  Ejemplos de KPI de producción:
            ul.lista-ul.slideInUp(data-aos="fade-up")
              li
                i.fas.fa-check
                p.mb-0  Coste medio de la orden de compra
              li
                i.fas.fa-check
                p.mb-0  Errores de previsión de demanda
              li
                i.fas.fa-check
                p.mb-0  Tiempo de inactividad
              li
                i.fas.fa-check
                p.mb-0  Horas trabajadas en producción             

      .tarjeta.color-secundario.p-4(titulo="6. KPI financieros")
        h4 6. KPI financieros
        .row.mb-5
          .col-lg-2
            figure.slideInLeft
              img(src='@/assets/curso/t1-ic6.svg', alt='imagen decorativa')
          .col-lg-9
            p.mb-3 Su razón de ser es crear estrategias que se enfoquen en hacer crecer la empresa, disminuir costos de producción, aumentar los beneficios del producto y optimizar los activos.
            p.mb-3.text-bold  Ejemplos de KPI financieros:
            ul.lista-ul.slideInUp(data-aos="fade-up")
              li
                i.fas.fa-check
                p.mb-0  Margen de utilidad
              li
                i.fas.fa-check
                p.mb-0  ROI (retorno de la inversión)
              li
                i.fas.fa-check
                p.mb-0  Apalancamiento financiero
              li
                i.fas.fa-check
                p.mb-0  Punto de equilibrio

      .tarjeta.color-secundario.p-4(titulo="7. KPI <i>marketing</i> digital")
        h4 7. KPI <i>marketing</i> digital
        .row.mb-5
          .col-lg-2
            figure.slideInLeft
              img(src='@/assets/curso/t1-ic7.svg', alt='imagen decorativa')
          .col-lg-9
            p.mb-3 Fundamentalmente está destinado a mejorar la forma de medir el rendimiento de las actividades que se destinan a conseguir leads, que son las listas con los datos personales de clientes potenciales y que se obtienen por intermedio de una página web, así como saber influenciar en el público objetivo y cómo impactan los banners en los computadores de los clientes. Lo importante de este indicador es que cada uno debe ir acompañado de valores que brindan posibilidad de escoger los canales que sean de mayor impacto para llegar al cliente.
            p.mb-3.text-bold  Ejemplos de KPI de marketing digital:
            ul.lista-ul.slideInUp(data-aos="fade-up")
              li
                i.fas.fa-check
                p.mb-0  Tráfico
              li
                i.fas.fa-check
                p.mb-0  Usuarios recurrentes y nuevos usuarios
              li
                i.fas.fa-check
                p.mb-0  Tiempo de permanencia



    #t_1_1.titulo-segundo
      h2 1.1  Beneficios de indicadores de gestión para mejora continua
    p.mb-5  Son muchos los beneficios que se pueden implementar al sistema de medición de indicadores de gestión o calidad. Dentro de estos se pueden citar:
    .row.mb-5
      .col-lg-5
        figure(data-aos="slide-up")
          img(src='@/assets/curso/t1-i2.svg', alt='imagen decorativa')
      .col-lg-7
        ul.lista-ul.slideInUp(data-aos="slide-left")
          li
            i.fas.fa-check
            p.mb-0  Cuantificar y darles valor a los recursos utilizados en cada actividad realizada por la compañía para verificar si hay un correcto uso en la aplicación de los recursos.
          li
            i.fas.fa-check
            p.mb-0  Dar control y, con ello, mejorar los procesos.
          li
            i.fas.fa-check
            p.mb-0  Garantizar los resultados presupuestados.
          li
            i.fas.fa-check
            p.mb-0  Mantener los estándares de calidad.
          li
            i.fas.fa-check
            p.mb-0  Conseguir una mejora sustancial en los niveles de servicios, con que se pueda dar una mejor y mayor satisfacción de los clientes.
          li
            i.fas.fa-check
            p.mb-0  Lograr la creación de las acciones correctivas que sean necesarias, con la cuales sea factible redirigir las acciones correctivas de mejora para obtener los resultados esperados.
          li
            i.fas.fa-check
            p.mb-0  La más importante es, definitivamente, poder tener el control de lo que ocurra para usar las acciones que correspondan  CITATION iso15 \l 9226 (isotools.org, 2015).



    Separador
    br
    br
    #t_1_2.titulo-segundo
      h2 1.2  Características de indicadores de gestión para mejora continua
    p.mb-5  Dentro de las características mínimas que deben tener los indicadores de gestión para un correcto desempeño en la búsqueda del mejoramiento continuo están:
    .row.mb-5
      .col-lg-5
        figure(data-aos="slide-up")
          img(src='@/assets/curso/t1-i3.svg', alt='imagen decorativa')
      .col-lg-7
        ul.lista-ul.slideInUp(data-aos="slide-left")
          li
            i.fas.fa-check
            p.mb-0  Ser realistas; es decir, directamente relacionados con las dimensiones significativas de la calidad del proceso, producto o servicio.   
          li
            i.fas.fa-check
            p.mb-0  En cuanto al número, deben ser pocos, aunque suficientemente representativos de las áreas prioritarias o que requieren una supervisión constante de la gestión.   
          li
            i.fas.fa-check
            p.mb-0  Efectistas y centrados en el verdadero impacto de la calidad.    
          li
            i.fas.fa-check
            p.mb-0  Visibles y fácilmente representables en forma de gráficos de fácil interpretación.   
          li
            i.fas.fa-check
            p.mb-0  Accesibles a las personas involucradas en las actividades medidas.    
          li
            i.fas.fa-check
            p.mb-0  Sensibles a las variaciones de los parámetros que se está midiendo.   
          li
            i.fas.fa-check
            p.mb-0  Sencillos de calcular y gestionar (isotools.org, 2015).    
 



    Separador
    br
    br
    #t_1_3.titulo-segundo
      h2 1.3  Indicadores de gestión y planeación estratégica
    p.mb-5  La planeación estratégica es el proceso que permite instaurar y armonizar los esfuerzos que se deban hacer, cuándo y cómo se deben hacer, quien los ejecutará y qué se hará con los resultados. Por todo esto, es un proceso que debe permanecer continuo por medio del cual se establecen o definen las estrategias necesarias para que, en concordancia con el entorno de la empresa, nos brinden los resultados requeridos.

    .row.mb-5
      .col-lg-5
        figure(data-aos="slide-up")
          img(src='@/assets/curso/t1-i4.svg', alt='imagen decorativa')
      .col-lg-7
        p.mb-3  Para la planeación estratégica se deben tener en cuenta tres funciones básicas que son:
        ul.lista-ul(data-aos="slide-left")
          li
            i.fas.fa-check
            p.mb-0  Formulación de la estrategia.
          li
            i.fas.fa-check
            p.mb-0  Ejecución de la estrategia.
          li
            i.fas.fa-check
            p.mb-0  Evaluación de la estrategia.
        p.mb-4(data-aos="slide-left") Estas tres funciones van de la mano con los indicadores de calidad o gestión, ya que son ellos los que brindan a la organización los datos con los cuales evaluará si se están alcanzando los objetivos y según esto, hacer los correctivos que sean necesarios para lograrlo.

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4(data-aos="slide-down")
          p.mb-4  Los indicadores de calidad o gestión son el resultado de la manifestación de los objetivos estratégicos que empiezan en la misión de la empresa. De igual forma, nacen de la necesidad de asegurar la integración de los resultados operacionales con los estratégicos de la empresa que deben ser compartidos con todos los empleados de la empresa (Biblioteca UJMD, s.f.).    



    Separador
    br
    br
    #t_1_4.titulo-segundo
      h2 1.4  Elementos de los indicadores de gestión

    p.mb-5  Al momento de diseñar o de preparar un indicador de calidad o gestión, es muy importante tener presente los siguientes elementos:

    .neg-margin-x.bg-lightYellow.mb-5
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            h4  La definición
            p Es la forma como se hará la cuantificación que se desea destacar del evento a controlar.
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s1.svg', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4  El objetivo
            p Define para qué o en qué se va a utilizar la información que arroje el indicador.
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s2.svg', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4  Los niveles de referencia
            p No se puede hacer una evaluación con indicadores de calidad o gestión, sin tener una referencia contra la cual sopesar los datos obtenidos. En este elemento, hay algunos que son relevantes como:
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  Nivel histórico 
              li
                i.fas.fa-check
                p.mb-0  Nivel estándar
              li
                i.fas.fa-check
                p.mb-0  Nivel teórico 
              li
                i.fas.fa-check
                p.mb-0  Nivel de requerimiento de los clientes 
              li
                i.fas.fa-check
                p.mb-0  Nivel de la competencia    

          .col-md-6
            figure
              img(src='@/assets/curso/t1-s3.svg', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4  La responsabilidad
            p Definir claramente quién o quiénes serán los encargados de realizar la actividad, pero de igual manera tener muy claro que se hará para encontrar defectos y asignar quienes harán las correcciones y las mejoras mas no culpables. 
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s4.svg', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4  La medición
            p En este punto, es fundamental que la forma como se efectúe la medición sea transparente, entendible para quienes las efectúen y tener las siguientes características:
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  Pertinente
              li
                i.fas.fa-check
                p.mb-0  Válida
              li
                i.fas.fa-check
                p.mb-0  Precisa
              li
                i.fas.fa-check
                p.mb-0  Específica
              li
                i.fas.fa-check
                p.mb-0  Sensible  

          .col-md-6
            figure
              img(src='@/assets/curso/t1-s5.svg', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4  La periodicidad
            p Para estudiar de mejor manera la medición que se vaya a realizar, es importante que se hagan tomas periódicas de la información para asegurar la calidad de la medición.
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s6.svg', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4  El sistema de procesamiento
            p Se debe asegurar no perder la calidad de la información en el proceso de cálculo y garantizar que los resultados conseguidos estén al alcance de todos los niveles de la compañía, de la manera más ágil y a tiempo. Para esto, es necesario y muy relevante que este sistema sea:
            ul.lista-ul(data-aos="slide-left")
              li
                i.fas.fa-check
                p.mb-0  Transaccional
              li
                i.fas.fa-check
                p.mb-0  Transformable
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s7.svg', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4  La toma de decisiones
            p En este elemento hay algunos componentes básicos, a saber:
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  El decisor
              li
                i.fas.fa-check
                p.mb-0  Las alternativas de acción
              li
                i.fas.fa-check
                p.mb-0  La incertidumbre
              li
                i.fas.fa-check
                p.mb-0  Las restricciones
              li
                i.fas.fa-check
                p.mb-0  La decisión individual pura                
              li
                i.fas.fa-check
                p.mb-0 La decisión grupal

          .col-md-6
            figure
              img(src='@/assets/curso/t1-s8.svg', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4  Los tipos de decisión
            p No solo es tomar la decisión. Se debe tener claro qué tipo de decisión se va a tomar con ella. Siempre se deben tomar en cuenta las causas que hacen que se tome esta decisión y los problemas que se puedan derivar de tomarla. Teniendo en cuenta esto, hay tres tipos de decisión que son:
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  Decisiones estratégicas
              li
                i.fas.fa-check
                p.mb-0  Decisiones operativas
              li
                i.fas.fa-check
                p.mb-0 Decisiones correctivas
                 
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s9.svg', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4  Las consideraciones de gestión
            p Cada indicador debe contar con un diagrama de causa-efecto y su interrelación con otros indicadores, lo que brinda la posibilidad de mejorar la capacidad de predicción de eventos (González, 2003).                 
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s10.svg', alt='imagen decorativa')






  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
