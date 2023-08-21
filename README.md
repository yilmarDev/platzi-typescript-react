# Curso de Typescript: Typescript y React

- Tutor: Jonathan Alvarez
- Plataforma: Platzi
- Tercer curso se la serie de TS
<hr />

## Módulo 1: Introduccion

Curso para aprender las mejores formas de implementar TypeScript con React

<hr />

# Módulo 2: Tipado en React

## Leccion 4: Formas de definir un componente

Existen por lo menos 6 formas de definir componentes con React y TS, pero vemos 4 de ellas:

### Definición implícita

```
    export const RandomFox = () => {
        return <img></img>;
    };
```

### Definición explicita

<blockquote>Esta es la forma que se recomienda usar en el proyecto</blockquote>

```
    export const RandomFox = (): JSX.Element => {
        return <img></img>;
    };
```

### Importando el tipo FunctionComponent de React

```
    import type { FunctionComponent } from 'react';

    export const RandomFox = (): FunctionComponent => {
        return <img></img>;
    };
```

<blockquote>Es importante agregar 'type' cuando se estan importando tipos</blockquote>

### Importando el tipo FC de React

```
    import type { FC } from 'react';

    export const RandomFox: FC = () => {
        return <img></img>;
    };
```

<blockquote>Es importante agregar 'type' cuando se estan importando tipos</blockquote>

## Lección 5: Props y Children

Las props son simplemente un objeto al cual se le da una definición como a cualquier objeto de TS. Para esto basta con definir un objeto, listanto las propiedades que deben ser enviadas al momento de usar el componente.

```
    type props = {
        image: string;
        alt: string;
    };

    export const RandomFox = ({ image, alt }: props): JSX.Element => {
        return (
            <img className="rounded" width={320} height="auto" src={image} alt={alt} />
        );
    };

```

## Leccion 6: Estado con primitivos

Al utilizar genñericos podemos tipar el tipo de variables que pueden usar los hooks de react, por ejemplo useState.

## Genéricos:

Los genéricos en TypeScript son una característica poderosa que te permite escribir funciones, clases o interfaces que puedan trabajar con diferentes tipos de datos de manera flexible y segura. En esencia, los genéricos te permiten parametrizar el tipo de datos que una función o estructura de datos puede manejar.

Hay varias formas de usarlos:

```
    const [images, setImages] = useState<string[]>([]};
```

```
    const [images, setImages] = useState<Array<string>>([]};
```

## Lección 7: State con tipos personalizados

Con frecuencia, los datos que se reciben son objetos, en lugar de tipos primitivos y estos tambien se pueden tipar para usarlos dentro de los hooks.

Esta sería una forma base, pero no se recomienda por lo poco semántica

```
const [images, setImages] = useState<Array<{id: string, url: string}>>([
    {id: 'id1', url: `https://randomfox.ca/images/${random()}.jpg`},
    {id: 'id2', url: `https://randomfox.ca/images/${random()}.jpg`},
]);
```

La forma recomendada es crear un typo específico el parámetro o variable a recibir.

```
type ImageItem = array<{
  id: string;
  url: string;
}>;

