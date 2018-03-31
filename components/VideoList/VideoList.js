import React from "react";
import { ScrollView } from "react-native";
import VideoListItem from "../VideoListItem";

export const VideoList = ({ videos }) => (
    <ScrollView>
        {videos.map(video => <VideoListItem key={video.etag} video={video} />)}
    </ScrollView>
);

export default VideoList;
