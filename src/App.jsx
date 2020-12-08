import React from 'react';
import './styles/App.css';
import defaultDataset from './dataset';
import {NavBar, CategoryBox} from './components/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: defaultDataset,
      genre: "self-Analysis",
      contents: [],
    }
    this.handleOnClick = this.handleOnClick.bind(this)
    this.addBox = this.addBox.bind(this);
    this.getText = this.getText.bind(this);
  };

  selectGenre(selectedGenre ){
    const genre = selectedGenre
    const contents = genre.contents
    this.setState({
      contents: contents
    })
  };

  handleOnClick(name) {
    const genre = name
    this.selectGenre(this.state.dataset[genre])
  };

  addBox(list){
    const contents = this.state.contents
    contents.push({
      "list": list,
      "text": ""
    })
    this.setState({
      contents: contents
    })
  }

  getText(text, list){
    const contents = this.state.contents
    contents[list].text = text
    this.setState({
      contents: contents
    })
  }

  componentDidMount(){
    this.selectGenre(this.state.dataset[this.state.genre])
  };

  render(){
    
    return (
      <div className="display-box">
        <NavBar keys={Object.keys(this.state.dataset)} onClick={(name) => this.handleOnClick(name)}/> 
        <div className="">
          <CategoryBox contents={this.state.contents} onClick={(list) => this.addBox(list)} getText={(text, list) => this.getText(text,list)}/>
        </div>
      </div>
    );
  };
}

