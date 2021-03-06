import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}) => {
  const {addBlogPosts} = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPosts(title, content, () => navigation.navigate('Home'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
