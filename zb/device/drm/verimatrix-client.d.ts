import AbstractDRMClient from './abstract-drm-client';

export default class VerimatrixClient extends AbstractDRMClient {
    constructor(params: Params);
    getParams(): Params;
}

type Params = {
    company?: string;
    address?: string;
    iptv?: string;
}