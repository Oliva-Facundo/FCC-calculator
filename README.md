Historia de usuario nº 1: Mi calculadora debe contener un elemento en el que se pueda hacer clic y que contenga un = (signo igual) con su correspondiente id="igual".

Historia de usuario nº 2: Mi calculadora debe contener 10 elementos en los que se pueda hacer clic y que contengan un número del 0 al 9, con los siguientes ID correspondientes: id="cero", id="uno", id="dos", id="tres", id="cuatro", id="cinco", id="seis", id="siete", id="ocho" e id="nueve".

Historia de usuario nº 3: Mi calculadora debe contener 4 elementos sobre los que se pueda hacer clic, cada uno de los cuales debe contener uno de los 4 operadores matemáticos principales con los siguientes ID correspondientes: id="add", id="subtract", id="multiply", id="divide".

Historia de usuario nº 4: Mi calculadora debe contener un elemento en el que se pueda hacer clic y que contenga un símbolo . (punto decimal) con su correspondiente id="decimal".

Historia de usuario nº 5: Mi calculadora debe contener un elemento sobre el que se pueda hacer clic con un id="clear".

Historia de Usuario #6: Mi calculadora debe contener un elemento para mostrar valores con un id="display" correspondiente.

Historia de usuario #7: En cualquier momento, al pulsar el botón clear se borran los valores de entrada y salida, y la calculadora vuelve a su estado inicializado; se debe mostrar 0 en el elemento con el id de display.

Historia de Usuario #8: A medida que introduzco números, debería ser capaz de ver mi entrada en el elemento con el id de display.

Historia de Usuario #9: En cualquier orden, debería ser capaz de sumar, restar, multiplicar y dividir una cadena de números de cualquier longitud, y cuando pulso =, el resultado correcto debería mostrarse en el elemento con el id de display.

Historia de Usuario #10: Cuando introduzco números, mi calculadora no debería permitir que un número comience con múltiples ceros.

Historia de usuario nº 11: Al hacer clic en el elemento decimal, debería añadirse un . al valor mostrado actualmente; no deberían aceptarse dos . en un mismo número.

Historia de Usuario #12: Debería poder realizar cualquier operación (+, -, \*, /) en números que contengan puntos decimales.

Historia de Usuario #13: Si se introducen 2 o más operadores consecutivamente, la operación realizada debería ser el último operador introducido (excluyendo el signo negativo (-)). Por ejemplo, si se introduce 5 + _ 7 =, el resultado debería ser 35 (es decir, 5 _ 7); si se introduce 5 _ - 5 =, el resultado debería ser -25 (es decir, 5 _ (-5)).

Historia de Usuario #14: Pulsar un operador inmediatamente después de = debería iniciar un nuevo cálculo que opere sobre el resultado de la evaluación anterior.

Historia de Usuario #15: Mi calculadora debería tener varios decimales de precisión a la hora de redondear (ten en cuenta que no hay un estándar exacto, pero deberías ser capaz de manejar cálculos como 2 / 7 con una precisión razonable de al menos 4 decimales). Nota sobre la lógica de las calculadoras:Cabe señalar que hay dos escuelas principales de pensamiento sobre la lógica de entrada de la calculadora: la lógica de ejecución inmediata y la lógica de fórmula. Nuestro ejemplo utiliza la lógica de fórmulas y respeta el orden de precedencia de las operaciones, mientras que la ejecución inmediata no. Cualquiera de las dos es aceptable, pero ten en cuenta que, dependiendo de la que elijas, tu calculadora puede dar resultados diferentes a los nuestros para determinadas ecuaciones (véase el ejemplo siguiente). Siempre y cuando sus matemáticas puedan ser verificadas por otra calculadora de producción, por favor no considere esto un bug.

EJEMPLO: 3 + 5 x 6 - 2 / 4 =

Lógica de ejecución inmediata: 11.5
Fórmula/Expresión lógica: 32.5
