export default interface CustomInputProps {
    value: string;
    onChange: (text: string) => void;
    placeHolder: string;
    secureTextEntry?: boolean;
}