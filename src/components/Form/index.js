import React, { useState } from "react";
import { 
    TextInput, 
    View, 
    Text, 
    TouchableOpacity,
    Vibration,
    Keyboard,
    Pressable,
    FlatList,
    } from 'react-native'
import ResultImc from "./ResultImc";
import styles from "./style"

function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preecha o peso e a altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([])

    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2)
        setImcList ((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
        setImc(totalImc)
    }

    function verification(){
        if (imc == null || imc == ""){
            Vibration.vibrate();
            setErrorMessage("campo obrigatório*")
        }
    }

    function validationImc(){
        console.log(imcList)
        if(weight != null && height != null && weight != "" && height != "" && !isNaN(height) && !isNaN(weight)){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        }
        else{
            verification()
            setImc(null)
            setHeight("")
            setWeight("")
            setTextButton("Calcular")
            setMessageImc("Preencha seu peso e sua altura")
        }
    }

    return(
       
        <View style={styles.formContext}>
            {imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex: 1.77" keyboardType="numeric" />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex: 85" keyboardType="numeric" />

                <TouchableOpacity onPress={() => {validationImc()}} style={styles.buttomCalculator}>
                    <Text style={styles.textButtomCalculator}>{textButton}</Text>
                </TouchableOpacity>  
            </Pressable>
            :
            <View style={styles.exibitionResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc} />
                <TouchableOpacity onPress={() => {validationImc()}} style={styles.buttomCalculator}>
                    <Text style={styles.textButtomCalculator}>{textButton}</Text>
                </TouchableOpacity>  
            </View>
            }
            <FlatList showsVerticalScrollIndicator={false} style={styles.listImcs} data={imcList.reverse()} renderItem={({item}) =>{
                return(
                    <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                        {item.imc}
                    </Text>
                )
            }}
            keyExtractor={(item) =>{
                item.id
            }} />
        </View>
    );
}

export default Form;