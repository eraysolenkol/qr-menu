import types from "../jsons/types.json";


export function getTypePreview(type) {
    for (let i = 0; i < types.length; i++) {
        if (types[i].type === type) {
            return types[i];
        }
    }
}

export function getTypes() {
    let typeNames = [];
    for (let i = 0; i < types.length; i++) {
        typeNames.push(types[i].type);
    }
    return typeNames;
}