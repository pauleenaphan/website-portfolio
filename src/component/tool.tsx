import "../style/projects.css";

interface ToolSelectBtnProps {
    tool: string;
    selectedTools: string[];
    toggleTool: (tool: string) => void;
}

// Component for selecting tools on projects page
export const ToolSelectBtn: React.FC<ToolSelectBtnProps> = ({ tool, selectedTools, toggleTool }) => {
    return (
        <button className="toolSelectorBtn" onClick={() => toggleTool(tool)}>
            {selectedTools.includes(tool) ? `X ${tool}` : tool}
        </button>
    );
}