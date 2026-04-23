# AGENTS.md - Documentación del Proyecto

## 1. Visión General del Proyecto

**Concepto:** Portafolio personal con estética de terminal CLI (Command Line Interface)  
**Nombre interno:** DEVOS v1.0  
**Tecnologías:** HTML5 semántico, CSS3 vanilla, JavaScript vanilla  
**Diseño:** Mobile-first, responsive, accesible  
**Filosofía:** Progressive enhancement (funciona sin JS, mejora con JS)

---

## 2. Arquitectura y Estructura de Archivos

```
├── index.html          # Estructura semántica de todas las secciones
├── script.js           # Lógica: traducciones, animaciones, comandos
├── styles.css          # Estilos: variables CSS, componentes, responsive
└── AGENTS.md          # Esta documentación
```

**Flujo de carga:**
1. HTML carga primero (estructura + noscript visible)
2. CSS aplica estilos base
3. JS añade clase `js-enabled` al body (oculta noscript)
4. JS inicializa: idioma, boot sequence, animaciones, comandos

---

## 3. Sistema de Secciones

### Estructura común de cada sección:
```html
<section class="section" id="section-id">
    <div class="command-line">
        <span class="prompt">franco@dev:~$</span>
        <span class="command">comando</span>
        <span class="section-separator"></span>
    </div>
    <div class="output">
        <!-- Contenido específico -->
    </div>
</section>
```

### Secciones existentes:

| Sección | Comando | Contenido Principal | Noscript |
|---------|---------|---------------------|----------|
| **Hero** | `whoami` | Nombre, rol, email | ✅ Completo |
| **About** | `cat about.txt` | Filosofía personal | ✅ Completo |
| **Formation** | `cat education.md` | Camino autodidacta + Académico | ✅ Completo |
| **Stack** | `ls -la stack/core/` y `ls -la stack/tools/` | Habilidades técnicas | ✅ Completo |
| **Methodology** | `cat methodology.md` | Metodología de trabajo | ✅ Completo |
| **Achievements** | `cat achievements.log` | Experiencia laboral | ✅ Completo |
| **Contact** | `./contact --connect` | Datos de contacto + invitación | ✅ Completo |

---

## 4. Sistema de Traducciones (i18n)

### Estructura en `script.js`:
```javascript
const TRANSLATIONS = {
    es: { /* contenido en español */ },
    en: { /* contenido en inglés */ }
};
```

### Dos sistemas de traducción:

**A) `data-i18n`** - Para elementos simples:
```html
<span data-i18n="boot.init">INICIANDO DEVOS v1.0...</span>
```

**B) `data-i18n-key`** - Para elementos con prefijos dinámicos:
```html
<div data-i18n-key="hero.role" data-prefix="> "></div>
<div data-i18n-key="about.locationFull" data-prefix-i18n="about.locationLabel"></div>
```

### Funciones clave:
- `getText(key)` - Obtiene traducción según idioma actual
- `setLanguage(lang)` - Cambia idioma y guarda en localStorage
- `updateLanguageUI()` - Actualiza todos los elementos traducibles

### Convenciones de naming:
- Usar camelCase: `section.subsection.property`
- Ejemplos: `hero.role`, `about.curiosity`, `formation.selfTaught.title`

---

## 5. Animaciones y Efectos Visuales

### A) Boot Sequence
- Pantalla inicial con animación de "carga del sistema"
- 7 líneas apareciendo secuencialmente (delays de 0.2s a 2.6s)
- Auto-continúa a los 4s o con ENTER/click
- Guarda estado en `sessionStorage` para no repetir en F5

### B) Typewriter Effect
**Elementos con clase `.typewriter`:**
- Efecto de "escritura" caracter por caracter
- Configuración: `CONFIG.typingSpeed = 15ms` por carácter
- Se activa cuando la sección entra en viewport (IntersectionObserver)
- Estados: `waiting` → `typing`/`animating` → `completed`
- Delays escalonados: `.delay-1` (300ms), `.delay-2` (600ms), `.delay-3` (900ms)

### C) Scroll Observer
```javascript
const observer = new IntersectionObserver((entries) => {
    // Activa animaciones cuando sección es 5% visible
    // Solo una vez por sección (unobserve después)
}, { threshold: 0.05 });
```

### D) Modo Instantáneo (sin animaciones)
- Si `sessionStorage.animationsEnabled = 'false'`
- Muestra texto completo inmediatamente
- Ocurre en F5 después de primera visita

---

## 6. Noscript - Fallback sin JavaScript

### Estrategia:
Todo el contenido está duplicado:
1. **Noscript version:** Visible cuando JS está deshabilitado
2. **JS version:** Oculta inicialmente, revelada por JS

