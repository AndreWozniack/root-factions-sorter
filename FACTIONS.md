# Sistema de Facções do Root

## Modelo de Dados

O sistema utiliza um modelo estruturado para gerenciar as facções do jogo Root e validar sorteios baseados no alcance (reach).

### Estrutura das Facções

Cada facção possui:

- **Nome**: Identificador da facção
- **Alcance**: Valor numérico que representa o poder/complexidade da facção

### Facções Disponíveis

| Facção               | Alcance |
| -------------------- | ------- |
| Marqueses            | 10      |
| Senhor das Centenas  | 9       |
| Guardiões de Ferro   | 8       |
| Ducado Subterrâneo   | 8       |
| Dinastia das Rapinas | 7       |
| Malandro (1º)        | 5       |
| Companhia Ribeirinha | 5       |
| Aliança da Floresta  | 3       |
| Conspiração Corvídea | 3       |
| Malandro (2º)        | 2       |
| Lagartos Cultistas   | 2       |

### Validação de Sorteio

Para que um sorteio seja válido, a soma dos alcances das facções sorteadas deve ser maior ou igual ao alcance mínimo recomendado para o número de jogadores:

| Jogadores | Alcance Mínimo |
| --------- | -------------- |
| 2         | 17+            |
| 3         | 18+            |
| 4         | 21+            |
| 5         | 25+            |
| 6         | 28+            |

## Funcionalidades

### 1. Validação Automática

Após cada sorteio, o sistema:

- Calcula o alcance total das facções sorteadas
- Compara com o mínimo recomendado
- Exibe um indicador visual (✅ válido ou ⚠️ inválido)

### 2. Tabela de Referência

Uma tabela visual mostra todas as facções e seus respectivos alcances, facilitando a consulta durante o jogo.

### 3. Feedback Visual

- **Verde**: Sorteio válido
- **Rosa/Vermelho**: Sorteio inválido (com sugestão de refazer)

## Arquivos do Sistema

### `app/types.ts`

Contém:

- Interface `Faction`
- Array `FACTIONS` com todas as facções
- Objeto `MIN_REACH_BY_PLAYERS` com alcances mínimos
- Função `calculateTotalReach()` - calcula alcance total
- Função `isValidDraw()` - valida se o sorteio é válido

### `app/page.tsx`

Componente principal que:

- Importa e utiliza o modelo de facções
- Realiza o sorteio
- Valida o resultado
- Exibe a interface com feedback visual

## Como Usar

1. Digite os nomes dos jogadores (um por linha)
2. Selecione ou edite as facções disponíveis
3. Clique em "Embaralhar e Sortear!"
4. Veja o resultado com validação automática de alcance
5. Se inválido, considere refazer o sorteio

## Exemplo de Sorteio Válido (4 jogadores)

- Marqueses (10) + Senhor das Centenas (9) + Dinastia das Rapinas (7) + Companhia Ribeirinha (5) = **31 alcance**
- Mínimo necessário: 21
- Status: ✅ **Válido**

## Exemplo de Sorteio Inválido (4 jogadores)

- Aliança da Floresta (3) + Conspiração Corvídea (3) + Lagartos Cultistas (2) + Malandro 2º (2) = **10 alcance**
- Mínimo necessário: 21
- Status: ⚠️ **Inválido** (refazer sorteio recomendado)
