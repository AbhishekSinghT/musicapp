import React, { useState, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { styles } from './Style';
import { Formik } from 'formik';
import * as yup from 'yup'
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Greeting from '../../components/title/Title';
import Inputbox from '../../components/inputbox/InputBox';
import { AuthContext } from '../../navigation/authprovider/AuthProvider';
import UserPhoto from '../../components/userphoto/UserPhoto';
import BottomLine from '../../components/bottomborderline/BottomLine';

const SignUp = ({ navigation }) => {
    const { register } = useContext(AuthContext)
    const handleSubmit = (values, actions) => {
        actions.resetForm();
        // register(values.name, values.email, values.password,)
        // Alert.alert('user scusess')
        navigation.navigate('Intro', {
            name: values.name,
            email: values.email,
            password: values.password,
        });
    }

    const logiSchema = yup.object().shape({
        email: yup
            .string()
            .email()
            .required("Email is a required field"),
        password: yup
            .string()
            .required('Please enter your password.')
            .min(8, 'Your password is too short.'),
        retypePassword: yup
            .string()
            .required('Please confirm your password.')
            .oneOf([yup.ref('password')], 'Your passwords do not match.'),
        name: yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required("Please enter your name"),
    })
    return (
        <>
            <LinearGradient colors={['#0d709e', '#0a86bf', '#09a0e6',]} style={styles.linearGradient}>
                <Formik
                    validationSchema={logiSchema}
                    initialValues={{ email: '', password: '', retypePassword: '', name: '' }}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleSubmit, values, touched, errors }) => (
                        <>
                            <View style={{ flex: 1, }}>
                                <View style={{flex:1}}>
                                <View style={styles.usericon}>
                                    <UserPhoto source={require('../../assets/images/user.png')} />
                                </View>
                                <Greeting name='CREATE ' title='ACCOUNT' />
                                <View style={styles.line} />
                                <View style={{ marginTop: 25 }}>
                                    <Inputbox
                                        put
                                        onChangeText={handleChange('name')}
                                        value={values.name}
                                        error={touched.name && errors.name}
                                        placeholder={'Your nickname'}
                                    />
                                    <Inputbox
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        error={touched.email && errors.email}
                                        placeholder={'Enter your email'}
                                    />
                                    <Inputbox
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        error={touched.password && errors.password}
                                        placeholder={'Your password'}
                                        secureTextEntry={true}
                                    />
                                    <Inputbox
                                        onChangeText={handleChange('retypePassword')}
                                        value={values.retypePassword}
                                        error={touched.password && errors.retypePassword}
                                        placeholder={'Confirm password'}
                                        secureTextEntry={true}
                                    />
                                    <View style={styles.btncontainer}>
                                        <TouchableOpacity style={styles.btn} onPress={handleSubmit} >
                                            <Image style={styles.logo} source={require('../../assets/images/arrow.png')} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.btnSignup}>
                                        <Text style={styles.acountText}> have an Account? </Text>
                                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                            <Text style={styles.signupText} >Sign in</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                </View>
                                <View>
                                    <BottomLine />
                                </View>
                            </View>
                        </>
                    )}
                </Formik>
            </LinearGradient>
        </>
    )
}

export default SignUp