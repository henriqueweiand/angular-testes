# angular-testes
Espaço de aprendizagem com Angular4 aplicando conceitos básicos de CRUD. Possui ambiente Docker com MySQL e backend configurado com Laravel 5.4 com suas devidas end points para consumo dos testes.

Necessário:
- docker
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

Informações importantes:
- A pasta database esta sinconizada no git pois pensei ser mais facil para todos, assim não é necessário restaurar o arquivo de banco de dados "teste.sql"... Porem se acharem necessário, o mesmo esta no diretório raiz.

Instalação:
- Abra o arquivo "docker-compose.yml" e ajuste os diretórios conforme sua disposição de diretórios.
- Com terminal nodejs acesse a pasta em sua raiz, e execute: "docker-compose up -d".
- Verifique com "docker-compose ps -a" se todas as maquinas estão com "Up".
- Acesse com docker o container Backend com o comando "docker exec -it backend bash", logo utilize "cd /var/www/html" e "compose update", "npm install".

PS: As vezes as maquinas demoram um pouco para subir. Se necessário de "docker-compose down" e suba novamente.
