import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../styles/LoginStyles';
import { Props } from '../types/Input.type';

const Inputs: React.FC<Props> = ({
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="email"
        placeholderTextColor="#a0aec0"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor="#a0aec0"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    </>
  );
};

export default Inputs;
