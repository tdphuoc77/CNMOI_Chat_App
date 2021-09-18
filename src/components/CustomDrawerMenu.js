import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
    Avatar, Text, Title, Caption,
    Paragraph, Drawer, TouchableRipple, Switch
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-community/async-storage'

export default function CustomDrawerMenu(props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    // const [isUser, setIsUser] = React.useState(props.isUser)

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('AccessToken');
            await AsyncStorage.removeItem('UserID');
            console.log(await AsyncStorage.getItem('AccessToken'))
            props.setMenu()
            props.navigation.navigate('LoginScreen')
        } catch (error) {
            console.log(error)
        }
    }

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    if (props.isUser) {
        return (
            // Đã Đăng Nhập
            <View style={styles.container}>

                <DrawerContentScrollView {...props} >

                    <View style={styles.drawerContent}>

                        <View style={styles.userInfoSection}>

                            <View style={styles.user}  >
                                <Avatar.Image source={{
                                    uri: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/188172010_1690075374524458_4921122626087969103_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NxrrsfMaURcAX_aWPDS&_nc_ht=scontent.fsgn5-4.fna&oh=f02c2023e77961898669ae2ef0c0a6fc&oe=615BDD7D'
                                }}
                                    size={50} />
                                <View style={styles.userText}>
                                    <Title style={styles.title} >Trương Phước</Title>
                                    <Caption style={styles.caption} >@phuoc2k</Caption>
                                </View>
                            </View>

                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="home-outline"
                                        color={color}
                                        size={size} />
                                )}
                                label='Trang chủ'
                                onPress={() => { props.navigation.navigate('Dashboard') }}
                            />

                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="account-outline"
                                        color={color}
                                        size={size} />
                                )}
                                label='Profile'
                                onPress={() => { props.navigation.navigate('ProfileUserScreen') }}
                            />

                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="account-group-outline"
                                        color={color}
                                        size={size} />
                                )}
                                label='Bạn bè'
                                onPress={() => { props.navigation.navigate('') }}
                            />

                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="account-box-outline"
                                        color={color}
                                        size={size} />
                                )}
                                label='Danh bạ'
                                onPress={() => { props.navigation.navigate('') }}
                            />

                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="key-variant"
                                        color={color}
                                        size={size} />
                                )}
                                label='Đổi mật khẩu'
                                onPress={() => { props.navigation.navigate('') }}
                            />
                        </Drawer.Section>

                        <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={() => { toggleTheme() }}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={isDarkTheme} />
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>

                    </View>
                </DrawerContentScrollView>

                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="location-exit"
                                color={color}
                                size={size} />
                        )}
                        label='Đăng Xuất'
                        onPress={() => logout()}
                    />
                </Drawer.Section>
            </View>
        );

    } else {
        return (
            // chưa đăng nhập
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="login"
                                    color={color}
                                    size={size} />
                            )}
                            label='Đăng nhập'
                            onPress={() => { props.navigation.navigate('LoginScreen') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // backgroundColor: '#fff'
    },

    drawerContent: {
        flex: 1,
    },

    userInfoSection: {
        paddingLeft: 20,
    },

    user: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center'
    },

    userText: {
        flexDirection: 'column',
        marginLeft: 15
    },


    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },

    caption: {
        fontSize: 14,
        lineHeight: 14,
    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },

    Paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },

    drawerSection: {
        marginTop: 15,
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },

    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }

});