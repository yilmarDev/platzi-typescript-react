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
