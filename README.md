# Replica Simplicada do React e seus Hooks

Este repositório contém uma implementação simplificada da lógica do React e seus hooks, como um experimento educacional para entender melhor como o React funciona por trás dos panos.

## Sobre o Projeto

Neste projeto, criamos uma versão simplificada do React, juntamente com os hooks mais básicos, como `useState` e `useEffect`. Essa implementação não abrange todos os recursos e otimizações do React, mas oferece uma visão sobre como os componentes e o estado podem ser gerenciados de maneira simplificada.

## Como Usar

1. Clone este repositório para o seu ambiente local.

```bash
git clone https://github.com/VitorAndrey/replica-react-hooks.git
```

2. Abra o arquivo `index.html` no seu navegador.

3. Você verá um contador renderizado na página com um botão "Increase". Clique no botão para aumentar o contador.

## Estrutura do Projeto

- `index.html`: Um arquivo HTML simples que inclui o ponto de entrada da aplicação.
- `main.js`: Onde a lógica do React e dos hooks está implementada.

## Componentes e Hooks Implementados

### React

- **`render(Component)`**: Uma função que renderiza um componente na página.
  
### Hooks

- **`useState(valorInicial)`**: Um hook que gerencia o estado de um componente. Ele retorna o estado atual e uma função para atualizá-lo.
- **`useEffect(callback, depArray)`**; Um hook que permite executar efeitos colaterais em componentes funcionais. O callback é uma função que será executada após o componente renderizar, e o depArray é um array opcional de dependências que controla quando o efeito será executado novamente.

## Aviso

Esta é uma implementação extremamente simplificada e não deve ser usada em produção. O objetivo é educacional, e não é um substituto completo para a funcionalidade robusta e otimizada do React.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) ou enviar pull requests com melhorias, correções ou recursos adicionais.

## Baseado em
[Assista a este vídeo para entender mais](https://www.youtube.com/watch?v=KJP1E-Y-xyo)
