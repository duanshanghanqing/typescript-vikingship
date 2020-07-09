import React from 'react';
import { zh_CN } from '../../../locale';

const config = {
    locale: zh_CN
};

export const ConfigContext = React.createContext(config);

interface ConfigProviderProps {
    children: React.ReactChild;
    locale?: any
};

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
    const {
        children,
        locale,
    } = props;

    if (locale) {
        config.locale = locale;
    }
    
    // console.log(config);

    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    );
};

export default ConfigProvider;
