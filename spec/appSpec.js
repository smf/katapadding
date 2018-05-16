describe('add elements to a given string', function(){

    it('Si el tamaño es menor que la cadena inicial se devuelve el string inicial', function(){
        var str = "hola";
        var space = 2;
        var padding = "x" 

        expect(paddingLeft(str, space, padding)).toEqual(str);
    });
    it('Si el tamaño es igual que la cadena inicial se devuelve el string inicial', function(){
        var str = "hola";
        var space = 4;
        var padding = "x" 

        expect(paddingLeft(str, space, padding)).toEqual(str);
    });
    it('Si el tamaño es mayor que la cadena inicial se devuelve el string inicial junto con el padding left', function(){
        var str = "hola";
        var space = 8;
        var padding = "x" 

        expect(paddingLeft(str, space, padding)).toEqual("xxxxhola");
    });
    it('Si el padding left no tiene un valor por defecto, usa espacio como padding', function(){
        var str = "hola";
        var space = 8;

        expect(paddingLeft(str, space)).toEqual("    hola");
    });

});



// Kata Padding
// Crear una función padding-left que se encarga de meter caracteres de relleno en un cadena por el lado izquierdo hasta llegar a un tamaño deseado. Toma 3 parámetros
// La cadena inicial
// Un tamaño final
// Un valor del padding, por defecto es un espacio
// Ejemplo: padding-left('hola', 6, 'x') devuelve 'xxhola'
// Si el tamaño final es menor o igual que la cadena inicial, se devuelve sin tocar la inicial.




