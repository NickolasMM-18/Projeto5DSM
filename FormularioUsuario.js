import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const FormularioUsuario = () => {
    const [nome, setNome] = useState('');
    const [email,setEmail] = useState('');
    const [telefone,setTelefone] = useState('');

    return(
        <View>
            <Text>Nome:</Text>
            <TextInput value={nome} onChangeText={setNome} />
            
            <Text>E-mail:</Text>
            <TextInput value={email} onChangeText={setEmail} />
            
            <Text>Telefone:</Text>
            <TextInput value={telefone} onChangeText={setTelefone} />
            
            <Button title="Salvar" onPress={() => console.log('Dados salvos')} />
        </View>
    )
}

export default FormularioUsuario;