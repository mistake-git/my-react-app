import React from 'react';
class Recipe extends React.Component < { name: string, image: string, introduction: string, key: number }, { isModalOpen: boolean } > {

  constructor(props: Readonly < { name: string, image: string, introduction: string, isModalOpen: boolean, key: number } > ) {
    super(props);
    this.state = { isModalOpen: false }
  }
  handleClickRecipe() {
    this.setState({ isModalOpen: true })
  }

  handleClickClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button className='modal-close-btn'>
              とじる
            </button>
          </div>
        </div>
      );
    }
    return (

      <div className="recipe-card col-xs-12 col-sm-3" key={this.props.key}>
        <div
          className="recipe-item "
          onClick={()=>this.handleClickRecipe()}
          >
          <p>{this.props.name}</p>
          <img src={this.props.image}/>
        </div>
        {modal}
     </div>
    );
  }
}

export default Recipe;
