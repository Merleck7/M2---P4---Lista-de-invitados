# Encuentra las Parejas de Invitados que Pueden Sentarse Juntos

Este programa busca encontrar las parejas de invitados que pueden sentarse juntos en una mesa de cena, basándose en el hecho de que sus nombres comienzan con la misma letra.

## Descripción

El programa recibe una lista de nombres de invitados, la cual debe estar ordenada alfabéticamente. A continuación, se busca el primer par de invitados consecutivos cuyo nombre comienza con la misma letra. Si hay más de un par, todos serán devueltos. Si no se encuentran coincidencias, se devuelve un mensaje indicando que no hay parejas.

## Algoritmo

1. Utiliza dos punteros, uno para el inicio de la lista y otro para el siguiente elemento.
2. Compara la primera letra de los nombres en las posiciones de ambos punteros.
3. Si las iniciales coinciden, agrega este par a una nueva lista.
4. Si no coinciden, ambos punteros avanzan una posición.
5. Si se encuentran parejas, se devuelven todas las que coincidan. Si no se encuentra ningún par, el programa devuelve un mensaje que indica que no hay parejas disponibles.

## Instalación y Uso

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.
2. Descarga o clona el repositorio <https://github.com/Merleck7/M2---P4---Lista-de-invitados.git>
3. Ejecuta el programa desde la terminal con el siguiente comando:

```bash
node encontrarPareja.js