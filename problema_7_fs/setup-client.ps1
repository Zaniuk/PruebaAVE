Set-Location client
Write-Output "`nInstalling dependencies...`n"
# Install dependencies
npm install
Write-Output  "`nBuilding...`n"
npm run build
Write-Output  "`nOpening browser...`n"
Start-Process "http://127.0.0.1:4173/" 
Write-Output  "`nStarting preview...`n"
npm run preview
