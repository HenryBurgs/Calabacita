/*==========================
ELEMENTOS
==========================*/

const boton = document.getElementById("comenzar");

const inicio = document.getElementById("inicio");

const intro = document.getElementById("intro");

const escena = document.getElementById("escena");

const mensaje = document.querySelector(".mensaje");

const fade = document.getElementById("fade");

const principal = document.getElementById("principal");

const dias = document.querySelectorAll(".dia");

const cartaModal = document.getElementById("cartaModal");

const carta = document.querySelector(".carta");

const diaCarta = document.getElementById("diaCarta");

const fraseCarta = document.getElementById("fraseCarta");

const abrirRegalo = document.getElementById("abrirRegalo");

const cerrarCarta = document.getElementById("cerrarCarta");

const cerrarCartaAtras =
document.getElementById("cerrarCartaAtras");

const tituloRegalo =
document.getElementById("tituloRegalo");

const mensajeRegalo =
document.getElementById("mensajeRegalo");

const canjearRegalo =
document.getElementById("canjearRegalo");

const modalCanje =
document.getElementById("modalCanje");

const cerrarModalCanje =
document.getElementById("cerrarModalCanje");

const nombreCanjeModal =
document.getElementById("nombreCanjeModal");

const listaCanjes =
document.getElementById("listaCanjes");

const canjeVacio =
document.getElementById("canjeVacio");


/*==========================
ELEMENTOS CARTA PERSONAL
==========================*/

const abrirCartaPersonal =
document.getElementById("abrirCartaPersonal");

const modalCartaPersonal =
document.getElementById("modalCartaPersonal");

const cerrarCartaPersonal =
document.getElementById("cerrarCartaPersonal");


/*==========================
FECHA ACTUAL
==========================*/

function obtenerDiaActual(){

    const fecha = new Date();

    const mes = fecha.getMonth();

    const dia = fecha.getDate();


    // Antes de octubre
    if(mes < 9){

        return 0;

    }


    // Octubre
    if(mes === 9){

        return Math.min(dia,31);

    }


    // Después de octubre
    return 31;

}


const diaActual =
obtenerDiaActual();


console.log(
    "🎃 Día disponible actualmente:",
    diaActual
);


/*==========================
FRASES MOTIVADORAS
==========================*/

const frases = {

1:
"A veces solo necesitas recordar lo mucho que has avanzado. ❤️",

2:
"No tienes que tenerlo todo resuelto para seguir adelante.",

3:
"Lo que hoy parece difícil, mañana será parte de tu historia.",

4:
"Nunca olvides todo lo que eres capaz de superar.",

5:
"Mereces sentir orgullo de la persona en la que te estás convirtiendo.",

6:
"Un día a la vez también es una forma de avanzar.",

7:
"Tu esfuerzo, aunque nadie lo vea, también cuenta.",

8:
"No te rindas por un mal día; todavía quedan muchos momentos bonitos.",

9:
"Confía un poquito más en ti.",

10:
"A veces comenzar de nuevo es exactamente lo que necesitabas.",

11:
"Tu historia todavía tiene capítulos hermosos por escribir.",

12:
"No necesitas ser perfecta para ser increíble.",

13:
"Todo lo que has superado te hizo más fuerte.",

14:
"Date permiso para crecer a tu propio ritmo.",

15:
"Hay cosas bonitas esperando encontrarte.",

16:
"Que nunca te falten motivos para volver a sonreír.",

17:
"Sigue caminando, incluso cuando el camino no sea claro.",

18:
"Eres mucho más fuerte de lo que a veces crees.",

19:
"No olvides celebrar también tus pequeños logros.",

20:
"Hay personas que hacen nuestra vida más bonita simplemente por existir. ❤️",

21:
"Tu paz también merece ser una prioridad.",

22:
"Nunca es tarde para elegirte y volver a empezar.",

23:
"Hoy no solo celebramos un cumpleaños. Celebramos tu existencia. 🎂❤️",

24:
"Respira. Lo estás haciendo mejor de lo que crees.",

25:
"Que tus sueños siempre tengan un lugar en tu vida.",

26:
"No permitas que un momento difícil defina toda tu historia.",

27:
"A veces avanzar significa simplemente no rendirse.",

28:
"Confía en el proceso, incluso cuando no puedas ver el resultado.",

29:
"Todo lo bonito también llega cuando menos lo esperas.",

30:
"Nunca dejes de creer en la persona que puedes llegar a ser.",

31:
"Siempre puedes volver a comenzar. Y quizá lo mejor todavía esté por llegar. ❤️"

};


