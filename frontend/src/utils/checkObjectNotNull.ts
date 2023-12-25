function areAllValuesNotNull(obj: Record<string, any>): boolean {
    for (const key in obj) {
        console.log(obj[key].length)
        if (obj.hasOwnProperty(key) && obj[key] === null && obj[key].length ===0) {
            return false;
        }
    }
    return true;
}

export default areAllValuesNotNull;