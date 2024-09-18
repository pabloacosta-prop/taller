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
    const [nombre, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");



    // Estado para guardar los errores
  const [errors, setErrors] = useState({ nombre: "", email: "", mensaje: "" });

  // Validaciones simples
  const validate = () => {
    let valid = true;
    const nuevoError = { name: "", email: "", mensaje: "" };

    if (!nombre) {
        nuevoError.name = "Nombre es requerido";
        valid = false;
      }
      if (!email) {
        nuevoError.email = "Email es requerido";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) { //Validar que seas un correo valido
        nuevoError.email = "imgresa un correo correcto";
        valid = false;
      }
      if (!mensaje) {
        nuevoError.mensaje = "mensaje es requerido";
        valid = false;
      }else if (/^.{10}$/.test(mensaje)) { //Validar que el mensaje tenga 10 digitos
        nuevoError.email = "imgresa un correo correcto";
        valid = false;
      }


      setErrors(nuevoError);
    return valid;
    };