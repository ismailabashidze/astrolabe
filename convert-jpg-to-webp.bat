@echo off
REM Batch file to run the WebP conversion PowerShell script

powershell -ExecutionPolicy Bypass -File "%~dp0convert-jpg-to-webp.ps1"

pause