import React from 'react';
import { render } from 'preact';

(function () {
    'use strict';
    function App() {
        return (
            <div>
                <h1>This is a script jsx template!</h1>
                <p>Hello world!</p>
            </div>
        );
    }

    function appendDom(element: JSX.Element | HTMLElement, targetDom: HTMLElement) {
        if (process.env.FRAME_WORK === 'preact') {
            render(element, targetDom);
        } else {
            targetDom.insertBefore(element as HTMLElement, targetDom.childNodes[0]);
        }
    }

    appendDom(App(), document.body);
})();
