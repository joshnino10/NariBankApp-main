import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

type OtpInputProps = {
  numberOfDigits?: number;
  value: string;
  placeHolder?: string;
  onChange: (otp: string) => void;
  label?: string;
};

const InputOtp: React.FC<OtpInputProps> = ({
  numberOfDigits = 6,
  value,
  onChange, 
  placeHolder = "•",
  label
}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <OtpInput
        numberOfDigits={numberOfDigits}
        onTextChange={onChange}
        placeholder={placeHolder}
        theme={{
          containerStyle: styles.otpContainer,
          textStyle: styles.otpText,
          focusStickStyle: styles.focusStick,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
        }}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: "interregular",
    fontWeight: "500",
    color: "#000000",
    marginBottom: 10,
  },
  otpContainer: {
    marginVertical: 20,
  },
  otpText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2A2E34",
  },
  focusStick: {
    backgroundColor: "#F7F7F7",
  },
  pinCodeContainer: {
    width: 55,
    height: 55,
    marginHorizontal: 5, 
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F7"
  },
  pinCodeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3D4C",
  },
});

export default InputOtp;