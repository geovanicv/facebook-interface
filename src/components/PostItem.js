//nao vou ter state entao crio no formato de função

import React from 'react'

function PostHeader({ post }) {
  return(
    <div className="post-header">
      <img className="avatar" src={post.author.avatar}/>
      <div className="detail">
        <span> {post.author.name} </span>
        <span> {post.date} </span>
      </div>
    </div>       
  );
}

function PostComentario({ post }){
  return (
    <div className="post-comments">
      {post.comments.map(comment => (
        <div key={comment.id} className="comments-content">
          <img className="avatar" src={comment.author.avatar}/>
          <p>
            <span> {comment.author.name} </span>
            {comment.content}
          </p>
        </div>
      ))}
      
    </div>     
  )
}

function PostItem({ post }) {

  return (

    <div className="postCompleto">
      <PostHeader post={post}/>
      <p>{post.content}</p>
      <div className="linhaDivisora"></div>
        <div className="botoes">
          <button>Curtir</button>
          <button>Comentar</button>
          <button>Compartilhar</button>
        </div>
      
      <PostComentario post={post}/>
    </div>
  )
}


export default PostItem;