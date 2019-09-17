import React from 'react';
import Recipe from './Recipe'

class Main extends React.Component <{name: string, image: string}, {isModalOpen:boolean}> {
  
  render() {
    const recipeItem=[
        {
          name:'レシピ１',
        image:'image_S_1.jpg',
        introduction:'このレシピは、、、'
        },
         {
          name:'レシピ2',
        image:'image_S_2.jpg',
        introduction:'このレシピは、、、'
        },
         {
          name:'レシピ3',
        image:'image_S_3.jpg',
        introduction:'このレシピは、、、'
        },
         {
          name:'レシピ4',
        image:'image_S_4.jpg',
        introduction:'このレシピは、、、'
        },
         {
          name:'レシピ5',
        image:'image_S_5.jpg',
        introduction:'このレシピは、、、'
        },
         {
          name:'レシピ6',
        image:'image_S_6.jpg',
        introduction:'このレシピは、、、'
        },
         {
          name:'レシピ7',
        image:'image_S_7.jpg',
        introduction:'このレシピは、、、'
        },
         {
          name:'レシピ8',
        image:'image_S_8.jpg',
        introduction:'このレシピは、、、'
        },
         {
          name:'レシピ9',
        image:'image_S_9.jpg',
        introduction:'このレシピは、、、'
        },
         {
          name:'レシピ１0',
        image:'image_S_10.jpg',
        introduction:'このレシピは、、、'
        },
       
       ]
      
      
    return (
      <div className="main-wrapper">
  <div className="main">
  <div className="copy-container">
  <h2>Welcome to Recipe House!!</h2>
  <p>レシピハウスへようこそ！このサイトでは本格レシピを紹介しています。</p>
  </div>
  <div className="recipe-container">
    <h3 className='section-title'>学べるレシピ</h3>
     {recipeItem.map((recipeItem: { name: string, image: string,introduction:string}, index)=>{

 return(
  <Recipe
  key={index}
  name={recipeItem.name}
  image={recipeItem.image}
  introduction={recipeItem.introduction}
  />
  );
  })}
  </div>
  </div>
  </div>
  
    );
  }
}

export default Main;
