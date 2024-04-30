import { connect } from "../../config/database";

export async function Delete(id:string):Promise<{message:string}> {
    try{
        const conn = await connect();
        await conn.query('DELETE FROM Order_Details WHERE Id_Order_Details = ?', [id]);
        return { message: 'Flavor has been successfully removed' };
    }catch(error){
        console.error('Error when deleting order detail');
        throw new Error('')
    }
}