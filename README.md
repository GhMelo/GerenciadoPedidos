Procedimentos necessarios:
- Instalar SQL server e SQL Server Management Studio
- Instalar visual studio para rodar a API c#
- Instalar visual studio code para vizualizar o front-end angular
- Instalar o nodeJS
- Instalar o Angular10


1 - clonar projeto do endereço: git clone https://github.com/GhMelo/GerenciadoPedidos.git



2 - Criar banco de dados:
Execute o SQL server management studio e conecte-se ao banco de dados "." que define uma instancia local
 1.1 - execute os seguintes comandos na ordem "create database Pedidos" depois "use pedidos create table pedido (
Id int IDENTITY (1,1),
nome_produto varchar(500),
valor decimal (18,2),
data_vencimento date
)"
depois para ja ter alguma informação na tela 
"insert into pedido (nome_produto,valor,data_vencimento) values ('Macarrao', 5.50,'2020-10-10')
insert into pedido (nome_produto,valor,data_vencimento) values ('Trigo', 3.40,'2020-10-10')
insert into pedido (nome_produto,valor,data_vencimento) values ('Rodo', 10.00,'2020-10-10')
insert into pedido (nome_produto,valor,data_vencimento) values ('Camiseta', 55.49,'2022-10-10')
insert into pedido (nome_produto,valor,data_vencimento) values ('Calça', 109.50,'2023-10-10')"





3 - dentro de "GerenciadoPedidos/API" execute o arquivo "emprego.sln" e escolha para abrir como uma solução visual studio, execute o projeto e o backend esta pronto e funcional



4 - abra o CMD no endereço "../GerenciadoPedidos\ui" e escreva o seguinte comando "npm install --save-dev @angular-devkit/build-angular", apos isso execute o comando "ng serve --open" para ativar o frontend



5 - A pagina front-end angular vai abrir sozinha, mas caso não abra, insira no navegador o endereço que o cmd vai oferecer após compilar o código (o meu caso é http://localhost:4200/ )



6 - O botão "Preencher tabela com pedidos" coloca na rota "/pedido" que é onde o sistema funciona em si



7 - descrição dos botões :
"Add Pedido" : Vai abrir uma tela para preencher dados de uma nova inserção no banco de dados
"icone com lapis":  Abre uma tela para edição de um registro
"icone de lixeira":  Deleta uma registro apos confirmação
"Botões de desconto variado" : dependendo do botao ele da desconto de acordo com a porcentagem escrita. somente pedidos cujo a data seja superior a do sistema poderão receber descontos
"Campos vazios em cima das propriedades": Deixei um campo vazio para ser um filtro, por exemplo se preencher o filtro de nome com "macarrao", vai puxar somente o registro com esse nome.



8 - O campo condição define se é valido ou nao o pedido 



9 - Qualquer dúvida estou a disposição
