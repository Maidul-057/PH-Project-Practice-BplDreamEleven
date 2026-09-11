Set-Location $PSScriptRoot

$status = git status --porcelain

if ($status) {
    git add .
    git commit -m "updated the file"
    git push
}