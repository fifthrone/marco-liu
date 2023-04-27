import React, { memo } from "react";
import { Handle, Position } from "reactflow";

import useStore from "../../store";

type PanelNodeProps = {
	id: string;
	data: {
		panelId: string;
	};
};

function PanelNode({ id, data }: PanelNodeProps) {
	const updateNodeOmniId = useStore((state) => state.updateNodeOmniId);

	return (
		<div className="relative h-16 w-8">
			<div className="absolute bottom-16 left-4 right-0 flex flex-row items-center justify-center text-black">
				<p>Ant.</p>
				<input
					className="nodrag w-8 bg-transparent text-center"
					type="text"
					value={data.panelId}
					onChange={(e) => updateNodeOmniId(id, e.target.value)}
				/>
			</div>

			<svg viewBox="0 0 82 160" className="h-full w-full">
				<polygon
					points="40,0 80,40 80,120, 40,160"
					className="fill-current stroke-black stroke-[3px] text-white"
				/>
			</svg>

			<Handle type="target" position={Position.Bottom} className="" />
		</div>
	);
}

export default memo(PanelNode);