/*==========================
REGALOS ESPECIALES
==========================*/

const regalos = {


/*==========================
DÍA 5
==========================*/

5:{

titulo:
"🌷 Una pequeña sorpresa para ti",

mensaje:
`Porque no todos los regalos necesitan una fecha especial.

Algunos simplemente aparecen para recordarte que alguien pensó en ti.

Este es el primero de varios pequeños momentos preparados especialmente para ti. ❤️`

},


/*==========================
DÍA 10
==========================*/

10:{

titulo:
"🎁 Un pequeño detalle para ti",

mensaje:
`Hoy tienes una pequeña sorpresa esperándote.

Ábrela cuando quieras regalarte un momento bonito.

Porque también mereces recibir detalles inesperados. ❤️`

},


/*==========================
DÍA 15
==========================*/

15:{

titulo:
"✨ Un momento para sonreír",

mensaje:
`Ya estamos a mitad del camino.

Quería dejarte algo especial porque algunas cosas bonitas merecen aparecer sin avisar.

Todavía quedan momentos por descubrir. ❤️`

},


/*==========================
DÍA 20
RECUERDO DE MI HIJA
==========================*/

20:{

titulo:
"🎀 Un recuerdo que siempre será especial",

mensaje:
`Hoy quiero hacer una pausa en este calendario.

Porque hay recuerdos que merecen algo más que una frase bonita.

Hay una persona que siempre será una parte importante de tu historia y de la mía.

Nuestra hija.

Ella es uno de esos recuerdos que no pertenecen solamente al pasado, porque sigue siendo parte de nuestras vidas todos los días.

Y quizás por eso este día tenía que ser diferente.

Hoy la sorpresa no es solamente para ti.

Es para recordar algo que siempre tendrá un lugar especial en nuestras vidas. ❤️`

},


/*==========================
DÍA 23
CUMPLEAÑOS
==========================*/

23:{

titulo:
"🎂 Feliz cumpleaños, Calabacita ❤️",

mensaje:
`Hoy sí.

Hoy todo este pequeño camino tenía sentido.

Porque hoy celebramos tu vida.

No quiero llenar este momento de frases perfectas ni de palabras que suenen bonitas solamente porque es tu cumpleaños.

Quiero decirte algo sencillo:

me alegra que existas.

Espero que este nuevo año de tu vida te encuentre con más tranquilidad, más sonrisas y muchos momentos que realmente quieras guardar.

Y porque un cumpleaños merece algo más que palabras...

🎟️ tengo una sorpresa especial para ti.`

},


/*==========================
DÍA 27
==========================*/

27:{

titulo:
"🌙 Una sorpresa antes del final",

mensaje:
`El mes está llegando poco a poco a su final.

Pero antes de llegar al último día quería dejarte un pequeño detalle más.

Porque todavía quedan recuerdos por crear y momentos por vivir.

Y quién sabe... quizá lo mejor todavía esté por llegar. ❤️`

},


/*==========================
DÍA 31
CIERRE
==========================*/

31:{

titulo:
"❤️ Y así termina este pequeño viaje",

mensaje:
`Llegaste hasta el último día.

Durante todo este mes hubo palabras, recuerdos, pequeñas sorpresas y momentos preparados especialmente para ti.

Pero si tuviera que quedarme con una sola cosa de todo esto, sería esta:

gracias por haber llegado hasta aquí.

Los calendarios terminan.

Los meses terminan.

Pero algunos recuerdos encuentran la manera de quedarse.

Y como no quería despedir este pequeño regalo simplemente con un "fin"...

🎟️ todavía queda una última sorpresa para ti.`

}

};


