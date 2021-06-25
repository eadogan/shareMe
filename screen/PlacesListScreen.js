import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../component/HeaderButton';
import PlaceItem from '../component/PlaceItem';

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places);

    return(
        <FlatList 
            keyExtractor={item => item.id}
            data={places}
            renderItem={itemData => (
                <PlaceItem 
                    image={null}
                    title={itemData.item.title}
                    address={null}
                    onSelect={() => {
                        props.navigation.navigate('PlaceDetail', {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id
                        });
                    }}
                />
            )}
        />
    );
}

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Places',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Add Place' iconName='ios-add' onPress={() => { 
                navData.navigation.navigate('NewPlace');
            }}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({

});

export default PlacesListScreen;