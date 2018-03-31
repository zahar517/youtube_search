import React from "react";
import { View, Text, Image } from "react-native";

export const VideoListItem = ({ video }) => (
    <View style={styles.container}>
        <Image
            source={{ uri: video.snippet.thumbnails.high.url }}
            style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>{video.snippet.title}</Text>
    </View>
);

const styles = {
    container: {
        marginBottom: 10,
    },
    imageStyle: {
        height: 200,
        marginBottom: 10,
    },
    textStyle: {
        paddingLeft: 10,
    },
};

export default VideoListItem;
