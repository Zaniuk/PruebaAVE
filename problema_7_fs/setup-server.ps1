Set-Location server
Write-Output "`nInstalling dependencies...`n"
# Install dependencies
npm install
Write-Output  "`nPreparing the database`n"
npm run migrate
Write-Output  "`nPopulating the database with some data`n"
npm run seed
Write-Output  "`nStarting server`n"
npm run start
