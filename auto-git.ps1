Set-Location $PSScriptRoot

$status = git status --porcelain

if ($status) {
    git add .
    git commit -m "updated all files"
    git push
}