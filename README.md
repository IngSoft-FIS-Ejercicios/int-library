# Ejercicio Library

## Cómo levantar el proyecto

1. Realizar un fork de este repositorio desde GitHub.
2. Clonar el fork y entrar en la carpeta del proyecto.
3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## Objetivos

- Implementar nuevas funciones de lógica de dominio
- Codificar test unitarios en paralelo a la implementación
- Usar buenas prácticas de codificacion
- Modificar la interfaz de usuario para usar las nuevas funciones

### Aspectos a tener en cuenta

- Los comentarios `// TODO` deben ser reemplazados por código para implementar las nuevas funciones.
- Puede agregar nuevas funciones y tests, así como agregar parámetros en funciones existentes.
- Si necesita realizar supuestos sobre la implementación, agregue comentarios para explicarlos.
- Los test unitarios se deben codificar en los archivos correspondientes `*.test.js`.
- La cobertura de los test unitarios debe alcanzar 100 % de sentencias y ramas.
- Ejecute el linter con `npm run lint` para eliminar errores y warnings.

> Recuerde al finalizar cada parte:
>
> - realizar commit / push
> - subir un issue con screenshots

### Parte A

1. En la clase `Book` agregar el campo `chapters`

- representa el número de capítulos del libro
- el campo debe ser un número entero, mínimo 1 y máximo 500

Implementar las funciones `getChapters()` y `setChapters()` validando que el parámetro recibido es un número.

Modificar la función `toString()` agregando el valor del campo.

Codificar los test unitarios para las nuevas funciones y las ya existentes que se encuentren sin cubrir.

- incluir test para casos de error
- la cobertura del test unitario debe alcanzar el 100%

2. En la clase `Book` implementar la función `averagePagesPerChapter()` que retorna el promedio de páginas por capítulo del libro.
   Codificar test unitarios para la función `averagePagesPerChapter()`.

3. En la clase `Library` implementar la función `averageChaptersPerBook()` que retorna el promedio de capítulos de los libros de la biblioteca.
   Codificar test unitarios para la función `averageChaptersPerBook()`.

4. Ejecutar el linter y verificar que no existan errores o advertencias.

Subir un issue 'Parte A' con un screenshot de la terminal con el resumen de los tests unitarios y cobertura.

### Parte B

5. Agregar elementos a la intefaz de usuario para usar las nuevas funciones.
   - campo 'Capítulos' en el panel 'Nuevo libro'
   - mostrar 'Promedio capítulos por libro' en el panel 'Biblioteca'
6. Modificar el panel 'Inventario' para mostrar cada libro en un componente `card` de Bootstrap.
   - usar el título del libro como título en cada card
   - en el cuerpo del card mostrar: autor, número de capítulos, número de páginas
7. Agregarle la clase de Bootstrap `form-control` a todos los inputs.
8. Ejecutar el linter y verificar que no existan errores o advertencias.


Subir un issue 'Parte B' con screenshot de la página en el navegador (paneles Biblioteca, Nuevo libro e Inventario).


### Parte Extra

- Resuelve problemas de accesibilidad con WAVE

### Referencias y recursos útiles

- [ESLint](https://eslint.org/docs/latest/rules/)
- [Prettier](https://prettier.io/docs/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Vitest](https://vitest.dev/guide/)
- [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
- [HTML](https://www.w3schools.com/html/)
