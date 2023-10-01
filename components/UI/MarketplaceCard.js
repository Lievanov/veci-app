import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MarketplaceModal from './MarketplaceModal'; // Assuming the modal component is in a separate file

const ItemCard = ({ images, title, description, price }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={openModal}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: images[0] }}
              style={styles.image}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>${price}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <MarketplaceModal
        isVisible={isModalVisible}
        onClose={closeModal}
        item={{ images, title, description, price }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    maxHeight: 140,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 2,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  priceContainer: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ItemCard;
