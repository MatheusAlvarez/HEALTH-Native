import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contextImc:{
        flex: 1,
        marginTop: 20,
        paddingTop: 15,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },

    resultImc:{
        fontSize: 48,
        color: "#ff0043",
        fontWeight: "bold",
    },

    numberImc:{
        fontSize: 48,
        color: "#ff0043",
        fontWeight: "bold"   
    },  

    information:{
        fontSize: 18,
        color: "#ff0043",
        fontWeight: "bold"
    },

    boxShareButton:{
        width:"100%",
        alignItems: "center",
        marginBottom: 10,
    },

    shared:{
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
    },

    sharedText:{
        color: "#fff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
});

export default styles;