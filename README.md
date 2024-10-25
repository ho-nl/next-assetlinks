# next-assetlinks

Easily generate an `assetlinks.json` for Android app association in your Next.js
project. This tool creates `.well-known/assetlinks.json`, allowing Android apps
to handle URLs.

## Installation

Install via npm:

```bash
npm i next-assetlinks
# or
yarn add next-assetlinks
```

## Setup

1. **Create a Config File**  
   Add `next-assetlinks.config.js` to your project root:

   ```javascript
   // next-assetlinks.config.js
   module.exports = {
     packageName: "com.example.app",
     sha256Fingerprint: ["FINGERPRINT_1", "FINGERPRINT_2"],
   };
   ```

   - **`packageName`**: Your Android app's package name.
   - **`sha256Fingerprint`**: Array of SHA-256 fingerprints for your app's
     signing certificates.

2. **Add Script to `package.json`**  
   Update package.json to add the generate-assetlinks script:

   ```json
   "scripts": {
     "generate-assetlinks": "node ./node_modules/next-assetlinks/cli.js"
   }
   ```

## Usage

Run the command to generate `assetlinks.json`:

```bash
npm run generate-assetlinks
# or
yarn generate-assetlinks
```

This will create or update `public/.well-known/assetlinks.json` with the
configured package name and fingerprints.

## Contributing

Contributions are welcome!

## Credits

Package by [Reach Digital](https://www.reachdigital.nl/)

## License

Licensed under MIT. See [LICENSE](./LICENSE) for details.
