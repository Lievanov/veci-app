import React, { useRef } from 'react';

import { View, ScrollView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import TopHeader from '../components/TopHeader';
import NewsCard from "../components/UI/NewsCard";


function HomeScreen({ navigation }) {

  const swiperRef = useRef(-1);

  const scrollToScreen = (screenNumber) => {
    swiperRef.current.scrollTo(screenNumber);
  };

  const toggleMenu = () => {
    navigation.toggleDrawer(); 
  };

  return (
    <View style={styles.container}>
      <View>
        <TopHeader toggleMenu={toggleMenu} title="Inicio" />
      </View>
      <View style={styles.tabsContainer}> 
        <TouchableOpacity style={styles.tabButton} onPress={() => scrollToScreen(-1)}>
          <Text style={styles.menuText}>Boletin</Text>
        </TouchableOpacity>   
        <Text style={{ fontSize: 20}}>|</Text>    
        <TouchableOpacity style={styles.tabButton} onPress={() => scrollToScreen(1)}>
          <Text style={styles.menuText}>Anteriores</Text>
        </TouchableOpacity>       
      </View>
      <Swiper ref={swiperRef} loop={false} index={0}>
        {/* Screen 1 */}
        <ScrollView style={styles.board}>
        <NewsCard
          image="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
          title="Card Title"
          description="This is a description of the card content."
          date="September 21, 2023"
        />
        <NewsCard
          image="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
          title="Card Title"
          description="This is a description of the card content."
          date="September 21, 2023"
        />
        <NewsCard
          image="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
          title="Card Title"
          description="This is a description of the card content."
          date="September 21, 2023"
        />
        <NewsCard
          image="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
          title="Card Title"
          description="This is a description of the card content."
          date="September 21, 2023"
        />
        </ScrollView>

        {/* Screen 2 */}
        <View style={styles.board}>
        <ScrollView style={styles.board}>
        <NewsCard
          image="https://resources.bestfriends.org/sites/default/files/styles/large/public/2022-11/17_Desmond_LF_794A6656_video.jpg?itok=q4Zyy7HV"
          title="Card Title"
          description="This is a description of the card content."
          date="September 21, 2023"
        />
        <NewsCard
          image="https://resources.bestfriends.org/sites/default/files/styles/large/public/2022-11/17_Desmond_LF_794A6656_video.jpg?itok=q4Zyy7HV"
          title="Card Title"
          description="This is a description of the card content."
          date="September 21, 2023"
        />
        <NewsCard
          image="https://resources.bestfriends.org/sites/default/files/styles/large/public/2022-11/17_Desmond_LF_794A6656_video.jpg?itok=q4Zyy7HV"
          title="Card Title"
          description="This is a description of the card content."
          date="September 21, 2023"
        />
        <NewsCard
          image="https://resources.bestfriends.org/sites/default/files/styles/large/public/2022-11/17_Desmond_LF_794A6656_video.jpg?itok=q4Zyy7HV"
          title="Card Title"
          description="This is a description of the card content."
          date="September 21, 2023"
        />
        </ScrollView>

        </View>
      </Swiper>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 13,
    justifyContent: "space-evenly", 
    backgroundColor: "white",
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 1,
    // shadowRadius: 4,
    // elevation: 4,
  },
  menuText: {
    fontSize: 18
  },
  tabButton: {
    // backgroundColor: "red",
  },
  board: { 
    flex: 1, 
    backgroundColor: '#E8E8E8', 
    paddingTop: 10, 
    paddingHorizontal: 8 
  }
});

export default HomeScreen;