// Generics - São tipos que permitem criar componentes reutilizáveis, trabalhando com qualquer tipo de dado, mantendo a tipagem.

type MyArray<T>  = T[]; // Definindo um tipo genérico MyArray que representa um array de elementos do tipo T.

const ages: MyArray<number> = [25, 30, 35, 40]; // Criando um array de números usando o tipo genérico MyArray.

type Nullable<T> = T | null; // Definindo um tipo genérico Nullable que representa um tipo T ou null.

interface Repository<T> {
  save(data: T): void; // Método save que recebe um parâmetro do tipo T e não retorna nada.
  read(): T; // Método read que retorna um valor do tipo T.
}

type Person = {
  name: string;
  age: number;
}

class PersonRepository implements Repository<Person> {
  save(data: Person): void {
    // Implementação do método save para salvar uma pessoa.
  }
  read(): Person {
    // Implementação do método read para ler uma pessoa.
    return { name: 'John Doe', age: 30 }; // Retornando um objeto do tipo Person.
  }
}

function saveRecord<T>(data: T): void {
  // Função genérica saveRecord que recebe um parâmetro do tipo T e não retorna nada.
  // Aqui você pode implementar a lógica para salvar o registro de qualquer tipo de dado.
}