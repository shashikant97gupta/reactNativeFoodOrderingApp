import { StyleSheet, Text, View, Image   } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';

type ProductListItemProps = {
    product : Product;
}

export const defaultPizzaImage = 
"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png"

const ProductsItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image || defaultPizzaImage}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${`${product.price}`}</Text>
    </View>
  )
}

export default ProductsItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius:20,
  },
  image : {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price : {
    fontSize: 14,
    fontWeight: '500',
  }
});
