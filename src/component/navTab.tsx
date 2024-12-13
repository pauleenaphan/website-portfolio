import React from 'react';
import "../style/tabs.css";

interface NavTabProps {
    name: string;
    icon: React.ReactNode;
    activeTab: string;
    onClick: (tabName: string) => void;
}

const NavTab: React.FC<NavTabProps> = ({ name, icon, activeTab, onClick }) => {
    return (
        <div
            className={`navTab ${activeTab === name ? 'active' : ''}`}
            onClick={() => onClick(name)}
        >
            <div className="tabBtnWithIcon">
                {icon && <div className="tabIcon">{icon}</div>}
                <p className="tabName">{name}</p>
            </div>
            <p className="tabXBtn"> x </p>
        </div>
    );
};

export default NavTab;