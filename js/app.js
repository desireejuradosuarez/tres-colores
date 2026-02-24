(() => {
  const $ = (sel, root = document) => root.querySelector(sel);

  const routes = {
    home: {
      render() {
        return `
          <header class="home-header">
            <h1 class="brand">
              <a href="index.html" aria-label="Ir a inicio">
                <span class="brand-red">Krzysztof Kieslowski</span>
                <span class="brand-blue">Tres colores</span>
              </a>
            </h1>

            <a class="bio-home" href="bio.html">biografía +</a>
          </header>

          <nav class="home-nav" aria-label="Secciones">
            <ul>
              <li>
                <a class="panel" href="azul.html" style="background-image:url('img/azul.jpg')">
                  <span class="label azul">azul</span>
                </a>
              </li>
              <li>
                <a class="panel" href="blanco.html" style="background-image:url('img/blanco.jpg')">
                  <span class="label blanco">blanco</span>
                </a>
              </li>
              <li>
                <a class="panel" href="rojo.html" style="background-image:url('img/rojo.jpg')">
                  <span class="label rojo">rojo</span>
                </a>
              </li>
            </ul>
          </nav>
        `;
      },
    },

    azul: {
      title: "Azul",
      h2: "Azul",
      bodyClass: "azul",
      content: `
        <p>
          "Trois Couleurs: Bleu es un complejo estudio psicológico sobre la libertad (representada por el color azul).
          La acción se sitúa en París, donde Julie, esposa del célebre compositor Patrice de Courcy, sobrevive a un
          macabro accidente automovilístico, en el que pierde a su marido y a su pequeña hija, Anna. Durante la
          convalecencia, intenta suicidarse, sin éxito. Cuando sale del hospital, Julie decide aislarse totalmente
          del mundo exterior y de los recuerdos de su antigua vida en compañía de su familia: vende su ropa y todas
          sus cosas, se distancia de sus amistades, retoma su apellido de soltera (Vignon), y se recluye en un
          diminuto apartamento en la ciudad sin decirlo a nadie y destruye las notas del último encargo a su marido,
          una pieza clásica inacabada que iba a ser tocada para la celebración de la creación de la Unión Europea."
        </p>
        <p>
          "A pesar de sus deseos autodestructivos, París empuja a Julie a afrontar aspectos del pasado que afloran
          a la luz, y le impide seguir adelante. Se enamora de Olivier Benoît, el ayudante de su marido (el cual
          siempre la había amado en secreto), y para empeorar las cosas, descubre que Patrice tenía una amante,
          llamada Sandrine, la cual está esperando un hijo suyo."
        </p>
      `,
    },

    blanco: {
      title: "Blanco",
      h2: "Blanco",
      bodyClass: "blanco",
      content: `
        <p>
          En Trois Couleurs: Blanc "Blanco" volvemos a ser testigos de un intimista estudio de personajes, una
          representación de humanidad que se traslada de París a los fríos y blancos parajes de la Polonia natal
          de Krzysztof Kieslowski. El tono de esta cinta es sin duda más amable que el de Trois Couleurs: Bleu (Azul),
          pero no nos equivoquemos: estamos ante una comedia triste, en palabras del propio director; y aunque por
          momentos nos haga sonreír debido a las disparatadas situaciones que atraviesa Karol (deliciosa e ingenuamente
          interpretado por Zbigniew Zamachowski), no deja de atenazarnos en ningún momento, pues esa actitud de abandono
          y desorientación debida a la muerte (o, quizás, debida a la vida) de su anterior obra, pasa a ser aquí
          un macabro juego relacionado con la propia muerte, una lección de búsqueda de los verdaderos propósitos
          que nos mueven a hacer lo que hacemos, una historia de amor imposible, retorcida pero a la vez necesaria
          para dar sentido a los comportamientos que vemos en pantalla.
        </p>
        <p>
          El tema de la bandera francesa pretende ser la igualdad en esta cinta, y como igualitaria podemos definir
          esa intención del personaje principal por encauzar su vida, huyendo de un país que le es extraño y que
          le impide sentirse dueño de sí mismo para poder cumplir con su mujer. Esta (una fría pero maravillosa
          Julie Delpy, como una gatita continuamente en celo) lo abandona por no sentirse satisfecha sexualmente,
          y Karol decide entonces regresar a Varsovia oculto en una maleta, donde comenzará desde cero e irá amasando
          una fortuna que le permita volver por todo lo alto.
        </p>
      `,
    },

    rojo: {
      title: "Rojo",
      h2: "Rojo",
      bodyClass: "rojo",
      content: `
        <p>
          "La historia se desarrolla en la ciudad de Ginebra, Suiza. El filme comienza con el seguimiento de una llamada
          telefónica entre Valentine Dussaut, una inocente estudiante universitaria que trabaja de medio tiempo como modelo,
          y su altanero y posesivo novio, Michel. Después de eso, posa en una sesión de fotos publicitaria para una marca de
          goma de mascar y durante la sesión el fotógrafo le pide que luzca muy triste. Por otro lado, mientras va caminando
          de vuelta a su casa, Auguste Bruner, vecino de Valentine y estudiante de leyes, deja caer una serie de libros, se da
          cuenta de que un capítulo especial del Código Penal quedó abierto al azar, y se concentra en ese pasaje.
        </p>
        <p>
          Esa misma noche, Valentine atropella por accidente a un perro, y al ver que tiene una placa (la cual revela que es una
          hembra llamada Rita), le sube a su auto y va hasta la casa de su dueño, el juez Joseph Kern, ya retirado por soltero.
          Este reacciona con indiferencia y frialdad, y cuando Valentine le pregunta qué debe hacer con Rita, le responde que puede
          hacer lo que le plazca, y que él no la quiere. Valentine decide llevarla al veterinario, donde descubren que está preñada,
          y una vez que la curan, se la lleva a su casa.
        </p>
      `,
    },

    bio: {
      title: "Biografía",
      bodyClass: "blanco",
      content: `
        <img class="bio-img" src="img/k01.jpg" alt="Krzysztof Kieslowski">
        <p>
          En Trois Couleurs: Blanc "Blanco" volvemos a ser testigos de un intimista estudio de personajes, una
          representación de humanidad que se traslada de París a los fríos y blancos parajes de la Polonia natal
          de Krzysztof Kieslowski. El tono de esta cinta es sin duda más amable que el de Trois Couleurs: Bleu (Azul),
          pero no nos equivoquemos: estamos ante una comedia triste, en palabras del propio director; y aunque por
          momentos nos haga sonreír debido a las disparatadas situaciones que atraviesa Karol (deliciosa e ingenuamente
          interpretado por Zbigniew Zamachowski), no deja de atenazarnos en ningún momento, pues esa actitud de abandono
          y desorientación debida a la muerte (o, quizás, debida a la vida) de su anterior obra, pasa a ser aquí
          un macabro juego relacionado con la propia muerte, una lección de búsqueda de los verdaderos propósitos
          que nos mueven a hacer lo que hacemos, una historia de amor imposible, retorcida pero a la vez necesaria
          para dar sentido a los comportamientos que vemos en pantalla.
        </p>

        <img class="bio-img" src="img/k02.jpg" alt="Krzysztof Kieslowski trabajando en rodaje">

        <p>
          El tema de la bandera francesa pretende ser la igualdad en esta cinta, y como igualitaria podemos definir
          esa intención del personaje principal por encauzar su vida, huyendo de un país que le es extraño y que
          le impide sentirse dueño de sí mismo para poder cumplir con su mujer. Esta (una fría pero maravillosa
          Julie Delpy, como una gatita continuamente en celo) lo abandona por no sentirse satisfecha sexualmente,
          y Karol decide entonces regresar a Varsovia oculto en una maleta, donde comenzará desde cero e irá amasando
          una fortuna que le permita volver por todo lo alto.
        </p>
      `,
    },
  };

  function renderInnerPage(pageKey) {
    const page = routes[pageKey];
    if (!page) return "";

    const h2Markup = (pageKey === "bio") ? "" : `<h2>${page.h2}</h2>`;

    return `
      <header class="topbar">
        <h1 class="brand brand--inner">
          <a href="index.html" aria-label="Volver a inicio">
            <span class="brand-red">Krzysztof Kieslowski</span>
            <span class="brand-blue">Tres colores</span>
          </a>
        </h1>

        <nav class="menu" aria-label="Menú">
          <ul>
            <li><a href="azul.html">azul</a></li>
            <li><a href="blanco.html">blanco</a></li>
            <li><a href="rojo.html">rojo</a></li>
            <li><a class="biografia" href="bio.html">biografía +</a></li>
          </ul>
        </nav>
      </header>

      <section class="contenido">
        ${h2Markup}
        <div class="texto">
          ${page.content}
        </div>
      </section>
    `;
  }

  function boot() {
    const app = $("#app");
    if (!app) return;

    const pageKey = document.body?.dataset?.page || "home";

    if (pageKey === "home") {
      app.innerHTML = routes.home.render();
      return;
    }

    const cfg = routes[pageKey];
    if (cfg?.bodyClass) document.body.classList.add(cfg.bodyClass);

    app.innerHTML = renderInnerPage(pageKey);

    if (cfg?.title) document.title = cfg.title;
  }

  document.addEventListener("DOMContentLoaded", boot);
})();