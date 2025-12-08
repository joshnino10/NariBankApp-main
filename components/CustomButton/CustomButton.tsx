import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'solid' | 'outline' | 'gradient';
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'solid',
  disabled = false,
  icon,
  fullWidth = false,
  style,
  textStyle 
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'solid' && styles.solid,
        variant === 'outline' && styles.outline,
        variant === 'gradient' && styles.gradient,
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        style
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={[
          styles.text,
          variant === 'solid' && styles.solidText,
          variant === 'outline' && styles.outlineText,
          variant === 'gradient' && styles.gradientText,
          disabled && styles.disabledText,
          textStyle
        ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  fullWidth: {
    width: '100%',
  },
  

  solid: {
    backgroundColor: '#1A35BD',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  gradient: {
    backgroundColor: '#5856D6',
  },
  text: {
    fontSize: 16,
    fontFamily: 'intermedium',
    fontWeight: '700',
  },
  
 
  solidText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: '#007AFF',
  },
  gradientText: {
    color: '#FFFFFF',
  },
  
  // Disabled
  disabled: {
    backgroundColor: '#E5E5EA',
    borderColor: '#E5E5EA',
    shadowOpacity: 0,
    elevation: 0,
  },
  disabledText: {
    color: '#A0A0A0',
  },
});

export default CustomButton;