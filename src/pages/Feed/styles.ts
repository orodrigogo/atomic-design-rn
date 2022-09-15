import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 40,
  },
  headerSide: {
    flexDirection: 'row',
    minWidth: 66,
    alignItems: 'center'
  },
  messengerIcon: {
    marginLeft: 15
  },
  stories: {
    marginTop: 17,
    borderBottomWidth: 1,
    borderTopColor: colors.gray50,
    borderTopWidth: 1,
    borderBottomColor: colors.gray40,
  },
  profiles: {
    height: 100,
    alignItems: 'center',
    paddingLeft: 15,
  },
  profile: {
    marginRight: 15,
    alignItems: 'center'
  },
  username: {
    fontSize: 12,
  },
});