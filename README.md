# word-count.js
Es un script que permite contar fácilmente palabras en un artículo de Wikipedia en español. Se instala añadiendo el siguiente código en tu página [`common.js`](https://es.wikipedia.org/wiki/Especial:MiP%C3%A1gina/common.js):

```js
importScript('Usuario:Nacaru/word-count.js')
```

Entonces, si nos encontramos en un espacio de nombres 0, aparecerá una opción a en uno de los menús laterales con el título "contar palabras". Al clicarla, se mostrará un recuento de las palabras en el cuerpo del texto y las referencias. El script debería ignorar las palabras que se encuentran dentro de párrafos titulados "Enlaces externos". 