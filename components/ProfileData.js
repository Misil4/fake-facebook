import React from "react";
import styled from "styled-components/native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import MainSeparator from "./MainSeparator";
import fakeUsers from '../data/fakeUsers'
import { ScrollView } from "react-native";

const Container = styled.View`
    flex: 1`

const Background = styled.Image`
    width : 400px;
    overflow: hidden;
    position: relative;`

const ProfileImage = styled.Image`
    width : 100px;
    height : 94px;
    position: absolute;
    top: 19.3%;
    left: 38.6%;`
const ProfileImageContainer = styled.View`
width: 105px;
height : 100px;
    position: absolute;
    top: 19%;
    left: 38%;
    border: 3px solid #FFFFFF`
const TextContainer = styled.View`
    justify-content: center;`

const UserName = styled.Text`
text-align: center;
color: #000000;
font-size: 25px;
font-weight: bold;
letter-spacing: -0.3px;`
const UserDescription = styled.Text`
text-align:center;
color: #9F9C9C;
font-size: 17px
`
const Button = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    border-radius: 31px;
    margin: 6px;
    background: #E7E7E7;
    align-items: center;
    justify-content: center;
`
const Row = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 0 30px; 
    justify-content: center;
    align-items: center;
`
const IconText = styled.Text`
font-weight: bold;
text-align: center
font-size: 14px;`

const Separator = styled.View`
    margin: 20px 30px;
    height: 2px;
    width : 320px;
    background : #E7E7E7;`
const AboutContainer = styled.View`
flex-direction: row;
    margin-left: 10px;
    height: 40px;
    `
const AboutTitle = styled.Text`
text-align: left;
color: #000000;
font-size: 20px;
font-weight: bold;
letter-spacing: -0.3px;`

const PhotoGallery = styled.View`
flex-direction: row;
justify-content:center`

const Photo = styled.Image`
    height : 150px;
    width: 150px;`
const SeeAllButton = styled.Text`
    text-align : right;

    color: blue`
const ProfileData = () => {
    return (
        <Container>
            <Background source={require('../assets/post1.jpg')} />
            <ProfileImageContainer />
            <ProfileImage source={require('../assets/12.jpg')} />
            <TextContainer>
            <UserName>Turu Letis</UserName>
            <UserDescription>Cuanto mas viajar mas aprender para poder conocer sobre el mundo</UserDescription>
            </TextContainer>
            <Row>
            <Container>
            <Button style={{Background : 'orange'}}>
            <MaterialCommunityIcons name="plus-circle" size={28} color="#3a86e9" />
            </Button>
            <IconText>Add Story</IconText>
            </Container>
            <Container>
            <Button>
            <MaterialCommunityIcons name="account-edit" size={28} color="#888888" />
            </Button>
            <IconText>Edit Profile</IconText>
            </Container>
            <Container>
            <Button>
            <MaterialCommunityIcons name="format-list-bulleted" size={28} color="#888888" />
            </Button>
            <IconText>Activity Log</IconText>
            </Container>
            <Container>
            <Button>
            <MaterialCommunityIcons name="more" size={28} color="#888888" />
            </Button>
            <IconText>More</IconText>
            </Container>
            </Row>
            <Separator />
            <AboutContainer>
            <AboutTitle>About</AboutTitle>
            </AboutContainer>
            <SeeAllButton >See All</SeeAllButton>
            <AboutContainer>
            <MaterialCommunityIcons name="briefcase-variant" size={28} color="#888888" style={{width :40}} />
            <UserDescription>Chef at </UserDescription>
            <UserDescription style={{fontWeight : 'bold',color: 'black'}}>Healthy Eats</UserDescription>
            </AboutContainer>
            <AboutContainer>
            <MaterialCommunityIcons name="home-city" size={28} color="#888888" style={{width :40}} />
            <UserDescription>Lives in </UserDescription>
            <UserDescription style={{fontWeight : 'bold',color: 'black'}}>Madrid, Spain</UserDescription>
            </AboutContainer>
            <AboutTitle>Featured</AboutTitle>
            <SeeAllButton>See All</SeeAllButton>
            <PhotoGallery>
                    <Photo source={require('../assets/post2.jpg')}></Photo>
                    <Photo source={require('../assets/post3.jpg')}></Photo>
                    </PhotoGallery>
                    <PhotoGallery>
                    <Photo source={require('../assets/post4.jpg')}></Photo>
                    <Photo source={require('../assets/post5.jpg')}></Photo>
                    </PhotoGallery>
        </Container>
    )
}

export default ProfileData