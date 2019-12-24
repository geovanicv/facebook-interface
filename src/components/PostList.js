import React, { Component } from 'react';
import PostItem from './PostItem'



class PostList extends Component {
 
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Geovani Cavalcante",
          avatar: "https://avatars2.githubusercontent.com/u/43452376?s=460&v=4"
        },
        date: "23 de dezembro de 2019",
        content: "Essa introdução ao React foi um pouco mais difícil do que eu esperava. Achei um tanto trabalhoso a quantidade de configurações também.",
        comments: [
          {
            id: 1,
            author: {
              name: "Luiz Braz",
              avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/p960x960/56539157_188765758754255_4946097068356665344_o.jpg?_nc_cat=105&_nc_ohc=9FWuOVLWKlAAQklNpKUc8TwcLWgXZQMOuZIIIT2DQ57R9qZG2-uUJcvxQ&_nc_ht=scontent-gru2-2.xx&oh=b94570a41ed5a6b805e43a9c7fb1a3a4&oe=5E6E7E80"
            }, 
            content: "Fiquei um pouco perdido em alguns conceitos também, como os componentes e propriedades. Mas depois de fazer esse desafio entendi um pouco melhor."
          },
          {
            id: 2,
            author: {
              name: "Geovani Cavalcante",
              avatar: "https://avatars2.githubusercontent.com/u/43452376?s=460&v=4"
            }, 
            content: "Pelo que vi, no próximo módulo simplifica a parte de configurações."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Geovani Cavalcante",
          avatar: "https://avatars2.githubusercontent.com/u/43452376?s=460&v=4"
        },
        date: "23 de dezembro de 2019",
        content: "Essa introdução ao React foi um pouco mais difícil do que eu esperava. Achei um tanto trabalhoso a quantidade de configurações também.",
        comments: [
          {
            id: 1,
            author: {
              name: "Luiz Braz",
              avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/p960x960/56539157_188765758754255_4946097068356665344_o.jpg?_nc_cat=105&_nc_ohc=9FWuOVLWKlAAQklNpKUc8TwcLWgXZQMOuZIIIT2DQ57R9qZG2-uUJcvxQ&_nc_ht=scontent-gru2-2.xx&oh=b94570a41ed5a6b805e43a9c7fb1a3a4&oe=5E6E7E80"
            }, 
            content: "Fiquei um pouco perdido em alguns conceitos também, como os componentes e propriedades. Mas depois de fazer esse desafio entendi um pouco melhor."
          },
          {
            id: 2,
            author: {
              name: "Geovani Cavalcante",
              avatar: "https://avatars2.githubusercontent.com/u/43452376?s=460&v=4"
            }, 
            content: "Pelo que vi, no próximo módulo simplifica a parte de configurações."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Geovani Cavalcante",
          avatar: "https://avatars2.githubusercontent.com/u/43452376?s=460&v=4"
        },
        date: "23 de dezembro de 2019",
        content: "Essa introdução ao React foi um pouco mais difícil do que eu esperava. Achei um tanto trabalhoso a quantidade de configurações também.",
        comments: [
          {
            id: 1,
            author: {
              name: "Luiz Braz",
              avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/p960x960/56539157_188765758754255_4946097068356665344_o.jpg?_nc_cat=105&_nc_ohc=9FWuOVLWKlAAQklNpKUc8TwcLWgXZQMOuZIIIT2DQ57R9qZG2-uUJcvxQ&_nc_ht=scontent-gru2-2.xx&oh=b94570a41ed5a6b805e43a9c7fb1a3a4&oe=5E6E7E80"
            }, 
            content: "Fiquei um pouco perdido em alguns conceitos também, como os componentes e propriedades. Mas depois de fazer esse desafio entendi um pouco melhor."
          },
          {
            id: 2,
            author: {
              name: "Geovani Cavalcante",
              avatar: "https://avatars2.githubusercontent.com/u/43452376?s=460&v=4"
            }, 
            content: "Pelo que vi, no próximo módulo simplifica a parte de configurações."
          }
        ]
      }
    ]
  }

  render(){

    //console.log(this.state)

    return (
      <div className="listaPosts">
        {this.state.posts.map( post => (
          <PostItem key={post.id} post={post}/> 
        ))}
      </div>
    )
  }


}

export default PostList;