export default function Home() {
  const [images, setImages] = useState<ImageItem>([
    { id: 'id1', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 'id2', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 'id3', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 'id4', url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);
```

Aplicando el principio de la mínima representacion

```
type ImageItem = {
  id: string;
  url: string;
};

export default function Home() {
  const [images, setImages] = useState<ImageItem[]>([
    { id: 'id2', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 'id1', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 'id3', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 'id4', url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);
```

## Lección 8: Tipos para eventos y callbacks de escuchadores

Los objetos generados por los eventos y callbacks de escuchadores tambien tienen un tipado, generalmente definido por la libreria, ya sea React, Prime React o cualquier otra, la clave es aprender a encontrar los tipos correctos.
El DOM también incluye sus propias librerias y tipos.

### Tips valiosos

- Al hacer hover sobre la propiedad que se quiere tipar, VS Code muestra el tipo correcto para esa prop
- Al hacer Ctrl + click sobre la propiedad o el tipo a usar, VS Code nos lleva a la definición de los mismos y explorarlas es una excelente forma de aprender sobre las propiedades y los tipos.

> Enlace a explicación sobre los tipos en TS: [Tipos de TypeScript](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props)

## Lección 9: tipos parara referencias y observadores

Para crear los observadores y controlar el flujo de la aplicación en base a sus eventos necesitamos obtener las referencias de los objetos a observar, y para esto react nos ofrece el hook `useRef()`. Esta es una demostración de su uso:

```
import React, { useRef, useState } from 'react';

function DemoRefComponent() {
  // Creamos una referencia usando useRef
  const myInputRef = useRef<HTMLInputElement | null>(null);

  // Estado para almacenar el valor del input
  const [inputValue, setInputValue] = useState<string>('');

  // Función para manejar cambios en el input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Función para enfocar el input cuando se hace clic en el botón
  const focusInput = () => {
    // Usamos la referencia para acceder al elemento del DOM
    if (myInputRef.current) {
      myInputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Uso de useRef() con TypeScript</h1>
      <input
        type="text"
        placeholder="Escribe algo..."
        value={inputValue}
        onChange={handleInputChange}
        ref={myInputRef} // Asignamos la referencia al input
      />
      <button onClick={focusInput}>Enfocar Input</button>
      <p>Valor del input: {inputValue}</p>
    </div>
  );
}

export default DemoRefComponent;

```

> Tip: para evitar problemas y fallas al usar `useRef()` debemos inicializar en `null` cada vez que se desconozca el valor o tipo inicial del elemento a referenciar. Tal como se ve en el siguiente ejemplo:

```
const myInputRef = useRef<HTMLInputElement | null>(null);
```

## Lección 10: Lazy loading con observadores

Para implementar la carga peresoza o `lazy load` se puede utilizar IntersectionObserver.

### IntersectionObserver

Es una API de JavaScript que proporciona una forma eficiente de observar cambios en la intersección entre un elemento y su contenedor ancestral o el viewport del navegador.

El IntersectionObserver trabaja observando cuándo un elemento objetivo (target) entra o sale del área visible del viewport o de su contenedor ancestral. Esto se logra mediante la creación de una instancia de IntersectionObserver y la definición de una función de devolución de llamada (callback) que se ejecuta cuando se producen estas intersecciones.

```
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        console.log('Hey ...');
        setSrc(image);
    }
    });
});
```

La implementación completa requiere de 3 pasos:

- Crear el observador
- Implementarlo
- Limpiar o eliminar el observador cuando el componente se desmonte o vuelva renderizar

```
useEffect(() => {

    // Creando el observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });

    // Aplicando el observador
    if (node.current) observer.observe(node.current);

    // Retirando el obervador o limpiando
    return () => {
      observer.disconnect();
    };
}, [image]);
```

### operador de aserción no nula | non-null assertion operator | Bang

Es una característica de TypeScript, que se utiliza para indicar al compilador que un valor no será null o undefined, incluso cuando el sistema de tipos podría sugerir lo contrario.

Se implementa añadiendo el signo `!` a la expresión que podría ser `null` para el transpilador, pero no se recomienda usarle en su lugar se debería aplicar la validación de tipo para asegurar que se va a recibir un parámetr válido.

```
// Usando el operador de aserción no nula para indicar que cadena no es nula
function obtenerLongitud(cadena: string | null): number {
  return cadena!.length; // Si el signo ! esto alerta a TS
}

const resultado = obtenerLongitud("Hola, mundo!");

```

## Lección 11: Componentes que extienden elementos del DOM

Cuando se crean componentes propios que envuelven elementos del DOM como imagenes, listas o títulos, es posible que sea necesario usar las props que incluye el elemento original, pero la envoltura generada de nuestro componente no lo permite.

Para solucionar esto podemos heredar del elemento original y pasarlos como propios del componente.

```
type LazyImageProps = {
  image: string;
  alt: string;
};

type imageNative = ImgHTMLAttributes<HTMLImageElement>;

type props = LazyImageProps & imageNative;

export const LazyImage = ({ image, ...imgProps }: props): JSX.Element => {
  // Código del componente

  return (<></>);
}
```

Al hacer esto logramos crear un componente que está por encima del elemento del DOM, y aún así proporciona todas las props del elemento nativo del DOM.

## Lección 12: Reto

Añadir una prop `onLaziLoad` que ejecute un callback al comoponente que renderiza la imagen, el objetivo es que quien lo use pueda ejecutar el callback, justo cuando la imagen se haya cargado.

Hay que asegurarse de que esta función solo se ejecute una vez y que sea en el momento en que la imagen se carga.

[Solución del tutor Parte 1](https://github.com/jonalvarezz/platzi-react-typescript/commit/1d7d30afe0b8516ec6086fac64c4ed41bc8aa190)

[Solución del tutor Parte 2](https://github.com/jonalvarezz/platzi-react-typescript/commit/0f15e584ad53586505883500780a3614276eb4e9)

## Lección 13: Creando tipos propios para la aplicación

Para crear tipos globales se debe crear un archivo en la raiz del sitio que termine en `d.ts` por ejemplo `app.d.ts` y guaradar allí los tipos que se quiera que sean globales.

Por convensión, los tipo globales deben declararse con un `I` o `T` al principio, por ejemplo `TLazyImage`.

### Tips para crear tipos globales

> - Hacer global solo lo que sea global.
> - Empezar con tipos locales y probar si realmente deberían convertirse en globales.

## Lección 14: Trabajando con librerias no tipadas

En el 90% de los casos las librerias son compatibles con TS y del 10% restante existen tipos creados por la comunidad, solo en casos extremos con librerías muy antiguas tendremos que construir tipos propios para las librerias.

En el caso de que nos encontremos con librerias que no cuentan con tipos para TS, tenemos 2 opciones: importarlos desde un paquete externo que alguien de la comunidad haya creado o revisar el funcionamiento de la librería y crear los tipos que necesitemos.

### Creando tipos propios

Para esto hay que crear una libreria propia dentro del proyecto `@types` y dentro de ella una carpeta para cada libreria a tipar `lodash` y por último los documentos que van a contener los tipos `index.d.ts`:

> @types/lodash/index.d.ts
> Para crear los typos existe una sintaxis precisa, donde el nombre de la librería debe ser exactamente el mismo con el que se importó:

```
declare module 'lodash' { // Declarando la libreria a tipar
  export function random(lower: number, upper: number): number; // Creando el tipo para la función random
}
```

La estructura de los tipos depende directamente del funcionamiento de la función o prop a tipar.

### Importando los tipos y usando Definitely typed

Existe una librerias llamada `Definitely typed` donde la comunidad de JS mantiene los tipos para librerias populares que nos cuentan con los tipos.

> [Link a Definitely Type en Github](https://github.com/DefinitelyTyped/DefinitelyTyped)

En el caso de lodash se pueden importar con el siguiente comando:

```
npm install @types/lodash
```

## Lección 15: Liberías y extensión del objeto windows

Existen scripts como Google Analytics que se insertan dentro del HTML y de los cuales no tenemos control, pero deben ser tipados, en algunos casos podemos importar los tipos desde definitely Typed, pero en otros no.

Cuando no se pueden importar hay que crearlos y para esto se extiende de `window`.

### Creando un tipo para la función `plausible()` de Plausible analytics

Para instalar Plausible basta con añadir un script dentro del HTML así que no se usa npm ni se importan librerias de tipos, por eso hay que extender de `Window` y crear un nuevo tipo, en el ejemplo se ve como se hace:

```
interface Window {
  plausible: (event: 'add_fox' | 'remove_fox') => void;
}
```

Hacer esto nos permite usar la función tipada como un elemento del objeto global `window`, facilitando mucho el trabajo propia y del equipo de trabajo.

Es importante seguir las buenas prácticas, por eso se debe crear un archivo dentro de la libreria de tipos, como esta:

> @types/plausible/index.d.ts
