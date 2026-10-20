import crypto from 'node:crypto';

type User = {
  id: string;
  name: string;
  email: string;
  age: number;
}
// Utility types são tipos que são fornecidos pelo TypeScript para manipular outros tipos de forma mais eficiente e segura. Alguns exemplos de utility types incluem Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract, NonNullable, Parameters, ReturnType e InstanceType.

// Podemos usar o Pick também Pick<User, 'name' | 'email' | 'age'> nesse exemplo
function create(user:Partial<Omit<User, 'id'>>): User {
  return {
    age: user.age ?? 0,
    name: user.name ?? '',
    email: user.email ?? '',
    id: crypto.randomUUID()
  }
}

console.log(create({
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 30
}))