
import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import {Card} from './Card';
import {CardSection} from './CardSection';

const CatDetail = ({ cat }) => {
  const { url, id } = cat;
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <View>
      <Card>
        <CardSection>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{id}</Text>
            </View>
        </CardSection>
        <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: url }}
          />
        </CardSection>
      </Card>
    </View>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export { CatDetail };