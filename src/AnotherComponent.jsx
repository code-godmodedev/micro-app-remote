import { WidgetLoader } from "gmd-mf-widget-loader";

const AnotherComponent = () => (
  <div>
    <div>Another Remote Component</div>
    <WidgetLoader pluginId={"jsRemote/RemoteComponent"} />
  </div>
);

export default AnotherComponent;
