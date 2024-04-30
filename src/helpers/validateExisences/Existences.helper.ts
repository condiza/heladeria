export async function Existences(validate: any) {
    if (!validate || Object.keys(validate).length === 0) {
        throw new Error('No data found');
    } 
}