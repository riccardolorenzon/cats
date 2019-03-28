import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import CatDetail from './CatDetail';

class CatsList extends Component {
  constructor() {
    super();
    this.state = { 
      cats: [],
      page: 1 
    };
  }

  componentWillMount() {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10&page=1&order=DESC&mime_types=jpg,png')
      .then(response => this.setState({ cats: response.data }));
  }

  renderCats() {
    return this.state.cats.map(cat =>
      <CatDetail key={cat.id} cat={cat} />
    );
  }

  _loadMoreData = () => {
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${this.state.page+1}&order=DESC&mime_types=jpg,png`)
      .then(response => this.setState({ cats: [...this.state.cats, ...response.data]}));
    this.setState({page: this.state.page + 1});
  }

  _renderCat = ({item : cat}) => {
    return <CatDetail key={cat.id} cat={cat} />;
  }

  render() {
    return (
      <FlatList
        data={this.state.cats}
        renderItem={this._renderCat}
        keyExtractor={item => item.id}
        onEndReached={this._loadMoreData}
        onEndReachedThreshold={0}
        >
      </FlatList>
    );
  }
}

export default CatsList;