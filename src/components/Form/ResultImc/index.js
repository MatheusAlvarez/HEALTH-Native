import React from "react";
import {View, Text, TouchableOpacity, Share } from 'react-native';
import styles from "./style";

function ResultImc(props){

    const onShare = async () =>{
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultImc,
        })
    }
    
    return(
        <View style={styles.contextImc}>
            <View style={styles.boxShareButton}>  
                <Text style={styles.information}>{props.messageResultImc}</Text>
                <Text style={styles.numberImc}>{props.resultImc}</Text>               
                <TouchableOpacity onPress={onShare} style={styles.shared}>
                    <Text style={styles.sharedText}>
                        Share
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ResultImc;