import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

export default function FormularioRegistro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState({ nombre: "", email: "", mensaje: "" });
  const [loading, setLoading] = useState(false); // Estado para controlar el spinner

  const validate = () => {
    let valid = true;
    const nuevoError = { nombre: "", email: "", mensaje: "" };

    if (!nombre) {
      nuevoError.nombre = "Ingrese un nombre por favor";
      valid = false;
    }
    if (!email) {
      nuevoError.email = "El email debe contener contenido@dominio.com";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nuevoError.email = "Ingresa un correo válido";
      valid = false;
    }
    if (!mensaje) {
      nuevoError.mensaje = "El mensaje es un campo obligatorio";
      valid = false;
    } else if (mensaje.length < 10) {
      nuevoError.mensaje = "El mensaje debe tener al menos 10 caracteres";
      valid = false;
    }

    setErrors(nuevoError);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      setLoading(true); // Activar el spinner

      // Simular una carga (por ejemplo, una solicitud a la API)
      setTimeout(() => {
        Alert.alert("Éxito", `Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);

        // Limpiar los campos del formulario
        setNombre("");
        setEmail("");
        setMensaje("");
        setErrors({ nombre: "", email: "", mensaje: "" }); // Limpiar errores también
        setLoading(false); // Desactivar el spinner
      }, 2000); // Simular carga de 2 segundos
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
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.submitButtonText}>Registrar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#f8f8f8",
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
    color: "#333333",
  },
  input: {
    height: 50,
    borderColor: "#cccccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 15,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  errorText: {
    color: "#d9534f",
    marginBottom: 10,
  },
  errorInput: {
    borderColor: "#d9534f",
  },
  submitButton: {
    backgroundColor: "#887bff",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  submitButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});