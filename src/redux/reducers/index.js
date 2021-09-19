import { combineReducers } from 'redux'
import authReducer from './authReducer'
import alertReducer from './alertReducer'
import showMenuReducer from './showmenuReducer'
const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    showMenu: showMenuReducer,
    // conversations:conversationsReducer,
    // user:userReducer,
    // currentConversation:currentConversationReducer,
    // messages:messagesReducer,
    // modal:modalReducer,
    // socket:socketReducer,
})
export default rootReducer