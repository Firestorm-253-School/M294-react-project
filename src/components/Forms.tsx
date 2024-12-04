export const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
        formObject[key] = value.toString();
    });

    console.log("Form Data:", formObject);
};
