import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  item: {
    backgroundColor: '#7DA453',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText: {
    maxWidth: '80%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
