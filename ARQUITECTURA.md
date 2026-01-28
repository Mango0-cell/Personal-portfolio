# - Arquitectura Clean Code

## Estructura de Archivos

```
personal-portfolio/
├── public/
│   └── locales/              # Traducciones externalizadas
│       ├── en/
│       │   └── translation.json
│       └── es/
│           └── translation.json
├── src/
│   ├── components/
│   │   ├── index.ts          # Barrel exports
│   │   ├── ui/               # Componentes atómicos reutilizables
│   │   │   └── Card.tsx
│   │   └── common/           # Componentes de layout
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       └── Section.tsx
│   ├── types/
│   │   └── index.ts          # Interfaces TypeScript
│   ├── hooks/                # Custom hooks (futuro)
│   ├── data.ts               # Solo datos NO traducibles
│   ├── i18n.ts               # Configuración i18next
│   ├── App.tsx               # Componente principal refactorizado
│   ├── LanguageSwitcher.tsx  # Selector de idioma
│   └── main.tsx              # Entry point con Suspense
└── package.json
```

## Principios Aplicados

### 1. **Separación de Responsabilidades**

- **data.ts**: Solo configuración no traducible (URLs, emails, nombres de iconos)
- **translation.json**: Todo el texto visible al usuario (español e inglés)
- **components/**: Componentes modulares y reutilizables
- **types/**: Interfaces TypeScript centralizadas

### 2. **Modularidad**

#### Componentes UI (Atómicos):
- `Card`: Tarjeta reutilizable con hover effects
- Más componentes pueden agregarse según necesidad

#### Componentes Common (Layout):
- `Navbar`: Navegación con i18n
- `Footer`: Pie de página con interpolación de variables
- `Section`: Wrapper consistente para secciones

### 3. **Internacionalización (i18n)**

#### Configuración HttpBackend:
```typescript
backend: {
  loadPath: '/locales/{{lng}}/{{ns}}.json'
}
```

- Carga asíncrona de traducciones desde JSON externos
- Detección automática de idioma del navegador
- Caché en localStorage
- Fallback a inglés

#### Uso en componentes:
```typescript
const { t } = useTranslation();
const experiences = t('experience', { returnObjects: true });
```

### 4. **TypeScript Strict**

Todas las interfaces definidas en `src/types/index.ts`:
- `SocialLink`
- `ExperienceItem`
- `ProjectItem`
- `PortfolioData`
- `TranslationResources`

## 🔄 Flujo de Datos

```
main.tsx (Suspense)
    ↓
App.tsx (useTranslation)
    ↓
Components (Props tipados)
    ↓
data.ts (URLs, configs) + translation.json (textos)
```

## 📝 Cómo Actualizar Contenido

### Para cambiar TEXTOS (títulos, descripciones, bio):
Editar archivos JSON:
- `public/locales/es/translation.json` (Español)
- `public/locales/en/translation.json` (Inglés)

### Para cambiar DATOS (URLs, emails, links):
Editar `src/utils/constants.ts`:
- `portfolioData`: Info personal
- `companyUrls`: URLs de empresas
- `projectUrls`: Links de proyectos
- `projectTags`: Tags tecnológicos

## 🎨 Componentes Reutilizables

### Card Component
```tsx
<Card hover>
  <h3>Título</h3>
  <p>Descripción</p>
</Card>
```

### Section Component
```tsx
<Section id="projects">
  <h2>Mis Proyectos</h2>
  {/* Contenido */}
</Section>
```

## 🌐 Interpolación en Traducciones

El footer usa interpolación para variables dinámicas:
```json
{
  "footer": {
    "copyright": "© {{year}} {{name}}. Todos los derechos reservados."
  }
}
```

## 🚀 Beneficios de la Arquitectura

1. **Mantenibilidad**: Código organizado y predecible
2. **Escalabilidad**: Fácil agregar nuevas secciones/componentes
3. **Testability**: Componentes aislados y testeables
4. **Reutilización**: Componentes UI compartidos
5. **i18n Profesional**: Traducciones externalizadas
6. **Type Safety**: TypeScript en todo el proyecto

## 📦 Dependencias Clave

- `i18next`: Core de internacionalización
- `react-i18next`: Integración con React
- `i18next-http-backend`: Carga async de JSON
- `i18next-browser-languagedetector`: Auto-detección de idioma

## 🔧 Comandos

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview build
npm run preview
```

## 📚 Próximas Mejoras Sugeridas

1. Agregar más componentes UI (Button, Badge, etc.)
2. Implementar custom hooks (useScrollReveal como hook global)
3. Agregar tests unitarios con Vitest
4. Implementar lazy loading de componentes
5. Agregar más idiomas (francés, alemán, etc.)
6. Implementar tema claro/oscuro con persistencia
7. Agregar animaciones con Framer Motion
