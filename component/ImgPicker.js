import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Colors from '../constants/Colors';

const ImgPicker = props => {
    const [pickedImage, setPickedImage] = useState();

    const takeImageHandler = async() => {
        const image = await ImagePicker.launchCameraAsync({
           // allowsEditing: true, // croping picture
            aspect: [16, 9],
            quality: 0.5
        });
        setPickedImage(image.uri);
    };

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!pickedImage ? ( 
                    <Text>No image picked yet.</Text>
                ):(
                    <Image style={styles.image} source={{uri: pickedImage}} />
                )}
            </View>
            <Button title="Take Image" color={Colors.primary} onPress={takeImageHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default ImgPicker;
