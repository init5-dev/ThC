import CRegistry from "@/app/lib/mongoose/models/db-deactivation-prevention/CRegistry";
import sendEmail from "./send-email";

const clearRegistries = async () => {
  try {
    const cRegistries = await CRegistry.find({});
    
    if (!Array.isArray(cRegistries)) {
      throw new Error('Error: No se pudieron obtener los registros correctamente.');
    }

    const registriesLimit = Math.floor(50 + Math.random() * 50);

    if (cRegistries.length > registriesLimit) {
      const result = await CRegistry.deleteMany({});

      if (result.deletedCount > 0) {
        console.log(`${result.deletedCount} registros eliminados.`);
      } else {
        console.log('No se eliminaron registros.');
      }
    } else {
      console.log('No se ha alcanzado el límite, no se eliminó ningún registro.');
    }
  } catch (err) {
    console.error('Error al eliminar registros:', (err as Error).message);
  }
};

export default clearRegistries
