import { connect } from "../../config/database";

export async function Delete(id: string): Promise<{ message: string }> {
    const conn = await connect();
    try {
            await conn.query('DELETE FROM Flavors WHERE Id_Flavor = ?', [id]);
            return { message: 'Flavor has been successfully removed' };
    } catch (error) {
        console.error('Error removing flavor:', error);
        throw new Error('An error occurred while deleting the flavor.');
    }
}
