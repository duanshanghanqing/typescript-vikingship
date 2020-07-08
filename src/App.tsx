import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import configureStore from './store/configureStore';
import routes from './routes';
import { ConfigProvider } from '../src_package';
import { zh_CN } from '../src_package';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <ConfigProvider locale={zh_CN}>
                <Provider store={store}>
                    <Router basename="/vik">
                        {renderRoutes(routes)}
                    </Router>
                </Provider>
            </ConfigProvider>
        );
    }
}

export default App;
