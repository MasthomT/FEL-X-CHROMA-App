# Chroma Key App

Application de bureau pour supprimer le fond vert d'une vidéo et exporter en WebM avec transparence (canal alpha).

## Lancer en développement

```bash
npm install
npm start
```

## Compiler un installeur

```bash
# Windows (.exe)
npm run build:win

# macOS (.dmg)
npm run build:mac

# Linux (.AppImage)
npm run build:linux
```

Le fichier compilé se trouve dans le dossier `dist/`.

## Stack
- Electron 31
- electron-builder (packaging)
- Canvas API + MediaRecorder (traitement vidéo)
- VP9 WebM avec canal alpha (transparence native)

## Prérequis
- Node.js 18+
- npm
