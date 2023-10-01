import React from 'react';
import { View, Text, Image, Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const MarketplaceModal = ({ isVisible, onClose, item }) => {
  if (!isVisible) {
    return null;
  }

  const { images, title, description, price } = item;

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.modalContainer}>
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.modalCard}>
          <Image
            source={{ uri: images[0] }}
            style={styles.modalImage}
          />
          <View style={styles.modalDetails}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalDescription}>{description}</Text>
            <Text style={styles.modalPrice}>${price}</Text>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    flexDirection: 'column',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  modalDetails: {
    marginTop: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  modalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default MarketplaceModal;
