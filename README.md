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
    { id: 'id1', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 'id2', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 'id3', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 'id4', url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);
```
