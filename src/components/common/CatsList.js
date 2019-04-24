import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import { CatDetail } from './CatDetail';

class CatsList extends Component {
  constructor() {
    super();
    this.state = { 
      cats: [],
      page: 1 ,
      isFetching: false
    };
  }

  componentWillMount() {
    this._get_first_page();
  }

  renderCats() {
    return this.state.cats.map(cat =>
      <CatDetail key={cat.id} cat={cat} />
    );
  }

  _get_first_page = () => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10&page=1&order=DESC&mime_types=jpg,png')
      .then(response => this.setState({ cats: response.data }));
    this.setState({ isFetching: false })
  }
  _loadMoreData = () => {
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${this.state.page+1}&order=DESC&mime_types=jpg,png`)
      .then(response => this.setState({ cats: [...this.state.cats, ...response.data]}));
    this.setState({page: this.state.page + 1});
  }

  _renderCat = ({item : cat}) => {
    return <CatDetail key={cat.id} cat={cat} />;
  }

  _onRefresh = () => {
    this.setState({ isFetching: true }, function() { this._get_first_page() });
  }

  render() {
    return (
      <FlatList
        data={this.state.cats}
        renderItem={this._renderCat}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={this._loadMoreData}
        onEndReachedThreshold={10}
        onRefresh={this._onRefresh}
        refreshing={this.state.isFetching}
        >
      </FlatList>
    );
  }
}

export { CatsList };