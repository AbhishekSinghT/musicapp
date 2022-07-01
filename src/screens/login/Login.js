import React, { useState, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { styles } from './Style';
import { Formik } from 'formik';
import * as yup from 'yup'
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Greeting from '../../components/title/Title';
import Input from '../../components/textInput/Input';
import { AuthContext } from '../../navigation/authprovider/AuthProvider';
import BottomLine from '../../components/bottomborderline/BottomLine';



const Login = ({ navigation }) => {
    const { login } = useContext(AuthContext)
    const handleSubmit = (values, actions) => {
        actions.resetForm();
        login(values.email, values.password)
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
    })
    return (
        <>
            <LinearGradient colors={['#4b99a3', '#5ab3bf', '#66cbd9',]} style={styles.linearGradient}>
                <Formik
                    validationSchema={logiSchema}
                    initialValues={{ email: '', password: '' }}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleSubmit, values, touched, errors }) => (
                        <View style={styles.maincontainer}>
                            <View style={styles.imgContainer}>
                                <Image style={styles.img} source={require('../../assets/images/logo.png')} />
                            </View>
                            <Greeting name='Welcome to ' title='APPDESIGN' />
                            <View style={styles.inputbox}>
                                <Input
                                    placeholder={'USERNAME'}
                                    source={require('../../assets/images/iconUser.png')}
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                    error={touched.email && errors.email} />
                                <Input
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    source={require('../../assets/images/password.png')}
                                    error={touched.password && errors.password}
                                    placeholder={'PASSWORD'}
                                    secureTextEntry={true}
                                />
                                <View >
                                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                                        <Text style={styles.btnText}>SIGN IN</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.btnSignup}>
                                    <Text style={styles.acountText}>Don't have an Account? </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                        <Text style={styles.signupText} >Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.footerOr}>OR</Text>
                                    <Text style={styles.footerText}>login with</Text>
                                </View>
                                <View style={styles.socialLogin}>
                                    <TouchableOpacity>
                                        <Image style={styles.logo} source={require('../../assets/images/facbook.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity >
                                        <Image style={styles.logo} source={require('../../assets/images/twitter.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity >
                                        <Image style={styles.logo} source={require('../../assets/images/google.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <BottomLine />
                        </View>
                    )}
                </Formik>
            </LinearGradient>
        </>
    )
};
export default Login;