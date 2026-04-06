Set-Location $PSScriptRoot
Write-Host "Starting Jekyll server in $PWD"
Write-Host ""

$bundle = Get-Command bundle -ErrorAction SilentlyContinue
if ($bundle) {
  Write-Host "Trying: bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload false"
  bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload false
  exit $LASTEXITCODE
}

if (Test-Path 'C:\Ruby32-x64\bin\bundle.bat') {
  Write-Host "Trying: C:\Ruby32-x64\bin\bundle.bat exec jekyll serve --host 0.0.0.0 --port 4000 --livereload false"
  & 'C:\Ruby32-x64\bin\bundle.bat' exec jekyll serve --host 0.0.0.0 --port 4000 --livereload false
  exit $LASTEXITCODE
}

if (Test-Path 'C:\Ruby32-x64\bin\jekyll.bat') {
  Write-Host "Trying fallback: C:\Ruby32-x64\bin\jekyll.bat serve --host 0.0.0.0 --port 4000 --livereload false"
  & 'C:\Ruby32-x64\bin\jekyll.bat' serve --host 0.0.0.0 --port 4000 --livereload false
  exit $LASTEXITCODE
}

Write-Host ''
Write-Host 'ERROR: Could not find bundle or jekyll executable.' -ForegroundColor Red
Write-Host 'Install Ruby/Jekyll or fix PATH first.' -ForegroundColor Red
exit 1
