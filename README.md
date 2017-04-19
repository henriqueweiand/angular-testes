# angular-testes
Espaço para testes com angular 4 zerado com servidor backend contendo CRUD básico entre alguns valores de exemplo. Este repositório serve para qualquer outro tipo de linguagem que necessita de valores de CRUD de testes para fins de aprendizado.

Necessário:
- docker-compose
- nodejs

Container backend:
- Laravel 5.4;
- CRUD utilizando tabelas: user, curso, curso_aluno;
- Link com container db1)
- Porta: 8080
- JWT Configurado e setado em uma rota default (Api route)

Container database:
- Banco de dados mysql;
- Database "testes" com valores de testes cadastrados para utilização;
- User: root
- Password: root
- Acesso externo 3306

Cottainer app:
- Angular 4 com rotas default tudo zerado;
- Porta: 80

Informações importantes:
- A pasta database esta sinconizada no git pois pensei ser mais facil para todos, assim não é necessário restaurar o arquivo de banco de dados "teste.sql"... Porem se acharem necessário, o mesmo esta no diretório raiz.

Instalação:
- Abra o arquivo "docker-compose.yml" e ajuste os diretórios conforme sua disposição de diretórios.
- Com terminal nodejs acesse a pasta em sua raiz, e execute: "docker-compose up -d".
- Verifique com "docker-compose ps -a" se todas as maquinas estão com "Up".

PS: As vezes as maquinas demoram um pouco para subir. Se necessário de "docker-compose down" e suba novamente.
