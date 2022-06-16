import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {height, width} from '../constants/constant';
import FavoriteUser from '../components/FavoriteUser';
import FavoriteHeader from '../components/FavoriteHeader';
import FavoriteActions from '../components/FavoriteActions';
import FavoriteRating from '../components/FavoriteRating';
import Commentries from '../components/Commentries';
import {
  baseColor,
  baseColorDark,
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../constants/colors';
import {Rating} from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import FavoriteProfile from '../components/FavoriteProfile';

export default function FavoriteScreen({navigation}) {
  const [showCommentries, setShowCommentries] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const images = [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView
        pagingEnabled
        onScroll={() => {
          setShowRating(false);
          setShowCommentries(false);
          setShowProfile(false);
        }}
        onTouchStart={() => {
          setShowRating(false);
          setShowCommentries(false);
          setShowProfile(false);
        }}>
        {images.map(image => (
          <Image
            key={JSON.stringify(image)}
            source={{
              uri: image,
            }}
            style={{height: height - 50, width: width}}
          />
        ))}
      </ScrollView>
      <FavoriteHeader />
      <FavoriteUser
        onClick={() => {
          setShowProfile(true);
        }}
      />
      <FavoriteActions
        onRating={() => {
          setShowRating(true);
        }}
        onMessage={() => {
          setShowCommentries(true);
        }}
      />
      {showRating ? <FavoriteRating /> : null}
      {showCommentries ? (
        <Commentries
          onClose={() => {
            setShowCommentries(false);
          }}
        />
      ) : null}
      {showProfile ? <FavoriteProfile /> : null}
    </SafeAreaView>
  );
}
