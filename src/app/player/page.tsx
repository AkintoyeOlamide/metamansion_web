"use client"

import { useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';

declare global {
    interface Window {
        initArcanePlayer: () => void;
        ArcanePlayer: ArcanePlayer;
    }
}

interface ArcanePlayer {
    play: () => void;
    emitUIEvent: (descriptor: string | object) => boolean;
    onReceiveEvent: (
        name: string,
        listener: (response: string) => void
    ) => void;
    onPlayerEvent: (name: string, listener: (data?: any) => void) => void;
    toggleFullscreen: () => boolean;
}

const ArcanePlayer = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://embed.arcanemirage.com/' + "cd3f7cc3-8504-4c87-be4f-26d3019564e3" + '/e';
        script.onload = () => {
            window['initArcanePlayer']();
        };
        const container = document.getElementById('am-container');
        if (container) {
            container.append(script);
        } else {
            console.error("Container element with ID 'am-container' not found.");
        }

        window.addEventListener('ArcanePlayerLoaded', () => {
            const player: ArcanePlayer = window['ArcanePlayer'];

            player.onReceiveEvent('CustomUIEventResponse', (response) => {
                console.log({ ArcaneResponse: response });
            });

            player.onPlayerEvent('loading', () => {
                console.log('loading');
            });

            player.onPlayerEvent('ready', () => {
                console.log('ready');
            });

            player.onPlayerEvent('afkWarning', () => {
                console.log('afkWarning');
            });

            player.onPlayerEvent('afkWarningDeactivate', () => {
                console.log('afkWarningDeactivate');
            });

            player.onPlayerEvent('afkTimedOut', () => {
                console.log('afkTimedOut');
            });
            player.emitUIEvent('MyCustomEventWithoutData');
            player.emitUIEvent({
                event: 'MyCustomEventWithData', data: {
                    foo: 'bar',
                }
            });

            player.onReceiveEvent('CustomUIEventResponse', (response) => {
                console.log({ ArcaneResponse: response });
            });
            player.onReceiveEvent('event.MyCustomEventWithData', (response) => {
                console.log({ ArcaneResponse: response });
            });
            player.play();

            player.toggleFullscreen();

            player.onPlayerEvent('fileProgress', (progress: number) => {
                console.log('File download progress:', progress);
            });

            player.onPlayerEvent('fileReceived', (data: { file: Blob, extension: string }) => {
                const a = document.createElement('a');
                a.setAttribute('href', URL.createObjectURL(data.file));
                a.style.display = 'none';
                a.setAttribute('download', `received_file.${data.extension}`);
                document.body.append(a);
                a.click();
                a.remove();
            });
        });
    });

    return (
        <div id="am-container" style={{ width: '100vw', height: '100vh' }}>
            <div
                id="arcane-player"
                data-project-id="2892"
                data-project-key="cd3f7cc3-8504-4c87-be4f-26d3019564e3"
                data-idle-timeout="200"
                data-capture-mouse="false"
                data-enable-events-passthrough="true"
                data-hide-ui-controls="true"
                data-autoplay="false"
            ></div>
            <button onClick={() => {
                const player: ArcanePlayer = window['ArcanePlayer'];
                player.emitUIEvent({
                    event: 'MyCustomEventWithData', data: {
                        foo: 'bar',
                    }
                });
            }}>fire event</button>
        </div>
    )
};

export default ArcanePlayer;