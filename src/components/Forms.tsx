import { Post } from "../api";

export const HandleSubmit = (request: string, isLogin: boolean = false) => {
    return async (e: React.FormEvent) => {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);
    
        const formObject: Record<string, string> = {};
        formData.forEach((value, key) => {
            formObject[key] = value.toString();
        });
    
        return await Post(formObject, request, isLogin)
    }
}
