migrations são como um controle de versão da base de dados.

imagine que existem três programadores em um projeto, como que eles vão ter uma base de dados funcional em todos os ambientes?

o migrations ajuda nisso

para criar uma migrations basta adicionar o comando abaixo

yarn sequelize migration:create --name=create-users