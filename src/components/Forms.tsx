import { Post } from "../api";

export const HandleSubmit = (request: string) => {
    return (e: React.FormEvent) => {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);
    
        const formObject: Record<string, string> = {};
        formData.forEach((value, key) => {
            formObject[key] = value.toString();
        });
    
        console.log("Form Data:", formObject);
        Post(formObject, request)
    }
}
