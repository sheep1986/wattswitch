#!/bin/bash

# Watt Switch Launch Script
echo "🚀 Launching Watt Switch Website..."
echo "=================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start development server
echo "✨ Starting development server..."
echo "🌐 Opening at http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=================================="

npm run dev