/// <reference types="react" />
declare module "*.jpg" {
    const value: string;
    export default value;
  }
  
  declare module "*.png" {
    const value: string;
    export default value;
  }
  
  declare module "*.svg" {
    const ReactComponent: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string }
    >;
  
    export default ReactComponent;
  }
  
  declare module "*.gif" {
    const value: string;
    export default value;
  }
