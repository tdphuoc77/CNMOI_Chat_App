import { loginDataAPI, postDataAPI } from '../../api'
import { GLOBALTYPES } from './../actionType'
import AsyncStorage from '@react-native-community/async-storage'

//  LOGIN
export const login = (data) => async dispatch => {
    try {
        // dispatch({
        //     type: GLOBALTYPES.ALERT,
        //     payload: { loading: true }
        // })
        const res = await loginDataAPI('auth/login', data)
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.accessToken,
                user: res.data.user
            }

        })

        if (res.data !== null) {
            await AsyncStorage.setItem('AccessToken', res.data.accessToken)
            await AsyncStorage.setItem('UserID', res.data.user._id)
        }

        console.log(res.data)

        // dispatch({
        //     type: GLOBALTYPES.ALERT,
        //     payload: {
        //         success: res.data.msg
        //     }
        // })

        // localStorage.setItem("firstLogin", true)


    } catch (err) {
        console.log(err)
        // dispatch({
        //     type: GLOBALTYPES.ALERT,
        //     payload: {
        //         error: err.response.data.msg
        //     }
        // })
    }

}

// export const refreshToken = () => async (dispatch) => {
//     const firstLogin = localStorage.getItem("firstLogin")
//     if (firstLogin) {
//         // dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
//         try {
//             const res = await postDataAPI('auth/refresh_token')
//             dispatch({
//                 type: GLOBALTYPES.AUTH,
//                 payload: {
//                     token: res.data.accessToken,
//                     user: res.data.user
//                 }
//             })

//             // dispatch({ type: GLOBALTYPES.ALERT, payload: {} })

//         } catch (err) {
//             dispatch({
//                 type: GLOBALTYPES.ALERT,
//                 payload: {
//                     error: err.response.data.msg
//                 }
//             })
//         }
//     }
// }
export const logout = () => async (dispatch) => {
    try {
        await AsyncStorage.removeItem('AccessToken')
        await AsyncStorage.removeItem('UserID')
        await postDataAPI('auth/logout')
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}
