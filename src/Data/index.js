const DATA = [
    {
       id: '16',
       title: 'AWS Certified Cloud Practitioner',
       image:'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
       link: 'https://www.credly.com/badges/d20568cc-59a7-4b66-a595-383ef384b6df/embedded',
       address: 0,
    },{
      id: '1',
      title: 'Engineer Data in Google Cloud',
      image:'https://cdn.qwiklabs.com/%2BpOT%2BBZY9BS7kfk5iglnlKqCgOdME6g%2BVx3q0cok%2FgE%3D',
      link: 'https://partner.cloudskillsboost.google/public_profiles/75a72f2b-a2ec-47b0-b5f0-441adc737a6c/badges/3321954',
      address: 0,
    },{
      id: '2',
      title: 'Perform Foundational Data, ML, and AI Tasks in Google Cloud',
      image:'https://cdn.qwiklabs.com/OT8k8pRRu%2ForDqpfuMIwyglzX14PyLPFHd2FNRS0Ifc%3D',
      link: 'https://partner.cloudskillsboost.google/public_profiles/75a72f2b-a2ec-47b0-b5f0-441adc737a6c/badges/3313089',
      address: 0,
    },{
      id: '3',
      title: 'Create and Manage Cloud Resources',
      image:'https://cdn.qwiklabs.com/TbOoOcpQdNxRawSvSE3K5cbakxBmki8F%2FgjwN6yKY98%3D',
      link: 'https://partner.cloudskillsboost.google/public_profiles/75a72f2b-a2ec-47b0-b5f0-441adc737a6c/badges/3188593',
      address: 0,
    },{
      id: '17',
      title: 'Certified ReactJS Coodesh',
      image:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png',
      link: 'https://coodesh.com/share/certificate/7b4058a0-746b-11ec-9234-616b43060767',
      address: 0,
    },{
      id: '18',
      title: 'Scrum: Agilidade em seu projeto',
      image:'https://cursos.alura.com.br/assets/images/alura/logo-alura.png',
      link: 'https://cursos.alura.com.br/user/guilherme-chaves4/course/agile-scrum/formalCertificate',
      address: 0,
    },
    {
      id: '21',
      title: 'Google Analystics Individual',
      image:'https://betalabs.com.br/wp-content/uploads/2021/10/logo_lockup_analytics_icon_vertical_black_2x-768x581.png',
      link: 'https://skillshop.exceedlms.com/student/award/y5UYc5KaT2ofXExBYegQ62vy',
      address: 0,
    },
    {
      id: '20',
      title: 'Bancos de Dados',
      image:'https://solvimm.com/wp-content/uploads/2019/11/Destacada_Qual_tipo_de_Banco_de_Dados_utilizar.png',
      link:'https://drive.google.com/file/d/1XdPj4jyKTd-LXT7w9et9c1YTJYQ5cgUm/view',
      address: 0,
    },
    {
        id: '19',
        title: 'Dev Full Stack',
        image:'https://www.brasilcode.com.br/wp-content/uploads/2019/08/Cartoon_Programmer_Writes_Code_Workspace_Concept._Vector.jpg',
        link: 'https://drive.google.com/file/d/1Kfd8Uv_RE8nyF6q8GtaHNsg4hJsvjm8I/view',
        address: 0,
      },
      {
        id: '4',
        title: 'AWS Cloud Practitioner Essentials',
        image:'https://d1.awsstatic.com/Security/aws-single-sign-on/AWS-600x400.d644956b44a96938adfe2dc8cd1aa49f072d3fc8.jpg',
        link: 'https://drive.google.com/file/d/1Udfae1qOmqul7p6WgOUHwUD4Ts1odZlY/view',
        address: 0,
      },
      {
        id: '5',
        title: 'O diário de um Mago - Paulo Coelho',
        image:'https://img.estadao.com.br/thumbs/640/resources/jpg/6/1/1478885466916.jpg',
        address: 1,
      },
      {
        id: '6',
        title: 'A escolha de Sofia - autor: William  Styron',
        image:'http://www.oexplorador.com.br/exp/wp-content/uploads/2011/06/000.jpg',
        address: 1,
      },
      {
        id: '7',
        title: 'Divina sabedoria dos grandes mestres - Brian Weiss',
        image:'https://static.oprah.com/images/tows/200805/20080513/20080513_101_350x263.jpg',
        address: 1,
      },
      {
        id: '8',
        title: 'The Fellowship of the Ring - J. R. R. Tolkien ',
        image:'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/74/88/a0.jpg',
        address: 1,
      },
      {
        id: '9',
        title: 'Análise Churn com Python',
        image:'https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png',
        link: 'https://github.com/guiaech/analise_de_dados_Churn',
        address: 2,
      },
      {
        id: '10',
        title: 'Predizendo vendas baseada em investimentos com Python',
        image:'https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png',
        link: 'https://github.com/guiaech/projeto_data_science_desafio_hashtag',
        address: 2,
      },
      {
        id: '11',
        title: 'K-means em Python',
        image:'https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png',
        link: 'https://github.com/guiaech/Desafio_k-means_Matrix-confusion',
        address: 2,
      },
      {
       id: '12',
       title: 'Dev em ecommerce Vtex IO',
       image:'https://agenciametodo.com/wp-content/uploads/elementor/thumbs/Black-Moon-Blog-Banner-pc217ggtj0ghpdlz58ocfus5thmyu199uk43s258j4.png',
       link: 'https://drive.google.com/file/d/1VSxBgFnUFOfZTIx72tqpRmtfzJ3RREgQ/view',
       address: 0,
      },
      {
       id: '14',
       title: 'Currículo',
       image:'https://www.globalempregos.com.br/wp-content/uploads/2020/10/devo_fazer_um_curriculo_para_cada_vaga.jpg',
       link: 'https://www.canva.com/design/DAFpjAM0pK0/7skOJAlQaFFP37hBkU4s7w/edit?utm_content=DAFpjAM0pK0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
       address: 0,
      },
      {
       id: '15',
       title: 'Perceptron em Python',
       image:'https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png',
       link: 'https://github.com/guiaech/perceptronSimple',
       address: 2,
     },
     {
       id: '13',
       title: 'Análise de sentimentos com Machine Learning',
       image:'https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png',
       link: 'https://github.com/guiaech/analise_sentimento_twitter',
       address: 2,
     },
     {
       id: '16',
       title: 'Rede Neural LSTM, análise de sentimentos',
       image:'https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png',
       link: 'https://github.com/guiaech/Rede_Neural_Sentimentos_tweets',
       address: 2,
     },
     {
       id: '17',
       title: 'Detecção e contagem humana em tempo real',
       image:'https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png',
       link: 'https://github.com/guiaech/Deteccao_humana_com_visao_computacional',
       address: 2,
     },
      {
        id: '9',
        title: 'Site React | API AWS',
        image:'https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/0e6ff/React.jpg',
        link: 'https://github.com/guiaech/final-corebiz',
        address: 2,
      },
      {
        id: '10',
        title: 'Site Vtex | API AWS',
        image:'https://pbs.twimg.com/profile_images/1414659268318568450/eQPmgbFO_400x400.jpg',
        link: 'https://github.com/guiaech/Vtex_AWS_desafio',
        address: 2,
      },
      {
        id: '11',
        title: 'Ecommerce Vtex | AWS',
        image:'https://pbs.twimg.com/profile_images/1414659268318568450/eQPmgbFO_400x400.jpg',
        link: 'https://youtu.be/LTS8ORpQibw',
        address: 2,
      },
      {
       id: '12',
       title: 'Dev em ecommerce Vtex IO',
       image:'https://pbs.twimg.com/profile_images/1414659268318568450/eQPmgbFO_400x400.jpg',
       link: 'https://drive.google.com/file/d/1VSxBgFnUFOfZTIx72tqpRmtfzJ3RREgQ/view',
       address: 0,
    },{
      id: '13',
      title: 'Ecommerce Wedigi / Vtex IO',
      image:'https://pbs.twimg.com/profile_images/1414659268318568450/eQPmgbFO_400x400.jpg',
      link:'https://youtu.be/OkxwwVzPMcg',
      address: 2,
   }];

  export default DATA

  
