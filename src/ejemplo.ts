type KeyValuePair<K, V> = {
  key: K;
  value: V;
}

// type Queu<T> = T[];


const kv1: KeyValuePair<number, string> = {
  key: 1,
  value: 'Steve'
};

const kv2: KeyValuePair<string, number> = {
  key: "Hola",
  value: 10,
};
