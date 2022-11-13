import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store,persistor} from "./redux/store";
import App from './App';
import {PersistGate} from 'redux-persist/integration/react';
import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<StrictMode>
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
</Provider>
</StrictMode>
);
/*
ReactDOM.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
</Provider>, 
document.getElementById('root'));*/