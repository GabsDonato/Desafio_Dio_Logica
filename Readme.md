#Desafio: Contador de Números Pares

## Descrição

Você vai criar um programa que recebe uma lista de números inteiros e realiza as seguintes tarefas:

1. **Contar os Números Pares:** Conte quantos números pares existem na lista.
2. **Calcular a Soma dos Números Pares:** Calcule a soma de todos os números pares da lista.
3. **Calcular a Média dos Números Pares:** Calcule a média dos números pares na lista. Se não houver números pares, a média deve ser considerada como 0.

## Especificações

### Funções

- `contar_pares(lista)`: Recebe uma lista de inteiros e retorna o número de elementos pares.
- `soma_pares(lista)`: Recebe uma lista de inteiros e retorna a soma dos elementos pares.
- `media_pares(lista)`: Recebe uma lista de inteiros e retorna a média dos elementos pares. Se não houver pares, retorna 0.

### Variáveis

- `lista`: Uma lista de números inteiros fornecida pelo usuário.
- `total_pares`: O número total de números pares na lista.
- `soma_total_pares`: A soma de todos os números pares na lista.
- `media_total_pares`: A média dos números pares na lista.

### Operadores

- Utilizar operadores aritméticos para calcular a soma e a média.
- Utilizar o operador de módulo (%) para verificar se um número é par.

### Estrutura de Repetição

- Utilize um loop para iterar sobre cada elemento da lista e verificar se o número é par.
- Dentro do loop, atualize as variáveis `total_pares`, `soma_total_pares` e calcule a `media_total_pares` no final.

## Entrada

- Uma lista de números inteiros (por exemplo: `[1, 2, 3, 4, 5, 6]`).

## Saída

- O número de elementos pares na lista.
- A soma dos números pares.
- A média dos números pares.

## Exemplo

Para a lista `[1, 2, 3, 4, 5, 6]`:

- Números pares: `[2, 4, 6]`
- Contagem de pares: 3
