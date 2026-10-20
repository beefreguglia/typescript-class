// O Javascript não é uma linguagem tipada, então o Typescript é uma ferramenta que adiciona tipagem estática ao Javascript, permitindo que os desenvolvedores definam tipos para variáveis, funções e objetos. Isso ajuda a detectar erros em tempo de compilação, melhorar a legibilidade do código e facilitar a manutenção do projeto. O Javascript é uma linguagem de programação dinâmica e interpretada, amplamente utilizada para desenvolvimento web, enquanto o Typescript é um superconjunto do Javascript que adiciona recursos de tipagem estática e outras funcionalidades avançadas, além disso o Typescript é compilado para Javascript.

function hi(name: string) {
  console.log(`Olá ${name[0].toUpperCase() + name.slice(1)}, tudo bem?`);
}

hi('João');

// Tipos Primitivos

const name: string = 'João'; // Qualquer valor que seja uma sequência de caracteres é considerado uma string.
const age: number = 30; // Qualquer valor que seja um número é considerado um number tanto inteiro quanto decimal.
const isStudent: boolean = true; // true ou false são considerados booleanos.
const hugeId: bigint = BigInt(1); // Qualquer valor que seja um número inteiro grande é considerado um bigint.
const a: null = null; // O valor null nao tem valor, mas tem atribuição (Ausência de Valor).
const b: undefined = undefined; // Não tem atribuição (Ausência de atribuição ).

const data: unknown = {} // O unknown é um tipo de dado que representa qualquer valor, mas ao contrário do any, ele não permite operações diretas com o valor sem antes verificar seu tipo. Isso significa que você precisa fazer uma verificação de tipo antes de usar o valor armazenado em uma variável do tipo unknown, garantindo maior segurança e evitando erros em tempo de execução.

const data2: any = {} // O any mata qualquer inferência de tipo, ou seja, ele desativa a verificação de tipos do Typescript, permitindo que qualquer valor seja atribuído a uma variável do tipo any. No entanto, o uso excessivo do any pode levar a problemas de manutenção e dificultar a detecção de erros em tempo de compilação.

const data3: void = undefined // O tipo void é usado para indicar que uma função não retorna nenhum valor. Ele é comumente usado em funções que realizam uma ação, mas não produzem um resultado significativo. Por exemplo, uma função que exibe uma mensagem no console pode ter o tipo de retorno void, indicando que ela não retorna nenhum valor útil.

const data4: never = (() => { throw new Error('Erro!') })() // O tipo never é usado para indicar que uma função nunca retorna um valor. Ele é comumente usado em funções que lançam exceções ou entram em loops infinitos. Por exemplo, uma função que lança um erro pode ter o tipo de retorno never, indicando que ela nunca retorna um valor útil.

// O typescript possui inferência de tipos, ou seja, ele consegue deduzir o tipo de uma variável com base no valor atribuído a ela. Por exemplo, se você declarar uma variável e atribuir um número a ela, o TypeScript inferirá que o tipo dessa variável é number. No entanto, é uma boa prática declarar explicitamente os tipos das variáveis para melhorar a legibilidade do código e evitar ambiguidades.

// --------------------------------------------------

type User = {
  name: string;
  age?: number;
}

type UserWithAge = User & { age: number }; // Union Type, ou seja, o tipo UserWithAge é uma combinação do tipo User e do tipo { age: number }, garantindo que a propriedade age seja obrigatória nesse novo tipo.

type Tuple = [number, number] // Tuple é um tipo de dado que representa um array com um número fixo de elementos, onde cada elemento pode ter um tipo diferente. No exemplo acima, a tupla Tuple é definida como um array com dois elementos, ambos do tipo number. Isso significa que a tupla deve conter exatamente dois números, e a ordem dos elementos é importante.

const user1: User = {
  name: 'João',
  // age: 30
}

interface User2 {
  hi(name: string): void
}

class Person implements User2 {
  hi(name: string): void {
    console.log(`Olá, ${name}!`);
  }
}

const p1 = new Person();
p1.hi('João');