/*==========================
INICIO EXPERIENCIA
==========================*/

if(boton){

    boton.addEventListener("click",()=>{

        boton.disabled=true;

        inicio.style.opacity="0";


        setTimeout(()=>{

            inicio.style.display="none";

            escena.classList.add("mostrar");

        },3000);


        setTimeout(()=>{

            mensaje.classList.add("mostrar");

        },5000);


        setTimeout(()=>{

            fade.classList.add("mostrar");

        },12000);


        setTimeout(()=>{

            escena.style.display="none";

            principal.classList.add("mostrar");

        },15000);


        setTimeout(()=>{

            fade.classList.remove("mostrar");

        },17000);

    });

}


/*==========================
CONTROL DEL CALENDARIO
==========================*/

dias.forEach(dia=>{

    const numero =
    Number(dia.dataset.dia);


    if(numero > diaActual){

        dia.classList.add("bloqueado");

    }

    else{

        dia.classList.add("desbloqueado");

    }


    dia.addEventListener("click",()=>{

        if(numero > diaActual){

            return;

        }

        abrirCarta(numero);

    });

});


/*==========================
ABRIR CARTA DE UN DÍA
==========================*/

function abrirCarta(numero){

    diaCarta.innerHTML =
    "Día " + numero + " ❤️";


    fraseCarta.innerHTML =
    frases[numero] || "";


    carta.classList.remove("girar");


    if(regalos[numero]){

        abrirRegalo.style.display="block";

    }

    else{

        abrirRegalo.style.display="none";

    }


    canjearRegalo.style.display="none";


    cartaModal.classList.add("mostrar");

}


/*==========================
ABRIR SORPRESA
==========================*/

if(abrirRegalo){

    abrirRegalo.addEventListener("click",()=>{

        const numero =
        Number(
            diaCarta.innerHTML
            .replace("Día ","")
            .replace(" ❤️","")
        );


        if(!regalos[numero]){

            return;

        }


        tituloRegalo.innerHTML =
        regalos[numero].titulo;


        mensajeRegalo.innerHTML =
        regalos[numero].mensaje;


        carta.classList.add("girar");


        canjearRegalo.style.display="block";

    });

}


/*==========================
CERRAR CARTA DE UN DÍA
==========================*/

function cerrarLaCarta(e){

    if(e){

        e.preventDefault();

        e.stopPropagation();

    }


    carta.classList.remove("girar");

    cartaModal.classList.remove("mostrar");

    abrirRegalo.style.display="block";

    canjearRegalo.style.display="none";

}


if(cerrarCarta){

    cerrarCarta.addEventListener(
        "click",
        cerrarLaCarta
    );

}


if(cerrarCartaAtras){

    cerrarCartaAtras.addEventListener(
        "click",
        cerrarLaCarta
    );

}


/*==========================
CANJEAR SORPRESA
==========================*/

if(canjearRegalo){

    canjearRegalo.addEventListener("click",()=>{

        const numero =
        Number(
            diaCarta.innerHTML
            .replace("Día ","")
            .replace(" ❤️","")
        );


        if(!regalos[numero]){

            return;

        }


        const nombre =
        regalos[numero].titulo;


        const mensajeCorreo =
        "Karla ha solicitado una de las sorpresas de su regalo.";


        nombreCanjeModal.innerHTML =
        nombre;


        guardarCanje(
            numero,
            nombre
        );


        enviarCorreoCanje(
            numero,
            nombre,
            mensajeCorreo
        );


        carta.classList.remove("girar");

        cartaModal.classList.remove("mostrar");


        modalCanje.classList.add("mostrar");

    });

}


