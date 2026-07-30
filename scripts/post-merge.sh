#!/bin/bash
set -e

echo "→ Instalando dependencias npm..."
npm install --prefer-offline

echo "→ Construyendo assets web (www/)..."
node scripts/build.js

echo "✔ Post-merge setup completo"
