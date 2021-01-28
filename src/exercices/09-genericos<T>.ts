/*
    ===== Código de TypeScript =====
*/

//genericos <T>
function queTipoSoy<T>(argumento:T):T{
    return argumento;
}

let soyString = queTipoSoy('hello world');
let soyNumber = queTipoSoy(2);
let soyExplicito = queTipoSoy<string>('hello human');