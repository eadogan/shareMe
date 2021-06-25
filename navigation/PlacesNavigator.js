import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/Colors';
import PlacesListScreen from '../screen/PlacesListScreen';
import PlaceDetailScreen from '../screen/PlaceDetailScreen';
import NewPlaceScreen from '../screen/NewPlaceScreen';
import MapScreen from '../screen/MapScreen';

const PlacesNavigator = createStackNavigator({
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'white'
        },
        headerTintColor: Colors.primary
    }
}) 

export default createAppContainer(PlacesNavigator);