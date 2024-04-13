import { View,   } from 'react-native';
import products from '../../../assets/data/products';
import ProductsItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
    <ProductsItem  product={products[0]}/>
    <ProductsItem product={products[1]} />
    </View>    
  );
}
