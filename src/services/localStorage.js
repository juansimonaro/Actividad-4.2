import uuid from 'react-uuid';

// funcion mostrar datos
export const getFormDate = () => {
    if (!localStorage['@register']) {
        localStorage['@register'] = JSON.stringify([]);
    }
    let register = JSON.parse(localStorage['@register']);
    return register;
}
// funcion id de datos
export const getDateId = (id) => {
    const register = getFormDate();
    const regis = register.find((regis) => regis.id === id);
    return regis;
}
// funcion registrar datos
export const addFormDate = (register) => {
    let regis = getFormDate();
    if (!Array.isArray(regis)) {
        regis = [];
    }
    regis.push({id: uuid(), ...register});
    localStorage['@register'] = JSON.stringify(regis);
}
// funcion actualizar datos
export const updateForm = (id, newRegister) => {
    let register = getFormDate();
    register = register.filter((regis) => regis.id !== id);
    register.push(newRegister);
    localStorage['@register'] = JSON.stringify(register);
}
// funcion borrar datos
export const deleteForm = (id) => {
    let register = getFormDate();
    register = register.filter((regis) => regis.id !== id);
    localStorage['@register'] = JSON.stringify(register);
}   