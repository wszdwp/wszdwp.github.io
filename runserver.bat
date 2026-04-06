@echo off
setlocal
cd /d "%~dp0"

echo Starting Jekyll server in %CD%
echo.

where bundle >nul 2>nul
if %ERRORLEVEL%==0 (
  echo Trying: bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload false
  bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload false
  goto end
)

if exist "C:\Ruby32-x64\bin\bundle.bat" (
  echo Trying: C:\Ruby32-x64\bin\bundle.bat exec jekyll serve --host 0.0.0.0 --port 4000 --livereload false
  call "C:\Ruby32-x64\bin\bundle.bat" exec jekyll serve --host 0.0.0.0 --port 4000 --livereload false
  goto end
)

if exist "C:\Ruby32-x64\bin\jekyll.bat" (
  echo Trying fallback: C:\Ruby32-x64\bin\jekyll.bat serve --host 0.0.0.0 --port 4000 --livereload false
  call "C:\Ruby32-x64\bin\jekyll.bat" serve --host 0.0.0.0 --port 4000 --livereload false
  goto end
)

echo.
echo ERROR: Could not find bundle or jekyll executable.
echo Install Ruby/Jekyll or fix PATH first.

:end
echo.
echo Server command exited. Press any key to close.
pause >nul
endlocal
