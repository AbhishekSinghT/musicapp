import React, {createContext, useState} from 'react';
import {Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
 

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
   
    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          login: async (email, password) => {
            try {
              await auth().signInWithEmailAndPassword(email, password);
            } catch (e) {
              Alert.alert('please enter valid email and password')
            }
          },
          register: async (name, email, password) => {
            try {
              await auth().createUserWithEmailAndPassword(email, password)
              .then( async (res) => {
                const update = {
                  displayName: name,
                  // photoURL:image, 
                };
                // console.log(image)
                await res.user.updateProfile(update).then(()=> {

                })
              })
            } catch (e) {
              Alert.alert('please enter valid email and password')
            }
          },
          logout: async () => {
            try {
              await auth().signOut();
            } catch (e) {
              console.log(e);
            }
          },
        }}>
        {children}
      </AuthContext.Provider>
    );
  };