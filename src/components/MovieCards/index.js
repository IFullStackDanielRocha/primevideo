import { TouchableOpacity, StyleSheet, Image } from "react-native";




export default function MoviesCard(props){
    return(

        <TouchableOpacity>
            <Image 
            style={styles.img}
            source={props.movieURL}
            alt={props.name}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img:{
        marginRight: 20,

    },
})