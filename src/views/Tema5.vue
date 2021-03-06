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
          img.nW(src='@/assets/curso/t5-i1.jpg', alt='imagen decorativa')
      .col-lg-8.slideInUp
        p.mb-3  El informe de resultados es una evaluación global que se ejecuta en los procesos de la empresa, reflejando la calidad y satisfacción de los productos o servicios obtenidos en el tiempo, que pueden ser presentados en un documento para evaluar la ejecución de una tarea o conjunto de tareas en relación a unos objetivos propuestos.
        p.mb-3  Al momento de realizar este tipo de informes, se debe tener en cuenta que los mismos deben ser eficaces, comprensibles, bien presentados, con una estructura ordenada, ser claros y diáfanos en su exposición, con una redacción eficaz y ser breve.

    .row.mb-5.justify-content-center
      .col-lg-7
        figcaption.customCaption.mb-2 <b>Figura</b> La norma ISO 9004:2018 y la aplicación del cuadro de mando integral para el éxito sostenido.
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
                  h3.mb-1 Informes de resultados
                  p.text-small Para afianzar sus conocimientos, le invitamos a descargar el siguiente informe de auditoría interna de gestión.
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
          img.nW(src='@/assets/curso/t5-i3.jpg', alt='imagen decorativa')
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
                p.mb-3 En este espacio se brinda una breve exposición de las razones por la cuales se elabora este informe. Esto se realiza con el fin de que quien lo lea, pueda entender todo el contexto de su objeto central de estudio y qué se tuvo en cuenta para hacerlo.

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
          img.nW(src='@/assets/curso/t5-ic2.svg', alt='imagen decorativa')
      .col-lg-10
        p.mb-3  Por lo general, en todas las organizaciones, pero especialmente en las grandes empresas, la realización de los informes es una actividad recurrente de la mayoría de los empleados. En ellos se busca resumir las actividades desarrolladas dentro de la empresa, para irradiar lo que se ha hecho y, si los resultados son positivos, estos informes servirán para conseguir nuevos inversionistas, robusteciendo el capital de la empresa.
        p.mb-3  Los elementos más importantes que debe contener un Informe de desempeño laboral son los siguientes:
    
    .row.mb-5.justify-content-center
      .col-xs-8.col-sm-8.col-md-5.col-lg-5.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t5-c1.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Datos de la empresa
              p.small En este tipo de informes es importante que se incluyan los datos de la empresa como nombre y razón social, dirección y teléfono.
      .col-xs-8.col-sm-8.col-md-5.col-lg-5.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t5-c2.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Datos del empleado
              p.small De igual manera, será necesario que se incluyan los datos del trabajador como su nombre, número de identificación, el puesto que desempeña en la empresa y el tiempo que tiene trabajando.
      .col-xs-8.col-sm-8.col-md-5.col-lg-5.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t5-c3.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Leyenda referencial
              p.small Por lo general, este tipo de informes se hacen usando la técnica de evaluación en la que se usa una letra para medir cada aspecto. Esto quiere decir que antes de hacer el informe, se debe escribir la leyenda de lo que significa cada letra que se ponga en los respectivos ítems a evaluar.

      .col-xs-8.col-sm-8.col-md-5.col-lg-5.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t5-c4.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Cuadros por áreas
              p.small Estos cuadros serán los que componen el informe. Por lo general se utilizan 3: área personal, área social y área técnica. Cada uno de ellos tendrá una lista de competencias que se evaluarán con las letras correspondientes según la leyenda previa. También es común agregar una casilla de “comentarios” en la que el evaluador puede escribir notas acerca del empleado.
      .col-xs-8.col-sm-8.col-md-5.col-lg-5.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t5-c5.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Datos del evaluador
              p.small Al finalizar la evaluación y al final del informe se deben colocar los datos de la persona que hace la evaluación que será quien firme el Informe de desempeño laboral. Estos datos deben incluir nombre, cargo y firma del evaluador, así como la fecha en la que el informe se concluye.

    .row.mb-5.justify-content-center
      .col-lg-10.mb-5
        .cajon.color-primario.p-4
          p La idea detrás de este tipo de planilla es la de documentar cómo se ha desenvuelto el empleado en su tiempo y cuáles son las competencias técnicas y personales que demuestra en su puesto de trabajo.

      .col-lg-6
        figcaption.customCaption.mb-2 <b>Figura</b> Informe individual del desempeño laboral.
        figure(data-aos='flip-up')
          img.shadow-box(src='@/assets/curso/t5-i4.jpg', alt='ejemplo de Informe individual')

    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t5-ic1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Informe individual de desempeño laboral
                  p.text-small Para afianzar sus conocimientos en documentar las competencias técnicas y personales en el puesto de trabajo, le invitamos a descargar el PDF
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Anexo2_Informe-de-desempeno-laboral.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador
    br
    br
    #t_5_3.titulo-segundo
      h2 5.3  Plan de mejora

    .row.mb-5
      .col-lg-2 
        figure(data-aos='flip-left')
          img.nW(src='@/assets/curso/t5-ic4.svg', alt='imagen decorativa')
      .col-lg-10
        p En un mundo cada vez más competitivo la búsqueda de ideas de propuestas de mejora para una empresa necesita ser constante. Ventas, rentabilidad, lucro, presencia en el mercado, reducción de costos operativos, optimización de recursos y automatización de procesos son algunos ejemplos de aspectos que las organizaciones siempre buscan mejorar. A continuación, se presentan ocho ejemplos de propuestas de mejora para una empresa que pueden ser aplicados en un negocio (sisteware, 2019).
    
    .neg-margin-x.tarjeta--gris.mb-5
      .tarjeta.tarjeta--gris.p-4
        LineaTiempoC.color-acento-botones(text-small)(data-aos='fade-up')
          .row.justify-content-center(titulo="Ejemplo 1")
            .col-md-3
              figure
                img.nW(src='@/assets/curso/t5-lt1.svg', alt='imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              h3 Ejemplo 1. <i>Software</i> de gestión
              p.mb-3  Las posibilidades del uso de un <i>software</i> de gestión son variadas: CRM, gestión de proyectos, automatización de <i>marketing</i>, gestión financiera, comunicación, etc. 
              p.mb-3  Existen varios <i>software</i> de gestión financiera disponibles en el mercado, algunos de ellos con versiones gratuitas o precios realmente accesibles como <i>QuickBooks</i>, <i>ZeroPaper</i> y <i>Bkper</i>.

          .row.justify-content-center(titulo="Ejemplo 2")
            .col-md-3
              figure
                img.nW(src='@/assets/curso/t5-lt2.svg', alt='imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              h3 Ejemplo 2.  Comunicación interna
              p.mb-3  Los equipos que se comunican mal o que ni siquiera se comunican pueden afectar la calidad del trabajo, por eso es importante que la empresa desarrolle una comunicación interna efectiva y eficiente. Las acciones simples como el uso de murales, cuadros de aviso y una intranet ayudan bastante en la mejora del flujo de trabajo.

          .row.justify-content-center(titulo="Ejemplo 3")
            .col-md-3
              figure
                img.nW(src='@/assets/curso/t5-lt3.svg', alt='imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              h3 Ejemplo 3. Metodología OKR
              p.mb-3  La sigla OKR significa objetivos y resultados clave (<i>Objective and Key Results</i>). Simple, flexible y ágil, esta metodología de gestión es utilizada hoy por varias empresas exitosas como Google. Su objetivo es promover el compromiso entre los colaboradores y elevar la productividad de la organización.

          .row.justify-content-center(titulo="Ejemplo 4")
            .col-md-3
              figure
                img.nW(src='@/assets/curso/t5-lt4.svg', alt='imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              h3 Ejemplo 4. <i>Home Office</i>
              p.mb-3  El trabajo remoto es otro de los grandes ejemplos de propuesta de mejora para una empresa que la transformación digital ha proporcionado.
              p.mb-3  Una de las razones que llevan a las empresas a adoptar el <i>home office</i> es la ganancia en productividad y la reducción de costos operacionales.
              p.mb-3  Además, el profesional está más motivado para alcanzar resultados, ya que pasa a tener libertad para administrar su propio tiempo. 

          .row.justify-content-center(titulo="Ejemplo 5")
            .col-md-3
              figure
                img.nW(src='@/assets/curso/t5-lt5.svg', alt='imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              h3 Ejemplo 5. Encuesta de mercado
              p.mb-3  Las encuestas de mercado posibilitan al gestor tener una visión más amplia sobre el área en que la empresa actúa, orientándola durante la definición de estrategias y en la toma de decisiones.
              p.mb-3  Realizar una buena investigación de mercado puede identificar problemas y oportunidades de negocio, por medio de ella es posible obtener y analizar información. 

          .row.justify-content-center(titulo="Ejemplo 6")
            .col-md-3
              figure
                img.nW(src='@/assets/curso/t5-lt6.svg', alt='imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              h3 Ejemplo 6. Entrenamiento de los equipos
              p.mb-3  Invertir en entrenamiento y capacitación de los equipos es una excelente forma de favorecer el surgimiento de nuevas ideas. Cursos, conferencias, <i>webinars</i> y <i>workshops</i> impactan directamente el desempeño de los empleados.
              p.mb-3  Los equipos bien entrenados y capacitados tienden a cometer menos errores, lo que disminuye el número de reprocesos y, consecuentemente de costos. Así, la productividad se eleva.    

          .row.justify-content-center(titulo="Ejemplo 7")
            .col-md-3
              figure
                img.nW(src='@/assets/curso/t5-lt7.svg', alt='imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              h3 Ejemplo 7. Clima organizacional
              p.mb-3  El desarrollo de un clima organizacional ligero y agradable es algo que contribuye y que puede surtir efectos bastante positivos.
              p.mb-3  Reuniones de integración, horarios flexibles, códigos de vestimenta más informales y buenas condiciones de trabajo son ejemplos de acciones que contribuyen a un clima organizacional más amigable y placentero para trabajar.  

          .row.justify-content-center(titulo="Ejemplo 8")
            .col-md-3
              figure
                img.nW(src='@/assets/curso/t5-lt8.svg', alt='imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              h3 Ejemplo 8. Monitorear  acciones
              p.mb-3  Procure monitorear periódicamente los resultados de las acciones de mejora en su empresa.
              p.mb-3  El monitoreo posibilita identificar ciertas fallas y realizar los debidos ajustes en el medio del camino antes de que representen un problema mayor.
              p.mb-3  Reúnase con los colaboradores al menos una vez al mes y ofrézcales la oportunidad de decir cuáles son sus dificultades en la búsqueda de resultados.


    p.mb-5  De acuerdo con el Decreto 1072-2015, artículo 2.2.4.6.8, numeral 7, se invita a ver el siguiente video que hace parte de una actualización del Sistema de Gestión de Seguridad y Salud en el Trabajo que debe ser aplicado con los planes de mejora continua en la empresa:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/esZNJmokj_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5  En la siguiente figura se puede observar un formato del Plan de mejora de personal que debe realizar una empresa para un buen funcionamiento de sus procesos.
    
    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption.mb-2 <b>Figura</b> Plan de mejora de personal
        figure(data-aos='flip-left')
          img.nW.shadow-box(src='@/assets/curso/t5-i5.jpg', alt='ejemplo de plan de mejora personal')

    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .h4.mb-1 Para poner en práctica los conocimientos adquiridos sobre el Plan de mejora de personal, lo invitamos a descargar la siguiente tabla:
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Anexo3_Plan_De_Mejora_De_Personal.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download























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
