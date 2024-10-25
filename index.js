const fs = require('fs')
const path = require('path')

function generateAssetLinks() {
  const configPath = path.join(process.cwd(), 'next-assetlinks.config.js')

  if (!fs.existsSync(configPath)) {
    console.warn("'next-assetlinks.config.js' not found. Skipping assetlinks.json generation.")
    return // Stop the function gracefully without crashing
  }

  const { packageName, sha256Fingerprint } = require(configPath)

  if (!packageName || !Array.isArray(sha256Fingerprint) || sha256Fingerprint.length === 0) {
    throw new Error(
      "Error: 'packageName' or 'sha256Fingerprint' array is missing or empty in 'next-assetlinks.config.js'. Please check your configuration.",
    )
  }

  const directoryPath = path.join(process.cwd(), 'public/.well-known')

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true })
  }

  const assetLinksContent = [
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: packageName,
        sha256_cert_fingerprints: sha256Fingerprint,
      },
    },
  ]

  fs.writeFileSync(
    path.join(directoryPath, 'assetlinks.json'),
    JSON.stringify(assetLinksContent, null, 2),
  )

  console.log('assetlinks.json file successfully created.')
}

module.exports = generateAssetLinks
