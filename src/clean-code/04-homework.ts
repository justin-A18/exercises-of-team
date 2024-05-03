(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    const fruits = ["manzana", "cereza", "ciruela", "tómate"]
    return fruits.includes(fruit); 
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  interface FruitsColor {
    red: string[];
    yellow: string[];
    purple: string[];
  }

  function getFruitsByColor(color: string): string[] {
    // if (color === "red") {
    //   return ["manzana", "fresa"];
    // } else if (color === "yellow") {
    //   return ["piña", "banana"];
    // } else if (color === "purple") {
    //   return ["moras", "uvas"];
    // } else { 
    //   throw Error("the color must be: red, yellow, purple");
    // }

    const fruitsByColors: FruitsColor = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"]
    }
    
    if (!fruitsByColors.hasOwnProperty(color)) {
      throw Error("the color must be: red, yellow, purple");
    } 
    return fruitsByColors[color as keyof FruitsColor];
  }
  console.log(getFruitsByColor("purple"));
  
  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) return "First step broken.";
    if (!isSecondStepWorking) return "Second step broken.";
    if (!isThirdStepWorking) return "Third step broken.";

    return (isFourthStepWorking) ?  "Working properly!" : "Fourth step broken.";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
