# Ejercicio Library

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

1. En la clase `Book` agegar el campo `words`
- representa el número de palabras del libro
- el campo no es obligatorio y debe ser un número

Implementar las funciones `getWords()` y `setWords()` validando que el parámetro recibido es un número.

Modificar la función `toString()` agregando el valor del campo.

Codificar los test unitarios para las nuevas funciones
   - incluir test para casos de error
   - la cobertura del test unitario debe alcanzar el 100%

2. En la clase `Book` implementar la función `wordsPerPage()` que retorna el promedio de palabras por página del libro.
   Codificar test unitarios para la función `wordsPerPage()`.

3. En la clase `Library` implementar la función `totalWords()` que suma el total de palabras de los libros de la biblioteca.
   Codificar test unitarios para la función `totalWords()`.

Subir un issue 'Parte A' con un screenshot de la terminal con el resumen de los tests unitarios y cobertura.

### Parte B

4. Agregar elementos a la intefaz de usuario para usar las nuevas funciones.
   - campo 'Palabras' en el panel 'Nuevo libro'
   - mostrar 'Palabras totales' en el panel 'Biblioteca'
     
5. Modificar el panel 'Inventario' para mostrar cada libro en un componente `card` de Bootstrap.
   - usar el título del libro como título en cada card
   - en el cuerpo del card mostrar: autor y número de páginas

Subir un issue 'Parte B' con screenshot de la página en el navegador (paneles Biblioteca, Nuevo libro e Inventario).
