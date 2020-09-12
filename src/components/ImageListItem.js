import React from 'react';
const {View, Text, Image} = require('react-native');
const {imageConfig} = require('../config/image-config');
const {extractImageUrlWithResolution} = require('../util/randomGenerator');

function ImageListItem(item) {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        padding: 20,
        borderColor: 'grey',
        borderWidth: 1,
        margin: 16,
      }}>
      <Text style={{fontSize: 18, fontWeight: 'bold', padding:10}}>{item.author}</Text>
      <Image
        style={{width: imageConfig.WIDTH, height: imageConfig.HEIGHT}}
        source={{
          uri: extractImageUrlWithResolution(
            item.id,
            imageConfig.WIDTH,
            imageConfig.HEIGHT,
          ),
        }}
      />
    </View>
  );
}

export {ImageListItem};
