import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList203032Navigator from '../features/ArticleList203032/navigator';
import ArticleList203031Navigator from '../features/ArticleList203031/navigator';
import ArticleList203030Navigator from '../features/ArticleList203030/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList203032: { screen: ArticleList203032Navigator },
ArticleList203031: { screen: ArticleList203031Navigator },
ArticleList203030: { screen: ArticleList203030Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
