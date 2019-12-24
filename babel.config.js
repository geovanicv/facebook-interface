module.exports = {
  presets: [
      "@babel/preset-env", //responsavel por alterar sintaxe que o navegador nao entende do js
      "@babel/preset-react" //responsavel por alterar sintaxe que o navegador nao entende do react 
  ],

  plugins: [
      '@babel/plugin-proposal-class-properties' //plugin para entender o state resumido 
  ]
};