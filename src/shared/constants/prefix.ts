import { Platform } from 'react-native';

export const prefix: string = Platform.OS === 'ios' ? 'ios' : 'md';
