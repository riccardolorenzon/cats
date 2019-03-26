import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import CatDetail from './CatDetail';

class CatsList extends Component {
  state = { cats: [] };

  componentWillMount() {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10&page=1&order=DESC&mime_types=jpg,png')
      .then(response => this.setState({ cats: response.data }));
  }

  renderCats() {
    return this.state.cats.map(cat =>
      <CatDetail key={cat.id} cat={cat} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderCats()}
      </ScrollView>
    );
  }
}

export default CatsList;