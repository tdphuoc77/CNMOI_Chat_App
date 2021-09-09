import React, { useState } from 'react'
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Title, Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FontAwesome5 } from '@expo/vector-icons'
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import ImagePicker from 'react-native-image-crop-picker'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function EditProfileUserScreen({ navigation }) {
  const [image, setImage] = useState(
    'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/188172010_1690075374524458_4921122626087969103_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NxrrsfMaURcAX_aWPDS&_nc_ht=scontent.fsgn5-4.fna&oh=f02c2023e77961898669ae2ef0c0a6fc&oe=615BDD7D'
  )

  const takePhotoFromCamera = () => {
    console.log('CHECKKKKKKKKKKk')
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image)
      setImage(image.path)
      this.bs.current.snapTo(1)
    })
  }

  const choosePhotoFromLibrary = () => {
    console.log('CHECKKKKKKKKKKk')
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image)
      setImage(image.path)
      this.bs.current.snapTo(1)
    })
  }

  const renderInner = () => (
    <Animated.View style={styles.panel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>

      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}
      >
        <View>
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  )

  const renderHeader = () => (
    <View style={styles.headerSheet}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  )

  bs = React.createRef()

  fall = new Animated.Value(1)

  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={() => renderInner()}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          opacity: Animated.add(0.3, Animated.multiply(fall, 1.0)),
        }}
      >
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="black"
            onPress={() => navigation.navigate('ProfileUserScreen')}
            style={{ paddingHorizontal: 10 }}
          />
          <Title style={{ width: '75%', textAlign: 'center', fontSize: 20 }}>
            Cài đặt
          </Title>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View style={styles.imageUser}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{ width: '100%', height: '100%' }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={styles.iconCamera}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>
            Trương Phước
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome5 name="user" size={20} />
          <TextInput
            placeholder="Full name"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome5 name="address-card" size={20} />
          <TextInput
            placeholder="Địa chỉ"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome5 name="phone" size={20} />
          <TextInput
            placeholder="Số điện thoại"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome5 name="user-plus" size={20} />
          <TextInput
            placeholder="Nick name"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <Icon name="email" size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => {
            navigation.navigate('ProfileUserScreen')
          }}
        >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: (windowHeight * 5) / 100,
    flexDirection: 'row',
    // justifyContent: "space-between",
    // textAlign: "center",
    // alignItems: "flex-end",
    // paddingHorizontal: 10,
    // borderRadius: 5
  },

  imageUser: {
    width: (windowWidth * 30) / 100,
    height: (windowWidth * 30) / 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  iconCamera: {
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
  },

  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  headerSheet: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    zIndex: 10,
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#C4C4C4',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
})
