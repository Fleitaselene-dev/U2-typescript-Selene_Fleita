function identity<T>(valor:T):T{
    return valor;
}
console.log(identity<string>("Hola"));
console.log(identity<number>(123));