### Ejemplo de patrón:
```html
<div class="output">
    <noscript>
        <span>> Franco Rule Calvi</span>
        <span>> Backend Developer...</span>
    </noscript>
    <span><strong>> Franco Rule Calvi</strong></span>
    <div class="typewriter" data-i18n-key="hero.role" data-prefix="> "></div>
</div>
```

### CSS para ocultar noscript cuando JS está activo:
```css
.js-enabled noscript {
    display: none;
}
```

### Secciones con noscript:
| Sección | Estado | Notas |
|---------|--------|-------|
| Hero | ✅ | Texto estático con `>` |
| About | ✅ | Texto plano + email link |
| Formation | ✅ | Títulos `# ` + `> ` en descripciones |
| Stack | ✅ | File entries completos |
| Methodology | ✅ | Títulos `# ` + texto plano |
| Achievements | ✅ | Títulos `# ` + `> ` en items |
| Contact | ✅ | Links clickeables + frase invitadora |

---

## 7. Comandos Interactivos (Easter Eggs)

### Lista de comandos (`COMMANDS` en script.js):

| Comando | Descripción | Respuesta |
|---------|-------------|-----------|
| `help` | Muestra ayuda | Lista de comandos disponibles |
| `clear` | Limpia terminal | Scroll al tope |
| `neofetch` | Info del sistema | ASCII art + specs (estilo Linux) |
| `uptime` | Tiempo activo | Tiempo desde que cargó la página |
| `uname` | Nombre sistema | `DEVOS v1.0 franco-dev...` |
| `sudo` | Intentar root | Mensaje gracioso de acceso denegado |
| `matrix` | Modo Matrix | Canvas overlay con código verde (10s) |
| `restart` | Reiniciar | Recarga la página con boot screen |
| `whoami` | Identidad | `visitante (invitado autenticado)` |
| `ls` | Listar | Lista de "archivos" del perfil |
| `pwd` | Directorio | `/home/franco/dev` |
| `date` | Fecha | Fecha actual del sistema |

### Easter Egg Extra:
- **Konami Code:** ↑ ↑ ↓ ↓ ← → ← → B A
- Activa modo Matrix + mensaje especial

---

## 8. Guía de Estilos y CSS

### Variables CSS principales:
```css
:root {
    --bg-primary: #0a0a0a;      /* Fondo negro */
    --bg-secondary: #111111;     /* Fondo secundario */
    --text-amber: #ffb000;       /* Texto principal (ámbar) */
    --text-amber-dim: #cc8800;   /* Texto secundario */
    --text-cyan: #00d4ff;        /* Prompts y títulos */
    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

### Indentación consistente:
- Formation, Achievements: `padding-left: 2ch` + prefijo `> `
- Methodology: `padding-left: 2ch` sin prefijo
- Títulos con `# ` (2 caracteres) para alineación

### Clases reutilizables:
- `.section` - Contenedor de sección base
- `.command-line` - Línea de comando con prompt
- `.output` - Contenedor de resultados
- `.typewriter` - Elementos con animación de escritura
- `.file-entry` - Entradas de stack (grid 4 columnas)
- `.methodology-block`, `.formation-block` - Bloques de contenido
- `.log-entry` - Entradas de experiencia laboral

---

## 9. Convenciones y Buenas Prácticas

### Al agregar/modificar secciones:

1. **Siempre incluir noscript** con contenido equivalente
2. **Mantener consistencia de comandos** (estilo Unix)
3. **Usar traducciones** para todo texto visible
4. **Respetar delays escalonados** (delay-1, delay-2, etc.)
5. **Indentación de 2ch** para contenido debajo de títulos

### Al agregar skills:
- Actualizar `TRANSLATIONS.es.stack.principal/secondary`
- Actualizar `TRANSLATIONS.en.stack.principal/secondary`
- Actualizar ambos bloques HTML (JS + noscript)
- Asignar permisos creativos que reflejen la naturaleza del skill

### Al agregar traducciones:
- Mantener estructura: `section.subsection.property`
- Actualizar tanto ES como EN
- Usar comillas simples escapadas si es necesario: `'Let\'s'`

---

## 10. Cómo Contribuir/Modificar

### Pasos para agregar una nueva sección:

1. **HTML:** Crear `<section>` con estructura estándar (command-line + output)
2. **Noscript:** Agregar fallback con contenido estático
3. **JS:** Agregar traducciones en `TRANSLATIONS.es` y `TRANSLATIONS.en`
4. **CSS:** Si necesita estilos específicos, agregar con comentario de sección
5. **Test:** Verificar que funciona:
   - Con JavaScript activado (animaciones)
   - Con JavaScript desactivado (noscript visible)
   - En ambos idiomas (ES/EN)

### Debugging común:
- Si no aparecen animaciones: Verificar `sessionStorage.animationsEnabled`
- Si no funciona traducción: Verificar que el key existe en TRANSLATIONS
- Si noscript no se oculta: Verificar que JS añade clase `js-enabled`
