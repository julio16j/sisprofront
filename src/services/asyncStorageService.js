import AsyncStorage from '@react-native-async-storage/async-storage';
export async function setData  (key,value) {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {}
}

export async function getData (key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        return null
    }
}

export async function removeData (key) {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {}
}

