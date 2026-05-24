# Terminal Calculator — Sistema de Cálculo Estilo Consola

**Estudiante:** Diego André Calderón Salazar  
**Carné:** 241263  
**Deploy Oficial:** [https://calculator-7i9t7n7tf-salco-s-projects.vercel.app](https://calculator-7i9t7n7tf-salco-s-projects.vercel.app)

---

## Descripción del Proyecto

Esta aplicación es una calculadora funcional desarrollada con **React** y **TypeScript**, diseñada bajo una estética de terminal clásica. El proyecto se enfoca en la modularización a través de componentes atómicos y la centralización de la lógica de negocio mediante un **Custom Hook** robusto, garantizando alta cohesion y bajo acoplamiento.

## Guía de Ejecución Rápida

El proyecto utiliza **Bun** para una gestión de paquetes ultra rápida y un entorno de ejecución eficiente.

### Instalación de Dependencias
```bash
cd calculator
bun install
```

### Ejecución en Desarrollo
Inicia un servidor local con recarga en tiempo real:
```bash
bun run dev
```

### Aseguramiento de Calidad (Testing & Linting)
```bash
# Ejecutar suite de pruebas unitarias
bun run test

# Verificar cumplimiento de estándares de código (ESLint)
bun run lint
```

### Documentación de UI (Storybook)
Visualiza y prueba los componentes de forma aislada:
```bash
bun run storybook
```

---

## Especificaciones Técnicas y Funcionales

### 1. Lógica de Negocio y Arquitectura
- **Custom Hook (`useCalculator`):** Gestiona un autómata de estados que controla el valor actual, el operador pendiente, el valor previo y el control de limpieza del display.
- **Precisión Matemática:** Los resultados se procesan dinámicamente para encajar en el límite de caracteres, priorizando la precisión significativa en operaciones de punto flotante.

### 2. Restricciones del Sistema (Requerimientos de Cátedra)
- **Límite de Display:** Estricto control de **9 caracteres** máximos. Cualquier entrada o resultado que exceda esta longitud es truncado o validado.
- **Validación de Errores:**
    - **Overflow:** Resultados superiores a `999,999,999` disparan un estado de "ERROR".
    - **Negativos:** El sistema prohíbe el despliegue de números negativos. Si una operación o el cambio de signo resulta en un valor `< 0`, se muestra "ERROR".
- **Operaciones Soportadas:** Suma (`+`), Resta (`-`), Multiplicación (`*`), División (`/`), Módulo (`%`), Cambio de signo (`+/-`) y Punto decimal (`.`).

### 3. Diseño y Estándares de Código
- **Componentes Atómicos:** Cada archivo de componente (`Button`, `Display`, `Keypad`) cumple con la restricción de poseer **menos de 20 líneas de código**, fomentando la legibilidad.
- **JavaScript Standard Style:** El código sigue rigurosamente las reglas de estilo Standard:
    - Prohibición total de puntos y coma (`semi: never`).
    - Límite de **120 caracteres** por línea.
- **Interfaz Visual:** Estética retro de terminal con tipografía *monospace*, efectos de brillo en el display y transiciones de acento amarillo en interacción.

---

## Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **React 19** | Biblioteca principal para la interfaz de usuario. |
| **TypeScript** | Tipado estático para mayor seguridad y robustez. |
| **Vite** | Herramienta de construcción y servidor de desarrollo. |
| **Bun** | Gestor de paquetes y runtime de alto rendimiento. |
| **Vitest** | Framework de testing para pruebas unitarias de lógica. |
| **Storybook** | Entorno para desarrollo y documentación de componentes. |
| **Vanilla CSS** | Estilización personalizada sin dependencias externas. |

---
