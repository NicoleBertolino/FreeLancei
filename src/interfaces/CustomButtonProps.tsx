export interface CustomButtonProps {
    title: string;
    onPress: (nativeEvent: any) => any;
    type?: "PRIMARY" | "SECONDARY" | "TERTIARY";
    style?: {}
}