import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import PrimeVideoLogo from "../../assets/prime_video.png"
import AmazonLogo from "../../assets/amazon_logo.png"
import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png"
import {MOVIESWATCHING} from "../../utils/moviesWatching"
import MoviesCard from '../../components/MovieCards';
import { MOVIESCRIME } from '../../utils/moviesCrimes';
import {MOVIESWATCH} from '../../utils/moviesWatch';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={PrimeVideoLogo} style={styles.primeLogoImg} />
                <Image source={AmazonLogo} style={styles.amazonLogoImg} />
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Tv Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>kids</Text>
                </TouchableOpacity>

            </View>

            <ScrollView showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.movieImgThumbnail}>
                    <Image source={MovieTheWheel} style={styles.movieImg} />
                </TouchableOpacity>


                <Text style={styles.title}> Continue Wacthing </Text>
                <FlatList
                    data={MOVIESWATCHING}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <MoviesCard
                            movieURL={item.moviesURL}
                            name={item.name}    
                        />}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />


                <Text style={styles.title}> Crimes Movies </Text>
                <FlatList
                    data={MOVIESCRIME}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <MoviesCard
                            movieURL={item.moviesURL}
                            name={item.name}
                        />}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />



                <Text style={styles.title}> Movies in outher languages </Text>
                <FlatList
                    data={MOVIESWATCH}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <MoviesCard
                            movieURL={item.moviesURL}
                            name={item.name}
                        />}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </View>

    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: '#232f3e'
    },
    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",

    },

    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,



    },

    category: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 15,
    },
    categoryText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: "700",
    },

    movieImgThumbnail: {
        width: "100%",
        alignItems: "center",

    },

    movieImg: {

    },

    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        padding: 15,

    }
    ,
    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    }

})