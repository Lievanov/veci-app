import { Text, Button, View, StyleSheet, ScrollView } from "react-native";

import TopHeader from '../components/TopHeader';
import MarketplaceCard from "../components/UI/MarketplaceCard"

function MarketplaceScreen({ navigation }) {

  const toggleMenu = () => {
    navigation.toggleDrawer(); // This toggles the side menu
  };

  return (
    <View style={styles.container}>
      <View>
        <TopHeader toggleMenu={toggleMenu} title="Inicio" />
      </View>
      <ScrollView>
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      <MarketplaceCard images={["https://www.sport.es/bicio/wp-content/uploads/2022/03/perder-barriga-bici.jpg"]} title={'vendo bici'} description={'agrego informacion'} price={60} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MarketplaceScreen;