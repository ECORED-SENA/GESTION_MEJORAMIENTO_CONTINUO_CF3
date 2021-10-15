<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5.justify-content-center
      .col-lg-8
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5.slideInUp
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/t0-i1.svg" alt='icono decorativo')
            .col-lg-10
              .bloque-texto-a__texto.p-4.shadow-box
                p El plan de mejora es un proceso que se utiliza para alcanzar la calidad total y la excelencia de las organizaciones de manera progresiva. <b>Teniendo en cuenta este referente se invita a ver el video introductorio a este componente.</b>


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gAISqzYIFVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
