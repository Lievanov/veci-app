import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Modal } from 'react-native';

import NewsModal from './NewsModal';

const NewsCard = ({ image, title, date, description }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableWithoutFeedback>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      {/* The modal component will be rendered here */}
      <NewsModal
        isVisible={isModalVisible}
        image={image}
        title={title}
        date={date}
        description={description}
        onClose={toggleModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    aspectRatio: 16 / 9,
  },
  textContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  description: {
    fontSize: 14,
    padding: 10,
    color: 'gray',
  },
});

export default NewsCard;
