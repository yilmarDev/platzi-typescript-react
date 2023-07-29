# Curso de Typescript: Typescript y React

- Tutor: Jonathan Alvarez
- Plataforma: Platzi
- Tercer curso se la serie de TS
<hr />

## Módulo 1: Introduccion

<hr />

# Módulo 2: Tipado en React

## Leccion 4: Formas de definir un componente

Existen por lo menos 6 formas de definir componentes con React y TS, pero vemos 4 de ellas:

### Definición implícita

<pre>
    <code>
        export const RandomFox = () => {
            return <img></img>;
        };
    </code>
</pre>

### Definición explicita

<blockquote>Esta es la forma que se recomienda usar en el proyecto</blockquote>
<pre>
    <code>
        export const RandomFox = (): JSX.Element => {
            return <img></img>;
        };
    </code>
</pre>

### Importando el tipo FunctionComponent de React

<pre>
    <code>
        import type { FunctionComponent } from 'react';

        export const RandomFox = (): FunctionComponent => {
            return <img></img>;
        };
    </code>
</pre>

<blockquote>Es importante agregar 'type' cuando se estan importando tipos</blockquote>

### Importando el tipo FC de React

<pre>
    <code>
        import type { FC } from 'react';

        export const RandomFox: FC = () => {
            return <img></img>;
        };
    </code>
</pre>

<blockquote>Es importante agregar 'type' cuando se estan importando tipos</blockquote>
