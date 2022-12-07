export const convertToMetric = (value: number | undefined, unit : string): string => {
    if(value){
        if(unit === 'm'){
            return value <= 10 ? String(value * 10) + 'cm': String(value / 10) + 'm';
        }
        if(unit === 'kg'){
            return value <= 10 ? String(value * 10) + 'g': String(value / 10) + 'kg';
        }
    }
    return '0'
}