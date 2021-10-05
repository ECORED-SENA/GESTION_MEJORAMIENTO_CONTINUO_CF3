export default {
  global: {
    componenteFormativo: 'Plan de gestión, resultados y mejora continua',
    descripcionCurso:
      'El objetivo de este programa es identificar el conocimiento requerido para elaborar, formular e implementar las acciones de mejora necesarias con miras al cabal funcionamiento de la empresa y obtener los resultados esperados, después de una correcta evaluación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Beneficios de indicadores de gestión para mejora continua',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Características de indicadores de gestión para mejora continua',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Indicadores de gestión y planeación estratégica',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Elementos de los indicadores de gestión',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Trabajo en equipo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Importancia del trabajo en equipo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Cómo construir cultura de trabajo de mejoramiento continuo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Acciones y planes de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Para qué sirve un plan de mejoramiento',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Cómo implementar un plan de mejoramiento',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Fases y técnicas a implementar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Etapas necesarias para mejoramiento continuo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de mejoramiento',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Informes de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Elaboración de un informe de resultados',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'La importancia del informe de resultados',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Plan de mejora',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Biblioteca UJMD. (s.f.). Planeación estratégica y los indicadores de gestión. ',
      link:
        'https://webquery.ujmd.edu.sv/siab/bvirtual/Fulltext/ADRS0000648/C2.pdf',
    },
    {
      referencia:
        'Coworkingfy. (2020). Trabajo en equipo. Qué es, características, beneficios, importancia y más. ',
      link: 'https://coworkingfy.com/trabajo-en-equipo/',
    },
    {
      referencia:
        'Cruz, J. O. (2012). Mejoramiento continuo. Definiciones e importancia. ',
      link:
        'https://www.gestiopolis.com/definiciones-del-mejoramiento-continuo/',
    },
    {
      referencia:
        'ESAN. (2016). Las cuatro etapas para la mejora continua en la organización. ',
      link:
        'https://www.esan.edu.pe/apuntes-empresariales/2016/05/las-cuatro-etapas-para-la-mejora-continua-en-la-organizacion/',
    },
    {
      referencia: 'Fabra, A. (2017). Cómo hacer un informe de gestión.',
      link:
        'https://www.mundodeportivo.com/uncomo/negocios/articulo/como-hacer-un-informe-de-gestion-25739.html',
    },
    {
      referencia:
        'GALIANA, P. (2021). Qué son los OKR’s: la metodología que usa Google para sus empleados.',
      link: 'https://www.iebschool.com/blog/que-es-metodologia-okr-rrhh-2-0/',
    },
    {
      referencia:
        'González, G. (2003). Diseño de indicadores de gestión institucional. ',
      link:
        'https://repositorio.ufsc.br/bitstream/handle/123456789/116281/GONZALEZ.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia: 'Educación Navarra. (s.f.). ¿Qué es un plan de mejora?',
      link:
        'https://www.educacion.navarra.es/documents/57308/57761/Que%20es_un_plan_de_mejora.pdf/c300e8bc-1606-40c0-8a20-22ce1895bc04',
    },
    {
      referencia:
        'Isotools.org. (2015). Herramientas para conseguir la mejora continua de la calidad. ',
      link:
        'https://www.isotools.org/2015/07/17/herramientas-para-conseguir-la-mejora-continua-de-la-calidad/',
    },
    {
      referencia: 'Isotools.org. (2015). ¿Qué son los indicadores de calidad?',
      link:
        'https://www.isotools.org/2015/03/30/que-son-los-indicadores-de-calidad/',
    },
    {
      referencia:
        'Isotools.org. (2020). Metodología OKR: la clave para el trabajo en equipo.',
      link:
        'https://www.isotools.org/2020/06/08/metodologia-okr-la-clave-para-el-trabajo-en-equipo/',
    },
    {
      referencia:
        'Méndez, A. A. (2018). Cómo implementar un plan de mejora empresarial.',
      link: 'https://www.questionpro.com/blog/es/plan-de-mejora-empresarial/',
    },
    {
      referencia:
        'MinEducación. (2004). Planes de mejoramiento institucional. Analizar, definir, organizar.',
      link: 'https://www.mineducacion.gov.co/1621/article-87254.html',
    },
    {
      referencia:
        'Robbins, S. (2004). Comportamiento organizacional. Pearson Education.',
    },
    {
      referencia:
        'Sisteware. (2019). 8 ejemplos de un plan de mejora para una empresa.',
      link:
        'https://www.siteware.co/es/gestion/conozca-8-ejemplos-de-un-plan-de-mejora-para-una-empresa/',
    },
    {
      referencia:
        'Suárez, L. Y. (2015). La importancia del trabajo en equipo en las organizaciones actuales.',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/13939/LUZ%20YOLANDA%20TORO%20SUAREZ%20%20TRABAJO%20FINAL.pdf;jsessionid=75CB0385D0382CECB43DED2EA105944A?sequence=2',
    },
    {
      referencia: 'Taller de empresa. (s.f.). ¿Qué son los equipos de mejora?',
      link: 'https://www.tallerdeempresa.com/los-equipos-mejora/',
    },
    {
      referencia: 'Tipos de cartas. (2021). Informe de desempeño laboral.',
      link:
        'https://tiposdecartas.com/formatos-y-planillas/informe-de-desempeno-laboral/#comment-403',
    },
  ],
  glosario: [
    {
      termino: 'KPI',
      significado:
        'del inglés <i>Key Performance Indicator</i> son las formas o medios que una empresa utiliza para conocer si sus objetivos generales, sus áreas funcionales y operativas, su personal o algún proyecto en específico, se están logrando.',
    },
    {
      termino: 'KPI retail',
      terminoHtml: 'KPI <em>retail</em>',
      significado:
        'término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático.',
    },
    {
      termino: 'Leyenda referencial',
      significado:
        'informe que se hace usando la técnica de evaluación en la que se usa una letra para medir cada aspecto.',
    },
    {
      termino: 'Plan de mejora',
      significado:
        'proceso que se utiliza para alcanzar la calidad total y la excelencia de las organizaciones de manera progresiva, para así obtener resultados eficientes y eficaces.',
    },
    {
      termino: 'Responsabilidad',
      significado:
        'se enfoca en las labores propias, siempre teniendo en cuenta que inciden en las labores de los compañeros y en el resultado final.',
    },
  ],
  complementario: [
    {
      texto:
        'Biblioteca UJMD. (2017). Planeación estratégica y los indicadores de gestión. ',
      tipo: 'Documento en línea',
      link:
        'https://webquery.ujmd.edu.sv/siab/bvirtual/Fulltext/ADRS0000648/C2.pdf',
    },
    {
      texto:
        'Toro, L. (2015). La importancia del trabajo en las organizaciones actuales.',
      tipo: 'Documento en línea. Repositorio.',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/13939/LUZ%20YOLANDA%20TORO%20SUAREZ%20%20TRABAJO%20FINAL.pdf;jsessionid=75CB0385D0382CECB43DED2EA105944A?sequence=2',
    },
    {
      texto: 'Educación Navarra. (2018). ¿Qué es un plan de mejora?',
      tipo: 'Documento en línea. Repositorio.',
      link:
        'https://www.educacion.navarra.es/documents/57308/57761/Que%20es_un_plan_de_mejora.pdf/c300e8bc-1606-40c0-8a20-22ce1895bc04',
    },
    {
      texto:
        'Isotools excelence. (2015). Herramientas para conseguir la mejora continua de la calidad.',
      tipo: 'Página web',
      link:
        'https://www.isotools.org/2015/07/17/herramientas-para-conseguir-la-mejora-continua-de-la-calidad/',
    },
    {
      texto: 'Fabra, A. (2017). Cómo hacer un informe de gestión.',
      tipo: 'Blog',
      link:
        'https://www.mundodeportivo.com/uncomo/negocios/articulo/como-hacer-un-informe-de-gestion-25739.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Luis Rangel Ayala',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios. CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
