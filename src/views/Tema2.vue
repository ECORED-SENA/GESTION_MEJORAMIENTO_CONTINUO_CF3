<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Trabajo en equipo
    .row.mb-5
      .col-lg-4
        figure.slideInLeft
          img(src="@/assets/curso/t2-i1.jpg" alt='imagen decorativa')
      .col-lg-8.slideInUp
        p.mb-3  Cuando se habla de trabajo en equipo, indefectiblemente se hace alusión a la cohesión, focalización, ayuda, ser gregarios y muchos más adjetivos que tratan de describir la actividad que deben realizar un grupo de personas con habilidades, diferentes y complementarias generalmente, que son escogidas para hacer algunos aportes al proceso mediante la planeación estratégica y mejoramiento continuo (Taller de empresa, s.f.).
        p.mb-3  Las empresas u organizaciones son constituidas por personas, por gente. Por ello, estas empresas buscan este personal para aumentar y competir con eficiencia y eficacia como una forma de aprovechar los talentos de esos colaboradores, buscar la sostenibilidad y éxito de la empresa e incrementar la motivación del personal.
        .row.mb-5.justify-content-left
          .col-lg-7
            .bloque-texto-d.color-acento-contenido.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                .h5.text-bold Si estamos todo juntos no hay nada imposible. Si estamos divididos todo fallará.
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                p.mb-0 - Sir Winston Churchill 

    p.mb-5  Hay muchas definiciones de diferentes autores y, sin embargo, todos expresan una idea similar a la que se indica a continuación:
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5.slideInUp 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure(data-aos='flip-left')
                img(src="@/assets/curso/t2-i2.svg" alt='imagen decorativa')
            .col-lg-8
              .bloque-texto-a__texto.p-4.shadow-box
                p El trabajo en equipo es un grupo de personas que se basan en los llamados grupos de trabajo. Estos fueron evolucionando cualitativamente hasta alcanzar esta definición ya que se trata de una forma de trabajar entre varias personas que se unen para lograr metas comunes. En estos grupos las cualidades, habilidades y aptitudes son complementarias, tienen responsabilidades individuales, mutuas el uno con el otro, pero siempre estas están enfocadas en el compromiso y objetivos comunes.

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-d.color-acento-contenido.p-4(data-aos='flip-up')
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            .h5.text-bold Un número de personas con habilidades complementarias que están comprometidas con un propósito, un conjunto de metas de desempeño y un enfoque común, por los cuales se hacen mutuamente responsables.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            p.mb-0 - Katzenbach y Smith definieron el equipo de trabajo 

    p.mb-5 Cuando se aspira a que la empresa pase a un nivel superior, se fomenta la cultura basada en el trabajo en equipo empleando algunas de las características que se hace mención:
    .row.mb-5.justify-content-center
      .col-lg-8
        ImagenInfografica.color-secundario.mb-5(data-aos='fade-up')
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t2-info1.svg', alt='imagen decorativa')

          .tarjeta.color-secundario.shadow-box.p-3(x="75%" y="10%")
            p Debe tener un líder que guíe y conduzca el equipo, pero no lo dirige ya que el liderazgo es compartido.

          .tarjeta.color-secundario.shadow-box.p-3(x="83%" y="30%")
            p Para solucionar problemas y situaciones inherentes al trabajo, se hacen reuniones bajo la figura de debates abiertos donde cada miembro colabora con su aporte a la solución de los problemas.
          
          .tarjeta.color-secundario.shadow-box.p-3(x="90%" y="50%")
            p Debe existir una clara y definida cohesión entre los miembros del equipo, enfocada y concentrada en sus tareas para asegurar la calidad de sus trabajos.              
          .tarjeta.color-secundario.shadow-box.p-3(x="83%" y="70%")
            p Todo el trabajo se realiza y discute en consenso entre sus miembros, donde debe primar la colaboración, pues todos son el “motor” del equipo.
          .tarjeta.color-secundario.shadow-box.p-3(x="75%" y="89%")
            p La medición del desempeño es de manera directa, con base en las evaluaciones de los productos del trabajo colectivo.

    h3.titulo-tercero Roles en un equipo de trabajo
    p.mb-3  Sobre los roles de los colaboradores que conforman un equipo de trabajo, el empresario y autor Stephen Robbins dijo lo siguiente: “Cada equipo tiene necesidades diferentes y debe seleccionarse a sus integrantes de modo que se garantice que se cubrirá la totalidad de los distintos roles” (Robbins, 2004).
    p.mb-4  Estos roles se pueden aglutinar en nueve ítems que son los siguientes:
    .row.mb-5
      .col-lg-4
        figure(data-aos='slide-left')
          img(src="@/assets/curso/t2-i3.svg" alt='imagen decorativa')
      .col-lg-8(data-aos='slide-right')
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            p Integrador. Coordina e integra.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p Creador. Inicia las ideas creativas.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p Asesor. Estimula la búsqueda de más información.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p Salvaguarda. Libra las batallas externas.
          li 
            .lista-ol--cuadro__vineta
              span 5
            p Controlador. Examina los detalles y refuerza las reglas.
          li 
            .lista-ol--cuadro__vineta
              span 6
            p Productor. Da dirección y seguimiento.
          li 
            .lista-ol--cuadro__vineta
              span 7
            p Organizador. Proporciona estructura.           
          li 
            .lista-ol--cuadro__vineta
              span 8
            p Asesor. Ofrece un análisis amplio de las opciones.            
          li 
            .lista-ol--cuadro__vineta
              span 9
            p Promotor. Celebra las ideas una vez iniciadas (Coworkingfy, 2020).

    .row.mb-5
      .col-lg-4
        figure(data-aos='slide-left')
          img(src="@/assets/curso/t2-i4.svg" alt='imagen decorativa')
      .col-lg-8(data-aos='slide-right')
        ul.lista-ul
          li
            i.fas.fa-check
            p.mb-0 Autocrítica. Busca la mejora continua. 
          li
            i.fas.fa-check
            p.mb-0 No se critica a la persona. Se hace sobre lo que esté mal hecho con el ánimo de mejorarlo.
          li
            i.fas.fa-check
            p.mb-0 Responsabilidad. Se debe ser responsable con las labores propias, siempre teniendo en cuenta que inciden en las labores de los compañeros y en el resultado final. 
          li
            i.fas.fa-check
            p.mb-0 Saber que deben contribuir al éxito del equipo, teniendo siempre en cuenta defender a los compañeros.
          li
            i.fas.fa-check
            p.mb-0 Lealtad hacia los miembros del equipo. 
          li
            i.fas.fa-check
            p.mb-0 Se debe buscar el beneficio conjunto.
          li
            i.fas.fa-check
            p.mb-0 Deben tener capacidad de relacionarse cordialmente con los demás miembros del equipo.
          li
            i.fas.fa-check
            p.mb-0 Deben contar con iniciativa y entusiasmo.
          li
            i.fas.fa-check
            p.mb-0 Ser siempre entusiastas y ver las cosas con espíritu positivo.




    #t_2_1.titulo-segundo
      h2 2.1  Importancia del trabajo en equipo
    .row.mb-5
      .col-lg-4
        figure(data-aos='slide-left')
          img(src="@/assets/curso/t2-i5.png" alt='imagen decorativa')
      .col-lg-8
        p.mb-5  Para reconocer la importancia del trabajo en equipo, se debe empezar por marcar la diferencia con el trabajo en grupo. Se da el caso de manera recurrente, que se confunde “trabajo en grupo” con “trabajo en equipo” como si fueran lo mismo, no siendo esto así.
        .bloque-texto-d.color-acento-contenido.p-4.mb-5(data-aos='flip-up')
          .bloque-texto-d__texto.mb-5
            i.fas.fa-quote-left
            .h5.text-bold El talento gana partidos. Pero el trabajo en equipo y la inteligencia, ganan resultados.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            p.mb-0 - Menciona Michael Jordán, deportista de elite y jugador de baloncesto, multicampeón de EE. UU.
        p.mb-5  El desempeño de un grupo de trabajo está condicionado por lo que haga cada uno de sus miembros. A diferencia, el de un equipo de trabajo incluye el resultado del trabajo individual y el producto del trabajo colectivo, donde se contabiliza como tal lo que dos o más miembros generan y aportan de manera real.        
    
    p.mb-5  A manera de resumen, se puede observar en el siguiente cuadro, la diferencia entre las funciones de los atributos de cada una de estas formas de trabajo:

    .row.mb-5.justify-content-center
      .col-lg-10
        figcaption.customCaption.mb-2 <b>Tabla</b> Atributos de trabajo en grupo y trabajo en equipo
        figure(data-aos='slide-left')
          img(src="@/assets/curso/t5-t1.svg" alt='imagen decorativa')
        figcaption  Nota.  Tomada de Coworkingfy (2020).

    .row.mb-5
      .col-lg-2
        figure(data-aos='flip-left')
          img(src="@/assets/curso/t2-ic1.svg" alt='imagen decorativa')
      .col-lg-10(data-aos='slide-left')
        p.mb-3  La importancia del trabajo en equipo se destaca en que, en la actualidad, las organizaciones buscan ser más productivas, más competitivas y obtener resultados. Una de las vías que han encontrado para esto, es conseguir que los colaboradores y sus áreas funcionales, se vuelvan equipos de trabajo más unidos para lograr ser más eficaces y eficientes. 
        p.mb-3  Para que los equipos alcancen un alto rendimiento, el escritor Tom Peters, consultor empresarial norteamericano, determinó cinco componentes del trabajo en equipo, conocidos como “las cinco C del trabajo en equipo” que son:

    .row.mb-5
      .col-lg-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t2-c1.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.mb-3.py-3.h3 Complementariedad
              p.small Todos y cada uno de los miembros del equipo deben poner al servicio del mismo todas sus habilidades y competencias individuales. Con esto se asegura la consecución de objetivos que de manera individual no será posible.
      .col-lg-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t2-c2.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.mb-3.py-3.h3 Coordinación
              p.small Es facultad del líder conocer las habilidades de cada uno de sus miembros de equipo, para asignar las tareas y potencializar la obtención de resultados.
      .col-lg-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t2-c3.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.mb-3.py-3.h3 Comunicación
              p.small Es fundamental que la comunicación sea abierta, franca, oportuna y clara. Con esto cada miembro se asegura de conocer qué debe hacer y cómo lo debe hacer. 

    .row.mb-5.justify-content-center
      .col-lg-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t2-c4.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.mb-3.py-3.h3 Confianza
              p.small Parte de la claridad del líder al explicar de manera concreta las labores a desarrollar. Debe existir de manera diáfana entre cada uno de los integrantes del equipo esa seguridad tanto de las capacidades individuales y las de los demás para lograr los objetivos propuestos. No es algo de fácil consecución y se debe trabajar día a día. 

      .col-lg-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t2-c5.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.mb-3.py-3.h3 Compromiso
              p.small Nada es más importante que los intereses del equipo. Por eso, es fundamental priorizar las necesidades e intereses de lo colectivo por encima de lo particular. 



    p.mb-5  Estos equipos de mejora se enfocan en aumentar la eficiencia y efectividad de una organización. Al interior deben primar los sentimientos de respeto, colaboración y confianza para que los resultados sean los esperados. En caso de falla o ausencia de alguno de estos pilares, el equipo funcionará mal, incidiendo esto en el resultado económico de la empresa, que es una variable de gran importancia y razón de ser de muchas organizaciones, por no decir todas. Teniendo como referencia lo anterior y para concretar la importancia del trabajo en equipo, se pueden agrupar de la siguiente manera:

    .row.mb-5.justify-content-center
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5(data-aos='fade-up')
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t2-info2.svg', alt='imagen decorativa')

          .tarjeta.color-secundario.shadow-box.p-3(x="21%" y="84%")
            p La suma de cada conocimiento genera un impacto mejor y mayor que si fuera individual.
          .tarjeta.color-secundario.shadow-box.p-3(x="31%" y="54%")
            p Cuando llegan las crisis los equipos fuertes, cohesionados y  con sus metas claramente definidas son menos afectados por ellas.
          .tarjeta.color-secundario.shadow-box.p-3(x="50%" y="35%")
            p Al no haber jerarquías sus integrantes se mueven con mayor rango de acción. Aquí afloran sentimientos como solidaridad, colaboración mutua y sentido de pertenencia hacia el equipo y, por ende, hacia la empresa.
          .tarjeta.color-secundario.shadow-box.p-3(x="69%" y="54%")
            p Al ser tareas definidas según sus competencias, cada miembro debe ser responsable de esa tarea en específico.
          .tarjeta.color-secundario.shadow-box.p-3(x="78%" y="84%")
            p Al ser equipos altamente solidarios y gregarios, dan la posibilidad que se desarrollen dinámicas que permitan a los integrantes tener gestos como empatía, comunicación eficaz y resolución de conflictos.


    Separador
    br
    br
    #t_2_2.titulo-segundo
      h2 2.2  Cómo construir cultura de trabajo de mejoramiento continuo

    p.mb-5  Dentro de las características mínimas que deben tener los indicadores de gestión para un correcto desempeño en la búsqueda del mejoramiento continuo están:

    .row.mb-5
      .col-lg-4
        figure(data-aos='flip-left')
          img(src="@/assets/curso/t2-i6.svg" alt='imagen decorativa')
      .col-lg-8(data-aos='slide-left')
        ul.lista-ul
          li
            i.fas.fa-check
            p.mb-0 El equipo en pleno debe conocer y tener muy claro los objetivos y aceptarlos.
          li
            i.fas.fa-check
            p.mb-0 Cada miembro del equipo debe conocer su trabajo asignado y sus responsabilidades.
          li
            i.fas.fa-check
            p.mb-0  Todos deben colaborar, no hay liderazgo definido sino compartido, para lograr un compromiso real y efectivo de cada miembro. 
          li
            i.fas.fa-check
            p.mb-0  Debe existir muy buena comunicación interna. 
          li
            i.fas.fa-check
            p.mb-0  La información debe ser compartida para que cada miembro conozca las acciones que sus compañeros de grupo desarrollan. 
          li
            i.fas.fa-check
            p.mb-0  Destacar los logros del equipo para generar estímulos. No se trata de juzgar y castigar a quienes fallan, sin dejar de destacar esto para evitar que vuelva a ocurrir (Suárez, 2015). 

    .row.mb-5.justify-content-center
      .col-lg-10.mb-5
        .cajon.color-primario.p-4
          p.mb-0  Para construir grupos de trabajo, es fundamental y necesario contar con un muy buen capital humano como base de esa construcción. Con eso se puede asegurar que los trabajos sean mancomunados, sincronizados y sinérgicos con miras a lograr los objetivos propuestos.
        
      .col-lg-10.mb-5
        .bloque-texto-d.color-acento-contenido.p-4(data-aos='flip-up')
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            .h5.text-bold Buenos profesionales hacen buenos equipos de trabajo. Pero también buenos equipos de trabajo hacen buenos profesionales.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            p.mb-0 - CITATION ean2020 \l 3082 (EAN Universidad, 2020), Borrell, 2004
        
    p.mb-5  La construcción de una cultura efectiva y organizacional se hace a partir de:

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2-i7.svg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Se puede definir como “un método de trabajo interno que mediante la fijación de objetivos y sus correspondientes resultados clave, permite organizar el trabajo de la empresa, definir grupos de trabajo y realizar un seguimiento del progreso de cada empleado” (Galiana, 2021).



























</template>

<script>
export default {
  name: 'Tema2',
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
