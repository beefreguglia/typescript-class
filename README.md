# TypeScript no Backend (O novo padrão)

> **Curso Node Profissional · Módulo 1**

Anotações e exemplos práticos do primeiro módulo do curso, que cobre os fundamentos do TypeScript para usar no backend com Node.js.

## Stack

| Ferramenta | Versão |
| --- | --- |
| [TypeScript](https://www.typescriptlang.org/) | `^7.0.2` |
| [@tsconfig/node24](https://github.com/tsconfig/bases) | `^24.0.5` |
| [@types/node](https://www.npmjs.com/package/@types/node) | `^26.6.5` |
| Gerenciador de pacotes | [pnpm](https://pnpm.io/) |

O projeto usa **ES Modules** (`"type": "module"`) e estende a configuração base recomendada para o **Node 24**.

## Estrutura

```
.
├── index.ts              # Introdução, tipos primitivos, types, interfaces e classes
├── array_tuples_enum.ts  # Arrays, tuplas, enums e a alternativa com "as const"
├── generics.ts           # Generics em types, interfaces, classes e funções
├── utility_types.ts      # Utility types (Partial, Omit, Pick...)
├── tsconfig.json         # Configuração do compilador
├── package.json
└── dist/                 # Saída do build (JavaScript gerado)
```

## Como rodar

```bash
# Instalar as dependências
pnpm install

# Compilar os arquivos .ts para ./dist
pnpm build

# Executar um arquivo compilado
node dist/utility_types.js
```

> 💡 O Node 24 também executa arquivos `.ts` diretamente (type stripping): `node utility_types.ts`.
> Só funciona com sintaxe que pode ser apagada; `enum`, por exemplo, não é suportado nesse modo.

---

## Conteúdo do módulo

### 1. Por que TypeScript? — `index.ts`

O JavaScript é dinâmico e não tipado. O TypeScript é um **superconjunto do JavaScript** que adiciona **tipagem estática**. Ele é compilado para JavaScript e ajuda a:

- detectar erros **em tempo de compilação**;
- deixar o código mais legível;
- facilitar a manutenção do projeto.

### 2. Tipos primitivos e especiais — `index.ts`

| Tipo | Descrição |
| --- | --- |
| `string` | Sequência de caracteres |
| `number` | Números inteiros e decimais |
| `boolean` | `true` ou `false` |
| `bigint` | Inteiros muito grandes (`BigInt(1)`) |
| `null` | Ausência de **valor** (foi atribuído, mas é vazio) |
| `undefined` | Ausência de **atribuição** |
| `unknown` | Qualquer valor, mas **exige verificação de tipo** antes de usar. É a alternativa segura ao `any` |
| `any` | Desliga a checagem de tipos. Evite! |
| `void` | Função que não retorna nada útil |
| `never` | Função que **nunca** retorna (lança erro ou entra em loop infinito) |

**Inferência de tipos:** o TypeScript deduz o tipo pelo valor atribuído (`const age = 30` vira `number`).

### 3. Types, interfaces e classes — `index.ts`

```ts
type User = {
  name: string;
  age?: number; // propriedade opcional
};

// Intersection Type (&): combina tipos. Aqui, "age" passa a ser obrigatório
type UserWithAge = User & { age: number };

interface User2 {
  hi(name: string): void;
}

// Uma classe pode implementar (implements) uma interface
class Person implements User2 {
  hi(name: string): void {
    console.log(`Olá, ${name}!`);
  }
}
```

> 📝 `&` cria um **Intersection Type** (o valor precisa satisfazer *todos* os tipos).
> Já `|` cria um **Union Type** (o valor pode ser *um ou outro*).

### 4. Arrays, tuplas e enums — `array_tuples_enum.ts`

```ts
// Duas formas equivalentes de declarar arrays
const ages: Array<number> = [25, 30];
const ages2: number[] = [25, 30];

// Tupla: tamanho fixo, cada posição com um tipo, e a ordem importa
type Age = [number, boolean, string];
const ageTuple: Age = [30, true, 'João'];

// Enum numérico: Roles.ADMIN === 0
enum Roles { ADMIN, USER }
```

Quando queremos trabalhar com o **valor** e não com o índice, o padrão mais usado é um objeto `as const`:

```ts
const Roles2 = {
  ADMIN: 'ADMIN',
  USER: 'USER',
} as const;

type Role = typeof Roles2[keyof typeof Roles2]; // 'ADMIN' | 'USER'
```

### 5. Generics — `generics.ts`

Generics permitem criar **componentes reutilizáveis** que funcionam com qualquer tipo, **sem perder a tipagem**.

```ts
type MyArray<T> = T[];
type Nullable<T> = T | null;

interface Repository<T> {
  save(data: T): void;
  read(): T;
}

class PersonRepository implements Repository<Person> { /* ... */ }

function saveRecord<T>(data: T): void { /* ... */ }
```

O `Repository<T>` é um padrão bem comum no backend: um único contrato serve para qualquer entidade.

### 6. Utility Types — `utility_types.ts`

São tipos nativos do TypeScript que **transformam outros tipos**: `Partial`, `Required`, `Readonly`, `Record`, `Pick`, `Omit`, `Exclude`, `Extract`, `NonNullable`, `Parameters`, `ReturnType`, `InstanceType`...

```ts
import crypto from 'node:crypto';

// Omit remove o "id" (gerado pelo sistema) e Partial deixa o resto opcional
function create(user: Partial<Omit<User, 'id'>>): User {
  return {
    age: user.age ?? 0,
    name: user.name ?? '',
    email: user.email ?? '',
    id: crypto.randomUUID(),
  };
}
```

Uma alternativa seria `Pick<User, 'name' | 'email' | 'age'>`, que escolhe só as propriedades desejadas em vez de remover as indesejadas.

---

## Resumo rápido

- ✅ Prefira `unknown` a `any`.
- ✅ Use `type` / `interface` para modelar seus dados.
- ✅ Use `as const` em vez de `enum` quando precisar dos valores literais.
- ✅ Use generics para escrever código reutilizável e tipado.
- ✅ Use utility types para derivar tipos novos sem duplicar código.
