import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route}) => {
  const {state} = useContext(Context);
  const currentId = route.params.id;

  const blogPosts = state.find(blogPost => blogPost.id === currentId);

  return (
    <View>
      <Text>{blogPosts.title}</Text>
      <Text>{blogPosts.content}</Text>
    </View>
  );
};

export default ShowScreen;
