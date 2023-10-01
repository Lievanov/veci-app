import React from 'react';
import { Modal, View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const NewsModal = ({ isVisible, image, title, date, description, onClose }) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalCard}>
              <Image source={{ uri: image }} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{title}</Text>
              <Text style={styles.modalDate}>{date}</Text>
              <Text style={styles.modalDescription}>{description}</Text>
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(143,143,143, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalImage: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginBottom: 10,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDate: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default NewsModal;
