@echo off
rem Node.js szerver indítása háttérben
start "" cmd /k "node index.js"

rem Rövid várakozás, hogy a szerver felálljon
timeout /t 2 /nobreak > nul

rem Ngrok indítása
start "" cmd /k "ngrok http 3000"
