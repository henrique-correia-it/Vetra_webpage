param([string]$AppRoot = 'C:/Projetos/Vetra', [switch]$ReuseGenerated, [string]$NodePath = '')
$ErrorActionPreference = 'Stop'
$appDirectory = (Resolve-Path -LiteralPath $AppRoot).Path
$generator = Join-Path $appDirectory 'tool/generate-store-assets.ps1'
if (!(Test-Path -LiteralPath $generator -PathType Leaf)) { throw 'The Vetra artwork generator was not found.' }
if (!$NodePath) {
    $bundledNode = Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
    if (Test-Path -LiteralPath $bundledNode) { $NodePath = $bundledNode } else { $NodePath = (Get-Command node -ErrorAction Stop).Source }
}
$outputName = if ($ReuseGenerated) { 'store_assets' } else { 'website_assets' }
if (!$ReuseGenerated) {
    & $generator -Devices phone -Style composition -OutputDirectory 'build/website_assets'
    if (!$?) { throw 'Artwork generation failed. Existing website images were kept.' }
}
$sourceDirectory = Join-Path $appDirectory "build/$outputName"
& $NodePath (Join-Path $PSScriptRoot 'validate-images.mjs') $sourceDirectory
if ($LASTEXITCODE -ne 0) { throw 'Artwork validation failed. Do not publish this batch.' }
