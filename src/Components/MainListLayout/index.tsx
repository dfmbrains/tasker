import React, {FC} from 'react';

interface IMainListLayout {
    tools: React.ReactNode,
    children: React.ReactNode
}

const MainListLayout: FC<IMainListLayout> = ({tools, children}) => {
    return (
        <main>
            <div className="container">
                {tools}
                <div className="row">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default MainListLayout;