import AbstractDRMClient from './abstract-drm-client';

export default class PlayReadyClient extends AbstractDRMClient {
    constructor(licenseServer?: string);
    licenseServer: string | null;
    getCustomData(): string | null;
}