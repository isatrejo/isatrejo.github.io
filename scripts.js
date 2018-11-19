const parseURLParams = url => {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

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
    proyecto1: {
        banner: "ASD/portada.jpg",
        header: "hola",
        titulo: "Lorem Ipsum",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam cupiditate dolor dolore nesciunt repellendus vitae? Aliquam dolore eligendi error inventore repellat rerum totam. Consequatur inventore itaque mollitia repudiandae vitae.",
        imagenes: ["ASD/detalle2.jpg", "ASD/detalle3.jpg"]
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
}
const buildDescription = desc => {
    $('#proyecto-desc').text(desc);
};
const prefix = "web/detalle-de-proyecto/";
const buildCarousel = imagenes => {
    const $carousel = $('#proyecto-carousel');
    let firstSlide = true;
    imagenes.map(
        slide => {
            console.log(slide);
            const _slide = document.createElement('div');
            _slide.className = `carousel-item ${firstSlide ? 'active' : ''}`;
            firstSlide = firstSlide ? false : false;
            const _slideImage = document.createElement('img');
            _slideImage.src = prefix + '/' + slide;
            _slideImage.className = 'img-fluid';
            _slide.appendChild(_slideImage);
            $carousel.append(_slide);
        }
    );

};
const buildProject = id => {
    buildHeaderImage(proyectosData[id].banner);
    buildTitle(proyectosData[id].titulo);
    buildDescription(proyectosData[id].descripcion);
    buildCarousel(proyectosData[id].imagenes);
};