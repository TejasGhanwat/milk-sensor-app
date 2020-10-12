import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home'
import About from '../screens/About'
import Help from '../screens/Help'
import Capture from '../screens/capture'

const screens  = {
    Home:{
        screen: Home
    },
    About:{
        screen: About
    },
    Help:{
        screen: Help
    },
    Capture:{
        screen:Capture
    }
}

const Homestack = createStackNavigator(screens)

export default createAppContainer(Homestack)
