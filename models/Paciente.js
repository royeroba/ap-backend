import mongoose from "mongoose";

const pacientesSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    propietario: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    sintomas: {
      type: String,
      required: true,
    },
    veterinario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Veterinario",
    },
  },
  {
    timestamps: true,
  }
);

//veterinarioSchema.pre("save", async function (next) {
//if (!this.isModified("password")) {
//next();
//}
//const salt = await bcrypt.genSalt(10);
//this.password = await bcrypt.hash(this.password, salt);
//this.token = generarId();
//});

//veterinarioSchema.methods.comprobarPassword = async function (
//passwordFormulario
//) {
//return await bcrypt.compare(passwordFormulario, this.password);
//};

const Paciente = mongoose.model("Paciente", pacientesSchema);
export default Paciente;
