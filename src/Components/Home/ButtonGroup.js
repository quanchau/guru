import React from 'react';
import {
  Body,
  Button,
  Header,
  Left,
  Icon,
  Right,
  Title,
  Footer,
  View,
  Text,
} from 'native-base';
import { AppColors } from '@style/index';

const ButtonGroup = (props) => {
  const {liked, reviewed, writeReview, addToWishlist} = props;

  const renderIcon = (color) => ({
    ...styles.icon,
    color,
  });

  return (
    <Footer style={styles.footer}>
      <Button transparent>
        <View style={styles.button}>
          <Icon style={renderIcon(AppColors.colorPrimary)} name="close"/>
        </View>
      </Button>

      <Button transparent>
        <View style={styles.button}>
          <Icon style={renderIcon(AppColors.colorPrimary)} name="star"/>
        </View>
      </Button>

      <Button transparent onPress={writeReview}>
        <View style={styles.button}>
          <Icon
            style={renderIcon(AppColors.colorPrimary)}
            active={!!reviewed}
            name="chatbubbles"/>
        </View>
      </Button>

      <Button transparent onPress={addToWishlist}>
        <View style={styles.button}>
          <Icon style={renderIcon(AppColors.colorPrimary)}
                active={liked}
                name="heart"/>
        </View>
      </Button>
    </Footer>
  );
};

const styles = {
  footer: {
    height: 80,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: 'transparent',
    paddingHorizontal: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#FFF',
    borderRadius: 24,
    alignSelf: 'center',
    marginTop: 28,
  },
  icon: {
    fontSize: 32,
  }

};

export default ButtonGroup;