/*==========================
ENVIAR EMAIL DEL CANJE
==========================*/

function enviarCorreoCanje(numero,nombre,mensaje){

    if(typeof emailjs === "undefined"){

        console.error(
            "EmailJS no está disponible."
        );

        return;

    }


    const parametros = {

        canje: nombre,

        dia: numero,

        mensaje: mensaje

    };


    emailjs.send(
        "service_yzqmr9c",
        "template_r0dhvp4",
        parametros
    )
    .then((respuesta)=>{

        console.log(
            "✅ Canje enviado correctamente:",
            respuesta.status,
            respuesta.text
        );

    })
    .catch((error)=>{

        console.error(
            "❌ Error enviando el canje:",
            error
        );

    });

}


/*==========================
GUARDAR CANJE
==========================*/

function guardarCanje(numero,nombre){

    const existente =
    document.querySelector(
        '.canje-guardado[data-dia="' + numero + '"]'
    );


    if(existente){

        return;

    }


    if(canjeVacio){

        canjeVacio.style.display="none";

    }


    const nuevoCanje =
    document.createElement("div");


    nuevoCanje.className =
    "canje-guardado";


    nuevoCanje.dataset.dia =
    numero;


    nuevoCanje.innerHTML = `

        <div class="canje-icono">
            🎟️
        </div>

        <h3>
            ${nombre}
        </h3>

        <p>
            Esta sorpresa ha sido guardada especialmente para ti.
            <br>
            Cuando llegue el momento perfecto,
            podrás disfrutarla. ❤️
        </p>

        <div class="estado-canje">
            💖 Canje seleccionado
        </div>

    `;


    listaCanjes.prepend(
        nuevoCanje
    );


    nuevoCanje.classList.add(
        "canjesello"
    );

}


/*==========================
CERRAR MODAL DE CANJE
==========================*/

if(cerrarModalCanje){

    cerrarModalCanje.addEventListener(
        "click",
        ()=>{

            modalCanje.classList.remove(
                "mostrar"
            );

        }
    );

}


if(modalCanje){

    modalCanje.addEventListener(
        "click",
        (e)=>{

            if(e.target === modalCanje){

                modalCanje.classList.remove(
                    "mostrar"
                );

            }

        }
    );

}


/*==========================
CARTA PERSONAL
==========================*/

if(abrirCartaPersonal){

    abrirCartaPersonal.addEventListener(
        "click",
        ()=>{

            modalCartaPersonal.classList.add(
                "mostrar"
            );


            const contenido =
            modalCartaPersonal.querySelector(
                ".carta-personal-contenido"
            );


            if(contenido){

                contenido.scrollTop=0;

            }

        }
    );

}


/*==========================
CERRAR CARTA PERSONAL
==========================*/

function cerrarCartaPersonalFuncion(){

    modalCartaPersonal.classList.remove(
        "mostrar"
    );

}


if(cerrarCartaPersonal){

    cerrarCartaPersonal.addEventListener(
        "click",
        cerrarCartaPersonalFuncion
    );

}


if(modalCartaPersonal){

    modalCartaPersonal.addEventListener(
        "click",
        (e)=>{

            if(e.target === modalCartaPersonal){

                cerrarCartaPersonalFuncion();

            }

        }
    );

}


/*==========================
TECLA ESC
==========================*/

document.addEventListener(
    "keydown",
    (e)=>{

        if(e.key === "Escape"){

            if(modalCanje){

                modalCanje.classList.remove(
                    "mostrar"
                );

            }


            if(cartaModal){

                cartaModal.classList.remove(
                    "mostrar"
                );

            }


            if(modalCartaPersonal){

                modalCartaPersonal.classList.remove(
                    "mostrar"
                );

            }

        }

    }
);


/*==========================
RECUERDOS
==========================*/

function abrirRecuerdo(){

    console.log(
        "Aquí aparecerán fotos y recuerdos especiales de Calabacita ❤️"
    );

}


/*==========================
FIN
==========================*/