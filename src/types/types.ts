import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface MyScreenProps extends NativeStackScreenProps<any> {
  label?: string;
}

export enum AuthStatus {}
