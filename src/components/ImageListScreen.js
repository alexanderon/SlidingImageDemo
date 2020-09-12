import React from 'react';
import {FlatList, Image} from 'react-native';
import {getAuthorImageList} from '../api/services';
import {shuffle} from '../util/randomGenerator';
import {ImageListItem} from './ImageListItem';

export class ImageListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {
        data: [],
        error: null,
      },
      isLoading: false,
    };
  }

  callImageListService = () => {
    getAuthorImageList()
      .then((res) => res.json())
      .then((jsonResponse) => {
        // console.log(jsonResponse);

        this.setState(
          {
            response: {
              ...this.state.response,
              data: shuffle(jsonResponse),
              error: null,
            },
            isLoading: false,
          },
          () => {
            // console.log(this.state);
          },
        );
      })
      .catch((error) => {
        console.log(error);

        const {response} = this.state;

        this.setState({
          isLoading: false,
          response: {
            ...response,
            data: [],
            error: error,
          },
        });
      });
  };

  componentDidMount() {
    this.callImageListService();
  }

  render() {
    const {response, isLoading} = this.state;

    if (!response.data.length) {
      return null;
    }

    const renderItem = ({item}) => <ImageListItem {...item} />;

    return (
      <FlatList
        data={response.data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        refreshing={isLoading}
        onRefresh={() => {
          this.callImageListService();
        }}
      />
    );
  }
}

export default ImageListScreen;
