import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function FormularioRegistro() {
  // Estados para guardar los valores de los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Estado para guardar los errores
  const [errors, setErrors] = useState({ nombre: "", email: "", mensaje: "" });

  // Validaciones simples
  const validate = () => {
    let valid = true;
    const nuevoError = { nombre: "", email: "", mensaje: "" };

    if (!nombre) {
      nuevoError.nombre = "Nombre es requerido";
      valid = false;
    }
    if (!email) {
      nuevoError.email = "Email es requerido";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nuevoError.email = "Ingresa un correo correcto";
      valid = false;
    }
    if (!mensaje) {
      nuevoError.mensaje = "Mensaje es requerido";
      valid = false;
    } else if (mensaje.length < 10) {
      nuevoError.mensaje = "El mensaje debe tener al menos 10 caracteres";
      valid = false;
    }

    setErrors(nuevoError);
    return valid;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    if (validate()) {
      Alert.alert("Éxito", `Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        style={[styles.input, errors.nombre ? styles.errorInput : null]}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      {errors.nombre ? <Text style={styles.errorText}>{errors.nombre}</Text> : null}

      <TextInput
        style={[styles.input, errors.email ? styles.errorInput : null]}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      <TextInput
        style={[styles.input, errors.mensaje ? styles.errorInput : null]}
        placeholder="Mensaje"
        value={mensaje}
        onChangeText={setMensaje}
      />
      {errors.mensaje ? <Text style={styles.errorText}>{errors.mensaje}</Text> : null}

      {/* Botón para enviar el formulario */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  errorInput: {
    borderColor: "red",
  },
  submitButton: {
    backgroundColor: "#03dac5",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
