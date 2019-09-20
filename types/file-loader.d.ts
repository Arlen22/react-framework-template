// This file must be specified in tsconfig.json under 
// configurationOptions.types without the d.ts extension. 
// Each module here must also be set in the webpack.config.js file-loader regex.

declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
}
declare module "*.gif" {
  const value: string;
  export default value;
}
declare module "*.ico" {
  const value: string;
  export default value;
}