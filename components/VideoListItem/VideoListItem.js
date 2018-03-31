import React from "react";
import { View, Text, Image } from "react-native";
import WatchButton from "../WatchButton";

export const VideoListItem = ({ video }) => (
    <View style={styles.container}>
        <Image
            source={{ uri: video.snippet.thumbnails.high.url }}
            style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>{video.snippet.title}</Text>
        <WatchButton videoId={video.id.videoId} />
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
