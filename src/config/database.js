//objeto com as configurações da base de dados de desenvolvimento
module.exports = {
  host:'127.0.0.1',
  username: 'postgres',
  password: 'docker',
  database: 'nodeauth',
  dialect: 'postgres',
  // desabilitar warning do sequelize
  operatorsAliases: false,

  //não mostrar muitos logs, quando rodar migrations etc
  logging: false,
  define: {
    
    // faz com que todas as tabelas do banco tenham
    // os campos updated_at e created_at e marca esses dados automaticamente
    timestamps: true,
    
    //faz com que as tabelas sejam criadas no formato de underline
    // exemplo user_groups
    underscored: true,
    
    //assim como underscored
    // porém relacionado aos atributos da tabela
    // exemplo password_hash
    underscoredAll: true,


  },
}
