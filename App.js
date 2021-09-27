import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import styles from "./components/Styles/styles";
class Inputs extends Component {
  state = {
    height: "",
    weight: "",
    bmi: "",
    BmiResult: "",
  };
  handleHeight = (text) => {
    this.setState({ height: text });
  };
  handleWeight = (text) => {
    this.setState({ weight: text });
  };
  calculate = (height, weight) => {
    //calculation
    var result =
      (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
    result = result.toFixed(2);
    //display result
    this.setState({ bmi: result });
    if (result < 18.5) {
      this.setState({ BmiResult: "Underweight" });
    } else if (result >= 18.5 && result < 25) {
      this.setState({ BmiResult: "Normal weight" });
    } else if (result >= 25 && result < 30) {
      this.setState({ BmiResult: "Overweight" });
    } else if (result >= 30) {
      this.setState({ BmiResult: "Obese" });
    } else {
      alert("Incorrect Input!");
      this.setState({ BmiResult: "" });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>BMI Calculator</Text>

        <Text style={styles.label}>Height (cm)</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Height (Cm)"
          placeholderTextColor="white"
          keyboardType="numeric"
          autoCapitalize="none"
          onChangeText={this.handleHeight}
        />
        <Text style={styles.label}>Weight (kg)</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Weight (Kg)"
          placeholderTextColor="white"
          keyboardType="numeric"
          autoCapitalize="none"
          onChangeText={this.handleWeight}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.calculate(this.state.height, this.state.weight)}
        >
          <Text style={styles.submitButtonText}> Calculate </Text>
        </TouchableOpacity>
        <Text style={styles.output}>{this.state.bmi}</Text>
        <Text style={styles.resultText}>{this.state.BmiResult}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}


export default Inputs;


