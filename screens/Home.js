import React from "react";
import styled from "styled-components/native";

import Toolbar from "../components/ToolBar";
import MainSeparator from "../components/MainSeparator";
import Users from "../components/User";
import Story from "../components/Story";
import Post from "../components/Post";
import { ScrollView } from "react-native";

const View = styled.View`
    flex: 1;`


const Home = () => {
    return (
        <View>
            <ScrollView >
            <Toolbar />
            <MainSeparator />
            <Users />
            <MainSeparator />
            <Story />
            <Post />
            </ScrollView>
        </View>
    )
}

export default Home