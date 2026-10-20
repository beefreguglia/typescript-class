// Formas de declarar arrays
const ages: Array<number> = [25, 30, 35, 40];
const ages2: number[] = [25, 30, 35, 40];

// Tuplas 

type Age = [number, boolean, string]; // Tupla com três elementos: um número, um booleano e uma string.
const ageTuple: Age = [30, true, 'João']; // A tupla ageTuple é inicializada com os valores 30, true e 'João', correspondendo aos tipos definidos na tupla Age.

// Enum

enum Roles {
  ADMIN,
  USER
} // Enumeração Roles com dois valores: ADMIN e USER.

function hasAccess(role: Roles): boolean {
  return role === Roles.ADMIN;
}

console.log(Roles.ADMIN); // Saída: 0

// Geralmente criamos uma const quando queremos recuperar o valor do enum, e não o índice, então podemos fazer o seguinte:

const Roles2 = {
  ADMIN: 'ADMIN',
  USER: 'USER'
} as const; // Criando um objeto constante com os valores do enum Roles2.

type Role = typeof Roles2[keyof typeof Roles2]; // Tipo Role que representa os valores do objeto Roles2.