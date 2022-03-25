import React from "react";
import { View, Text} from 'react-native';
import styles from "./style";

function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>MATHEUS MAIA HEALTH</Text>
        </View>
    );
}

export default Title;