import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View, FlatList} from 'react-native';
import {Icon, Avatar, ListItem} from 'react-native-elements';
import styles from './styles/Profile.styles';
import JavaActivity from './JavaActivity';

import {Navigation} from 'react-native-navigation';

const axios = require('axios').default;

const processPanasList = panas => {
  return panas.map(pana => {
    const {name, picture, location} = pana;
    return {
      name: name.first + ' ' + name.last,
      avatar_url: picture.medium,
      location: location.country,
    };
  });
};

const openProfile = props => {
  Navigation.push(props.componentId, {
    component: {
      name: 'navigation.Profile',
      options: {
        topBar: {
          visible: false,
          height: 0,
        },
      },
    },
  });
};

const keyExtractor = (item, index) => index.toString();

const renderItem = ({item}) => (
  <ListItem
    title={item.name}
    subtitle={item.location}
    leftAvatar={{source: {uri: item.avatar_url}}}
    bottomDivider
    button
    chevron={
      <Icon
        size={30}
        type="font-awesome"
        color="#3B5A98"
        name="angle-right"
        onPress={() => console.warn('facebook')}
      />
    }
    onPress={() => console.warn('facebook')}
  />
);

const renderContactHeader = list => {
  console.warn(list);
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
              size={40}
              type="entypo"
              color="#3B5A98"
              name="facebook"
              onPress={() => console.warn('hello')}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={40}
              type="entypo"
              color="#56ACEE"
              name="twitter-with-circle"
              onPress={() => console.log('twitter')}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={40}
              type="entypo"
              color="#DD4C39"
              name="globe"
              onPress={() => JavaActivity.openJavaActivity()}
            />
          </View>
        </View>
      </View>
      <View>
        <FlatList
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const Profile = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .post('https://us-central1-panas-274ee.cloudfunctions.net/panasList')
      .then(function(response) {
        const {data} = response;
        const {panas} = data.panas;
        if (panas) {
          setList(processPanasList(panas));
        }
      })
      .catch(function(error) {
        console.warn(error);
      });
  }, []);
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.cardContainer}>{renderContactHeader(list)}</View>
      </View>
    </ScrollView>
  );
};

export default Profile;
