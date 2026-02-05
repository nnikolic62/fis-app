import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

interface ClientConfig {
  clientId: string;
  clientName: string;
  modules: string[];
  branding: {
    logo: string;
    primaryColor: string;
  };
}

const clientId = process.argv[2];
if (!clientId) {
  console.error('Usage: npm run build:client <client-id>');
  process.exit(1);
}

const configPath = path.join(__dirname, `../../../configs/clients/${clientId}.json`);
const config: ClientConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

console.log(`Building for client: ${config.clientName}`);
console.log(`Modules: ${config.modules.join(', ')}`);

// Generate .env file
const envContent = `
VITE_CLIENT_ID=${config.clientId}
VITE_CLIENT_NAME=${config.clientName}
VITE_MODULE_KADROVI=${config.modules.includes('kadrovi')}
`.trim();

fs.writeFileSync('.env.production', envContent);

// Build
console.log('Building application...');
execSync('npm run build', { stdio: 'inherit' });

// Create client-specific build folder
const buildDir = path.join(__dirname, `../../../builds/${config.clientId}`);
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy build output
const distDir = path.join(__dirname, '../dist');
const targetDir = path.join(buildDir, 'app');
fs.cpSync(distDir, targetDir, { recursive: true });

// Save build metadata
fs.writeFileSync(
  path.join(buildDir, 'build-info.json'),
  JSON.stringify({
    clientId: config.clientId,
    clientName: config.clientName,
    modules: config.modules,
    buildDate: new Date().toISOString(),
    version: process.env.npm_package_version,
  }, null, 2)
);

console.log(`✅ Build complete: ${buildDir}`);