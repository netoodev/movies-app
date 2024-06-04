import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";


export function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.headerText} >O que você quer assistir hoje?</Text>
            <View style={styles.containerInput}> 
                <TextInput cursorColor={"#67686D"} placeholderTextColor={"#67686D"} style={{color: "#FFF"}} placeholder="Buscar" />
            </View>
        </View>
    );
}