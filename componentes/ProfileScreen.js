import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Encabezado con avatar y nombre */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Juan Pérez</Text>
          <Text style={styles.email}>juan.perez@email.com</Text>
        </View>
      </View>

      {/* Opciones de menú */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>👤</Text>
          <Text style={styles.menuText}>Mi cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🛒</Text>
          <Text style={styles.menuText}>Mis compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>⚙️</Text>
          <Text style={styles.menuText}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🚪</Text>
          <Text style={styles.menuText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Fondo oscuro general
  container: {
    flex: 1,
    backgroundColor: '#121212', // gris muy oscuro
    paddingTop: 40,
  },

  // Encabezado con gradiente sólido
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1f1f', // tono más claro para distinguir
    padding: 20,
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#03DAC6', // verde aqua estilo Material
    backgroundColor: '#222',
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff', // texto claro
  },

  email: {
    fontSize: 15,
    color: '#bbb', // gris suave
    marginTop: 4,
  },

  menu: {
    marginTop: 30,
  },

  // Botones del menú
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e', // contenedores oscuros
    paddingVertical: 18,
    paddingHorizontal: 25,
    marginBottom: 12,
    borderRadius: 12,
    marginHorizontal: 18,
    elevation: 2,
  },

  menuIcon: {
    fontSize: 22,
    marginRight: 18,
    color: '#03DAC6', // color de acento
  },

  menuText: {
    fontSize: 17,
    color: '#ffffff',
  },
});
