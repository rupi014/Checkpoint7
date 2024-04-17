// Checkpoint 7

// Opcion sin tener en cuenta el numero 50, esta función devolvería "¡Tu número es menor que 50!" 
// en caso de que el resultado fuese igual a 50.

function mayorMenor (num1, num2, num3, num4) {
    let operacion = (num1 + num2) * (num3 + num4);
    let resultado = operacion > 50 ? "¡Tu número es mayor que 50!" : "¡Tu número es menor que 50!"

    console.log(resultado)
}
mayorMenor(1, 2, 3, 4) // ¡Tu número es menor que 50!
mayorMenor(10, 2, 3, 4) // ¡Tu número es mayor que 50!

// Opcion teniendo en cuenta el numero 50
const greaterlowerfifty = (arg1, arg2, arg3, arg4) => {
    let calculo = (arg1 + arg2) * (arg3 + arg4);
    if (calculo > 50) {
      console.log("¡El número es mayor que 50!");
    } else if (calculo === 50) {
      console.log("¡Tu número es 50!");
    } else {
      console.log("¡El número es menor que 50!");
    }
  }

greaterlowerfifty(10, 2, 3, 4) // ¡El número es mayor que 50!
greaterlowerfifty(1, 2, 3, 4) // ¡El número es menor que 50!
greaterlowerfifty(1, 1, 20, 5) // ¡Tu número es 50!