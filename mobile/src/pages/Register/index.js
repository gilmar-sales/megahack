import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RoundedButton } from "../../components/Buttons";
import { RoundedTextInput } from "../../components/Inputs";


export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.inputs = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: "60%", marginBottom: 40 }}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Solicite empréstimos sem burocracia!
          </Text>
          <Text style={{ fontSize: 12, textAlign: "center" }}>
            Não se preocupe, outros usuários não terão acessoa à seus
            dados pessoais!
          </Text>
        </View>

        <View style={{ width: '100%' }}>
          <RoundedTextInput placeholder="Nome Completo" returnKeyType="next"
            onSubmitEditing={() => { this.inputs["second"].focus() }}
          />
          <RoundedTextInput placeholder="CPF" keyboardType="numeric" returnKeyType="next"
            ref={ref => this.inputs["second"] = ref}
            onSubmitEditing={() => { this.inputs["third"].focus() }}
          />
          <RoundedTextInput placeholder="Email" keyboardType="email-address" returnKeyType="next"
            ref={ref => this.inputs["third"] = ref}
            onSubmitEditing={() => { this.inputs["fourth"].focus() }}
          />
          <RoundedTextInput placeholder="Senha" ref={ref => this.inputs["fourth"] = ref}
          />
        </View>
        <RoundedButton title="continuar" onPress={() => { }} />
      </View>
    )
  }

  focusTheField = (id) => {
    this.inputs[id].focus();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 100,
    marginBottom: 100
  }
})