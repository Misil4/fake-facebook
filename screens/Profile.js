import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import ProfileData from "../components/ProfileData";

const View = styled.View`
    flex: 1;
`

const Profile = () =>  {
    return (
        <View>
                    <ScrollView>
          <ProfileData />
          </ScrollView>
        </View>
    )
}

export default Profile