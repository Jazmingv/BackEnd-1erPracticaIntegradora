import mongoose from 'mongoose';

const collectionName = 'students';

// Implementar SCHEMAS para el Model de Mongoose



/**
 * Middleware para agregar dentro del método 'find' un llamado a una función, en este 
 * caso llamamos al metodo populate.
 */
studentSchema.pre('findOne', function() {
    this.populate("courses.course");
});
const studentsModel = mongoose.model(collectionName, studentSchema);
export default studentsModel;