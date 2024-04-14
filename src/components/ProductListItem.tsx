import { StyleSheet, Text, View, Image, Pressable   } from 'react-native';
import { Link } from 'expo-router';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';

type ProductListItemProps = {
    product : Product;
}

export const defaultPizzaImage = 
"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png"

const ProductsItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild >
    <Pressable style={styles.container}>
      <Image source={{uri: product.image || defaultPizzaImage}}
       style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${`${product.price}`}</Text>
    </Pressable>
    </Link>
  )
}

export default ProductsItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius:20,
    flex:1,
    maxWidth: '50%',
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
