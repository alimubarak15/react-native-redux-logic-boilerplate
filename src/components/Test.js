import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {usersFetch} from '../redux/actions';

const Test = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersFetch(2));
  }, []);

  const state = useSelector((state) => state);

  console.log(state);
  return (
    <View>
      <Text>aku</Text>
    </View>
  );
};

export default Test;
