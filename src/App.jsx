import React from 'react';
import './styles/App.css';
import {NavBar, CategoryBox} from './components/index';
import {db} from './firebase/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: {},
      genre: "",
      contents: [],
    }
    this.handleOnClick = this.handleOnClick.bind(this)
    this.addBox = this.addBox.bind(this);
    this.getText = this.getText.bind(this);
  };

  selectGenre(selectGenre){
    const genre = this.state.dataset[selectGenre]
    const contents = genre.contents
    this.setState({
      genre: selectGenre,
      contents: contents
    })
  };

  handleOnClick(name) {
    const genre = name
    this.selectGenre(genre)
  };

  addBox(list){
    if (!list) return
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
    // (async() => {
    //   const contents = this.state.contents
    //   contents[list].text = text
    //   const genre = this.state.genre
    //   await db
    //   .collection('genres')
    //   .doc(genre)
    //   .set({
    //     contents: contents
    //   })
    // })()

    const contents = this.state.contents
    contents[list].text = text
    const genre = this.state.genre
    this.setState({
      contents: contents
    })
  }

  initDataset = (dataset) => {
    this.setState({
      dataset: dataset
    })
  }

  componentDidMount(){
    (async() => {
      const dataset = this.state.dataset;

      await db.collection('genres').get().then((snapshots) => {
        snapshots.forEach(doc => {
          const id = doc.id
          const data = doc.data()
          dataset[id] = data
        })
      })
      this.initDataset(dataset)
      const initGenre = "Self-Analysis"
      this.selectGenre(initGenre)
    })()
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
