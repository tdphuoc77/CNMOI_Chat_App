import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Menu from './../components/Menu'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function ProfileUserScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.userInfoSection}>
                    <View style={styles.user}>
                        <Ionicons
                            name="arrow-back-outline"
                            size={30}
                            color="black"
                            onPress={() => navigation.navigate("Dashboard")}
                            style={{ marginRight: 10 }}
                        />
                        <Avatar.Image source={{
                            uri: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/188172010_1690075374524458_4921122626087969103_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NxrrsfMaURcAX_aWPDS&_nc_ht=scontent.fsgn5-4.fna&oh=f02c2023e77961898669ae2ef0c0a6fc&oe=615BDD7D'
                        }}
                            size={70} />

                        <View style={{ marginLeft: 20 }}>
                            <Title style={styles.title}>Trương Phước</Title>
                            <Caption style={styles.caption}>@phuoc2k</Caption>
                        </View>

                    </View>

                </View>

                <View style={{ paddingHorizontal: 30 }}>
                    <View style={styles.row}>
                        <Icon name="calendar" color="#777777" size={20} />
                        <Text style={styles.textLocation}>17/07/2000</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color="#777777" size={20} />
                        <Text style={styles.textLocation}>Hồ Chí Minh</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20} />
                        <Text style={styles.textLocation}> 0702704302</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20} />
                        <Text style={styles.textLocation}>tdphuoc77@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={styles.infoBox}>
                        <Caption style={styles.caption}>
                            <Icon
                                name="account-outline"
                                color='#777777'
                                size={20} /> Bạn bè </Caption>
                        <Title>14000</Title>

                    </View>

                </View>


                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="key-variant" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Đổi mật khẩu</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="account-group-outline" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Bạn bè</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableRipple onPress={() => { navigation.navigate("EditProfileUserScreen") }}>
                        <View style={styles.menuItem}>

                            <MaterialIcons name="settings" size={25} color="#FF6347" />
                            <Text style={styles.menuItemText}>Cài đặt / Chỉnh sửa</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableRipple onPress={() => { navigation.navigate("LoginScreen") }}>
                        <View style={styles.menuItem}>
                            <Icon name="location-exit" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Đăng xuất</Text>
                        </View>
                    </TouchableRipple>

                </View>
            </View>
            <Menu />
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // backgroundColor: '#fff'
    },

    content: {
        width: windowHeight,
        height: windowHeight * 0.91
    },
    userInfoSection: {
        // paddingHorizontal: 30,
        marginBottom: 25
    },

    user: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    textLocation: {
        color: "#777777",
        marginLeft: 20
    },

    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        height: windowHeight * 12 / 100,
        width: windowWidth,
        justifyContent: 'center',

    },

    infoBox: {

        alignItems: 'center',

    },

    menuWrapper: {
        marginTop: 10,
    },

    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        textAlign: 'center',
        color: '#777777',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },

})
