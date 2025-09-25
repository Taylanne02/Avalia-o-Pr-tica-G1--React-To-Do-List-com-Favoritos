# Projeto Lista de Tarefas (To-Do List)

-> Sobre o Projeto:

Esta é uma aplicação de lista de tarefas (To-Do List) desenvolvida como atividade de estudo sobre os fundamentos do React com TypeScript da matéria de Desenvolvimento de Software para Web. A aplicação permite adicionar novas tarefas, marcar tarefas como concluídas e visualizar o progresso geral através de um gráfico circular que é atualizado em tempo real.

-> Tecnologias Utilizadas:

As principais tecnologias e bibliotecas utilizadas na construção deste projeto foram:
  React: Biblioteca para a construção da interface de usuário.
  TypeScript: Superset do JavaScript que adiciona tipagem estática ao código, aumentando a robustez e a manutenibilidade.
  Vite: Ferramenta de build moderna e extremamente rápida para projetos web.
  CSS: Para a estilização customizada dos componentes, incluindo o layout com Flexbox e o design temático.
  react-circular-progressbar: Biblioteca para a criação do gráfico de progresso circular.

-> Estrutura de Componentes:

A aplicação é dividida em componentes reutilizáveis para manter o código organizado e modular.

  App.tsx
    Responsabilidade: É o componente principal da aplicação. Ele gerencia todo o estado global, como a lista de tarefas e os cálculos de progresso.
    Comunicação: Renderiza o componente List e o gráfico de progresso, passando os dados e as funções necessárias para manipulação das tarefas via props.

  List.tsx
    Responsabilidade: Este componente é responsável por renderizar a interface do "bloco de notas". Ele contém o campo de input para adicionar novas tarefas e a lista que exibe as tarefas existentes.
    Comunicação: É um componente de apresentação (dumb component). Ele não gerencia seu próprio estado de tarefas, mas recebe a lista de tarefas e as funções onAddTask e onToggleTask do componente App via props. Quando o usuário interage com ele (adicionando ou clicando em uma tarefa), ele invoca essas funções para que o componente App atualize o estado.

-> Gerenciamento de Estado (useState):

O estado da aplicação é centralizado no componente App.tsx utilizando o hook useState.
- tasks: Armazena o array de objetos de tarefas. É o estado principal da aplicação.
- completedTasks: Guarda o número total de tarefas que foram marcadas como concluídas.
- percentage: Armazena o valor percentual de tarefas concluídas, usado para alimentar o gráfico de progresso.
  
-> Tipagem com TypeScript
O TypeScript foi utilizado para definir a estrutura dos objetos de tarefa. A interface Task foi criada no arquivo List.tsx e exportada para ser usada em toda a aplicação.

-> Efeitos Colaterais (useEffect)
O hook useEffect é utilizado no App.tsx para reagir a mudanças na lista de tarefas e recalcular o progresso.




# Avalia-o-Pr-tica-G1--React-To-Do-List-com-Favoritos
