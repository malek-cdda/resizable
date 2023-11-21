"use client";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const ClientComponent = () => {
  return (
    <main className=" container mx-auto mt-40">
      <PanelGroup
        direction="horizontal"
        className="bg-black text-white  w-full">
        <Panel className=" text-center" minSizePercentage={10}>
          left
        </Panel>
        <PanelResizeHandle className="text-white h-40 w-5 bg-gray-700" />
        <Panel minSizePercentage={10}>
          <PanelGroup direction="vertical">
            <Panel minSizePercentage={15}>top</Panel>
            <PanelResizeHandle className="text-white h-2 w-88 bg-gray-700" />
            <Panel minSizePercentage={20}>
              <PanelGroup direction="horizontal">
                <Panel minSizePercentage={15}>left</Panel>
                <PanelResizeHandle className="text-white h-40 w-5 bg-gray-700" />
                <Panel minSizePercentage={20}>right</Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle className="text-white h-40 w-5 bg-gray-700" />
        <Panel minSizePercentage={20}>right</Panel>
      </PanelGroup>
    </main>
  );
};

export default ClientComponent;
