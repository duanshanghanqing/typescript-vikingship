import React from 'react';
import locale from '../../../../typescript-vikingship/src/locale';

const config = {
    locale: locale.zh_CN
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
