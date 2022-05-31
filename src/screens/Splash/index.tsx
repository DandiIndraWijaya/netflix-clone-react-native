import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import theme from '@netflix/theme';

interface Props {
  navigation: {
    replace: (name: string) => {};
  };
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const Splash: React.FC<Props> = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Home'), 3000);
  });

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          resizeMode={'contain'}
          source={require('@netflix/assets/image/netflix-logo.jpeg')}
        />
        <ActivityIndicator
          size={'large'}
          color={theme.color.red}
          style={styles.activityIndicator}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.color.primaryBlack,
    height: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: SCREEN_WIDTH - 140,
  },
  activityIndicator: {
    marginTop: -80,
  },
});
