import { ActivityIndicator, FlatList, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass} from "phosphor-react-native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CardMovies } from "../../components/CardMovies";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

export function Home() {
    const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);   
    const [page,setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadMoreData();
    }, []);
    
    const loadMoreData = async () => {
        setLoading(true);
        const response = await api.get("/movie/popular", {
            params: {
                page,
            }
        });
        setDiscoveryMovies([...discoveryMovies, ...response.data.results]);
        setPage(page + 1);
        setLoading(false);
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText} >O que você quer assistir hoje?</Text>
                <View style={styles.containerInput}>
                    <TextInput
                        cursorColor={"#67686D"}
                        placeholderTextColor={"#67686D"}
                        style={styles.input}
                        placeholder="Buscar"
                    />
                    <MagnifyingGlass
                        color="#67686D"
                        size={25}
                        weight="light"
                    />
                </View>
            </View>
            <View>
                <FlatList 
                    data={discoveryMovies}
                    numColumns={3}
                    renderItem={(item) => <CardMovies data={item.item}/>}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        padding: 35,
                        paddingBottom: 100,
                    }}
                    onEndReached={() => loadMoreData()}
                    onEndReachedThreshold={0.5}
                />
                {loading && <ActivityIndicator size={50} color={"#0296e5"}/>}
            </View>
        </View>
    );
}