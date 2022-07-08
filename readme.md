backup package.json


{
   "name": "Test-SP",
   "version": "0.0.1",
   "description": "Awesome project developed with TypeORM.",
   "type": "commonjs",
   "devDependencies": {
      "@types/node": "^16.11.10",
      "ts-node": "10.7.0",
      "typescript": "4.5.2"
   },
   "dependencies": {
      "bcrypt": "^5.0.1",
      "body-parser": "^1.20.0",
      "express": "^4.18.1",
      "jsonwebtoken": "^8.5.1",
      "nodemon": "^2.0.19",
      "pg": "^8.4.0",
      "reflect-metadata": "^0.1.13",
      "typeorm": "0.3.7"
   },
   "scripts": {
      "start": "ts-node src/index.ts",
      "typeorm": "typeorm-ts-node-commonjs",
      "build": "tsc"
   }
}
