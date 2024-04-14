import { View, Text } from "react-native"
import { useLocalSearchParams } from "expo-router"

const ProductDetailsPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
       <Text style={{fontSize: 20}}>
          {`ProductDetailsPage :  ${id}`}
        </Text> 
    </View>
  )
}

export default ProductDetailsPage