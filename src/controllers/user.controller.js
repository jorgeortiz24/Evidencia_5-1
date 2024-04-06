import bcrypt from "bcrypt";
const saltRounds = 10

export async function crearCuenta(req, res) {
    
    try {
        const {correo, clave, confirmaClave} = req.body;
        if (clave== confirmaClave) {
            // Encriptar clave
            const hashed = await bcrypt.hash (clave, saltRounds);
            console.log(hashed);

            res.json({isOK: true, msj: "Usuario almacenado"})

        } else{
            // Envia mensaje de error
            res.json({isOK: false, msj: "La contraseña o Usuario es invalido"})
        }
        
    } catch (error) {
        
    }
}