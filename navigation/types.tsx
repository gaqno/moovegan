import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Recepies: undefined;
  Configuration: undefined;  
};

// export type RootStackScreenProps<T extends keyof RootStackParamList> =
//   StackScreenProps<RootStackParamList, T>;

// export type HomeTabParamList = {
//   Login: undefined;
//   Home: undefined;
// };

// export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<HomeTabParamList, T>,
//     RootStackScreenProps<keyof RootStackParamList>
//   >;

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }