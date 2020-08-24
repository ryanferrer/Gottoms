import React, { Component } from 'react';
import axios from 'axios';
// import EternityCode from '@assets/eternitycode.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3030/api/cardSets')
      .then((response) => {
        console.log('api response', response);

        this.setState({
          cards: response.data[0].cards,
        });
      });
  }

  render() {
    const { cards } = this.state;

    return (
      <div className="set-viewer">
        {
          cards.map((card, i) => (

              <div key={i}>
                <img src={card.card_images[0].image_url}/>
              </div>
          ))
        }
      </div>
    );
  }
}

export default App;