import React, {Component} from 'react';
import {ScrollView, Text, View, FlatList} from 'react-native';
import {Icon, Avatar, ListItem, Card} from 'react-native-elements';
import styles from './styles/Profile.styles';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

const keyExtractor = (item, index) => index.toString();

const renderItem = ({item}) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{source: {uri: item.avatar_url}}}
    bottomDivider
    chevron
  />
);

const renderContactHeader = () => {
  //   const {avatar, name, bio} = this.props;
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.userRow}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>Name LastName</Text>
          </View>
          <View style={styles.userBioRow}>
            <Text style={styles.userBioText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>
        <View style={styles.socialRow}>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="font-awesome"
              color="#3B5A98"
              name="heartbeat"
              onPress={() => console.log('facebook')}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#56ACEE"
              name="twitter-with-circle"
              onPress={() => console.log('twitter')}
            />
          </View>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#DD4C39"
              name="google--with-circle"
              onPress={() => console.log('google')}
            />
          </View>
        </View>
        <Text>Panas</Text>
      </View>
      <View>
        <Card title="Panas">
          <FlatList
            keyExtractor={keyExtractor}
            data={list}
            renderItem={renderItem}
          />
        </Card>
      </View>
    </View>
  );
};

const Profile = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.cardContainer}>{renderContactHeader()}</View>
      </View>
    </ScrollView>
  );
};

export default Profile;
