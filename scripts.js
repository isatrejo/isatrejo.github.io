const parseURLParams = url => {
  let queryStart = url.indexOf("?") + 1, queryEnd = url.indexOf("#") + 1 || url.length + 1,
    query = url.slice(queryStart, queryEnd - 1), pairs = query.replace(/\+/g, " ").split("&"), parms = {}, i, n, v,
    nv;
  if (query === url || query === "") return;
  for (i = 0; i < pairs.length; i++) {
    nv = pairs[i].split("=", 2);
    n = decodeURIComponent(nv[0]);
    v = decodeURIComponent(nv[1]);
    if (!parms.hasOwnProperty(n)) parms[n] = [];
    parms[n].push(nv.length === 2 ? v : null);
  }
  return parms;
};
const proyectosData = {
  Elviajero: {
    banner: "viajero/portada.jpg",
    categoria: "otros",
    portada: "viajero/detalle2.jpg",
    titulo: "El Viajero",
    descripcion: "Para apoyo con el centro CAPPSI se trabajo un juego de mesa con el que se experimenta durante la recreaci\u00F3n con el paciente y se refuerza la atenci\u00F3n, con el fin de que poco a poco se vea un cambio en el. Acompa\u00F1ado este de una gu\u00EDa de preguntas para el padre y para el maestro, (material educativo, did\u00E1ctico y pedag\u00F3gico)\n1.Recurso pedag\u00F3gico:Este es un material que es para psic\u00F3logas y docentes, el cual, les permitir\u00E1 contribuir con el desarrollo de los ni\u00F1os con TDAH en CAPSI.\n2. Material did\u00E1ctico:Este ir\u00E1 dirigido a los padres de familia y docentes. Por ello, permitir\u00E1 sensibilizar y comprender m\u00E1s informaci\u00F3n acerca del tema del TDAH.\n3. Juego educativo:Este juego permitir\u00E1 que los ni\u00F1os que cuentan TDAH puedan desarrollar habilidades y destrezas psicomotrices, cognitivas y afectivas.",
    imagenes: ["viajero/detalle.jpg", "viajero/detalle2.jpg"]
  },
  Antiguastreetdog: {
    banner: "ASD/portada.jpg",
    categoria: "Otros",
    portada: "ASD/detalle2.jpg",
    titulo: "Antigua Street dogs",
    descripcion: "La asociaci\u00F3n se dedica a prevenir la sobrepoblaci\u00F3n de perros y gatos, ofreciendo cl\u00EDnicas y movimientos de castraci\u00F3n y esterilizaci\u00F3n educando sobre el trato animal y las responsabilidades que tener una mascota conlleva, trabajando \u00FAnicamente en Antigua Guatemala. Dar a conocer la asociaci\u00F3n street dogs y el labor que realizan, llegando as\u00ED a donadores Y voluntarios potenciales, y al mismo tiempo que se realizan recaudaciones por medio de piezas de identidad gr\u00E1fica y promocional, y con estos promocionales se asegure mensualmente dinero para la asociaci\u00F3n. uego de un estudio del grupo objetivo se concluyo en las piezas, que m\u00E1s ser\u00EDan recibidas y utilizadas por el mismo, ya que ser\u00EDa de uso, por gusto y por amor y ganas de ayudar a los animales. ",
    imagenes: ["ASD/detalle2.jpg", "ASD/detalle3.jpg", "ASD/detalle4.jpg", "ASD/detalle5.jpg"]
  },
  parquenacionesunidas: {
    banner: "parque-naciones-unidas/banner.jpg",
    categoria: "Branding",
    portada: "parque-naciones-unidas/portada.jpg",
    titulo: "Parque Naciones Unidas",
    descripcion: "El Parque Naciones Unidas se ha dedicado a la conservacio\u00F3n de la flora y fauna por m\u00E1s de 22 a\u00F1os; enfoc\u00E1ndose en el sector educativo, trabajador y familiar de Guatemala. Se trabajo branding bajo el concepto de 'H\u00E1bitats y experiencias conectadas' reflejando los diferentes ecosistemas que dentro del parque se pueden encontrar, buscando conectar la marca a un grupo m\u00E1s j\u00F3ven y de esa manera darle un look and feel m\u00E1s fresco.",
    imagenes: ["parque-naciones-unidas/logo.jpg", "parque-naciones-unidas/logo2.jpg", "parque-naciones-unidas/logo3.jpg", "parque-naciones-unidas/logo4.jpg"]
  },
  Refrescanteyrelajanteverano: {
    banner: "refrescante-verano/portada.jpg",
    categoria: "ilustracion",
    portada: "refrescante-verano/detalle2.jpg",
    titulo: "Refrescante y Relajante Verano",
    descripcion: "Bajo el concepto , esta ilustraci\u00F3n es un reflejo del mismo , una composici\u00F3n en la cual cada elemento aporta para representar el mensaje. Ya que se trata del verano , se utilziaron colores calidos con el constraste de el color azul de la piscina.\nEl personaje   compuesto con tonos bastantes tenues y  neutros no tan brillantes, pensado as\u00ED para que resalte de los dem\u00E1s elementos y  texturas brillantes que contiene. Rostro y pose relajada, el personaje juega con el reflejo y el movimiento de la psicina ayudando as\u00ED a realzar la ilustraci\u00F3n a\u00FAn m\u00E1s.",
    imagenes: ["refrescante-verano/detalle1.jpg", "refrescante-verano/detalle2.jpg", "refrescante-verano/detalle3.jpg"]
  },
  Verbena: {
    banner: "verbena/portada.jpg",
    categoria: "ilustracion",
    portada: "verbena/detalle1.jpg",
    titulo: "Verbena",
    descripcion: "Verbena es un personaje inspirado en  la madre naturaleza, para ser una hero\u00EDna, se conecta con el bosque   y vive en el, esta compuesta de su bata de musgo, la cual le ayuda para camuflaje y abrigo, y su bat\u00F3n que le permite hipnotizar a las personas. Sus ojos se mantienen de esta forma y color, ya que reflejan a la luna. Es bastante flexible y sabe pelear, es bastante ruda pero su belleza te puede hipnotizar.",
    imagenes: ["verbena/detalle1.jpg"]
  },
  Elprincipito: {
    banner: "principito/portada.jpg",
    categoria: "ilustracion",
    portada: "principito/detalle1.jpg",
    titulo: "El principito",
    descripcion: "Coffee table book de la historia del principito de Antoine de Saint-Ex\u00FAp\u00E9ry. Cambiando las proporciones de un libro normal logramos dise\u00F1ar e ilustrar  la historia, bajo el concepto de 'trazos peque\u00F1os de color' utilizamos la t\u00E9cnica de pintura a mano y  digital, buscando que los dibujos se parecieran a las obras de Van gogh por medio de su t\u00E9cnica de mezclado de color y brevedad en la l\u00EDnea.\nCada elemento trabajado dentro del proyecto es representando la fantas\u00EDa de dicha histor\u00EDa por lo mismo, reforzando este tema  se utilizaron acabados como el foil, reservado de barniz uv y sil cover para el libro.",
    imagenes: ["principito/detalle1.jpg", "principito/detalle2.jpg", "principito/detalle3.jpg", "principito/detalle4.jpg"]
  },
  outsiders: {
    banner: "outsiders/portada.jpg",
    categoria: "branding",
    portada: "outsiders/detalle.jpg",
    titulo: "Outsiders",
    descripcion: "'imaginaci\u00F3n a todo terreno'\nOutsiders es una tienda de ropa para ni\u00F1os, que les guste salir a explorar y tambi\u00E9n disfruten de un d\u00EDa de campo en familia. Es por eso que el concepto 'imaginaci\u00F3n a todo terreno' esta bien representado tanto en lo que es la tienda como en el logo. Se plasmo la frase todo terreno en las l\u00EDneas ya que representan los diferentes terrenos y texturas que toma el suelo con el cambio de clima. Esas mismas l\u00EDneas ubicadas en la parte superior e inferior estan representando tambi\u00E9n las cuatro estaciones arriba el sol (verano)la l\u00EDnea punteaguda (invierno) la ondulada (primavera) y la ultima (otono). En el centro de este se encuentra una bellota la cual nos ayuda a plasmar la palabra imaginaci\u00F3n que tiene nuestro concepto ya que depende de la perspectiva de las personas lo que vean ah\u00ED ya sea una bellota o un rabano o por las lineas de arriba vean un conejo o una planta. Se utiliz\u00F3 un logo lineal ya que es para ni\u00F1os y es por eso que se quer\u00EDa simple pero divertido.",
    imagenes: ["outsiders/detalle.jpg"]
  },
  Artemis: {
    banner: "artemis/portada.jpg",
    categoria: "branding",
    portada: "artemis/detalle.jpg",
    titulo: "Artemis",
    descripcion: "Artemis cuenta con el mismo logotipo desde que abri\u00F3 sus puertas. Este comunica y cumple con su prop\u00F3sito. Sin embargo se queda bastante desactualizado en cuanto a im\u00E1gen. Es por eso que se opt\u00F3 a redise\u00F1arlo nuevamente.\nBajo el concepto p\u00E1ginas expresivas, se logr\u00F3 cambiar la imagen, sin perder la escencia de lo que es ya Artemis.\n'P\u00E1ginas expresivas' se logro graficar por medio de un libro abierto pero invertido ,el cual con la divisi\u00F3 de los colores horizontalemente se capta la letra A del nombre del establecimiento. un logo bastante funcional ya que con el paso de los a\u00F1os no se quedar\u00E1 atr\u00E1s con las tendencias del dise\u00F1o.",
    imagenes: ["artemis/detalle.jpg"]
  },
  Chaninchanin: {
    banner: "chanin-chanin/portada.jpg",
    categoria: "otros",
    portada: "chanin-chanin/1.jpg",
    titulo: "Chanin Chanin",
    descripcion: "Aplicaci\u00F3n creada para apoyo de los mercados en Guatemala. El prop\u00F3sito de esta es que el usuario por medio de la app pudiera hacer su pedido online del producto que se encuentra en el mercado m\u00E1s cerca a el. El dise\u00F1o se opt\u00F3 por algo bastante limpio ya que as\u00ED el usuario podr\u00E1 percibir m\u00E1s f\u00E1cil su manera de uso y su navegaci\u00F3n. \nLa paleta de colores se sac\u00F3 de diferentes telares Guatemaltecos, de ah\u00ED el porque de su vividez, y lla tipograf\u00EDa no es nada formal es divertida y legible, para darle al app personalidad, logrando que el Usuario se sienta co\u00F3modo y confiable.",
    imagenes: ["chanin-chanin/1.jpg", "chanin-chanin/2.jpg", "chanin-chanin/3.jpg", "chanin-chanin/4.jpg"]
  },
  ilustracion: {
    exclude: true,
    header: "Ilustraci\u00F3n",
    portada: "galeria/ilustracion.jpg",
    titulo: "Dise\u00F1o, arte, ilustraci\u00F3n",
    descripcion: "Un dise\u00F1ador gr\u00E1fico cuenta con muchas ramas para desarrollar su trabajo, de las cuales puede elegir, mezclar o experimentar para llegar a la propuesta m\u00E1s innovadora posible, cumpliendo siempre con las necesidades del proyecto.Una de estas ramas es la ilustraci\u00F3n. Desde ni\u00F1a la ilustraci\u00F3n siempre me ha llamado la atenci\u00F3n, me encanta experimentar con ella y se me ha dado de cierta manera f\u00E1cil.Como dise\u00F1adora, es una t\u00E9cnica que me gusta mucho aplicar a mis proyectos. Marcan un poco la esencia de lo que soy y mi marca como profesional.Ac\u00E1 se presentan mis proyectos principales dentro de esta rama, Desde composiciones hasta dise\u00F1o de personajes. Al ver las im\u00E1genes se nota una unidad de estilo, como lo colores brillantes o texturas ruidosas, que dan a conocer el proyecto y fueron hechos por la misma persona.",
    imagenes: ["ilustracion/IMG_0099.JPG", "ilustracion/IMG_0293.JPG", "ilustracion/IMG_0332.JPG", "ilustracion/IMG_0398.JPG", "ilustracion/IMG_0508.JPG", "ilustracion/IMG_0525.JPG", "ilustracion/IMG_0561.JPG", "ilustracion/IMG_0567.JPG", "ilustracion/IMG_0605.JPG", "ilustracion/IMG_0609.JPG", "principito/detalle4.jpg", "refrescante-verano/detalle1.jpg", "verbena/detalle1.jpg"]
  },
  branding: {
    exclude: true,
    header: "Branding",
    portada: "galeria/branding.jpg",
    titulo: "Vida a una marca",
    descripcion: "Por medio del branding las marcas se posicionan con la competencia y se dan a conocer. Es un aspecto bastante importante que cualquier empresa/marca debe tomar muy en cuenta. ya que es una carta de presentaci\u00F3n frente al grupo objetivo, o potenciales clientes.Disfruto mucho el branding ya que es una forma de resumir o expresar en una imagen o palabra, el concepto u objetivo completo de una empresa, como comunicar y poner de cierta forma personalidad y cara a algo intangible.",
    imagenes: ["Branding/advantage.jpg", "Branding/guate.jpg", "Branding/guate2.jpg", "Branding/witch.jpg", "artemis/detalle.jpg", "outsiders/detalle.jpg"]
  },
  otros: {
    exclude: true,
    header: "Otros",
    portada: "galeria/otros.jpg",
    titulo: "Proyectos, y trabajos varios",
    descripcion: "Esta secci\u00F3n, es un ejemplo de como un dise\u00F1ador gr\u00E1fico toca varios puntos para realizar su trabajo y como las ramas que lo complementan, ayudan para el resultado m\u00E1s creativo posible.Siempre hay que buscar innovar, salirse del margen y experimentar con elementos que no son parte de nuestra zona de confort, ah\u00ED es cuando m\u00E1s explotamos nuestro talento demostrando que las mejores ideas surgen como menos se espera.",
    imagenes: ["Otros/libro.jpg","Otros/libro2.jpg","Otros/Otros.jpg","Otros/Otros1.jpg","Otros/Otros2.jpg","ASD/detalle3.jpg", "ASD/detalle2.jpg", "viajero/detalle2.jpg", "viajero/detalle.jpg", "chanin-chanin/1.jpg", "chanin-chanin/3.jpg", "Amigos/1.jpg", "Amigos/2.jpg", "Amigos/3.jpg"]
  }
};
const buildHeaderImage = src => {
  $('#proyecto-header').css('background-image', `url(${prefix + src})`);
};
const buildTitle = title => {
  $('#proyecto-title').text(title);
};
const buildBanner = text => {
  $('#pryecto-banner').text(text);
};
const buildDescription = desc => {
  $('#proyecto-desc').text(desc);
};
const prefix = "web/detalle-de-proyecto/";
const buildCarousel = imagenes => {
  const $carousel = $('#proyecto-carousel');
  imagenes.map((slide, key) => {
    const _slide = document.createElement('div');
    _slide.className = `carousel-item ${key === 0 ? 'active' : ''}`;
    const _slideImage = document.createElement('img');
    _slideImage.src = prefix + '/' + slide;
    _slideImage.className = 'img-fluid';
    _slide.appendChild(_slideImage);
    $carousel.append(_slide);
  });
};
const buildProject = id => {
  buildHeaderImage(proyectosData[id].banner);
  buildTitle(proyectosData[id].titulo);
  buildDescription(proyectosData[id].descripcion);
  buildCarousel(proyectosData[id].imagenes);
};
const buildProyectos = () => {
  const $proyectos = $("#proyectos");
  const $principales = $('#principales');
  Object.entries(proyectosData).map((item, key) => {
    const project = buildSingleProyecto(item[0], item[1]);
    key <= 2 ? $principales.append(project) : $proyectos.append(project)
  });
};
const buildSingleProyecto = (key, data) => {
  if (typeof (data.exclude) === 'undefined') {
    const _container = document.createElement('div');
    _container.className = "col-12 col-md-4 p-relative";
    const _link = document.createElement('a');
    _link.href = `proyecto.html?proyecto=${key}`;
    const _image = document.createElement('img');
    _image.className = 'img-fluid';
    _image.src = prefix + data.portada;
    console.log(data.portada);
    const _proyectoInner = document.createElement('div');
    _proyectoInner.className = 'proyecto-inner';
    const _innerSub = document.createElement('div');
    _innerSub.className = `p-5 text-white proyecto-inner-sub tipo-${data.categoria.toLowerCase()}`;
    const button = document.createElement('div');
    button.className = 'more-button';
    const buttonP = document.createElement('h1');
    buttonP.innerText = '+';
    button.appendChild(buttonP);
    const title = document.createElement('h2');
    title.className = 'font-weight-bold';
    title.innerText = data.titulo;
    const category = document.createElement('i');
    category.innerText = data.categoria;
    const h3 = document.createElement('h3');
    h3.appendChild(category);
    _link.appendChild(button);
    _innerSub.appendChild(_link);
    _innerSub.appendChild(title);
    _innerSub.appendChild(h3);
    _container.appendChild(_image);
    _proyectoInner.appendChild(_innerSub);
    _container.appendChild(_proyectoInner);
    return _container;
  }
};
